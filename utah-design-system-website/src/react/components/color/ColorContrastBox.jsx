import { Icons, joinClassNames } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import tinycolor from 'tinycolor2';

const propTypes = {
  color1: PropTypes.string.isRequired,
  color1IsLight: PropTypes.bool.isRequired,
  color1ShowHex: PropTypes.bool.isRequired,
  color1Title: PropTypes.string.isRequired,

  color2: PropTypes.string.isRequired,
  color2IsLight: PropTypes.bool.isRequired,
  color2ShowHex: PropTypes.bool.isRequired,
  color2Title: PropTypes.string.isRequired,
};
const defaultProps = {};

const RATINGS = {
  AA: 'AA',
  AAA: 'AAA',
  BAD: 'X',
};

function ColorContrastBox({
  color1,
  color1IsLight,
  color1ShowHex,
  color1Title,
  color2,
  color2IsLight,
  color2ShowHex,
  color2Title,
}) {
  const contrastInfo = useMemo(
    () => {
      const contrast = Number(tinycolor.readability(color1, color2).toFixed(2));
      let rating;
      if (contrast >= 7) {
        rating = RATINGS.AAA;
      } else if (contrast >= 4) {
        rating = RATINGS.AA;
      } else {
        rating = RATINGS.BAD;
      }
      return { contrast, rating };
    },
    [color1, color2]
  );

  return (
    <div className="color-contrast-box">
      <div
        className={joinClassNames('color-contrast-box__background', color1IsLight && 'color-is-light')}
        style={{ backgroundColor: color1 }}
      >
        <div className="color-contrast-box__hex-color">
          <span>{color1Title}</span>
          {color1ShowHex ? <span className="fixed-width-font">{color1}</span> : null}
        </div>
      </div>

      <div className="color-contrast-box__contrast">
        <hr />
        <div className="color-contrast-box__contrast fixed-width-font">
          <span className="color-contrast-box__ratio">{contrastInfo.contrast}:1</span>
          <span style={{ background: '#474747', color: color2 }}>
            {contrastInfo.rating === RATINGS.BAD ? Icons.IconChevron() : contrastInfo.rating}
          </span>
        </div>
      </div>

      <div className={joinClassNames('color-contrast-box__foreground', color2IsLight && 'color-is-light')} style={{ backgroundColor: color2 }}>
        <span>{color2Title}</span>
        {color2ShowHex ? <span className="fixed-width-font">{color2}</span> : null}
      </div>
    </div>
  );
}

ColorContrastBox.propTypes = propTypes;
ColorContrastBox.defaultProps = defaultProps;

export default ColorContrastBox;
