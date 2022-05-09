import { useState } from 'react';
import ColorCircle from './ColorCircle';
import colors from '../color/colors';
import SwatchList from './SwatchList';
import { useCssContext } from '../context/cssContext/CssContext';

function ColorPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const { CSS_VARIABLES_KEYS, setCssVariables } = useCssContext();
  const [selectedCircle, setSelectedCircle] = useState(CSS_VARIABLES_KEYS.PRIMARY_COLOR);

  function setColor(swatch) {
    setCssVariables((oldCssVariables) => (
      {
        ...oldCssVariables,
        [selectedCircle]: swatch,
      }
    ));
  }

  return (
    <div className="popup">
      <div className="popup__title-bar">
        Come and drag me!
        <a
          href="#toggle"
          onClick={() => setIsOpen((oldIsOpen) => !oldIsOpen)}
        >
          {isOpen ? 'v' : '^'}
        </a>
      </div>
      {
        isOpen
          ? (
            <div>
              <div>
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
              <div>
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
