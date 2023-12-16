import { useContext } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { TabGroupContext } from './TabGroupContext';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.tagName]
 * @returns {JSX.Element}
 */
export function TabGroupTitle({ children, className, tagName: TagName = 'div' }) {
  const { tabGroupId } = useContext(TabGroupContext);
  return (
    // @ts-ignore
    <TagName id={`tab-group-${tabGroupId}`} className={joinClassNames('tag-group__title', className)}>
      {children}
    </TagName>
  );
}
