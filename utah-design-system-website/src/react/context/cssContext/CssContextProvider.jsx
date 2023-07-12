import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import tinycolor from 'tinycolor2';
import { useImmer } from 'use-immer';
import { colorsFromUrlParams } from '../../components/color/colorPickerUrlParams';
import CSS_STATE_KEYS from '../../enums/cssStateKeys';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import localStorageKeys from '../../enums/localStorageKeys';
import readableColor from '../../util/color/readableColor';
import CssContext from './CssContext';
import cssContextDefaultColors from './cssContextDefaultColors';

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
  const [cssState, setCssState] = useImmer(() => {
    const colorsInStorageString = localStorage.getItem(localStorageKeys.COLOR_PICKER_COLORS);
    const colorsInStorage = colorsInStorageString ? JSON.parse(colorsInStorageString) : cssContextDefaultColors;
    console.log('🚀 ~ file: CssContextProvider.jsx:56 ~ const[cssState,setCssState]=useImmer ~ colorsInStorage:', colorsInStorage);

    const colorsInUrl = colorsFromUrlParams(window.location.search);
    console.log('🚀 ~ file: CssContextProvider.jsx:59 ~ const[cssState,setCssState]=useImmer ~ colorsInUrl:', colorsInUrl);

    const defaultState = {
      selectedColorPicker: CSS_VARIABLES_KEYS.PRIMARY_COLOR,
    };

    Object.entries(colorsInStorage)
      .filter(([, colorValue]) => !!colorValue)
      .forEach(([colorKey, colorValue]) => { defaultState[colorKey] = colorValue; });

    Object.entries(colorsInUrl)
      .filter(([, colorValue]) => !!colorValue)
      .forEach(([colorKey, colorValue]) => { defaultState[colorKey] = colorValue; });

    return defaultState;
  });

  const cssStateValue = useMemo(
    () => {
      const newColors = {
        [CSS_STATE_KEYS.PRIMARY_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], '#ffffff'),
        [CSS_STATE_KEYS.SECONDARY_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR], '#ffffff'),
        [CSS_STATE_KEYS.ACCENT_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR], '#ffffff'),
        [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: readableColor({ color: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' }),
        [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: readableColor({ color: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' }),
        [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: readableColor({ color: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR], colorList: fallbackGrayColors, targetLevel: 'AA' }),
        ...cssState,
      };
      localStorage.setItem(localStorageKeys.COLOR_PICKER_COLORS, JSON.stringify(newColors));
      return {
        cssState: {
          ...cssState,
          ...newColors,
        },
        setCssState,
      };
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
