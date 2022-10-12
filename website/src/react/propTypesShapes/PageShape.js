import PropTypes from 'prop-types';
import layoutTemplatesEnum from '../enums/layoutTemplatesEnum';

export default PropTypes.exact({
  // the React component that renders the content for this page
  content: PropTypes.element.isRequired,

  // the url `link` for this page. This correlates with menu item `links`so opted for `link` instead of `path`
  link: PropTypes.string.isRequired,

  // which secondary menu items to show for this page (left side menu); not all layouts use this
  menuSecondary: PropTypes.string,

  // the title of the page to show in the browser tab
  pageTitle: PropTypes.string.isRequired,

  // which React Layout Template to use for rendering this page
  template: PropTypes.oneOf(Object.values(layoutTemplatesEnum)).isRequired,
});
