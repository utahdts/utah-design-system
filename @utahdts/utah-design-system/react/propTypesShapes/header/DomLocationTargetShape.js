// @ts-check
import PropTypes from 'prop-types';

/**
 * see jsDocTypes.DomLocationTarget (should always be matched)
 */

export default PropTypes.shape({
  cssSelector: PropTypes.string,
  element: PropTypes.node,
  elementFunction: PropTypes.func,
});
