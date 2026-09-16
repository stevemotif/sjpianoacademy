// lib/auth.js — password check + signed session cookie for the /dashboard gate

import crypto from 'crypto'

export const COOKIE_NAME = 'dashboard_session'
export const MAX_AGE_SECONDS = 60 * 60 * 8 // 8 hours

function getSecret() {
  const secret = process.env.DASHBOARD_SESSION_SECRET
  if (!secret) throw new Error('Missing DASHBOARD_SESSION_SECRET environment variable')
  return secret
}

function sign(payload) {
  return crypto.createHmac('sha256', getSecret()).update(payload).digest('hex')
}

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a))
  const bufB = Buffer.from(String(b))
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

export function verifyPassword(password) {
  const expected = process.env.DASHBOARD_PASSWORD
  if (!expected || typeof password !== 'string' || password.length === 0) return false
  return safeEqual(password, expected)
}

export function createSessionToken() {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000
  const payload = String(expires)
  return `${payload}.${sign(payload)}`
}

export function verifySessionToken(token) {
  if (!token) return false
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return false
  if (!safeEqual(signature, sign(payload))) return false
  return Date.now() < Number(payload)
}
