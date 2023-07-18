import { Icons } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import COLOR_RATINGS from './COLOR_RATINGS';

const propTypes = {
  contrastRating: PropTypes.oneOf(Object.values(COLOR_RATINGS)).isRequired,
  contrastValue: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
const defaultProps = {};

function ContrastValueBox({
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

ContrastValueBox.propTypes = propTypes;
ContrastValueBox.defaultProps = defaultProps;

export default ContrastValueBox;