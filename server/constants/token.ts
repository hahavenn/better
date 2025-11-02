/**
 * Expiration in time for different tokens in ms
 */
const TOKEN_EXPIRATION_IN_TIME = {
  ACCESS: 60 * 15 * 1000,
  REFRESH: 60 * 60 * 6 * 1000,
} as const;
export default TOKEN_EXPIRATION_IN_TIME;
