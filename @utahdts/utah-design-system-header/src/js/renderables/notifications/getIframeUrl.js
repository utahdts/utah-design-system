/**
 * Determines the appropriate iframe URL based on the current browser's URL.
 * If the current URL contains ".local", it returns a local development URL.
 * Otherwise, it returns the production iframe URL.
 *
 * @returns {string} The determined iframe URL.
 */
export function getIframeUrl() {
  // Get the current URL of the browser
  const currentUrl = window.location.href;

  // Define the local and production iframe URLs
  const localIframeUrl = "https://notiframe.local.utah.gov:5174";
  const productionIframeUrl = "https://cdn.utah.gov/dts-ds-custom-header-plugin/header-dist/v5/notifications/beta/index.html";

  // Check if the current URL contains ".local"
  if (currentUrl.includes(".local")) {
    return localIframeUrl;
  } else {
    return productionIframeUrl;
  }
}
