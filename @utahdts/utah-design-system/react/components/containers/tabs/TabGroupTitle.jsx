import { joinClassNames } from '../../../util/joinClassNames';
import { useTabGroupContext } from './context/useTabGroupContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.tagName]
 * @returns {import('react').JSX.Element}
 */
export function TabGroupTitle({ children, className, tagName: TagName = 'div' }) {
  const { tabGroupId } = useTabGroupContext();
  return (
    // @ts-expect-error
    <TagName id={`tab-group__${tabGroupId}`} className={joinClassNames('tag-group__title', className)}>
      {children}
    </TagName>
  );
}
