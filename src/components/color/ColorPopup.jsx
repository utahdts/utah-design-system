import { useState } from 'react';
import ColorPicker from './ColorPicker';
import colors from '../../color/colors';
import SwatchList from './SwatchList';
import { useCssContext } from '../../context/cssContext/CssContext';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import ColorCompare from './ColorCompare';

function ColorPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const { cssState, setCssState } = useCssContext();
  const [selectedCircle, setSelectedCircle] = useState(CSS_VARIABLES_KEYS.PRIMARY_COLOR);
  function setColor(swatch) {
    setCssState((oldCssVariables) => (
      {
        ...oldCssVariables,
        [selectedCircle]: swatch,
      }
    ));
  }

  return (
    <div className="popup">
      <div
        className="popup__title-bar"
      >
        <div className="popup__title">Color Picker</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen((oldIsOpen) => !oldIsOpen);
          }}
          className="icon-button icon-button--plain mr-spacing"
          type="button"
        >
          <span className={`material-symbols-outlined icon-button__icon ${isOpen ? '' : 'icon-button__icon--rotate180'}`}>expand_circle_down</span>
        </button>
      </div>
      {
        isOpen
          ? (
            <div className="color-pickers__wrapper">
              <div className="color-pickers__selectors">
                <div className="color-pickers__group">
                  <ColorPicker
                    className="primary-color-background"
                    isSelected={selectedCircle === CSS_VARIABLES_KEYS.PRIMARY_COLOR}
                    onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.PRIMARY_COLOR)}
                    color={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]}
                    colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]}
                  >
                    Primary
                    <br />
                    60
                  </ColorPicker>
                  <div className="color-pickers__light-dark">
                    <ColorPicker
                      className="primary-color-dark-background color-picker--small"
                      isSelected={selectedCircle === CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK}
                      onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK)}
                      color={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]}
                    >
                      Dark
                    </ColorPicker>
                    <ColorPicker
                      className="primary-color-light-background color-picker--small"
                      isSelected={selectedCircle === CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT}
                      onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT)}
                      color={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]}
                    >
                      Light
                    </ColorPicker>
                  </div>
                  <div className="color-pickers__compare-colors">
                    <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]} />
                    <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]} />
                  </div>
                </div>

                <div className="color-pickers__group">
                  <ColorPicker
                    className="secondary-color-background"
                    isSelected={selectedCircle === CSS_VARIABLES_KEYS.SECONDARY_COLOR}
                    onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.SECONDARY_COLOR)}
                    color={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]}
                    colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]}
                  >
                    Secondary
                    <br />
                    30
                  </ColorPicker>
                  <div className="color-pickers__light-dark">
                    <ColorPicker
                      className="secondary-color-dark-background color-picker--small"
                      isSelected={selectedCircle === CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK}
                      onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK)}
                      color={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]}
                    >
                      Dark
                    </ColorPicker>

                    <ColorPicker
                      className="secondary-color-light-background color-picker--small"
                      isSelected={selectedCircle === CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT}
                      onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT)}
                      color={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]}
                    >
                      Light
                    </ColorPicker>
                  </div>
                  <div className="color-pickers__compare-colors">
                    <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]} />
                    <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]} />
                  </div>
                </div>

                <div className="color-pickers__group">
                  <ColorPicker
                    className="accent-color-background"
                    isSelected={selectedCircle === CSS_VARIABLES_KEYS.ACCENT_COLOR}
                    onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.ACCENT_COLOR)}
                    color={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]}
                    colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]}
                  >
                    Accent
                    <br />
                    10
                  </ColorPicker>
                  <div className="color-pickers__light-dark">
                    <ColorPicker
                      className="accent-color-dark-background color-picker--small"
                      isSelected={selectedCircle === CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK}
                      onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK)}
                      color={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]}
                    >
                      Dark
                    </ColorPicker>

                    <ColorPicker
                      className="accent-color-light-background color-picker--small"
                      isSelected={selectedCircle === CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT}
                      onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT)}
                      color={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]}
                    >
                      Light
                    </ColorPicker>
                  </div>

                  <div className="color-pickers__compare-colors">
                    <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]} />
                    <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]} />
                  </div>
                </div>

              </div>
              <div className="color-pickers__swatches">
                {
                  Object.values(colors).map((color) => (
                    <SwatchList
                      colorFamily={color}
                      key={`swatch-list-color-${color.title}`}
                      onColorSelected={(swatch) => setColor(swatch)}
                      selectedColor={null}
                    />
                  ))
                }
              </div>
            </div>
          )
          : undefined
      }
    </div>
  );
}

export default ColorPopup;
