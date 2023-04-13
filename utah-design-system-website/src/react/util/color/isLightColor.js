import tinycolor from 'tinycolor2';

function isLightColor(color) {
  return !tinycolor.isReadable(color, '#fff');
}

export default isLightColor;
