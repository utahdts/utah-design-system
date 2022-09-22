import PropTypes from 'prop-types';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuShape from '../../propTypesShapes/MenuShape';
import joinClassNames from '../../util/joinClassNames';
import HorizontalMenu from './HorizontalMenu';

const propTypes = {
  className: PropTypes.string,
  currentMenuItem: MenuItemShape,
  menu: MenuShape.isRequired,
};
const defaultProps = {
  className: null,
  currentMenuItem: null,
};

function MainMenu({
  className,
  currentMenuItem,
  menu,
}) {
  return <HorizontalMenu className={joinClassNames(className, 'menu-bar dark-text')} id="main-menu" menu={menu} currentMenuItem={currentMenuItem} />;
}

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
