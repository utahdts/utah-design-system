import { joinClassNames } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef } from 'react';
import tinycolor from 'tinycolor2';
import { useImmer } from 'use-immer';
import useCssContext from '../../context/cssContext/useCssContext';
import CSS_CLASS_NAMES from '../../enums/cssClassNames';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import isLightColor from '../../util/color/isLightColor';

const propTypes = {
  colorFamily: PropTypes.exact({
    title: PropTypes.string.isRequired,
    swatches: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onColorSelected: PropTypes.func.isRequired,
};
const defaultProps = {};

function SwatchList({ colorFamily, onColorSelected }) {
  const baseColor = colorFamily.swatches[4];
  const colorIsLight = !tinycolor.isReadable(baseColor, '#ffffff');

  const { cssState } = useCssContext();

  const [lastSelectedColorPicker, setLastSelectedColorPicker] = useImmer(null);
  const [changedColorKeys, setChangedColorKeys] = useImmer([]);
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
            return (
              <li
                key={`color-family__swatch-${swatch}`}
                className={joinClassNames(
                  selectedColor ? `selected-group selected${selectedColor.key}` : null,
                  (selectedColor?.key === cssState.selectedColorPicker) ? 'selected' : null,
                  (selectedColor && changedColorKeys.includes(selectedColor.key)) ? 'newly-selected' : null
                )}
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
                  {
                    selectedColor
                      ? (
                        <span
                          className={joinClassNames(
                            'utds-icon-before-check',
                            isLightColor(swatch) ? 'is-light' : 'is-dark'
                          )}
                          aria-hidden="true"
                        />
                      )
                      : null
                  }
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

SwatchList.propTypes = propTypes;
SwatchList.defaultProps = defaultProps;

export default SwatchList;
