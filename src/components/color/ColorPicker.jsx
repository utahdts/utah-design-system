import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import isLightColor from '../../color/isLightColor';
import handleKeyPress from '../../util/handleKeyPress';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  colorGray: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
const defaultProps = {
  // todo: no magic number!
  colorGray: null,
  isSelected: false,
};

function ColorPicker({
  children,
  className,
  color,
  colorGray,
  isSelected,
  onClick,
}) {
  const isLight = isLightColor(color);
  return (
    <div
      className={joinClassNames(['color-picker', isSelected && 'selected', isLight && 'color-picker--light', className])}
      onClick={onClick}
      onKeyUp={handleKeyPress('Enter', onClick)}
      role="button"
      tabIndex="0"
    >
      {children}
      <div className="color-picker__hex-color">{color}</div>
      <div className="color-picker__contrast">
        {Number(tinycolor.readability(color, isLight ? (colorGray || '#474747') : '#fff')).toFixed(2)}
        :1
      </div>
      {colorGray && isLight
        ? <div className="color-picker__hex-color-gray" style={{ background: `${colorGray}` }}>{colorGray}</div>
        : null }
    </div>
  );
}

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;

export default ColorPicker;
