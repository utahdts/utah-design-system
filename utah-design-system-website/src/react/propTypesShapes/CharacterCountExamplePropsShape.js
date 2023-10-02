import PropTypes from 'prop-types';

// uses CharacterCountExamplePropsShape

export default PropTypes.exact({
  className: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.string,
  text: PropTypes.string,
});
