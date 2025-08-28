// app/api/photo/route.ts
import { NextRequest } from 'next/server';


// app/api/photo/route.ts


export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const user = url.searchParams.get('user');

  if (!user) {
    return new Response(JSON.stringify({ error: 'missing user' }), { status: 400, headers: { 'Content-Type': 'application/json' }});
  }

  const APPS_SCRIPT = process.env.WORKSPACE_MEMBERS_URL;
  if (!APPS_SCRIPT) {
    return new Response(JSON.stringify({ error: 'server misconfigured' }), { status: 500, headers: { 'Content-Type': 'application/json' }});
  }

  try {
    // Call Apps Script (returns JSON { dataUrl })
    const asRes = await fetch(`${APPS_SCRIPT}?photoUser=${encodeURIComponent(user)}`);

    if (!asRes.ok) {
      // upstream error or no photo
      return new Response(null, { status: 204 });
    }
    const j = await asRes.json();
    const dataUrl: string | undefined = j?.dataUrl;

    if (!dataUrl) {
      return new Response(null, { status: 204 }); // no photo -> client should show placeholder
    }

    // parse the data URL: data:<mime>;base64,<b64>
    const match = dataUrl.match(/^data:(.+);base64,(.*)$/);
    if (!match) {
      return new Response(JSON.stringify({ error: 'invalid dataUrl' }), { status: 500, headers: { 'Content-Type': 'application/json' }});
    }
    const mime = match[1];
    const b64 = match[2];
    const bytes = Buffer.from(b64, 'base64');

    // Cache images on the edge / CDN. Adjust TTL to your needs.
    const CACHE_SECONDS = 60 * 60 * 24; // 24 hours
    const headers = new Headers({
      'Content-Type': mime,
      'Content-Length': String(bytes.length),
      'Cache-Control': `public, max-age=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS * 7}`,
    });

    return new Response(bytes, { status: 200, headers });
  } catch (err) {
    console.error('photo proxy error', err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' }});
  }
  
}
