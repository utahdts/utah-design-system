import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @returns {import('react').JSX.Element}
 */
export function ModalFooter({
  children,
  className,
  id,
}) {
  return (
    <div
      className={joinClassNames('modal__footer', className)}
      id={id}
    >
      {children}
    </div>
  );
}
