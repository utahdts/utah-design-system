import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import CSS_CLASS_NAMES from '../enums/cssClassNames';

const propTypes = {
  colorFamily: PropTypes.shape({
    title: PropTypes.string.isRequired,
    swatches: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onColorSelected: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
};
const defaultProps = {
  selectedColor: null,
};

function SwatchList({ colorFamily, onColorSelected, selectedColor }) {
  const baseColor = colorFamily.swatches[4];
  const colorIsLight = !tinycolor.isReadable(baseColor, '#fff');
  return (
    <div className="color-family">
      <button
        className={`color-family__title ${colorIsLight ? CSS_CLASS_NAMES.COLOR_IS_LIGHT : ''}`}
        style={{ backgroundColor: baseColor }}
        type="button"
        onClick={() => onColorSelected(baseColor)}
      >
        {colorFamily.title}
      </button>
      <ul className="color-family__swatches">
        {
          colorFamily.swatches.map((swatch) => (
            <li
              key={`color-family__swatch-${swatch}`}
              className={selectedColor === swatch ? 'selected' : null}
            >
              <button
                className="color-family__swatch"
                onClick={() => onColorSelected(swatch)}
                style={{ backgroundColor: swatch }}
                type="button"
              >
                <span className="visually-hidden">
                  Pick
                  {swatch}
                </span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

SwatchList.propTypes = propTypes;
SwatchList.defaultProps = defaultProps;

export default SwatchList;
