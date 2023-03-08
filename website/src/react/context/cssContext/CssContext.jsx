import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import CSS_STATE_KEYS from '../../enums/cssStateKeys';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import colors, { colorsIndexes } from '../../util/color/colors';
import readableColor from '../../util/color/readableColor';

// The global context object that tracks the context's state and provides components like the <CssContext.Provider/>
const CssContext = React.createContext();

// This hook provides the context's data; most everything should just use this hook and nothing else
/**
 * @return {cssState, setCssState}
 */
export function useCssContext() {
  return useContext(CssContext);
}

const fallbackGrayColors = ['#474747', '#3F3F3F', '#373737', '#2F2F2F', '#272727', '#1F1F1F', '#171717', '#0F0F0F', '#070707'];

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

export function CssContextProvider({ children }) {
  const [cssState, setCssState] = useState({
    [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: colors.AZUL.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: colors.AZUL.swatches[0],
    [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: colors.AZUL.swatches[17],
    [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],

    [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: colors.CELEDON_GREEN.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: colors.CELEDON_GREEN.swatches[1],
    [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: colors.CELEDON_GREEN.swatches[17],
    [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],

    [CSS_VARIABLES_KEYS.ACCENT_COLOR]: colors.ELECTRIC_YELLOW.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: colors.ELECTRIC_YELLOW.swatches[1],
    [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: colors.ELECTRIC_YELLOW.swatches[17],
    [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],

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
      cssState[CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR] = readableColor({ color: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' });
      cssState[CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR] = readableColor({ color: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' });
      cssState[CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR] = readableColor({ color: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' });
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
CssContextProvider.propTypes = propTypes;
CssContextProvider.defaultProps = defaultProps;
