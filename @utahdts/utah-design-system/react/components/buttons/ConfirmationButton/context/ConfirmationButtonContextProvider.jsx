import { ConfirmationButtonContext } from './ConfirmationButtonContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {boolean} props.isClicked
 * @returns {import('react').JSX.Element}
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
