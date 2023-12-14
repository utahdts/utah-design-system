import React, { useId, useMemo } from 'react';
import { useImmer } from 'use-immer';
import { joinClassNames } from '../../../util/joinClassNames';
import { TabGroupContext } from './TabGroupContext';

/** @typedef {import('@utahdts/utah-design-system').TabGroupContextValue} TabGroupContextValue */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {(newTabId: string) => void} [props.onChange]
 * @param {string} [props.value]
 * @returns {JSX.Element}
 */
export function TabGroup({
  children,
  className,
  defaultValue,
  onChange,
  value,
}) {
  const tabGroupId = useId();
  const [tabGroupState, setTabGroupState] = useImmer(() => ({
    selectedTabId: defaultValue,
    tabGroupId,
  }));
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
    }),
    [onChange, setTabGroupState, tabGroupState, value]
  );
  return (
    <TabGroupContext.Provider value={contextValue}>
      <div className={joinClassNames('tab-group', className)} id={`tab-group-${tabGroupState.tabGroupId}`}>
        {children}
      </div>
    </TabGroupContext.Provider>
  );
}
