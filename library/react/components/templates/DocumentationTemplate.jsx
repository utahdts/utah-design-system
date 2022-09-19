import PropTypes from 'prop-types';
import useCurrentMenuItem from '../../hooks/useCurrentMenuItem';
import usePrepMenuItems from '../../hooks/usePrepMenuItems';
import MenuItemsShape from '../../propTypesShapes/MenuItemsShape';
import MenusWithHeaderShape from '../../propTypesShapes/MenusWithHeaderShape';
import MainMenu from '../navigation/MainMenu';
import SidePanelNavigation from '../navigation/SidePanelNavigation';
import UtahHeader from '../utahHeader/UtahHeader';

const propTypes = {
  content: PropTypes.element.isRequired,
  menuItemsMain: MenuItemsShape.isRequired,
  menuItemsSecondary: PropTypes.oneOfType([MenuItemsShape, MenusWithHeaderShape]).isRequired,
};
const defaultProps = {};

function DocumentationTemplate({
  content,
  menuItemsMain,
  menuItemsSecondary,
}) {
  const menuItemsMainComputed = usePrepMenuItems({ menuItems: menuItemsMain });
  const menuItemsSecondaryComputed = usePrepMenuItems({ menuItems: menuItemsSecondary });
  const currentMenuItem = useCurrentMenuItem(menuItemsMainComputed, menuItemsSecondaryComputed);

  return (
    <>
      <UtahHeader />
      <MainMenu currentMenuItem={currentMenuItem} menuItems={menuItemsMainComputed} />
      <div className="documentation-template">
        <SidePanelNavigation currentMenuItem={currentMenuItem} menuItems={menuItemsSecondaryComputed} />
        {content}
      </div>
    </>
  );
}

DocumentationTemplate.propTypes = propTypes;
DocumentationTemplate.defaultProps = defaultProps;

export default DocumentationTemplate;
