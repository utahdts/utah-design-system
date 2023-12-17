import { Icons } from '@utahdts/utah-design-system';
import tinycolor from 'tinycolor2';
import useCachedValue from '../../hooks/useCachedValue';

const RATINGS = {
  AA: 'AA',
  AAA: 'AAA',
  BAD: 'X',
};

/**
 * @param {object} props
 * @param {string} props.color1
 * @param {string} props.color2
 * @returns {JSX.Element}
 */
export function ColorContrast({
  color1,
  color2,
}) {
  const contrastInfo = useCachedValue(
    'contrastDecimal',
    /** @type {[string, string]} */
    [color1, color2],
    /**
     * @param {[string, string]} param
     * @returns {{contrast: number, rating: string}}
     */
    // @ts-ignore
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
