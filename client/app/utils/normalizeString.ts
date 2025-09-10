/**
 * Normalizes string. Remove unnecessary spaces/tabs/newlines
 */
export default (s: string) => s.trim().replace(/\s+/g, " ");
