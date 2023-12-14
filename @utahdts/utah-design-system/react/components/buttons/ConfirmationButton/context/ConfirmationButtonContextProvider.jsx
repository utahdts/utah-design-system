import { ConfirmationButtonContext } from './ConfirmationButtonContext';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} props.isClicked
 * @returns {JSX.Element}
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
