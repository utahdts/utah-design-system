import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import colors, { colorsIndexes } from '../../color/colors';

const CSS_VARIABLES_KEYS = {
  PRIMARY_COLOR: '--primary-color',
  SECONDARY_COLOR: '--secondary-color',
  ACCENT_COLOR: '--accent-color',
};

// The global context object that tracks the context's state and provides components like the <CssContext.Provider/>
const CssContext = React.createContext();

// This hook provides the context's data; most everything should just use this hook and nothing else
/**
 * @return {cssVariables, CSS_VARIABLES_KEYS, setCssVariables}
 */
export function useCssContext() {
  return useContext(CssContext);
}

export function CssContextProvider({ children }) {
  const [cssVariables, setCssVariables] = useState({
    [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: colors.PURPLE.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: colors.AZUL.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.ACCENT_COLOR]: colors.INDIGO.swatches[colorsIndexes.primeIndex],
  });
  const [cssVariablesValue, setCssVariablesValue] = useState({ cssVariables, CSS_VARIABLES_KEYS, setCssVariables });

  useEffect(
    () => {
      setCssVariablesValue({ cssVariables, CSS_VARIABLES_KEYS, setCssVariables });
    },
    [cssVariables, setCssVariables],
  );

  return (
    <CssContext.Provider value={cssVariablesValue}>
      {children}
    </CssContext.Provider>
  );
}
CssContextProvider.propTypes = { children: PropTypes.node.isRequired };
CssContextProvider.defaultProps = {};
