import PropTypes from 'prop-types';
import { useMemo } from 'react';
import tinycolor from 'tinycolor2';
import isLightColor from '../../util/color/isLightColor';

const propTypes = {
  color1: PropTypes.string.isRequired,
  color1Title: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color2Title: PropTypes.string.isRequired,
};
const defaultProps = {};

function ColorContrastBox({
  color1,
  color1Title,
  color2,
  color2Title,
}) {
  const color1IsLight = isLightColor(color1);
  const color1TextColor = color1IsLight ? '#474747' : '#ffffff';
  const color2IsLight = isLightColor(color2);
  const color2TextColor = color2IsLight ? '#474747' : '#ffffff';

  const contrastDecimal = useMemo(
    () => Number(tinycolor.readability(color1, color2).toFixed(2)),
    [color1, color2]
  );

  return (
    <div className="color-picker" style={{ backgroundColor: color1 }}>
      <div className="color-picker__hex-color">
        <span>{color1Title}</span>
        <span className="fixed-width-font">{color1}</span>
      </div>

      <hr />
      <div className="color-picker__contrast fixed-width-font">
        <span className="color-picker__ratio">{contrastDecimal}:1</span>
        <span style={{ background: color1TextColor, color: color2 }}>
          {
            contrastDecimal >= 7
              ? (
                <span className="color-picker__rating" style={{ color: color1 }}>AAA</span>
              )
              : (
                <span className="color-picker__rating" style={{ color: color1 }}>AA</span>
              )
          }
        </span>
      </div>

      <div className="color-picker__foreground" style={{ backgroundColor: color2 }}>
        <div
          className="color-picker__foreground-box"
          style={{ background: color2, color: color2TextColor }}
        />
        <div>{color2Title}</div>
        <div className="fixed-width-font">{color2}</div>
      </div>

    </div>
  );
}

ColorContrastBox.propTypes = propTypes;
ColorContrastBox.defaultProps = defaultProps;

export default ColorContrastBox;
