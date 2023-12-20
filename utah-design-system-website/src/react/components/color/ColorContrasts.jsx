import { Button, joinClassNames } from '@utahdts/utah-design-system';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useCssContext } from '../../context/cssContext/useCssContext';
import { CSS_VARIABLES_KEYS } from '../../enums/cssVariablesKeys';
import { isLightColor } from '../../util/color/isLightColor';
import { notNull } from '../../util/notNull/notNull';
import { pageUrls } from '../routing/pageUrls';
import { ColorContrastBox } from './ColorContrastBox';
import { ColorExample } from './ColorExample';
import { ContrastValues } from './ContrastValues';

/** @typedef {import('utah-design-system-website').ColorInfo} ColorInfo */

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
  { hexColor: '#d7d7d7', isLight: true, title: '#d7d7d7' },
  { hexColor: '#a7a7a7', isLight: true, title: '#a7a7a7' },
  { hexColor: '#777777', isLight: false, title: '#777777' },
  { hexColor: '#474747', isLight: false, title: '#474747' },
  { hexColor: '#272727', isLight: false, title: '#272727' },
  { hexColor: '#000000', isLight: false, title: 'Black' },
];

/** @returns {React.JSX.Element} */
export function ColorContrasts() {
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
        colorInfos.push({ ...notNull(GRAY_COLORS[0], 'ColorContrasts: A'), title: 'Choose a color' });
      }
      // add white if missing 2nd color
      if (colorInfos.length < 2) {
        colorInfos.push({ ...notNull(GRAY_COLORS[GRAY_COLORS.length - 1], 'ColorContrasts: B'), title: 'Choose a color' });
      }
      return colorInfos;
    },
    [cssState, selectedColorTitles]
  );

  const userColorsIsLight = useMemo(
    () => (
      USER_COLORS.reduce(
        (draftUseColorsMap, useColor) => {
          // @ts-ignore
          draftUseColorsMap[useColor.cssVariableKey] = isLightColor(cssState[useColor.cssVariableKey]);
          return draftUseColorsMap;
        },
        {}
      )
    ),
    [cssState]
  );

  const selectedColorInfos0 = notNull(selectedColorInfos[0], 'ColorContrasts: selectedColorInfos0');
  const selectedColorInfos1 = notNull(selectedColorInfos[1], 'ColorContrasts: selectedColorInfos1');

  return (
    <div className="color-contrast__wrapper">
      <div className="color-contrast__instructions">
        Pick two colors to show their contrast
      </div>
      <div className="color-contrast__color-swatches">
        {
          USER_COLORS.map(({ cssVariableKey, title }) => {
            // @ts-ignore
            const isLight = userColorsIsLight[cssVariableKey];
            return (
              <Button
                className={joinClassNames('color-contrast__color-swatch', isLight && 'color-is-light')}
                key={`one-of-nine__${cssVariableKey}`}
                onClick={setSelectedColorTitleCurry({ hexColor: cssState[cssVariableKey], isLight, title })}
                // @ts-ignore
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
      <div className="color-contrast__color-swatches">
        {
          GRAY_COLORS.map(({ hexColor, isLight, title }) => (
            <Button
              className={joinClassNames('color-contrast__color-swatch', isLight && 'color-is-light')}
              key={`gray-color__${hexColor}`}
              onClick={setSelectedColorTitleCurry({ hexColor, isLight, title })}
              // @ts-ignore
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
      <div className="color-contrast__compare-wrapper">
        <ColorContrastBox
          color1={selectedColorInfos0.hexColor}
          color1IsLight={selectedColorInfos0.isLight}
          color1Title={selectedColorInfos0.title}
          color1ShowHex={selectedColorInfos0.title !== 'Choose a color'}
          color2={selectedColorInfos1.hexColor}
          color2IsLight={selectedColorInfos1.isLight}
          color2Title={selectedColorInfos1.title}
          color2ShowHex={selectedColorInfos1.title !== 'Choose a color'}
        />
        <ContrastValues
          color1={selectedColorInfos0}
          color2={selectedColorInfos1}
        />
        <ColorExample
          color1={selectedColorInfos0}
          color2={selectedColorInfos1}
        />
      </div>
      <div className="color-contrast__info-link">
        <span className="utds-icon-before-help" aria-hidden="true" />
        <NavLink to={`${pageUrls.accessibility}#section-limited-vision-contrast`}>
          Information about color contrast accessibility
        </NavLink>
      </div>
    </div>
  );
}
