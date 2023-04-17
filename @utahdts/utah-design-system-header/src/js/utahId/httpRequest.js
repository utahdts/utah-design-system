// @ts-check
/**
 * An XMLHttpRequest that fires callback functions when the request is complete
 * @property {string} url - URL and parameters of the request
 * @property {string} method - 'GET' or 'POST' - defaults to 'GET'
 * @property {object} headers - key:value pairs to set request headers
 * @property {number} timeout - The timeout length
 * @property {function} onResolve - Function to call on a successful request
 * @property {function} onReject - Function to call on error or timeout
 */
export default function httpRequest({
  url,
  method,
  headers,
  timeout,
  onResolve,
  onReject,
}) {
  // Create the XHR request
  const request = new XMLHttpRequest();

  request.addEventListener('load', (e) => onResolve(e.target));
  request.addEventListener('error', (e) => onReject(e.target));
  request.addEventListener('timeout', (e) => onReject(e.target));

  // Setup our HTTP request
  request.open(method || 'GET', url, true);

  request.withCredentials = true;

  if (timeout) {
    request.timeout = timeout;
  }

  if (headers) {
    Object.keys(headers).forEach((key) => request.setRequestHeader(key, headers[key]));
  }

  // Send the request
  request.send();
}
