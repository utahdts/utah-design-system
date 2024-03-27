import { useContext } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { TabGroupContext } from './TabGroupContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} props.tabId
 * @returns {import('react').JSX.Element}
 */
export function TabPanel({ children, className, tabId }) {
  const { selectedTabId, tabGroupId } = useContext(TabGroupContext);

  return (
    <div
      // `aria-labelledby` must match the related Tab's `id`
      aria-labelledby={`tab-${tabGroupId}-${tabId}`}
      className={joinClassNames(
        className,
        selectedTabId !== tabId && 'visually-hidden',
        'tab-group__panel'
      )}
      // `id` must match the related Tab's `aria-controls`
      id={`tabpanel-${tabGroupId}-${tabId}`}
      role="tabpanel"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
