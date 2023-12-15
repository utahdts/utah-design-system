import tinycolor from 'tinycolor2';

/**
 * @param {tinycolor.ColorInput} color
 * @returns {boolean}
 */
export function isLightColor(color) {
  return !tinycolor.isReadable(color, '#ffffff');
}
