/**
 * @param {string} html the html content to be formatted for display
 * @returns {string} the html content to be displayed in string format on the page
 */
export function cleanHtmlForInnerHTML(html) {
  return (html || '').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // change `disabled=""` to be just `disabled`
    .replace(/=""/g, '');
}
