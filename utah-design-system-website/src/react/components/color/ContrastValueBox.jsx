import { Icons } from '@utahdts/utah-design-system';
import { COLOR_RATINGS } from './COLOR_RATINGS';

/** @typedef {import('utah-design-system-website').ColorRating} ColorRating */

/**
 * @param {Object} props
 * @param {ColorRating} props.contrastRating
 * @param {number} props.contrastValue
 * @param {string} props.title
 * @returns {JSX.Element}
 */
export function ContrastValueBox({
  contrastRating,
  contrastValue,
  title,
}) {
  return (
    <div className="color-contrast-values__contrast-value-box">
      <div className="color-contrast-values__contrast-value-title">
        {title}
      </div>
      <div className="color-contrast-values__contrast-value-rating">
        <div className="color-contrast-values__contrast-value-rating-ratio">
          {contrastValue}:1
        </div>
        <div className="color-contrast-values__contrast-value-rating-wcag">
          {contrastRating === COLOR_RATINGS.BAD
            ? (
              <>
                <Icons.IconDangerous />
                FAIL
              </>
            )
            : contrastRating}
        </div>
      </div>
    </div>
  );
}
