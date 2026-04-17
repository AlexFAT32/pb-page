import { getSessionExpiry, type SessionToken } from '@/lib/auth/session-expiry';

const REFRESH_THRESHOLD_MS = 5 * 60 * 1000;

export function shouldRefreshSession(token: SessionToken): boolean {
  const expiresAt = getSessionExpiry(token) * 1000;
  const now = new Date();

  return expiresAt - Date.now() < REFRESH_THRESHOLD_MS;

}
