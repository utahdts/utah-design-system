import { MainContent } from './MainContent';

/**
 * @param {object} props
 * @param {() => JSX.Element} props.content
 * @param {React.RefObject<HTMLElement>} [props.contentRef]
 * @param {React.ReactNode} props.sidePanelRightContent
 * @param {React.ReactNode} [props.sidePanelLeftContent]
 * @returns {React.JSX.Element}
 */
export function DocumentationTemplate({
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
