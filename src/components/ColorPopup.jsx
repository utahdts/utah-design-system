import { useState } from 'react';
import ColorCircle from './ColorCircle';
import colors from '../color/colors';
import SwatchList from './SwatchList';

function ColorPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCircle, setSelectedCircle] = useState(null);

  function setColor(swatch) {
    document.documentElement.style.setProperty(`--${selectedCircle}-color`, swatch);
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
                  isSelected={selectedCircle === 'primary'}
                  onClick={() => setSelectedCircle('primary')}
                >
                  Primary
                  <br />
                  60
                </ColorCircle>
                <ColorCircle
                  className="secondary-color-background"
                  isSelected={selectedCircle === 'secondary'}
                  onClick={() => setSelectedCircle('secondary')}
                >
                  Secondary
                  <br />
                  30
                </ColorCircle>
                <ColorCircle
                  className="accent-color-background"
                  isSelected={selectedCircle === 'accent'}
                  onClick={() => setSelectedCircle('accent')}
                >
                  Accent
                  <br />
                  10
                </ColorCircle>
              </div>
              <div>
                {
                  colors.map((color) => (
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
