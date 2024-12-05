/** @typedef {import('@utahdts/utah-design-system-header').EventAction} EventAction */

/**
 * @param {string} url
 * @param {import('react-router-dom').NavigateFunction} navigate
 * @returns {EventAction}
 */
export function actionFunctionForUrl(url, navigate) {
  return (
    (e) => {
      if (e.metaKey) {
        window.open(url, '_blank');
      } else {
        e.preventDefault();
        e.stopPropagation();
        // mainMenuItem.link will be there... if not, not my problem
        navigate(url);
      }
    }
  );
}
