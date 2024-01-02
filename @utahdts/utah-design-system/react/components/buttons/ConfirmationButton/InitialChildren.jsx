import { useConfirmationButtonContext } from './context/useConfirmationButtonContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @returns {import('react').JSX.Element | null}
 */
export function InitialChildren({
  children,
}) {
  const isClicked = useConfirmationButtonContext();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (isClicked ? null : <>{children}</>);
}
