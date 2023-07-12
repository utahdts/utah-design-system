// @ts-check
/* eslint-disable no-bitwise */
import padEnd from 'lodash/padEnd';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';

const NULL_COLOR_HEX = '_';

/**
 * @param {object} cssState state from the css context... someday it will be typed
 * @returns {string}
 */
export function colorsToUrlParams(cssState) {
  const hexes = (
    Object.values(CSS_VARIABLES_KEYS)
      .map((colorKey) => /** @type {string | null} */(cssState[colorKey])?.substring(1) || NULL_COLOR_HEX)
      .map((colorHex) => {
        let retVal = colorHex;
        if (retVal !== NULL_COLOR_HEX) {
          if (retVal.length === 3) {
            // ie. expand #e63 to be #ee6633
            retVal = retVal[0] + retVal[0] + retVal[1] + retVal[1] + retVal[2] + retVal[2];
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
 * @returns {Object.<string, string | null>}
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
      const colorKey = colorKeys[colorKeysIndex];
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
