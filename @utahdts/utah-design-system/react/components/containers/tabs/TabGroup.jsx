import { useCallback, useEffect, useId, useMemo, useRef } from 'react';
import { useImmer } from 'use-immer';
import { joinClassNames } from '../../../util/joinClassNames';
import { TabGroupContext } from './context/TabGroupContext';
import { generateTabId } from './functions/generateTabId';

/** @typedef {import('@utahdts/utah-design-system').TabGroupContextValue} TabGroupContextValue */

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {boolean} [props.isVertical]
 * @param {(newTabId: string) => void} [props.onChange]
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TabGroup({
  children,
  className,
  defaultValue,
  isVertical,
  onChange,
  value,
}) {
  const tabGroupId = useId();
  const tabGroupRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const [tabGroupState, setTabGroupState] = useImmer(() => ({
    selectedTabId: defaultValue || '',
    tabGroupId,
    tabs: /** @type {NodeList | []} */[],
  }));
  const navigateTab = useCallback((/** @type {HTMLButtonElement | null} */ tab) => {
    if (tab) {
      tab?.focus();
      tab?.click();
    }
  }, []);
  const findCurrentTabIndex = useCallback(
    () => (
      tabGroupState.tabs
        .findIndex((/** @type {HTMLButtonElement | null} */ tab) => (
          tab?.id === generateTabId(tabGroupState.tabGroupId, tabGroupState.selectedTabId)))
    ),
    [tabGroupState]
  );

  const registerTab = useCallback(
    (/** @type {React.RefObject<HTMLButtonElement | null> | null} */ tab) => {
      setTabGroupState((draftState) => {
        const checkTab = draftState.tabs.find((/** @type {HTMLButtonElement | null} */ tabSearch) => tabSearch?.id === tab?.current?.id);
        if (checkTab) {
          Object.assign(checkTab, tab?.current);
        } else {
          // @ts-expect-error
          draftState.tabs.push(tab?.current);
        }
      });
    },
    [tabGroupState, setTabGroupState]
  );
  const unRegisterTab = useCallback(
    (/** @type {React.RefObject<HTMLButtonElement | null> | null} */ tab) => {
      setTabGroupState((draftState) => {
        draftState.tabs = draftState.tabs.filter((/** @type {HTMLButtonElement | null} */ filterTab) => filterTab?.id !== tab?.current?.id);
      });
    },
    []
  );

  // check if "controlled" component's value changed
  useEffect(
    () => {
      if (value !== undefined) {
        setTabGroupState((draftState) => {
          draftState.selectedTabId = value;
        });
      }
    },
    [value]
  );

  /** @type {TabGroupContextValue} */
  const contextValue = useMemo(
    () => ({
      isVertical: !!isVertical,
      navigateNext() {
        const index = findCurrentTabIndex();
        const nextIndex = (index + 1) % tabGroupState.tabs.length;
        navigateTab(tabGroupState?.tabs?.[nextIndex] || null);
      },
      navigatePrevious() {
        const index = findCurrentTabIndex();
        const nextIndex = (index + tabGroupState.tabs.length - 1) % tabGroupState.tabs.length;
        navigateTab(tabGroupState?.tabs?.[nextIndex] || null);
      },
      registerTab,
      selectedTabId: value || tabGroupState.selectedTabId || '',
      setSelectedTabId(tabId) {
        if (onChange) {
          onChange(tabId);
        } else {
          setTabGroupState((draftState) => { draftState.selectedTabId = tabId; });
        }
      },
      tabGroupId: tabGroupState.tabGroupId,
      unRegisterTab,
    }),
    [tabGroupState, isVertical]
  );

  return (
    <TabGroupContext.Provider value={contextValue}>
      <div
        className={joinClassNames('tab-group', className, isVertical && 'tab-group--vertical')}
        id={`tab-group__${tabGroupState.tabGroupId}`}
        ref={tabGroupRef}
      >
        {children}
      </div>
    </TabGroupContext.Provider>
  );
}
