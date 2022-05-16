import { useState } from 'react';
import ColorCircle from './ColorCircle';
import colors from '../color/colors';
import SwatchList from './SwatchList';
import { useCssContext } from '../context/cssContext/CssContext';
import CSS_VARIABLES_KEYS from '../enums/cssVariablesKeys';

function ColorPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const { setCssState } = useCssContext();
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
      <div className="popup__title-bar">
        <div className="popup__title">Color Picker</div>
        <button
          onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
          className="icon-button icon-button--plain"
          type="button"
        >
          <span className={`material-symbols-outlined icon-button__icon ${isOpen ? '' : 'icon-button__icon--rotate180'}`}>expand_circle_down</span>
        </button>
      </div>
      {
        isOpen
          ? (
            <div className="color-picker">
              <div className="color-picker__selectors">
                <ColorCircle
                  className="primary-color-background"
                  isSelected={selectedCircle === CSS_VARIABLES_KEYS.PRIMARY_COLOR}
                  onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.PRIMARY_COLOR)}
                >
                  Primary
                  <br />
                  60
                </ColorCircle>
                <ColorCircle
                  className="secondary-color-background"
                  isSelected={selectedCircle === CSS_VARIABLES_KEYS.SECONDARY_COLOR}
                  onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.SECONDARY_COLOR)}
                >
                  Secondary
                  <br />
                  30
                </ColorCircle>
                <ColorCircle
                  className="accent-color-background"
                  isSelected={selectedCircle === CSS_VARIABLES_KEYS.ACCENT_COLOR}
                  onClick={() => setSelectedCircle(CSS_VARIABLES_KEYS.ACCENT_COLOR)}
                >
                  Accent
                  <br />
                  10
                </ColorCircle>
              </div>
              <div className="color-picker__swatches">
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
