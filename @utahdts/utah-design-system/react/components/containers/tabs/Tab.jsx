import { useContext } from 'react';
import { handleEvent } from '../../../util/handleEvent';
import { joinClassNames } from '../../../util/joinClassNames';
import { TabGroupContext } from './TabGroupContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} props.id
 * @returns {import('react').JSX.Element}
 */
export function Tab({ children, id }) {
  const {
    selectedTabId,
    setSelectedTabId,
    tabGroupId,
    navigateNext,
    navigatePrevious,
  } = useContext(TabGroupContext);

  const onKeyChange = (/** @type {import('react').KeyboardEvent} */ event) => {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowLeft':
        navigatePrevious();
        break;

      case 'ArrowRight':
        navigateNext();
        break;

      default:
        break;
    }
  };

  return (
    <div
      className={joinClassNames(
        (selectedTabId === id) && 'tab-group__tab--selected',
        'tab-group__tab'
      )}
      role="presentation"
    >
      <button
        // `aria-controls` must match the TabPanel's `id`
        aria-controls={`tabpanel-${tabGroupId}-${id}`}
        aria-selected={selectedTabId === id}
        className={joinClassNames(
          (selectedTabId === id) && 'tab-group__tab-button--selected',
          'tab-group__tab-button'
        )}
        // `id` must match the TabPanel's `aria-labelledby`
        id={`tab-${tabGroupId}-${id}`}
        onClick={handleEvent(() => setSelectedTabId(id))}
        onKeyDown={onKeyChange}
        role="tab"
        tabIndex={selectedTabId === id ? 0 : -1}
        type="button"
      >
        {children}
      </button>
    </div>
  );
}
