import useFetch from "../../../app/hooks/useFetch";

/**
 * Creates request to reset all databases for correct testing process
 */
export default async function resetDb() {
  await useFetch({
    url: "/api/admin/reset/db",
    baseUrl: "http://localhost:3000",
  });
}
