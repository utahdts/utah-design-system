import PropTypes from 'prop-types';
import MenuItemShape from './MenuItemShape';

export default PropTypes.exact({
  header: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(MenuItemShape).isRequired,
  titleTagClassName: PropTypes.string,
  titleTagName: PropTypes.string,
});
