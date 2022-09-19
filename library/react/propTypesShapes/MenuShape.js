import PropTypes from 'prop-types';
import MenuItemsShape from './MenuItemsShape';

export default PropTypes.exact({
  header: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  menuItems: MenuItemsShape.isRequired,
});
