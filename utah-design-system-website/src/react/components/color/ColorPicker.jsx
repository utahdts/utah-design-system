import {
  TextInput,
  handleKeyPress,
  joinClassNames,
  useGlobalKeyEvent
} from '@utahdts/utah-design-system';
import { useCallback, useMemo } from 'react';
import tinycolor from 'tinycolor2';
import { useAppContext } from '../../context/AppContext/useAppContext';
import { isLightColor } from '../../util/color/isLightColor';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} [props.colorGray]
 * @param {string} props.id
 * @param {boolean} [props.isSelected]
 * @param {string} props.label
 * @param {(newColor: string) => void} props.onChange
 * @param {React.MouseEventHandler<HTMLDivElement>} props.onClick
 * @param {string} props.title
 * @param {string} props.value
 * @returns {React.JSX.Element}
 */
export function ColorPicker({
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
      tabIndex={0}
    >
      <div className="color-picker__hex-color">
        <span>{title}</span>
        <TextInput
          className="color-picker__hex-color-input fixed-width-font"
          id={id}
          label={label}
          labelClassName="visually-hidden"
          onChange={useCallback(
            /** @param {React.BaseSyntheticEvent} e */
            (e) => { onChange(e.target.value); },
            [onChange]
          )}
          value={value}
          // @ts-ignore
          style={{ borderColor: textColor }}
        />
      </div>

      <hr />
      <div className="color-picker__contrast fixed-width-font" style={{ background: tinyColorValue }}>
        <span className="color-picker__ratio">{contrastDecimal}:1</span>
        <span style={{ background: textColor, color: tinyColorValue }}>
          {
            Number(contrastDecimal) >= 7
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
