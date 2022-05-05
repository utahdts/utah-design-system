import PropTypes from 'prop-types';

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
  return (
    <div className="color-family">
      <div className="color-family__title">
        {colorFamily.title}
      </div>
      <ul className="color-family__swatches">
        {
          colorFamily.swatches.map((swatch) => (
            <li
              key={`color-family__swatch-${swatch}`}
              className={selectedColor === swatch && 'selected'}
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
