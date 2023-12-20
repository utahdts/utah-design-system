import React from 'react';
import { ConfirmationButtonContext } from './ConfirmationButtonContext';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} props.isClicked
 * @returns {React.JSX.Element}
 */
export function ConfirmationButtonContextProvider({
  children,
  isClicked,
}) {
  return (
    <ConfirmationButtonContext.Provider value={isClicked}>
      {children}
    </ConfirmationButtonContext.Provider>
  );
}
