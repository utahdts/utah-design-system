import PropTypes from 'prop-types';
import MenuItemsShape from '../../propTypesShapes/MenuItemsShape';
import MainMenu from '../navigation/MainMenu';

const propTypes = {
  content: PropTypes.element.isRequired,
  menuItemsMain: MenuItemsShape.isRequired,
};
const defaultProps = {};

function LandingTemplate({ content, menuItemsMain }) {
  return (
    <>
      <MainMenu menuItems={menuItemsMain} />
      <div>{content}</div>
    </>
  );
}

LandingTemplate.propTypes = propTypes;
LandingTemplate.defaultProps = defaultProps;

export default LandingTemplate;
