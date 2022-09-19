import PropTypes from 'prop-types';
import MenuItemShape from './MenuItemShape';

export default PropTypes.arrayOf(PropTypes.exact({
  header: PropTypes.string.isRequired,
  menuItems: MenuItemShape.isRequired,
}));
