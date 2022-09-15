import PropTypes from 'prop-types';
import layoutTemplatesEnum from '../enums/layoutTemplatesEnum';

export default PropTypes.shape({
  content: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  template: PropTypes.oneOf(Object.values(layoutTemplatesEnum)).isRequired,
});
