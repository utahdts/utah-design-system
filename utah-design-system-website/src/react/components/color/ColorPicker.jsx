import {
  TextInput,
  handleKeyPress,
  joinClassNames
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import tinycolor from 'tinycolor2';
import isLightColor from '../../util/color/isLightColor';

const propTypes = {
  className: PropTypes.string.isRequired,
  colorGray: PropTypes.string,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isLarge: PropTypes.bool,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
const defaultProps = {
  colorGray: null,
  isLarge: false,
  isSelected: false,
};

function ColorPicker({
  className,
  value,
  colorGray,
  id,
  isSelected,
  label,
  onChange,
  onClick,
  isLarge,
  title,
}) {
  const isLight = isLightColor(value);
  const textColor = isLight ? (colorGray || '#474747') : '#ffffff';

  const contrastDecimal = useMemo(
    () => (
      Number(tinycolor.readability(value, isLight ? (colorGray || '#474747') : '#ffffff')).toFixed(2)
    ),
    [value, isLight, colorGray]
  );

  return (
    <div
      className={joinClassNames(
        'color-picker',
        isSelected && 'selected',
        isLight && 'color-picker--light',
        className,
        isLarge ? null : 'color-picker--small'
      )}
      onClick={onClick}
      onKeyUp={handleKeyPress('Enter', onClick)}
      role="button"
      style={{ color: textColor }}
      tabIndex="0"
    >
      <div className="color-picker__hex-color">
        <span>{title}</span>
        <TextInput
          className="color-picker__hex-color-input fixed-width-font"
          id={id}
          label={label}
          labelClassName="visually-hidden"
          onChange={useCallback(
            (e) => { onChange(e.target.value); },
            [onChange]
          )}
          value={value}
        />
      </div>

      <hr />
      <div className={`color-picker__contrast fixed-width-font ${className}`}>
        <span className="color-picker__ratio">{contrastDecimal}:1</span>
        <span style={{ background: textColor, color: !isLight ? '#474747' : 'white' }}>
          {
            contrastDecimal >= 7
              ? (
                <span className="color-picker__rating" style={{ color: value }}>AAA</span>
              )
              : (
                <span className="color-picker__rating" style={{ color: value }}>AA</span>
              )
          }
        </span>
      </div>
      <div className="color-picker__foreground">
        <div
          className="color-picker__foreground-box"
          style={{ background: textColor }}
        />
        <div>Text</div>
        <div className="fixed-width-font">{textColor}</div>
      </div>

    </div>
  );
}

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;

export default ColorPicker;
