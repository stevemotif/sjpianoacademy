import { NextResponse } from 'next/server'
import { COOKIE_NAME, MAX_AGE_SECONDS, createSessionToken, verifyPassword } from '@/lib/auth'

export async function POST(request) {
  const body = await request.json().catch(() => ({}))

  if (!verifyPassword(body.password)) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
  }

  const res = NextResponse.json({ success: true })
  res.cookies.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  })
  return res
}
