import React from 'react';

/**
 * @param {object} props
 * @param {() => React.JSX.Element} props.content
 * @returns {import('react').JSX.Element}
 */
export function LandingTemplate({ content: Content }) {
  return (<Content />);
}
