/**
 * Expiration times for different tokens in ms
 */
const TOKEN_EXPIRATION_TIMES = {
  ACCESS: 60 * 60 * 24 * 1000,
  REFRESH: 60 * 60 * 24 * 7 * 1000,
} as const;
export default TOKEN_EXPIRATION_TIMES;
