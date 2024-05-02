import {
  Button,
  handleEvent,
  ICON_BUTTON_APPEARANCE,
  IconButton,
  Icons,
  Popup,
  popupPlacement,
  rectContainsPoint,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  useBanner,
  useGlobalKeyEvent
} from '@utahdts/utah-design-system';
import { useCallback, useRef, useState } from 'react';
import tinycolor from 'tinycolor2';
import { useImmer } from 'use-immer';
import { cssContextDefaultColors } from '../../context/cssContext/cssContextDefaultColors';
import { useCssContext } from '../../context/cssContext/useCssContext';
import { CSS_VARIABLES_KEYS } from '../../enums/cssVariablesKeys';
import { useMousePositionTracker } from '../../hooks/useMousePositionTracker';
import { colors } from '../../util/color/colors';
import { notNull } from '../../util/notNull/notNull';
import { pageUrls } from '../routing/pageUrls';
import { ColorContrasts } from './ColorContrasts';
import { ColorPicker } from './ColorPicker';
import { ColorPickerInstructions } from './ColorPickerInstructions';
import { colorsToUrlParams } from './colorPickerUrlParams';
import { SwatchList } from './SwatchList';

/**
 * @param {object} props
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} props.onClose
 * @returns {import('react').JSX.Element}
 */
export function ColorPopup({ onClose }) {
  const [isOpen, setIsOpen] = useImmer(true);
  const [moreOptions, setMoreOptions] = useImmer(false);
  const moreRef = useRef(null);
  const { cssState, setCssState } = useCssContext();
  const [mousePositionOffset, setMousePositionOffset] = useImmer({ x: 0, y: 0 });
  const draggableDivRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const [copiedUrlTitle, setCopiedUrlTitle] = useState('Share colors');
  const { addBanner } = useBanner();

  const { mousePosition } = useMousePositionTracker({
    shouldBeginDrag: (e) => {
      const draggableDiv = notNull(draggableDivRef.current, 'ColorPopup: draggleDivRef is null');
      const mousePoint = ({ x: e.clientX, y: e.clientY });
      const isMousedownInsideDiv = rectContainsPoint(draggableDiv.getBoundingClientRect(), mousePoint);

      if (isMousedownInsideDiv) {
        // pick offset between top left and click position so that when mouse moves, it maintains that offset
        setMousePositionOffset({
          x: mousePoint.x - draggableDiv.getBoundingClientRect().left,
          y: mousePoint.y - draggableDiv.getBoundingClientRect().top,
        });
      }

      return isMousedownInsideDiv;
    },
  });

  // remember last known mouse position so popup stays in place after drag finishes
  const mousePositionRef = useRef(mousePosition);
  mousePositionRef.current = mousePosition || mousePositionRef.current;

  const setColor = useCallback(
    /** @param {string} swatch */
    (swatch) => {
      setCssState((oldCssVariables) => (
        {
          ...oldCssVariables,
          [cssState.selectedColorPicker]: swatch,
        }
      ));
    },
    [cssState.selectedColorPicker]
  );

  const showRandomizingIcon = useGlobalKeyEvent({ whichKeyCode: 'Alt' });

  return (
    <div className="color-picker-popup__backdrop">
      <div
        className="color-picker-popup"
        style={{
          position: mousePositionRef.current ? 'absolute' : undefined,
          left: mousePositionRef.current?.x ? `${mousePositionRef.current.x - mousePositionOffset.x}px` : undefined,
          top: mousePositionRef.current?.y ? `${mousePositionRef.current.y - mousePositionOffset.y}px` : undefined,
        }}
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
          <div />
          <div className="color-picker-popup__title">Color Picker</div>

          <IconButton
            aria-controls="popup-more-option"
            aria-expanded={moreOptions}
            aria-haspopup="dialog"
            className="icon-button--borderless"
            icon={(
              <div>
                <span
                  className="utds-icon-before-more-vertical"
                  aria-hidden="true"
                />
                <span className="visually-hidden">
                  more vertical
                </span>
              </div>
            )}
            id="button-more-option"
            innerRef={moreRef}
            onClick={() => setMoreOptions(!moreOptions)}
            title="See more options"
          />
          <Popup
            ariaLabelledBy="button-more-option"
            id="popup-more-option"
            isVisible={moreOptions}
            referenceElement={moreRef}
            role="dialog"
            onVisibleChange={(_e, isVisible) => {
              setMoreOptions(isVisible);
            }}
            placement={popupPlacement.BOTTOM}
          >
            <Button
              className="full-width"
              onClick={() => (
                // @ts-ignore
                setCssState((draftCssState) => (
                  // @ts-ignore
                  Object.entries(cssContextDefaultColors).forEach(([key, value]) => { draftCssState[key] = value; })
                ))
              )}
            >
              <Icons.IconReset className="mr-spacing-xs" /> Reset color picker
            </Button>
            <Button
              className="full-width mt-spacing-s"
              onClick={() => {
                const returnUrl = `${window.location.origin + pageUrls.demoPage}?${colorsToUrlParams(cssState)}`;
                navigator.clipboard.writeText(returnUrl)
                  .then(() => {
                    addBanner({
                      className: 'banner--dark',
                      duration: 7500,
                      message: <div>Colors copied to clipboard and ready to share!<br />{`${returnUrl.substring(0, 50)}...`}</div>,
                      position: 'top-right',
                    });
                    setCopiedUrlTitle('Share URL copied to to clipboard');
                    setTimeout(() => {
                      setCopiedUrlTitle('Share URL');
                    }, 1500);
                  })
                  // eslint-disable-next-line no-console
                  .catch((e) => console.error(e));
              }}
            >
              <Icons.IconShare className="mr-spacing-xs" /> {copiedUrlTitle}
            </Button>
          </Popup>
          {
            showRandomizingIcon
              ? (
                <div className="color-picker-popup__buttons">
                  <IconButton
                    icon={<span className="utds-icon-before-visibility" aria-hidden="true" />}
                    title="Randomize color picker"
                    className="icon-button--borderless"
                    onClick={() => (
                      setCssState((draftCssState) => (
                        Object.keys(cssContextDefaultColors).forEach((key) => {
                          // @ts-ignore
                          draftCssState[key] = `#${tinycolor.random().toHex()}`;
                        })
                      ))
                    )}
                  />
                </div>
              )
              : null
          }
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
                      // @ts-ignore
                      onClick={() => setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.PRIMARY_COLOR; })}
                      colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_PRIMARY_COLOR]}
                      onChange={(newColor) => setColor(newColor)}
                      title="Primary"
                      value={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]}
                    />
                    <div className="color-pickers__light-dark">
                      <ColorPicker
                        className="primary-color-dark-background"
                        id="primary-dark-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK}
                        label="Primary: Dark"
                        onChange={(newColor) => setColor(newColor)}
                        // @ts-ignore
                        onClick={() => setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK; })}
                        title="Dark"
                        value={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]}
                      />
                      <ColorPicker
                        className="primary-color-light-background"
                        id="primary-light-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT}
                        label="Primary: Light"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          // @ts-ignore
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT; })
                        )}
                        title="Light"
                        value={cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]}
                      />
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
                        // @ts-ignore
                        setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.SECONDARY_COLOR; })
                      )}
                      colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_SECONDARY_COLOR]}
                      title="Secondary"
                      value={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]}
                    />
                    <div className="color-pickers__light-dark">
                      <ColorPicker
                        className="secondary-color-dark-background"
                        id="secondary-dark-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK}
                        label="Secondary: Dark"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          // @ts-ignore
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK; })
                        )}
                        title="Dark"
                        value={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]}
                      />

                      <ColorPicker
                        className="secondary-color-light-background"
                        id="secondary-light-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT}
                        label="Secondary: Light"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          // @ts-ignore
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT; })
                        )}
                        title="Light"
                        value={cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]}
                      />
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
                        // @ts-ignore
                        setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.ACCENT_COLOR; })
                      )}
                      colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]}
                      title="Accent"
                      value={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]}
                    />
                    <div className="color-pickers__light-dark">
                      <ColorPicker
                        className="accent-color-dark-background"
                        id="accent-dark-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK}
                        label="Accent: Dark"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          // @ts-ignore
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK; })
                        )}
                        title="Dark"
                        value={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]}
                      />

                      <ColorPicker
                        className="accent-color-light-background"
                        id="accent-light-color"
                        isSelected={cssState.selectedColorPicker === CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT}
                        label="Accent: Light"
                        onChange={(newColor) => setColor(newColor)}
                        onClick={() => (
                          // @ts-ignore
                          setCssState((draftCssState) => { draftCssState.selectedColorPicker = CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT; })
                        )}
                        title="Light"
                        value={cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]}
                      />
                    </div>
                  </div>

                </div>
                <div className="color-pickers__compare-colors color-pickers__swatches">
                  <TabGroup defaultValue="tab-group__swatches">
                    <TabList>
                      <Tab id="tab-group__swatches">Swatches</Tab>
                      <Tab id="tab-group__color-contrast">Contrast</Tab>
                      <Tab id="tab-group__instructions">Instructions</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel tabId="tab-group__swatches">
                        {
                          Object.values(colors).map((color) => (
                            <SwatchList
                              colorFamily={color}
                              key={`swatch-list-color-${color.title}`}
                              // @ts-ignore
                              onColorSelected={(swatch) => setColor(swatch)}
                            />
                          ))
                        }
                      </TabPanel>
                      <TabPanel tabId="tab-group__color-contrast">
                        {/* @ts-ignore */}
                        <ColorContrasts colorGray={cssState[CSS_VARIABLES_KEYS.GRAY_ON_ACCENT_COLOR]} />
                      </TabPanel>
                      <TabPanel tabId="tab-group__instructions">
                        <ColorPickerInstructions />
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                </div>
              </div>
            )
            : undefined
        }
      </div>
    </div>
  );
}
