import PropTypes from 'prop-types';

// uses CharacterCountExamplePropsShape

export default PropTypes.exact({
  id: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
});
