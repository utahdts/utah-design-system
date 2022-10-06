/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useImmer } from 'use-immer';
import joinClassNames from '../../../util/joinClassNames';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  // value is the currentSelectedTabIndex number
  value: PropTypes.number,
};
const defaultProps = {
  className: null,
  defaultValue: null,
  onChange: null,
  value: null,
};

let nextTabGroupId = 0;

function TabGroup({
  children,
  className,
  defaultValue,
  onChange,
  value,
}) {
  const [tabGroupState, setTabGroupState] = useImmer(() => {
    nextTabGroupId += 1;
    return {
      selectedTabId: defaultValue || NaN,
      tabGroupId: nextTabGroupId,
    };
  });
  const contextValue = useMemo(
    () => ({
      tabGroupId: tabGroupState.tabGroupId,
      selectedTabId: value || tabGroupState.selectedTabId,
      setSelectedTabId: (tabId) => {
        if (onChange) {
          onChange(tabId);
        } else {
          setTabGroupState((draftState) => { draftState.selectedTabId = tabId; });
        }
      },
    }),
    [tabGroupState, value]
  );
  return (
    <TabGroupContext.Provider value={contextValue}>
      <div className={joinClassNames('tab-group', className)} id={`tab-group-${tabGroupState.id}`}>
        {children}
      </div>
    </TabGroupContext.Provider>
  );
}

TabGroup.propTypes = propTypes;
TabGroup.defaultProps = defaultProps;

export default TabGroup;
