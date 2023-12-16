import { useContext } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { TabGroupContext } from './TabGroupContext';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @returns {JSX.Element}
 */
export function TabList({ children, className }) {
  const { tabGroupId } = useContext(TabGroupContext);

  return (
    <div
      className={joinClassNames(className, 'tab-group__list')}
      role="tablist"
      aria-labelledby={`tab-group-${tabGroupId}`}
    >
      {children}
    </div>
  );
}
