import React from 'react';
import { useConfirmationButtonContext } from './context/useConfirmationButtonContext';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {React.JSX.Element | null}
 */
export function ConfirmationChildren({
  children,
}) {
  const isClicked = useConfirmationButtonContext();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (isClicked ? <>{children}</> : null);
}
