import { Icons } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import useCachedValue from '../../hooks/useCachedValue';

const propTypes = {
  color1: PropTypes.string.isRequired,
  color1Title: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color2Title: PropTypes.string.isRequired,
};
const defaultProps = {};

const RATINGS = {
  AA: 'AA',
  AAA: 'AAA',
  BAD: 'X',
};

/**
 * @param {object} props
 * @param {string} props.color1
 * @param {string} props.color1Title
 * @param {string} props.color2
 * @param {string} props.color2Title
 * @returns {JSX.Element}
 */
function ColorContrast({
  color1,
  // eslint-disable-next-line no-unused-vars
  color1Title,
  color2,
  // eslint-disable-next-line no-unused-vars
  color2Title,
}) {
  const contrastInfo = useCachedValue(
    'contrastDecimal',
    [color1, color2],
    ([colorA, colorB]) => {
      const contrast = Number(tinycolor.readability(colorA, colorB).toFixed(2));
      let rating;
      if (contrast >= 7) {
        rating = RATINGS.AAA;
      } else if (contrast >= 4) {
        rating = RATINGS.AA;
      } else {
        rating = RATINGS.BAD;
      }
      return { contrast, rating };
    }
  );

  return (
    <div className="color-contrast__contrast">
      {/* <div className="color-contrast__color-titles">
        <div className="color-contrast__color-title">{color1Title}</div>
        <div className="color-contrast__color-title">&nbsp;|&nbsp;</div>
        <div className="color-contrast__color-title">{color2Title}</div>
      </div> */}
      <div className="color-contrast__text-contrast">
        <div className="color-contrast__text-container">
          <div className="color-contrast__filled" style={{ backgroundColor: color1, borderColor: color1, color: color2 }}>Sample</div>
          <div className="color-contrast__outline" style={{ backgroundColor: color2, color: color1, borderColor: color1 }}>Text</div>
        </div>
        <div className="color-contrast__contrast-container">
          <div className="color-contrast__contrast">{contrastInfo.contrast}:1</div>
          <div className="color-contrast__rating">
            {contrastInfo.rating === RATINGS.BAD ? <Icons.IconChevron /> : contrastInfo.rating}
          </div>
        </div>
      </div>
    </div>
  );
}

ColorContrast.propTypes = propTypes;
ColorContrast.defaultProps = defaultProps;

export default ColorContrast;
