import tinycolor from 'tinycolor2';
import { CSS_CLASS_NAMES } from '../../enums/cssClassNames';
import { isLightColor } from './isLightColor';

/**
 * @param {object} param
 * @param {tinycolor.ColorInput} param.backgroundColor
 * @param {tinycolor.ColorInput} param.foregroundColor
 * @param {number} [param.targetContrast]
 * @returns {string}
 */
export function getBorderClass({ backgroundColor, foregroundColor, targetContrast = 3 }) {
  let returnClassName = '';
  const contrast = tinycolor.readability(backgroundColor, foregroundColor);
  if (contrast < targetContrast) {
    // we need to return a class!
    const isLight = isLightColor(backgroundColor);
    // light background = dark border
    // dark background = light border
    returnClassName = isLight ? CSS_CLASS_NAMES.CONTRAST_BORDER_DARK : CSS_CLASS_NAMES.CONTRAST_BORDER_LIGHT;
  }
  return returnClassName;
}
