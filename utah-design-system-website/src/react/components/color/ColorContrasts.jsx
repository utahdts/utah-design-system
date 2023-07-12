// @ ts-check
import { Button, joinClassNames } from '@utahdts/utah-design-system';
import { useMemo } from 'react';
import { useImmer } from 'use-immer';
import useCssContext from '../../context/cssContext/useCssContext';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import isLightColor from '../../util/color/isLightColor';
import ColorContrastBox from './ColorContrastBox';

const propTypes = {};
const defaultProps = {};

/**
 * @typedef {{ hexColor: string, isLight: boolean, title: string }} ColorInfo
 */

const USER_COLORS = [
  { cssVariableKey: CSS_VARIABLES_KEYS.PRIMARY_COLOR, title: 'Primary' },
  { cssVariableKey: CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK, title: 'Primary Dark' },
  { cssVariableKey: CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT, title: 'Primary Light' },
  { cssVariableKey: CSS_VARIABLES_KEYS.SECONDARY_COLOR, title: 'Secondary' },
  { cssVariableKey: CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK, title: 'Secondary Dark' },
  { cssVariableKey: CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT, title: 'Secondary Light' },
  { cssVariableKey: CSS_VARIABLES_KEYS.ACCENT_COLOR, title: 'Accent' },
  { cssVariableKey: CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK, title: 'Accent Dark' },
  { cssVariableKey: CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT, title: 'Accent Light' },
];

/** @type {ColorInfo[]} */
const GRAY_COLORS = [
  { hexColor: '#ffffff', isLight: true, title: 'White' },
  { hexColor: '#474747', isLight: false, title: '#474747' },
  // '#3f3f3f',
  // '#373737',
  { hexColor: '#2f2f2f', isLight: false, title: '#2f2f2f' },
  // '#272727',
  // '#1f1f1f',
  { hexColor: '#171717', isLight: false, title: '#171717' },
  // '#0f0f0f',
  // '#070707',
  { hexColor: '#000000', isLight: false, title: 'Black' },
];

/**
 * @returns {JSX.Element}
 */
// eslint-disable-next-line no-unused-vars
function ColorContrasts() {
  const { cssState } = useCssContext();
  const [selectedColorTitles, setSelectedColorTitles] = /** @type {typeof useImmer<string[]>} */ (useImmer)([]);

  /**
   * @param {ColorInfo} colorInfo
   * @returns {() => void} callback function that adds the given color to the selected list (if there's room)
   */
  function setSelectedColorTitleCurry(colorInfo) {
    return () => (
      setSelectedColorTitles((draftSelectedColorTitles) => {
        const selectedIndex = draftSelectedColorTitles.indexOf(colorInfo.title);
        if (selectedIndex !== -1) {
          // remove if already selected
          draftSelectedColorTitles.splice(selectedIndex, 1);
        } else if (draftSelectedColorTitles.length < 2) {
          // add if there is room
          draftSelectedColorTitles.push(colorInfo.title);
        }
      })
    );
  }

  const selectedColorInfos = useMemo(
    () => {
      /** @type {ColorInfo[]} */
      const colorInfos = selectedColorTitles.map((selectedColorTitle) => {
        const matchingUserColor = USER_COLORS.find((userColor) => userColor.title === selectedColorTitle);
        /** @type {ColorInfo | null} */
        let colorInfo = null;
        if (matchingUserColor) {
          colorInfo = {
            hexColor: /** @type {string} */ (cssState[matchingUserColor.cssVariableKey]),
            isLight: isLightColor(cssState[matchingUserColor.cssVariableKey]),
            title: matchingUserColor.title,
          };
        } else {
          const matchingGrayColor = GRAY_COLORS.find((grayColor) => grayColor.title === selectedColorTitle);
          colorInfo = matchingGrayColor || null;
        }
        if (!colorInfo) {
          throw new Error(`No matching color found for color title: '${selectedColorTitle}'`);
        }
        return colorInfo;
      });
      // add black if missing 1st color
      if (colorInfos.length < 1) {
        colorInfos.push({ ...GRAY_COLORS[0], title: 'Choose a color' });
      }
      // add white if missing 2nd color
      if (colorInfos.length < 2) {
        colorInfos.push({ ...GRAY_COLORS[GRAY_COLORS.length - 1], title: 'Choose a color' });
      }
      return colorInfos;
    },
    [cssState, selectedColorTitles]
  );

  const userColorsIsLight = useMemo(
    () => (
      USER_COLORS.reduce(
        (draftUseColorsMap, useColor) => {
          draftUseColorsMap[useColor.cssVariableKey] = isLightColor(cssState[useColor.cssVariableKey]);
          return draftUseColorsMap;
        },
        {}
      )
    ),
    [cssState]
  );

  return (
    <div className="color-contrasts__wrapper">
      <div className="color-contrasts__instructions">
        Pick two colors to show their contrast
      </div>
      <div className="color-contrasts__color-swatches">
        {
          USER_COLORS.map(({ cssVariableKey, title }) => {
            const isLight = userColorsIsLight[cssVariableKey];
            return (
              <Button
                className={joinClassNames('color-contrasts__color-swatch', isLight && 'color-is-light')}
                key={`one-of-nine__${cssVariableKey}`}
                onClick={setSelectedColorTitleCurry({ hexColor: cssState[cssVariableKey], isLight, title })}
                style={{ backgroundColor: cssState[cssVariableKey] }}
              >
                {
                  selectedColorTitles.includes(title)
                    ? <span className="utds-icon-before-check" aria-hidden="true" />
                    : ''
                }
              </Button>
            );
          })
        }
      </div>
      <div className="color-contrasts__color-swatches">
        {
          GRAY_COLORS.map(({ hexColor, isLight, title }) => (
            <Button
              className={joinClassNames('color-contrasts__color-swatch', isLight && 'color-is-light')}
              key={`gray-color__${hexColor}`}
              onClick={setSelectedColorTitleCurry({ hexColor, isLight, title })}
              style={{ backgroundColor: hexColor }}
            >
              {
                selectedColorTitles.includes(title)
                  ? <span className="utds-icon-before-check" aria-hidden="true" />
                  : ''
              }
            </Button>
          ))
        }
      </div>
      <div className="color-contrasts__contrast">
        <ColorContrastBox
          color1={selectedColorInfos[0].hexColor}
          color1IsLight={selectedColorInfos[0].isLight}
          color1Title={selectedColorInfos[0].title}
          color1ShowHex={selectedColorInfos[0].title !== 'Choose a color'}
          color2={selectedColorInfos[1].hexColor}
          color2IsLight={selectedColorInfos[1].isLight}
          color2Title={selectedColorInfos[1].title}
          color2ShowHex={selectedColorInfos[0].title !== 'Choose a color'}
        />
      </div>
    </div>
  );
}

ColorContrasts.propTypes = propTypes;
ColorContrasts.defaultProps = defaultProps;

export default ColorContrasts;
