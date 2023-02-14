import PropTypes from 'prop-types';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuShape from '../../propTypesShapes/MenuShape';
import MainMenu from '../navigation/MainMenu';

const propTypes = {
  content: PropTypes.func.isRequired,
  currentMenuItem: MenuItemShape,
  mainMenu: MenuShape.isRequired,
};
const defaultProps = {
  currentMenuItem: null,
};

function LandingTemplate({ content: Content, currentMenuItem, mainMenu }) {
  return (
    <>
      <MainMenu currentMenuItem={currentMenuItem} menu={mainMenu} />
      <Content />
    </>
  );
}

LandingTemplate.propTypes = propTypes;
LandingTemplate.defaultProps = defaultProps;

export default LandingTemplate;
