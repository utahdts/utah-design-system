import { useCallback, useEffect, useId, useMemo, useRef } from 'react';
import { useImmer } from 'use-immer';
import { joinClassNames } from '../../../util/joinClassNames';
import { TabGroupContext } from './context/TabGroupContext';
import { tabId } from './functions/tabId.js';

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
    tabs: /** @type {NodeList | []} */ [],
  }));
  const navigateTab = useCallback((/** @type {HTMLButtonElement | null} */ tab) => {
    if (tab) {
      tab?.focus();
      tab?.click();
    }
  }, []);
  const findCurrentTabIndex = useCallback(() => (tabGroupState.tabs.findIndex((/** @type {HTMLButtonElement | null} */ tab) => tab?.id === tabId(tabGroupState.tabGroupId, tabGroupState.selectedTabId))), [tabGroupState]);

  /** @type {TabGroupContextValue} */
  const contextValue = useMemo(
    () => ({
      tabGroupId: tabGroupState.tabGroupId,
      selectedTabId: value || tabGroupState.selectedTabId || '',
      setSelectedTabId: (tabId) => {
        if (onChange) {
          onChange(tabId);
        } else {
          setTabGroupState((draftState) => { draftState.selectedTabId = tabId; });
        }
      },
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
      isVertical: !!isVertical,
    }),
    [tabGroupState]
  );

  useEffect(() => {
    if (tabGroupRef?.current) {
      setTabGroupState((draftState) => {
        // @ts-ignore
        draftState.tabs = [...tabGroupRef?.current?.querySelectorAll('button[role=tab]') || []];
      });
    }
  }, []);

  return (
    <TabGroupContext.Provider value={contextValue}>
      <div
        className={joinClassNames('tab-group', className, isVertical && 'tab-group--vertical')}
        id={`tab-group-${tabGroupState.tabGroupId}`}
        ref={tabGroupRef}
      >
        {children}
      </div>
    </TabGroupContext.Provider>
  );
}
