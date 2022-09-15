import PropTypes from 'prop-types';

const menuItemShape = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
menuItemShape.children = PropTypes.arrayOf(PropTypes.shape(menuItemShape));

export default PropTypes.arrayOf(PropTypes.shape(menuItemShape));
