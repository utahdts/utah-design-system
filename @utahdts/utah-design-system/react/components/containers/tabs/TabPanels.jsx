import React from 'react';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {React.JSX.Element}
 */
export function TabPanels({ children }) {
  return (
    <div className="tab-group__panels">
      {children}
    </div>
  );
}
