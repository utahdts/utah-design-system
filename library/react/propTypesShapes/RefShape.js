import PropTypes from 'prop-types';

// https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
export default PropTypes.oneOfType([
  // Either a function
  PropTypes.func,
  // Or the instance of a DOM native element (see the note about SSR)
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
]);
