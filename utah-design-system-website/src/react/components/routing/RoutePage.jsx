import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** @typedef {import('utah-design-system-website').Page} Page */

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {Page} props.page
 * @returns {React.JSX.Element}
 */
export function RoutePage({ children, page }) {
  const location = useLocation();

  useLayoutEffect(
    () => {
      if (location.hash) {
        // if there's a hash, scroll to it
        const element = document.getElementById(location.hash.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // UDS-565 browser was landing users in the middle of the page because of browser scroll position remembering
        // instead, just always go to the top. remembering scrolling position gets complicated really fast
        // and has some nasty gotchas. Plus, the browser eventually may handle it automatically better, but
        // for now Single Page Apps are a mess with auto-scrolling.
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = `${page.pageTitle} - Utah Design System`;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.hash, location.pathname]
  );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
