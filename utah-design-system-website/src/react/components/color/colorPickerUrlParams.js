import { padEnd } from 'lodash-es';
import { CSS_VARIABLES_KEYS } from '../../enums/cssVariablesKeys';
import { notNull } from '../../util/notNull/notNull';

const NULL_COLOR_HEX = '_';

/**
 * @param {object} cssState state from the css context... someday it will be typed
 * @returns {string}
 */
export function colorsToCSS(cssState) {
  /*
  Desired Format:
  `.utah-design-system {
    --primary-color: #3c7b24;
    --primary-color-dark: #2e4326;
    --primary-color-light: #e1eadd;

    --secondary-color: #0e80a7;
    --secondary-color-dark: #205162;
    --secondary-color-light: #edf5f8;

    --accent-color: #ffb100;
    --accent-color-dark: #745a1e;
    --accent-color-light: #fff9ec;
  }`

  cssState object from react state:
  {
    "selectedColorPicker": "--primary-color-dark",
    "--primary-color": "#126dc4",
    "--primary-color-dark": "#1c2e40",
    "--primary-color-light": "#eef4fa",
    "--gray-on-primary-color": "#ffffff",
    "--secondary-color": "#0e80a7",
    "--secondary-color-dark": "#205162",
    "--secondary-color-light": "#edf5f8",
    "--gray-on-secondary-color": "#ffffff",
    "--accent-color": "#ffb100",
    "--accent-color-dark": "#745a1e",
    "--accent-color-light": "#fff9ec",
    "--gray-on-accent-color": "#474747",
    "accent-color-is-light": true,
    "primary-color-is-light": false,
    "secondary-color-is-light": false
}
  */
  return [
    '.utah-design-system {',
    Object.entries(cssState)
      .filter(([key]) => /^--(primary|secondary|accent)/.exec(key))
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n'),
    '}',
  ].join('\n');
}

/**
 * @param {object} cssState state from the css context... someday it will be typed
 * @returns {string}
 */
export function colorsToUrlParams(cssState) {
  const hexes = (
    Object.values(CSS_VARIABLES_KEYS)
      // @ts-expect-error colorKey is valid here
      .map((colorKey) => /** @type {string | null} */(cssState[colorKey])?.substring(1) || NULL_COLOR_HEX)
      .map((colorHex) => {
        let retVal = colorHex;
        if (retVal !== NULL_COLOR_HEX) {
          if (retVal.length === 3) {
            // ie. expand #e63 to be #ee6633
            retVal = (retVal[0] ?? '') + (retVal[0] ?? '') + retVal[1] + retVal[1] + retVal[2] + retVal[2];
          } else {
            retVal = padEnd(retVal, 6, '0').substring(0, 6);
          }
        }
        return retVal;
      })
  );
  const hexesString = hexes.join('');
  return `colors=v1${hexesString}`;
}

/**
 * given a url param, pull out color information
 * @param {string} windowLocationSearch the result of window.location.search (doesn't do it itself so can be passed in for testing)
 * @returns {Record<string, string | null>}
 */
export function colorsFromUrlParams(windowLocationSearch) {
  const resultColors = Object.fromEntries(Object.entries(CSS_VARIABLES_KEYS).map(([, colorKey]) => [colorKey, /** @type {string | null} */ (null)]));

  const urlParams = new URLSearchParams(windowLocationSearch);
  const colorsParam = urlParams.get('colors') || '';
  const version = colorsParam.substring(0, 2);
  const colorsHexes = colorsParam.substring(2);

  if (version === 'v1') {
    const colorKeys = Object.values(CSS_VARIABLES_KEYS);
    for (
      let colorKeysIndex = 0, colorsParamIndex = 0;
      colorKeysIndex < colorKeys?.length && colorsParamIndex < colorsHexes.length;
      colorKeysIndex += 1
    ) {
      const colorKey = notNull(colorKeys[colorKeysIndex], 'colorPickerUrlParams: colorKeysIndex not found');
      if (colorsHexes[colorsParamIndex] === NULL_COLOR_HEX) {
        resultColors[colorKey] = null;
        colorsParamIndex += 1;
      } else {
        resultColors[colorKey] = `#${colorsHexes.substring(colorsParamIndex, colorsParamIndex + 6)}`;
        colorsParamIndex += 6;
      }
    }
  } else if (colorsHexes) {
    // eslint-disable-next-line no-console
    console.error(`Invalid version for colors: '${version}'`);
  }
  // else { no parameter, so no values, so return empty colors }

  return resultColors;
}
