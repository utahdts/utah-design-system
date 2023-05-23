import {
  ICON_BUTTON_APPEARANCE,
  IconButton,
  handleEvent,
  rectContainsPoint,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useCssContext } from '../../context/cssContext/CssContext';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import useMousePositionTracker from '../../hooks/useMousePositionTracker';
import colors from '../../util/color/colors';
import ColorCompare from './ColorCompare';
import ColorPicker from './ColorPicker';
import SwatchList from './SwatchList';

const propTypes = {
  onClose: PropTypes.func,
};
const defaultProps = {
  onClose: null,
};

/**
 * @param {object} props
 * @param {(): {} | null} props.onClose
 * @returns {JSX.Element}
 */
function ColorPopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const { cssState, setCssState } = useCssContext();
  const [selectedCircle, setSelectedCircle] = useState(CSS_VARIABLES_KEYS.PRIMARY_COLOR);
  const [mousePositionOffset, setMousePositionOffset] = useState({ x: 0, y: 0 });
  const draggableDivRef = useRef(null);

  const { mousePosition } = useMousePositionTracker({
    shouldBeginDrag: (e) => {
      const mousePoint = ({ x: e.clientX, y: e.clientY });
      const isMousedownInsideDiv = rectContainsPoint(draggableDivRef.current.getBoundingClientRect(), mousePoint);

      if (isMousedownInsideDiv) {
        // pick offset between top left and click position so that when mouse moves, it maintains that offset
        setMousePositionOffset({
          x: mousePoint.x - draggableDivRef.current.getBoundingClientRect().left,
          y: mousePoint.y - draggableDivRef.current.getBoundingClientRect().top,
        });
      }

      return isMousedownInsideDiv;
    },
  });

  // remember last known mouse position so popup stays in place after drag finishes
  const mousePositionRef = useRef(mousePosition);
  mousePositionRef.current = mousePosition || mousePositionRef.current;

  function setColor(swatch) {
    setCssState((oldCssVariables) => (
      {
        ...oldCssVariables,
        [selectedCircle]: swatch,
      }
    ));
  }

  return (
    <div className="color-picker-popup__backdrop">
      <div
        className="popup"
        role="button"
        style={{
          position: mousePositionRef.current ? 'absolute' : null,
          left: mousePositionRef.current?.x ? `${mousePositionRef.current.x - mousePositionOffset.x}px` : null,
          top: mousePositionRef.current?.y ? `${mousePositionRef.current.y - mousePositionOffset.y}px` : null,
        }}
        tabIndex="0"
      >
        <div className="popup__title-bar" ref={draggableDivRef}>
          <button
            onClick={handleEvent(() => setIsOpen((oldIsOpen) => !oldIsOpen))}
            className="icon-button icon-button--borderless mr-spacing"
            type="button"
          >
            <span className={`material-symbols-outlined icon-button__icon ${isOpen ? '' : 'icon-button__icon--rotate180'}`}>expand_circle_down</span>
          </button>
          <div className="popup__title">Color Picker</div>
          {
            onClose
              ? (
                <IconButton
                  appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                  icon={(<span className="utds-icon-before-x-icon" aria-hidden="true" />)}
                  onClick={onClose}
                  title="Close"
                />
              )
              : null
          }

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
                        color={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]}
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
    </div>
  );
}

ColorPopup.propTypes = propTypes;
ColorPopup.defaultProps = defaultProps;

export default ColorPopup;
