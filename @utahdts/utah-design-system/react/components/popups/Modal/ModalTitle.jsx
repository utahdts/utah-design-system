import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @returns {import('react').JSX.Element}
 */
export function ModalTitle({
  children,
  className,
}) {
  return (
    <div
      className={joinClassNames('modal__title', className)}
    >
      {children}
    </div>
  );
}
