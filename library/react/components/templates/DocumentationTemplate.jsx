import PropTypes from 'prop-types';
import MenuItemHierarchalShape from '../../propTypesShapes/MenuItemHierarchalShape';
import MenuItemsShape from '../../propTypesShapes/MenuItemsShape';
import MainMenu from '../navigation/MainMenu';
import SidePanelNavigation from '../navigation/SidePanelNavigation';
import UtahHeader from '../utahHeader/UtahHeader';

const propTypes = {
  content: PropTypes.element.isRequired,
  currentPageLink: PropTypes.string.isRequired,
  menuItemsMain: MenuItemsShape.isRequired,
  menuItemsSecondary: MenuItemHierarchalShape.isRequired,
  mainMenuLink: PropTypes.string.isRequired,
};
const defaultProps = {};

function DocumentationTemplate({
  content,
  currentPageLink,
  menuItemsMain,
  menuItemsSecondary,
  mainMenuLink,
}) {
  return (
    <>
      <UtahHeader />
      <MainMenu menuItems={menuItemsMain} selectedMenuLink={mainMenuLink} />
      <div className="documentation-template">
        <SidePanelNavigation menuItems={menuItemsSecondary} currentPageLink={currentPageLink} />
        {content}
      </div>
    </>
  );
}

DocumentationTemplate.propTypes = propTypes;
DocumentationTemplate.defaultProps = defaultProps;

export default DocumentationTemplate;
