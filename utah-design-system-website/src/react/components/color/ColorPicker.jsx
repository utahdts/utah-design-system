import {
  IconButton,
  Popup,
  TextInput,
  handleKeyPress,
  joinClassNames,
  useGlobalKeyEvent
} from '@utahdts/utah-design-system';
import { useCallback, useMemo, useRef } from 'react';
import { HexColorPicker } from 'react-colorful';
import tinycolor from 'tinycolor2';
import { useImmer } from 'use-immer';
import { useAppContext } from '../../context/AppContext/useAppContext';
import { isLightColor } from '../../util/color/isLightColor';
import { IconsWebsite } from '../websiteContent/IconsWebsite';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} [props.colorGray]
 * @param {string} props.id
 * @param {boolean} [props.isSelected]
 * @param {string} props.label
 * @param {(newColor: string) => void} props.onChange
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} props.onClick
 * @param {string} props.title
 * @param {string} props.value
 * @returns {import('react').JSX.Element}
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
  const [isColorPickerPopupVisible, setIsColorPickerPopupVisible] = useImmer(false);
  const colorPickerIconRef = useRef(/** @type {HTMLButtonElement | null} */(null));
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
    <div className="color-picker__wrapper">
      <button
        className={joinClassNames(
          'color-picker',
          isSelected && 'selected',
          isLight && 'color-picker--light',
          className
        )}
        onClick={onClick}
        onKeyUp={handleKeyPress('Enter', onClick)}
        type="button"
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
              /** @param {import('react').BaseSyntheticEvent} e */
              (e) => { onChange(e.target.value); },
              [onChange]
            )}
            value={value}
            // @ts-ignore
            maxLength={7}
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

      </button>
      <IconButton
        icon={<IconsWebsite.IconColorize />}
        className="color-picker__eye-dropper"
        innerRef={colorPickerIconRef}
        onClick={(e) => {
          onClick(e);
          setIsColorPickerPopupVisible(true);
        }}
        size="small1x"
        title="Pick Color"
      />
      <Popup
        ariaLabelledBy="Pick Color"
        id={`color-picker-popup__${label}`}
        isVisible={isColorPickerPopupVisible}
        onVisibleChange={(_, isVisible) => setIsColorPickerPopupVisible(isVisible)}
        referenceElement={colorPickerIconRef}
        role="dialog"
      >
        <HexColorPicker color={value} onChange={onChange} />
      </Popup>
    </div>
  );
}
