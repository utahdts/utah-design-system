import PropTypes from 'prop-types';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuShape from '../../propTypesShapes/MenuShape';
import MainMenu from '../navigation/MainMenu';
import UtahHeader from '../utahHeader/UtahHeader';

const propTypes = {
  content: PropTypes.element.isRequired,
  currentMenuItem: MenuItemShape,
  mainMenu: MenuShape.isRequired,
};
const defaultProps = {
  currentMenuItem: null,
};

function LandingTemplate({ content, currentMenuItem, mainMenu }) {
  return (
    <>
      <UtahHeader />
      <MainMenu currentMenuItem={currentMenuItem} menu={mainMenu} />
      {content}
    </>
  );
}

LandingTemplate.propTypes = propTypes;
LandingTemplate.defaultProps = defaultProps;

export default LandingTemplate;
