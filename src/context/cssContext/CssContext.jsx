import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import colors, { colorsIndexes } from '../../color/colors';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import CSS_STATE_KEYS from '../../enums/cssStateKeys';

// The global context object that tracks the context's state and provides components like the <CssContext.Provider/>
const CssContext = React.createContext();

// This hook provides the context's data; most everything should just use this hook and nothing else
/**
 * @return {cssState, setCssState}
 */
export function useCssContext() {
  return useContext(CssContext);
}

export function CssContextProvider({ children }) {
  const [cssState, setCssState] = useState({
    [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: colors.PURPLE.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: colors.AZUL.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.ACCENT_COLOR]: colors.INDIGO.swatches[colorsIndexes.primeIndex],
    [CSS_STATE_KEYS.PRIMARY_COLOR_IS_LIGHT]: false,
    [CSS_STATE_KEYS.SECONDARY_COLOR_IS_LIGHT]: false,
    [CSS_STATE_KEYS.ACCENT_COLOR_IS_LIGHT]: false,
  });
  const [cssStateValue, setCssStateValue] = useState({ cssState, setCssState });

  useEffect(
    () => {
      cssState[CSS_STATE_KEYS.PRIMARY_COLOR_IS_LIGHT] = !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], '#fff');
      cssState[CSS_STATE_KEYS.SECONDARY_COLOR_IS_LIGHT] = !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR], '#fff');
      cssState[CSS_STATE_KEYS.ACCENT_COLOR_IS_LIGHT] = !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR], '#fff');
      setCssStateValue({ cssState, setCssState });
    },
    [cssState, setCssState]
  );

  return (
    <CssContext.Provider value={cssStateValue}>
      {children}
    </CssContext.Provider>
  );
}
CssContextProvider.propTypes = { children: PropTypes.node.isRequired };
CssContextProvider.defaultProps = {};
