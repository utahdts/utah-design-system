// @ts-check
import PropTypes from 'prop-types';

/**
 * see jsDocTypes.UserInfo (should always be matched)
 */

export default PropTypes.shape({
  authenticated: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  env: PropTypes.string,
  first: PropTypes.string.isRequired,
  id: PropTypes.string,
  last: PropTypes.string,
  mail: PropTypes.arrayOf(PropTypes.string),
  middle: PropTypes.string,
  status: PropTypes.string,
  type: PropTypes.string,
  username: PropTypes.string,
});
