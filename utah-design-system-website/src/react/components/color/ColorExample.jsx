import PropTypes from 'prop-types';

/** @typedef {import('../../../typedefs.d').ColorInfo} ColorInfo */

const ColorInfoShape = PropTypes.shape({
  hexColor: PropTypes.string.isRequired,
  isLight: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
});

const propTypes = {
  color1: ColorInfoShape.isRequired,
  color2: ColorInfoShape.isRequired,
};
const defaultProps = {};

/**
 * @param {object} props
 * @param {ColorInfo} props.color1
 * @param {ColorInfo} props.color2
 * @returns {JSX.Element}
 */
function ColorExample({
  color1,
  color2,
}) {
  return (
    <div className="color-example__wrapper">
      <div
        className="color-example__box"
        style={{
          background: color2.hexColor,
          color: color1.hexColor,
        }}
      >
        <div className="color-example__normal-text">
          Normal Text
        </div>
        <div className="color-example__bold-text">
          Normal Bold Text
        </div>
      </div>
      <div
        className="color-example__box"
        style={{
          background: color2.hexColor,
          color: color1.hexColor,
        }}
      >
        <div className="color-example__large-bold-text">
          Large Bold Text
        </div>
        <div className="color-example__large-text">
          Large Text
        </div>
      </div>
      <div
        className="color-example__box"
        style={{
          background: color2.hexColor,
          color: color1.hexColor,
        }}
      >
        <button
          type="button"
          style={{
            borderColor: color1.hexColor,
            background: color2.hexColor,
          }}
        >
          <span style={{ color: 'transparent' }}>
            Button
          </span>
        </button>
      </div>
    </div>
  );
}

ColorExample.propTypes = propTypes;
ColorExample.defaultProps = defaultProps;

export default ColorExample;
