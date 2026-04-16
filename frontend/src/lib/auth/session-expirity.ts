export type SessionToken = {
  exp: number;
};

export function getSessionExpiry(token: SessionToken): number {
  return token.exp * 1000;
}
