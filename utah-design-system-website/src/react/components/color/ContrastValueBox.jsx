import { COLOR_RATINGS } from './COLOR_RATINGS';

/** @typedef {import('utah-design-system-website').ColorRating} ColorRating */

/**
 * @param {object} props
 * @param {ColorRating} props.contrastRating
 * @param {number} props.contrastValue
 * @param {string} props.title
 * @returns {import('react').JSX.Element}
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
                <span className="utds-icon-before-error" aria-hidden="true" />
                FAIL
              </>
            )
            : contrastRating}
        </div>
      </div>
    </div>
  );
}
