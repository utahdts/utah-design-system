/**
 * An XMLHttpRequest that fires callback functions when the request is complete
 * @param {Object} params
 * @param {string} params.url - URL and parameters of the request
 * @param {string} params.method - 'GET' or 'POST' - defaults to 'GET'
 * @param {Object.<string, string>} params.headers - key:value pairs to set request headers
 * @param {number} params.timeout - The timeout length
 * @param {function} params.onResolve - Function to call on a successful request
 * @param {function} params.onReject - Function to call on error or timeout
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
    Object.keys(headers).forEach((key) => request.setRequestHeader(key, headers[key] || ''));
  }

  // Send the request
  request.send();
}
