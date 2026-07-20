import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedParams = await params;
  let assetPath = resolvedParams.path.join('/');

  if (!assetPath.startsWith('assets/')) {
    assetPath = `assets/${assetPath}`;
  }

  const cleanBase = BACKEND.endsWith('/') ? BACKEND.slice(0, -1) : BACKEND;
  const backendUrl = `${cleanBase}/${assetPath}`;

  try {
    const res = await fetch(backendUrl, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error(`Image proxy: ${res.status} for ${backendUrl}`);
      return new NextResponse(null, { status: res.status });
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return new NextResponse(null, { status: 502 });
  }
}
