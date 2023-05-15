// @ts-check
import PropTypes from 'prop-types';

/**
 * see jsDocTypes.Badge (should always be matched)
 */

export default PropTypes.shape({
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
});
