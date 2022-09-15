import PropTypes from 'prop-types';
import useCurrentMenuItem from '../../hooks/useCurrentMenuItem';
import usePrepMenuItems from '../../hooks/usePrepMenuItems';
import MenuItemsShape from '../../propTypesShapes/MenuItemsShape';
import MainMenu from '../navigation/MainMenu';
import UtahHeader from '../utahHeader/UtahHeader';

const propTypes = {
  content: PropTypes.element.isRequired,
  menuItemsMain: MenuItemsShape.isRequired,
};
const defaultProps = {};

function LandingTemplate({ content, menuItemsMain }) {
  const menuItemsMainComputed = usePrepMenuItems({ menuItems: menuItemsMain });
  const currentMenuItem = useCurrentMenuItem(menuItemsMainComputed);
  return (
    <>
      <UtahHeader />
      <MainMenu currentMenuItem={currentMenuItem} menuItems={menuItemsMainComputed} />
      {content}
    </>
  );
}

LandingTemplate.propTypes = propTypes;
LandingTemplate.defaultProps = defaultProps;

export default LandingTemplate;
