import PropTypes from 'prop-types';
import MenuItemsShape from '../../propTypesShapes/MenuItemsShape';
import MainMenu from '../navigation/MainMenu';

const propTypes = {
  content: PropTypes.element.isRequired,
  menuItemsMain: MenuItemsShape.isRequired,
  // secondaryMenuItems: MenuItemsHierarchicalShape.isRequired,
};
const defaultProps = {};

function DocumentationTemplate({ content, menuItemsMain }) {
  return (
    <>
      <MainMenu menuItems={menuItemsMain} />
      {content}
    </>
  );
}

DocumentationTemplate.propTypes = propTypes;
DocumentationTemplate.defaultProps = defaultProps;

export default DocumentationTemplate;
