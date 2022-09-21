/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import React, { useMemo, useRef } from 'react';
import { useImmer } from 'use-immer';
import joinClassNames from '../../../util/joinClassNames';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.number,
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
let nextTabId = 0;
let nextTabPanelId = 0;

function TabGroup({
  children,
  className,
  defaultValue,
  onChange,
  value,
}) {
  const [tabGroupState, setTabGroupState] = useImmer({
    selectedTabId: NaN,
    tabGroupId: nextTabGroupId += 1,
  });
  const registeredTabIds = useRef([]);
  const registeredTabPanelIds = useRef([]);

  const contextValue = useMemo(
    () => ({
      currentTabGroupIndex: registeredTabIds.current.indexOf(tabGroupState.selectedTabId),
      tabGroupId: tabGroupState.tabGroupId,

      registerPanel: () => {
        nextTabPanelId += 1;
        registeredTabPanelIds.current.push(nextTabPanelId);
        return nextTabPanelId;
      },
      registerTab: () => {
        nextTabId += 1;
        registeredTabIds.current.push(nextTabId);
        return nextTabId;
      },

      selectedTabId: value === null ? tabGroupState.selectedTabId : registeredTabIds.current[value],
      setSelectedTabId: (tabId) => {
        if (onChange) {
          onChange(registeredTabIds.current.indexOf(tabId));
        } else {
          setTabGroupState((draftState) => { draftState.selectedTabId = tabId; });
        }
      },

      unregisterPanel: (tabPanelId) => {
        registeredTabPanelIds.current.splice(registeredTabPanelIds.current.indexOf(tabPanelId), 1);
      },
      unregisterTab: (tabId) => {
        // if the current tab is unmounting, default to the default value or first tab
        registeredTabIds.current.splice(registeredTabIds.current.indexOf(tabId), 1);
        if (tabGroupState.selectedTabId === tabId) {
          setTabGroupState((draftState) => {
            draftState.selectedTabIndex = defaultValue || 0;
          });
        }
      },
    }),
    [tabGroupState, value]
  );

  return (
    <TabGroupContext.Provider value={contextValue}>
      <div className={joinClassNames('tab-group', className)}>
        {children}
      </div>
    </TabGroupContext.Provider>
    //   <h3 id="tablist-1">
    //     Danish Composers
    //   </h3>
    //   <div
    //     role="tablist"
    //     aria-labelledby="tablist-1"
    //     className="automatic"
    //   >
    //     <button
    //       id="tab-1"
    //       type="button"
    //       role="tab"
    //       aria-selected="true"
    //       aria-controls="tabpanel-1"
    //     >
    //       <span className="focus">
    //         Maria Ahlefeldt
    //       </span>
    //     </button>
    //     <button
    //       id="tab-2"
    //       type="button"
    //       role="tab"
    //       aria-selected="false"
    //       aria-controls="tabpanel-2"
    //       tabIndex="-1"
    //     >
    //       <span className="focus">
    //         Carl Andersen
    //       </span>
    //     </button>
    //     <button
    //       id="tab-3"
    //       type="button"
    //       role="tab"
    //       aria-selected="false"
    //       aria-controls="tabpanel-3"
    //       tabIndex="-1"
    //     >
    //       <span className="focus">
    //         Ida da Fonseca
    //       </span>
    //     </button>
    //     <button
    //       id="tab-4"
    //       type="button"
    //       role="tab"
    //       aria-selected="false"
    //       aria-controls="tabpanel-4"
    //       tabIndex="-1"
    //     >
    //       <span className="focus">
    //         Peter Lange-Müller
    //       </span>
    //     </button>
    //   </div>
    //   <div
    //     id="tabpanel-1"
    //     role="tabpanel"
    //     tabIndex="0"
    //     aria-labelledby="tab-1"
    //   >
    //     <p>
    //       Maria Theresia Ahlefeldt (16 January 1755 – 20 December 1810) was a Danish, (originally German), compos
    //       er. She is known as the first female composer in Denmark. Maria Theresia composed music for several ballets, operas, and pl
    //       ays of the royal theatre. She was given good critic as a composer and described as a “
    //       <span lang="da">
    //         virkelig Tonekunstnerinde
    //       </span>
    //     </p>
    //   </div>
    //   <div
    //     id="tabpanel-2"
    //     role="tabpanel"
    //     tabIndex="0"
    //     aria-labelledby="tab-2"
    //     className="is-hidden"
    //   >
    //     <p>
    //       Carl Joachim Andersen (29 April 1847 – 7 May 1909) was a Danish flutist, conductor and composer born in Cop
    //       enhagen, son of the flutist Christian Joachim Andersen. Both as a virtuoso and as composer of flute music, he is considered
    //       red one of the best of his time. He was considered to be a tough leader and teacher and demanded as such a lot from his orchestra
    //       s but through that style he reached a high level.
    //     </p>
    //   </div>
    //   <div
    //     id="tabpanel-3"
    //     role="tabpanel"
    //     tabIndex="0"
    //     aria-labelledby="tab-3"
    //     className="is-hidden"
    //   >
    //     <p>
    //       Ida Henriette da Fonseca (July 27, 1802 – July 6, 1858) was a Danish opera singer and composer.
    //       Ida Henriette da Fonseca was the daughter of Abraham da Fonseca (1776–1849) and Marie Sofie Kiærskou
    //       (1784–1863). She and her sister Emilie da Fonseca were students of Giuseppe Siboni, choir master of
    //       the Opera in Copenhagen. She was given a place at the royal Opera alongside her sister the same year she debuted in 1827.
    //     </p>
    //   </div>
    //   <div
    //     id="tabpanel-4"
    //     role="tabpanel"
    //     tabIndex="0"
    //     aria-labelledby="tab-4"
    //     className="is-hidden"
    //   >
    //     <p>
    //       Peter Erasmus Lange-Müller (1 December 1850 – 26 February 1926) was a Danish composer and pianist. His compositional style
    //       was influenced by Danish folk music and by the work of Robert Schumann;
    //       Johannes Brahms; and his Danish countrymen, including J.P.E. Hartmann.
    //     </p>
    //   </div>
    // </div>
  );
}

TabGroup.propTypes = propTypes;
TabGroup.defaultProps = defaultProps;

export default TabGroup;
