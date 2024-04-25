import { isEmpty } from 'lodash';
import { joinClassNames } from '../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {string} props.title
 * @returns {import('react').JSX.Element}
 */
export function Badge({
  children,
  className,
  innerRef,
  title,
  ...rest
}) {
  return (
    <div className={joinClassNames('badge', className, isEmpty(children) ? 'badge--blank' : '')} ref={innerRef} {...rest}>
      <span className="badge__value">{children}</span>
      <span className="visually-hidden">{title}</span>
    </div>
  );
}
