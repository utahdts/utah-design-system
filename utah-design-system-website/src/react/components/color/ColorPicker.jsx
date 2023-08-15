import {
  TextInput,
  handleKeyPress,
  joinClassNames,
  useGlobalKeyEvent
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import tinycolor from 'tinycolor2';
import useAppContext from '../../context/AppContext/useAppContext';
import isLightColor from '../../util/color/isLightColor';

const propTypes = {
  className: PropTypes.string.isRequired,
  colorGray: PropTypes.string,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
const defaultProps = {
  colorGray: null,
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
  title,
}) {
  const isLight = isLightColor(value);
  const textColor = isLight ? (colorGray || '#474747') : '#ffffff';
  const tinyColorValue = tinycolor(value).toHexString();

  const { setAppState } = useAppContext();
  useGlobalKeyEvent({ whichKeyCode: 'Escape', onKeyUp: () => setAppState((draftAppState) => { draftAppState.isColorPickerShown = false; }) });

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
        className
      )}
      onClick={onClick}
      onKeyUp={handleKeyPress('Enter', onClick)}
      role="button"
      style={{ color: textColor, background: tinyColorValue }}
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
          style={{ borderColor: textColor }}
        />
      </div>

      <hr />
      <div className="color-picker__contrast fixed-width-font" style={{ background: tinyColorValue }}>
        <span className="color-picker__ratio">{contrastDecimal}:1</span>
        <span style={{ background: textColor, color: tinyColorValue }}>
          {
            contrastDecimal >= 7
              ? (
                <span className="color-picker__rating">AAA</span>
              )
              : (
                <span className="color-picker__rating">AA</span>
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
