import { joinClassNames } from '@utahdts/utah-design-system';
import { useEffect, useMemo, useRef } from 'react';
import tinycolor from 'tinycolor2';
import { useImmer } from 'use-immer';
import { useCssContext } from '../../context/cssContext/useCssContext';
import { CSS_CLASS_NAMES } from '../../enums/cssClassNames';
import { CSS_VARIABLES_KEYS } from '../../enums/cssVariablesKeys';
import { notNull } from '../../util/notNull/notNull';

/**
 * @param {Object} props
 * @param {Object} props.colorFamily
 * @param {string} [props.colorFamily.title]
 * @param {tinycolor.ColorInput[]} props.colorFamily.swatches
 * @param {(selectedColor: tinycolor.ColorInput) => void} props.onColorSelected
 * @returns {JSX.Element}
 */
export function SwatchList({ colorFamily, onColorSelected }) {
  const baseColor = notNull(colorFamily.swatches[4], 'SwatchList: swatches[4]');
  const colorIsLight = !tinycolor.isReadable(baseColor, '#ffffff');

  const { cssState } = useCssContext();

  const [lastSelectedColorPicker, setLastSelectedColorPicker] = useImmer(null);
  const [changedColorKeys, setChangedColorKeys] = useImmer(/** @type {string[]} */([]));
  const bounceColorsTimeoutRef = useRef(NaN);
  useEffect(() => () => clearTimeout(bounceColorsTimeoutRef.current), []);
  useEffect(
    () => {
      if (lastSelectedColorPicker !== cssState.selectedColorPicker) {
        switch (cssState.selectedColorPicker) {
          case CSS_VARIABLES_KEYS.PRIMARY_COLOR:
          case CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK:
          case CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT:
            setChangedColorKeys([CSS_VARIABLES_KEYS.PRIMARY_COLOR, CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK, CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]);
            break;
          case CSS_VARIABLES_KEYS.SECONDARY_COLOR:
          case CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK:
          case CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT:
            setChangedColorKeys(
              [CSS_VARIABLES_KEYS.SECONDARY_COLOR, CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK, CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]
            );
            break;
          case CSS_VARIABLES_KEYS.ACCENT_COLOR:
          case CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK:
          case CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT:
            setChangedColorKeys([CSS_VARIABLES_KEYS.ACCENT_COLOR, CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK, CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]);
            break;
          default:
            throw new Error(`unknown selectedColorPicker: '${cssState.selectedColorPicker}'`);
        }
        clearTimeout(bounceColorsTimeoutRef.current);
        bounceColorsTimeoutRef.current = setTimeout(
          () => {
            setChangedColorKeys([]);
          },
          2000
        );
        setLastSelectedColorPicker(cssState.selectedColorPicker);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lastSelectedColorPicker, cssState.selectedColorPicker, changedColorKeys]
  );

  const selectedColors = useMemo(
    () => ([
      { key: CSS_VARIABLES_KEYS.PRIMARY_COLOR, value: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR] },
      { key: CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK, value: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK] },
      { key: CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT, value: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT] },
      { key: CSS_VARIABLES_KEYS.SECONDARY_COLOR, value: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR] },
      { key: CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK, value: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK] },
      { key: CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT, value: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT] },
      { key: CSS_VARIABLES_KEYS.ACCENT_COLOR, value: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR] },
      { key: CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK, value: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK] },
      { key: CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT, value: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT] },
    ]),
    [cssState]
  );

  return (
    <div className="color-family">
      <button
        className={`color-family__title ${colorIsLight ? CSS_CLASS_NAMES.COLOR_IS_LIGHT : ''}`}
        // @ts-ignore
        style={{ backgroundColor: baseColor }}
        type="button"
        onClick={() => onColorSelected(baseColor)}
      >
        {colorFamily.title}
      </button>
      <ul className="color-family__swatches">
        {
          colorFamily.swatches.map((swatch) => {
            const selectedColor = selectedColors.find((testColor) => testColor.value === swatch);
            const isSelectedGroup = !!selectedColor;
            const isSelected = selectedColor?.key === cssState.selectedColorPicker;
            return (
              <li
                key={`color-family__swatch-${swatch}`}
                className={joinClassNames(
                  isSelectedGroup ? `selected-group selected${selectedColor.key}` : null,
                  isSelected ? 'selected' : null,
                  (selectedColor && changedColorKeys.includes(selectedColor.key)) ? 'newly-selected' : null
                )}
              >
                <button
                  className="color-family__swatch"
                  onClick={() => onColorSelected(swatch)}
                  // @ts-ignore
                  style={{ backgroundColor: swatch }}
                  type="button"
                >
                  <span className="visually-hidden">
                    Pick
                    {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
                    <>{swatch}</>
                  </span>
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
