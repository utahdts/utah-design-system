import React from 'react';
import { MainContent } from './MainContent';

/**
 * @param {object} props
 * @param {() => React.JSX.Element} props.content
 * @returns {import('react').JSX.Element}
 */
export function LandingTemplate({ content: Content }) {
  return (
    <MainContent className="landing-page-template__content">
      <Content />
    </MainContent>
  );
}
