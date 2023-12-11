// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import { useImmer } from 'use-immer';
import { ariaLiveTypes } from '../../enums/ariaLiveTypes';
import UtahDesignSystemContext from './UtahDesignSystemContext';
import AriaLiveMessages from './components/AriaLiveMessages';

/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextValue} UtahDesignSystemContextValue */

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {
};

/**
 * provider that wraps the app at the top level
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
function UtahDesignSystemContextProvider({ children }) {
  const immerHook = /** @type {typeof useImmer<UtahDesignSystemContextValue>} */ (useImmer)(() => ({
    ariaLive: {
      assertiveMessages: [],
      politeMessages: [],
    },
  }));

  return (
    <UtahDesignSystemContext.Provider value={immerHook}>
      {children}
      <AriaLiveMessages ariaLiveType={ariaLiveTypes.ASSERTIVE} messages={immerHook[0].ariaLive.assertiveMessages} />
      <AriaLiveMessages ariaLiveType={ariaLiveTypes.POLITE} messages={immerHook[0].ariaLive.politeMessages} />
    </UtahDesignSystemContext.Provider>
  );
}
UtahDesignSystemContextProvider.propTypes = propTypes;
UtahDesignSystemContextProvider.defaultProps = defaultProps;

export default UtahDesignSystemContextProvider;
