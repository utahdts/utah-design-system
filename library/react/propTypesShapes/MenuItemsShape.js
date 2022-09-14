import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
);
