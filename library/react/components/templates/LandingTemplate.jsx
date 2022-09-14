import PropTypes from 'prop-types';
import MenuItemsShape from '../../propTypesShapes/MenuItemsShape';
import MainMenu from '../navigation/MainMenu';
import UtahHeader from '../utahHeader/UtahHeader';

const propTypes = {
  content: PropTypes.element.isRequired,
  menuItemsMain: MenuItemsShape.isRequired,
};
const defaultProps = {};

function LandingTemplate({ content, menuItemsMain }) {
  return (
    <>
      <UtahHeader />
      <MainMenu menuItems={menuItemsMain} />
      {content}
    </>
  );
}

LandingTemplate.propTypes = propTypes;
LandingTemplate.defaultProps = defaultProps;

export default LandingTemplate;
