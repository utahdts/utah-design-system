// @ts-check
import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
  // Either a function
  PropTypes.func,
  // Or the instance of a DOM native element (see the note about SSR)
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
]);
