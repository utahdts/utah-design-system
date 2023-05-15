// @ts-check
import PropTypes from 'prop-types';

/**
 * see jsDocTypes.Logo (should always be matched)
 */

export default PropTypes.shape({
  element: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  htmlString: PropTypes.string,
  imageUrl: PropTypes.string,
});
