import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} props.id
 * @returns {import('react').JSX.Element}
 */
export function ModalTitle({
  children,
  className,
  id,
}) {
  return (
    <div
      className={joinClassNames('modal__title', className)}
      id={id}
    >
      {children}
    </div>
  );
}
