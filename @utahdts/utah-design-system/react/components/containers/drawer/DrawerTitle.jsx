import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} props.id Make sure to match the ariaLabelledBy of the drawer
 * @param {string} [props.tagName]
 * @returns {import('react').JSX.Element}
 */
export function DrawerTitle({
  children,
  className,
  id,
  tagName: TagName = 'div',
}) {
  return (
    // @ts-expect-error
    <TagName
      className={joinClassNames('drawer__title', className)}
      id={id}
    >
      {children}
    </TagName>
  );
}
