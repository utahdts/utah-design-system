import tinycolor from 'tinycolor2';

/**
 * Given a color (#123) and a colorList, find the first color on the list the conforms to the target level: AA or AAA
 * @param {Object} obj
 * @param {string} obj.color - The main color to compare with.
 * @param {[string]} obj.colorList - The list of colors to find the first readable color
 * @param {('AA' | 'AAA')} obj.targetLevel - The WCAG conformance level you wish the contrast to be
 * @returns {string} The color found to match
 */
function readableColor({ color, colorList, targetLevel = 'AA' }) {
  let foundColor = colorList.find((c) => (tinycolor.isReadable(color, c, { level: targetLevel, size: 'small' })));
  if (!foundColor) {
    const isLight = !tinycolor.isReadable(color, '#fff');
    foundColor = isLight ? '#000' : '#FFF';
  }

  return foundColor;
}

export default readableColor;
