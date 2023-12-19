import tinycolor from 'tinycolor2';
import { isLightColor } from './isLightColor';

/**
 * Given a color (#123123) and a colorList, find the first color on the list the conforms to the target level: AA or AAA
 * @param {object} obj
 * @param {string} obj.color - The main color to compare with.
 * @param {string[]} obj.colorList - The list of colors to find the first readable color
 * @param {number} [obj.minimumContrast]
 * @returns {string} The color found to match
 */
export function readableColor({ color, colorList, minimumContrast = 4.5 }) {
  const contrasts = colorList.map((testColor) => ({
    color: testColor,
    contrast: tinycolor.readability(color, testColor),
  }));
  contrasts.sort((a, b) => a.contrast - b.contrast);
  let foundColor = contrasts.find(({ contrast }) => contrast >= minimumContrast)?.color;

  if (!foundColor) {
    foundColor = isLightColor(color) ? '#000000' : '#ffffff';
  }

  return foundColor;
}
