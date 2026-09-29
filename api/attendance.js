// 출석 동기화 API — Vercel Function + Upstash Redis (Vercel 대시보드 Storage에서 연결하면 env가 자동으로 들어옴)
// 로그인 대신 '비밀코드': 헤더 x-sync-code 의 해시를 키로 써서, 같은 코드를 넣은 기기끼리 같은 기록을 봄.
const crypto = require('crypto');

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(cmd){
  const r = await fetch(REDIS_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd),
  });
  if(!r.ok) throw new Error(`redis ${r.status}`);
  return (await r.json()).result;
}

// { 'YYYY-MM-DD': 1~99 } 만 통과
function cleanLog(log){
  if(!log || typeof log!=='object' || Array.isArray(log)) return null;
  const out = {};
  for(const [d,n] of Object.entries(log)){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(d) || !Number.isInteger(n) || n<1 || n>99) return null;
    out[d] = n;
  }
  return Object.keys(out).length <= 3000 ? out : null;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if(!REDIS_URL || !REDIS_TOKEN) return res.status(503).json({ error: 'no-storage' });

  const code = String(req.headers['x-sync-code'] || '');
  if(code.length < 6 || code.length > 100) return res.status(400).json({ error: 'bad-code' });
  const key = 'pyunip:att:' + crypto.createHash('sha256').update(code).digest('hex');

  try{
    if(req.method === 'GET'){
      const v = await redis(['GET', key]);
      return res.status(200).json({ log: v ? JSON.parse(v) : null });
    }
    if(req.method === 'PUT'){
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const log = cleanLog(body && body.log);
      if(!log) return res.status(400).json({ error: 'bad-log' });
      await redis(['SET', key, JSON.stringify(log)]);
      return res.status(200).json({ ok: true });
    }
    res.setHeader('Allow', 'GET, PUT');
    return res.status(405).json({ error: 'method' });
  }catch(e){
    return res.status(500).json({ error: 'server' });
  }
};
