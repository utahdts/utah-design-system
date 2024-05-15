import { joinClassNames } from '../../../util/joinClassNames';
import { useTabGroupContext } from './context/useTabGroupContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @returns {import('react').JSX.Element}
 */
export function TabList({
  children,
  className,
}) {
  const { tabGroupId, isVertical } = useTabGroupContext();

  return (
    <div
      className={joinClassNames(className, 'tab-group__list')}
      role="tablist"
      aria-labelledby={`tab-group-${tabGroupId}`}
      aria-orientation={isVertical ? 'vertical' : 'horizontal'}
    >
      {children}
    </div>
  );
}
