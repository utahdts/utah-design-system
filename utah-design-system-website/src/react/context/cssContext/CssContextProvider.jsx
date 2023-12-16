import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import tinycolor from 'tinycolor2';
import { useImmer } from 'use-immer';
import { colorsFromUrlParams } from '../../components/color/colorPickerUrlParams';
import { CSS_STATE_KEYS } from '../../enums/cssStateKeys';
import { CSS_VARIABLES_KEYS } from '../../enums/cssVariablesKeys';
import { localStorageKeys } from '../../enums/localStorageKeys';
import { readableColor } from '../../util/color/readableColor';
import { useAppContext } from '../AppContext/useAppContext';
import { CssContext } from './CssContext';
import { cssContextDefaultColors } from './cssContextDefaultColors';

/** @typedef {import('utah-design-system-website').CssContextState} CssContextState */
/** @typedef {import('utah-design-system-website').CssContextValue} CssContextValue */

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

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export function CssContextProvider({ children }) {
  const colorsInUrl = colorsFromUrlParams(window.location.search);
  const { setAppState } = useAppContext();

  const [currentQueryParameters, setSearchParams] = useSearchParams();
  useEffect(
    () => {
      // remove colors from url; leaving them there causes the colors to be "sticky"
      // ie colors change to the url colors, user resets colors back to default, colors
      // switch back to the colors in the url because they are still there causing the
      // user to have lost their color selection.
      if (currentQueryParameters.get('colors')) {
        // @ts-ignore
        // eslint-disable-next-line no-unused-vars
        const { colors, ...paramsMinusColors } = currentQueryParameters;
        setSearchParams(paramsMinusColors);
        setAppState((draftAppState) => { draftAppState.isColorPickerShown = true; });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentQueryParameters, setSearchParams]
  );

  const [cssState, setCssState] = useImmer(() => {
    const colorsInStorageString = localStorage.getItem(localStorageKeys.COLOR_PICKER_COLORS);
    const colorsInStorage = colorsInStorageString ? JSON.parse(colorsInStorageString) : cssContextDefaultColors;

    /** @type {CssContextState} */
    const defaultState = {
      selectedColorPicker: CSS_VARIABLES_KEYS.PRIMARY_COLOR,
    };

    // storage trumps defaults
    Object.entries(colorsInStorage || {})
      .filter(([, colorValue]) => !!colorValue)
      .forEach(([colorKey, colorValue]) => { defaultState[colorKey] = colorValue; });

    // url trumps storage & default
    Object.entries(colorsInUrl || {})
      .filter(([, colorValue]) => !!colorValue)
      .forEach(([colorKey, colorValue]) => { defaultState[colorKey] = colorValue; });

    return defaultState;
  });

  /** @type {CssContextValue} */
  const cssStateValue = useMemo(
    () => {
      const newColors = {
        ...cssState,
        [CSS_STATE_KEYS.PRIMARY_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR], '#ffffff'),
        [CSS_STATE_KEYS.SECONDARY_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR], '#ffffff'),
        [CSS_STATE_KEYS.ACCENT_COLOR_IS_LIGHT]: !tinycolor.isReadable(cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR], '#ffffff'),
        [CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]: readableColor({
          color: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
          colorList: fallbackGrayColors,
        }),
        [CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]: readableColor({
          color: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
          colorList: fallbackGrayColors,
        }),
        [CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]: readableColor({
          color: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
          colorList: fallbackGrayColors,
        }),
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
