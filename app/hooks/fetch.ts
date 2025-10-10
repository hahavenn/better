type UseFetchOptions = {
  url: string | URL;
  headers?: HeadersInit;
  /**
   * @default
   * window.location.origin
   */
  baseUrl?: string | URL;
  queryParams?: { [key: string]: string };
  /**
   * @default "GET"
   */
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  formData?: FormData;
  /** array of events to listen for abort request */
  abortEvents?: string[];
};

type HeadersInitObj =
  | HeadersInit
  | {
      "Content-Type"?: "application/json; charset=utf-8";
    };

/**
 * This function is used to fetch data from server with predefined headers
 * @returns data with type, passed as generic `<SuccessResponse, ErrorResponse>` or `null` if other error
 *
 * ------
 * @example
 * // with query parameters
 * const response = await useFetch<
 *   SearchByQuerySuccessResponse,
 *   SearchByQueryErrorResponse
 * >({
 *   url: "/some_url/",
 *   queryParams: { q: qwerty },
 * });
 *
 * ------
 *
 * @example
 * // with body and different method
 * const response = await useFetch<
 *   SuccessResponse,
 *   ErrorResponse
 * >({
 *   url: "/some/url/",
 *   method: "PATCH",
 *   body: data,
 * });
 *
 * ------
 *
 * @example
 * // with ability to abort request
 * const formData = new FormData();
 * formData.append("file", file);
 *
 * const response = await useFetch<Success, Error>({
 *   url: "/some/url/",
 *   method: "POST",
 *   formData,
 *   abortEvents: "abort_some_url",
 * });
 *
 * // somewhere in your code if you need to abort request
 * window.dispatchEvent(new CustomEvent("abort_some_url"));
 */
export default async function useFetch<SuccessResponse, ErrorResponse>(
  options: UseFetchOptions
) {
  const url = new URL(options.url, options.baseUrl ?? window.location.origin);

  // set search params if presented
  if (options.queryParams) {
    Object.entries(options.queryParams).forEach((p) => {
      url.searchParams.set(p[0], p[1]);
    });
  }

  // create headers object
  const headersInit: HeadersInitObj = {
    ...options.headers,

    // for all payload except formData - content type should be json
    "Content-Type":
      options.body !== undefined
        ? "application/json; charset=utf-8"
        : undefined,
  };

  // used to abort long/heavy requests if needed
  const abortController = new AbortController();

  const request = new Request(url, {
    method: options.method ?? "GET",
    headers: new Headers(headersInit),
    body: options.body ? JSON.stringify(options.body) : options.formData,
    signal: abortController.signal,
  });

  // Function to abort the request
  const abortFetch = () => {
    abortController.abort();

    // Remove other event listeners after aborting
    options.abortEvents!.forEach((eventName) => {
      window.removeEventListener(eventName, abortFetch);
    });
  };

  // Add event listeners for abort events
  if (options.abortEvents) {
    options.abortEvents.forEach((eventName) => {
      window.addEventListener(eventName, abortFetch, { once: true });
    });
  }

  try {
    const response = await fetch(request);

    const statusCode = response.status;

    const data: SuccessResponse | ErrorResponse = await response.json();

    return {
      ...data,
      statusCode,
    };
  } catch (e) {
    /* error handling */

    return null;
  } finally {
    // Clean up the event listeners
    if (options.abortEvents) {
      options.abortEvents.forEach((eventName) => {
        window.removeEventListener(eventName, abortFetch);
      });
    }
  }
}
