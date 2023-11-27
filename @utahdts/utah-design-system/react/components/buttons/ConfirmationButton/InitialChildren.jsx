// @ts-check

import { useConfirmationButtonContext } from './context/useConfirmationButtonContext';

export function InitialChildren({
  children,
}) {
  const isClicked = useConfirmationButtonContext();
  return (
    isClicked ? null : children
  );
}
