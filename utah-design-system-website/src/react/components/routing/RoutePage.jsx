import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageShape from '../../propTypesShapes/PageShape';

const propTypes = {
  children: PropTypes.element.isRequired,
  page: PageShape.isRequired,
};
const defaultProps = {};

function RoutePage({ children, page }) {
  const location = useLocation();

  useLayoutEffect(
    () => {
      if (location.hash) {
        // if there's a hash, scroll to it
        const element = document.getElementById(location.hash.substring(1));
        element.scrollIntoView(true, { behavior: 'smooth' });
      } else {
        // UDS-565 browser was landing users in the middle of the page because of browser scroll position remembering
        // instead, just always go to the top. remembering scrolling position gets complicated really fast
        // and has some nasty gotchas. Plus, the browser eventually may handle it automatically better, but
        // for now Single Page Apps are a mess with auto-scrolling.
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = `${page.pageTitle} - Utah Design System`;
      }
    },
    [location.hash, location.pathname]
  );
  return children;
}

RoutePage.propTypes = propTypes;
RoutePage.defaultProps = defaultProps;

export default RoutePage;
