// @ts-check

import { useConfirmationButtonContext } from './context/useConfirmationButtonContext';

export function ConfirmationChildren({
  children,
}) {
  const isClicked = useConfirmationButtonContext();
  return (
    isClicked ? children : null
  );
}
