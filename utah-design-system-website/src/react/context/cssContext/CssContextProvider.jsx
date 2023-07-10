import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import tinycolor from 'tinycolor2';
import { useImmer } from 'use-immer';
import CSS_STATE_KEYS from '../../enums/cssStateKeys';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import colors, { colorsIndexes } from '../../util/color/colors';
import readableColor from '../../util/color/readableColor';
import CssContext from './CssContext';

const fallbackGrayColors = [
  // '#ffffff',
  // '#f7f7f7',
  // '#efefef',
  // '#e7e7e7',
  // '#dfdfdf',
  // '#d7d7d7',
  // '#cfcfcf',
  // '#c7c7c7',
  // '#bfbfbf',
  // '#b7b7b7',
  // '#afafaf',
  // '#a7a7a7',
  // '#9f9f9f',
  // '#979797',
  // '#8f8f8f',
  // '#878787',
  // '#7f7f7f',
  // '#777767',
  // '#6f6f6f',
  // '#676767',
  // '#5f5f5f',
  // '#575757',
  // '#4f4f4f',
  '#474747',
  '#3f3f3f',
  '#373737',
  '#2f2f2f',
  '#272727',
  '#1f1f1f',
  '#171717',
  '#0f0f0f',
  '#070707',
  // '#000000',
];

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

function CssContextProvider({ children }) {
  const [cssState, setCssState] = useImmer({
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

    selectedColorPicker: CSS_VARIABLES_KEYS.PRIMARY_COLOR,
  });
  const [cssStateValue, setCssStateValue] = useImmer({ cssState, setCssState });

  useEffect(
    () => {
      setCssStateValue({
        cssState: {
          ...cssState,
          [CSS_STATE_KEYS.PRIMARY_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], '#ffffff'),
          [CSS_STATE_KEYS.SECONDARY_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR], '#ffffff'),
          [CSS_STATE_KEYS.ACCENT_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR], '#ffffff'),
          [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: readableColor({ color: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' }),
          [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: readableColor({ color: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' }),
          [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: readableColor({ color: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' }),
        },
        setCssState,
      });
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
