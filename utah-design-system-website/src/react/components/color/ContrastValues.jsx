import { useMemo } from 'react';
import tinycolor from 'tinycolor2';
import { valueFromRanges } from '../../util/valueFromRanges';
import { COLOR_RATINGS } from './COLOR_RATINGS';
import { ContrastValueBox } from './ContrastValueBox';

/** @typedef {import('utah-design-system-website').ColorInfo} ColorInfo */

/**
 * @param {object} props
 * @param {ColorInfo} props.color1
 * @param {ColorInfo} props.color2
 * @returns {import('react').JSX.Element}
 */
export function ContrastValues({
  color1,
  color2,
}) {
  const contrastInfo = useMemo(
    () => {
      const contrast = Number(tinycolor.readability(color1.hexColor, color2.hexColor).toFixed(2));
      const ratingHigh = valueFromRanges(
        contrast,
        [
          { minValue: 7, returnValue: COLOR_RATINGS.AAA },
          { minValue: 4.5, returnValue: COLOR_RATINGS.AA },
          { minValue: 0, returnValue: COLOR_RATINGS.BAD },
        ],
        COLOR_RATINGS.BAD
      );
      const ratingLow = valueFromRanges(
        contrast,
        [
          { minValue: 4.5, returnValue: COLOR_RATINGS.AAA },
          { minValue: 3, returnValue: COLOR_RATINGS.AA },
          { minValue: 0, returnValue: COLOR_RATINGS.BAD },
        ],
        COLOR_RATINGS.BAD
      );
      return { contrast, ratingHigh, ratingLow };
    },
    [color1, color2]
  );

  return (
    <div className="color-contrast-values__wrapper">
      <ContrastValueBox
        contrastRating={contrastInfo.ratingHigh}
        contrastValue={contrastInfo.contrast}
        title="Normal Text"
      />
      <ContrastValueBox
        contrastRating={contrastInfo.ratingLow}
        contrastValue={contrastInfo.contrast}
        title="Large Text"
      />
      <ContrastValueBox
        contrastRating={contrastInfo.ratingLow}
        contrastValue={contrastInfo.contrast}
        title="Boundaries & Borders"
      />
    </div>
  );
}
