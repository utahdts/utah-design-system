import PropTypes from 'prop-types';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuShape from '../../propTypesShapes/MenuShape';
import joinClassNames from '../../util/joinClassNames';
import { MenuItem } from './MenuItem';

const propTypes = {
  className: PropTypes.string,
  currentMenuItem: MenuItemShape,
  // used for accessibility labeling
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  menu: MenuShape.isRequired,
  titleTagClassName: PropTypes.string,
  titleTagName: PropTypes.string,
};
const defaultProps = {
  className: null,
  currentMenuItem: null,
  titleTagClassName: 'visually-hidden',
  titleTagName: 'h2',
};

function HorizontalMenu({
  className,
  currentMenuItem,
  id,
  menu,
  titleTagClassName,
  titleTagName: TitleTagName,
}) {
  return (
    <nav className={joinClassNames(className, 'horizontal-menu')} aria-labelledby={id}>
      <TitleTagName id={id} className={titleTagClassName}>Main Menu</TitleTagName>
      <ul>
        {menu?.menuItems?.map((menuItem) => (
          <MenuItem menuItem={menuItem} key={`horizontal-menu__nav-link__${menuItem.link}-${menuItem.title}}`} currentMenuItem={currentMenuItem} />
        ))}
      </ul>
    </nav>
  );
}

HorizontalMenu.propTypes = propTypes;
HorizontalMenu.defaultProps = defaultProps;

export default HorizontalMenu;
