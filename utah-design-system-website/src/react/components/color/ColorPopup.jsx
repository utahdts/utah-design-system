import {
  ICON_BUTTON_APPEARANCE,
  IconButton,
  handleEvent,
  rectContainsPoint,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';
import { useImmer } from 'use-immer';
import useCssContext from '../../context/cssContext/useCssContext';
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
  const [isOpen, setIsOpen] = useImmer(true);
  const { cssState, setCssState } = useCssContext();
  const [mousePositionOffset, setMousePositionOffset] = useImmer({ x: 0, y: 0 });
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

  const setColor = useCallback(
    (swatch) => (
      setCssState((oldCssVariables) => (
        {
          ...oldCssVariables,
          [cssState.selectedColorPicker]: swatch,
        }
      ))
    ),
    [cssState.selectedColorPicker]
  );

  return (
    <div className="color-picker-popup__backdrop">
      <div
        className="color-picker-popup"
        role="button"
        style={{
          position: mousePositionRef.current ? 'absolute' : null,
          left: mousePositionRef.current?.x ? `${mousePositionRef.current.x - mousePositionOffset.x}px` : null,
          top: mousePositionRef.current?.y ? `${mousePositionRef.current.y - mousePositionOffset.y}px` : null,
        }}
        tabIndex="0"
      >
        <div className="color-picker-popup__title-bar" ref={draggableDivRef}>
          <button
            onClick={handleEvent(() => setIsOpen((oldIsOpen) => !oldIsOpen))}
            className="icon-button icon-button--borderless"
            type="button"
          >
            <div>
              <span
                className={`utds-icon-before-circle-chevron-down icon-button__icon ${isOpen ? '' : 'icon-button__icon--rotate180'}`}
                aria-hidden="true"
              />
              <span className="visually-hidden">
                collapse popup
              </span>
            </div>
          </button>
          <div className="color-picker-popup__title">Color Picker</div>
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
                      id="primary-prime-color"
                      isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.PRIMARY_COLOR}
                      label="Primary: Prime"
                      onClick={() => setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.PRIMARY_COLOR; })}
                      colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]}
                      onChange={(newColor) => setColor(newColor)}
                      showTextColor
                      title="Primary"
                      value={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]}
                    />
                    <div className="color-pickers__light-dark">
                      <ColorPicker
                        className="primary-color-dark-background color-picker--small"
                        id="primary-dark-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK}
                        label="Primary: Dark"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK; })}
                        title="Dark"
                        value={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]}
                      />
                      <ColorPicker
                        className="primary-color-light-background color-picker--small"
                        id="primary-light-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT}
                        label="Primary: Light"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT; })
                        )}
                        title="Light"
                        value={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]}
                      />
                    </div>
                    <div className="color-pickers__compare-colors">
                      <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]} />
                      <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]} />
                    </div>
                  </div>

                  <div className="color-pickers__group">
                    <ColorPicker
                      className="secondary-color-background"
                      id="secondary-prime-color"
                      isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.SECONDARY_COLOR}
                      label="Secondary: Prime"
                      onChange={(newColor) => setColor(newColor)}
                      onClick={() => (
                        setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.SECONDARY_COLOR; })
                      )}
                      colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]}
                      showTextColor
                      title="Secondary"
                      value={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]}
                    />
                    <div className="color-pickers__light-dark">
                      <ColorPicker
                        className="secondary-color-dark-background color-picker--small"
                        id="secondary-dark-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK}
                        label="Secondary: Dark"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK; })
                        )}
                        title="Dark"
                        value={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]}
                      />

                      <ColorPicker
                        className="secondary-color-light-background color-picker--small"
                        id="secondary-light-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT}
                        label="Secondary: Light"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT; })
                        )}
                        title="Light"
                        value={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]}
                      />
                    </div>
                    <div className="color-pickers__compare-colors">
                      <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]} />
                      <ColorCompare color1={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]} color2={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]} />
                    </div>
                  </div>

                  <div className="color-pickers__group">
                    <ColorPicker
                      className="accent-color-background"
                      id="accent-prime-color"
                      isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.ACCENT_COLOR}
                      label="Accent: Prime"
                      onChange={(newColor) => setColor(newColor)}
                      onClick={() => (
                        setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.ACCENT_COLOR; })
                      )}
                      colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]}
                      showTextColor
                      title="Accent"
                      value={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]}
                    />
                    <div className="color-pickers__light-dark">
                      <ColorPicker
                        className="accent-color-dark-background color-picker--small"
                        id="accent-dark-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK}
                        label="Accent: Dark"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK; })
                        )}
                        title="Dark"
                        value={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]}
                      />

                      <ColorPicker
                        className="accent-color-light-background color-picker--small"
                        id="accent-light-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT}
                        label="Accent: Light"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT; })
                        )}
                        title="Light"
                        value={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]}
                      />
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
