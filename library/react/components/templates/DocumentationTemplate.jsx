import PropTypes from 'prop-types';
import MenuItemShape from '../../propTypesShapes/MenuItemShape';
import MenuShape from '../../propTypesShapes/MenuShape';
import RefShape from '../../propTypesShapes/RefShape';
import MainMenu from '../navigation/MainMenu';

const propTypes = {
  content: PropTypes.func.isRequired,
  contentRef: RefShape.isRequired,
  currentMenuItem: MenuItemShape,
  mainMenu: MenuShape.isRequired,
  sidePanelRightContent: PropTypes.element.isRequired,
  sidePanelLeftContent: PropTypes.element.isRequired,
};
const defaultProps = {
  currentMenuItem: null,
};

function DocumentationTemplate({
  content: Content,
  contentRef,
  currentMenuItem,
  mainMenu,
  sidePanelRightContent,
  sidePanelLeftContent,
}) {
  return (
    <>
      <MainMenu currentMenuItem={currentMenuItem} menu={mainMenu} />
      <div className="documentation-template__wrapper">
        <div className="documentation-template">
          <div className="documentation-template__side-panel-left">
            {sidePanelLeftContent}
          </div>
          <main className="documentation-template__content" ref={contentRef}>
            <Content />
          </main>
          <div className="documentation-template__side-panel-right">
            {sidePanelRightContent}
          </div>
        </div>
      </div>
    </>
  );
}

DocumentationTemplate.propTypes = propTypes;
DocumentationTemplate.defaultProps = defaultProps;

export default DocumentationTemplate;
