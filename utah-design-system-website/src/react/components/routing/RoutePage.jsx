import PropTypes from 'prop-types';
import { useEffect } from 'react';
import PageShape from '../../propTypesShapes/PageShape';

const propTypes = {
  children: PropTypes.element.isRequired,
  page: PageShape.isRequired,
};
const defaultProps = {};

function RoutePage({ children, page }) {
  useEffect(() => {
    // UDS-565 browser was landing users in the middle of the page because of browser scroll position remembering
    // instead, just always go to the top. remembering scrolling position gets complicated really fast
    // and has some nasty gotchas. Plus, the browser eventually may handle it automatically better, but
    // for now Single Page Apps are a mess with auto-scrolling.
    window.scrollTo(0, 0);
    document.title = `${page.pageTitle} - Utah Design System`;
  }, [page.pageTitle]);
  return children;
}

RoutePage.propTypes = propTypes;
RoutePage.defaultProps = defaultProps;

export default RoutePage;
