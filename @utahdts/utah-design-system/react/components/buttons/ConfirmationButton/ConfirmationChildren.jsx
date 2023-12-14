import { useConfirmationButtonContext } from './context/useConfirmationButtonContext';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element | null}
 */
export function ConfirmationChildren({
  children,
}) {
  const isClicked = useConfirmationButtonContext();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (isClicked ? <>{children}</> : null);
}
