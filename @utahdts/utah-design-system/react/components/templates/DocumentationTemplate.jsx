import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import MainContent from './MainContent';

const propTypes = {
  content: PropTypes.func.isRequired,
  contentRef: RefShape.isRequired,
  sidePanelRightContent: PropTypes.element.isRequired,
  sidePanelLeftContent: PropTypes.element,
};
const defaultProps = {
  sidePanelLeftContent: null,
};

function DocumentationTemplate({
  content: Content,
  contentRef,
  sidePanelRightContent,
  sidePanelLeftContent,
}) {
  return (
    <div className="documentation-template__wrapper">
      <div className="documentation-template">
        <div className="documentation-template__side-panel-left">
          {sidePanelLeftContent}
        </div>
        <div className="documentation-template__right-group">
          <MainContent className="documentation-template__content" innerRef={contentRef}>
            <Content />
          </MainContent>
          <div className="documentation-template__side-panel-right">
            {sidePanelRightContent}
          </div>
        </div>
      </div>
    </div>
  );
}

DocumentationTemplate.propTypes = propTypes;
DocumentationTemplate.defaultProps = defaultProps;

export default DocumentationTemplate;
