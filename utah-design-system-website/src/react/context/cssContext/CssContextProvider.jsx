import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import CSS_STATE_KEYS from '../../enums/cssStateKeys';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import colors, { colorsIndexes } from '../../util/color/colors';
import readableColor from '../../util/color/readableColor';
import CssContext from './CssContext';

const fallbackGrayColors = ['#474747', '#3F3F3F', '#373737', '#2F2F2F', '#272727', '#1F1F1F', '#171717', '#0F0F0F', '#070707'];

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

function CssContextProvider({ children }) {
  const [cssState, setCssState] = useState({
    // default --primary-color for website
    [CSS_VARIABLES_KEYS.PRIMARY_COLOR]: colors.CELTIC.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]: colors.CELTIC.swatches[0],
    [CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]: colors.CELTIC.swatches[17],
    [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],

    [CSS_VARIABLES_KEYS.SECONDARY_COLOR]: colors.CELEDON_BLUE.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]: colors.CELEDON_BLUE.swatches[1],
    [CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]: colors.CELEDON_BLUE.swatches[17],
    [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],

    [CSS_VARIABLES_KEYS.ACCENT_COLOR]: colors.ELECTRIC_YELLOW.swatches[colorsIndexes.primeIndex],
    [CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]: colors.ELECTRIC_YELLOW.swatches[1],
    [CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]: colors.ELECTRIC_YELLOW.swatches[17],
    [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: colors.NEUTRAL_GRAY.swatches[colorsIndexes.primeIndex],

    [CSS_STATE_KEYS.PRIMARY_COLOR_IS_LIGHT]: false,
    [CSS_STATE_KEYS.SECONDARY_COLOR_IS_LIGHT]: false,
    [CSS_STATE_KEYS.ACCENT_COLOR_IS_LIGHT]: true,
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

export default CssContextProvider;
