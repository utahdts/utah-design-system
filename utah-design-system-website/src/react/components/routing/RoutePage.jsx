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
    document.title = `${page.pageTitle} - Utah Design System`;
  }, [page.pageTitle]);
  return children;
}

RoutePage.propTypes = propTypes;
RoutePage.defaultProps = defaultProps;

export default RoutePage;
