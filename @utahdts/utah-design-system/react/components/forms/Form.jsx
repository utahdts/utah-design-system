import { useId } from 'react';
import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @returns {import('react').JSX.Element}
 */
export function Form({
  children,
  className,
  ...rest
}) {
  const formId = useId();

  return (
    <form className={joinClassNames('form', className)} id={`form-${formId}`} {...rest}>
      {children}
    </form>
  );
}
