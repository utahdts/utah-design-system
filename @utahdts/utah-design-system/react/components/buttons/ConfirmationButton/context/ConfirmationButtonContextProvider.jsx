// @ts-check

import { ConfirmationButtonContext } from './ConfirmationButtonContext';

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
