/**
 * JWT payload
 *
 * @see https://en.wikipedia.org/wiki/JSON_Web_Token#Standard_fields
 */
type JwtPayload = {
  sub: string;
  iat: number;
  exp: number;
};
export default function (payload: unknown): payload is JwtPayload {
  const p = payload as any;

  return [
    "sub" in p && typeof p.sub === "string",
    "iat" in p && typeof p.iat === "number",
    "exp" in p && typeof p.exp === "number",
  ].every((condition) => condition === true);
}
