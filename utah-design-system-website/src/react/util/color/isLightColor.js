import tinycolor from 'tinycolor2';

function isLightColor(color) {
  return !tinycolor.isReadable(color, '#ffffff');
}

export default isLightColor;
