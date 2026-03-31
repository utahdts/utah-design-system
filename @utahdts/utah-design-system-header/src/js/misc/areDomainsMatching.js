/**
 * Compares the domains of two URLs to check for an exact match.
 * The function includes all subdomains in the comparison.
 *
 * @param {string} url1 The first URL string.
 * @param {string} url2 The second URL string.
 * @returns {boolean} True if the domains (including subdomains) match exactly, false otherwise.
 */
export function areDomainsMatching(url1, url2) {
  let domainsMatch = false;

  try {
    const parsedUrl1 = new URL(url1);
    const parsedUrl2 = new URL(url2);
    domainsMatch = parsedUrl1.hostname === parsedUrl2.hostname;
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error("An error occurred:", error.message);
    } else {
      // eslint-disable-next-line no-console
      console.error("An unknown error occurred:", error);
    }
  }

  return domainsMatch;
}
