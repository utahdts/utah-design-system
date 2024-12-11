import React from 'react';
import { MainContent } from './MainContent';

/**
 * @param {object} props
 * @param {() => React.JSX.Element} props.content
 * @param {import('react').RefObject<HTMLElement | null>} [props.contentRef]
 * @param {import('react').ReactNode} props.sidePanelRightContent
 * @param {import('react').ReactNode} [props.sidePanelLeftContent]
 * @returns {import('react').JSX.Element}
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
