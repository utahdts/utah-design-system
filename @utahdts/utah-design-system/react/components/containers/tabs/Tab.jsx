import { handleEvent } from '../../../util/handleEvent';
import { joinClassNames } from '../../../util/joinClassNames';
import { useTabGroupContext } from './context/useTabGroupContext';
import { generateTabId } from './functions/generateTabId';

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
    isVertical,
  } = useTabGroupContext();

  const onKeyChange = (/** @type {import('react').KeyboardEvent} */ event) => {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowLeft':
        if (!isVertical) {
          navigatePrevious();
        }
        break;

      case 'ArrowRight':
        if (!isVertical) {
          navigateNext();
        }
        break;

      case 'ArrowUp':
        if (isVertical) {
          navigatePrevious();
        }
        break;

      case 'ArrowDown':
        if (isVertical) {
          navigateNext();
        }
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
        id={generateTabId(tabGroupId, id)}
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
