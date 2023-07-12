import { useMemo } from 'react';
import useCssContext from '../../context/cssContext/useCssContext';
import CSS_VARIABLES_KEYS from '../../enums/cssVariablesKeys';
import isLightColor from '../../util/color/isLightColor';

export default function useContrastsForColorContrasts(colorGray) {
  const { cssState } = useCssContext();
  return useMemo(
    () => {
      // primary
      const primaryIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR]);
      const primaryTextColor = primaryIsLight ? (colorGray || '#474747') : '#ffffff';
      const primaryTextColorOpp = primaryIsLight ? '#ffffff' : (colorGray || '#474747');

      const primaryDarkIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK]);
      const primaryDarkTextColor = primaryDarkIsLight ? (colorGray || '#474747') : '#ffffff';
      const primaryDarkTextColorOpp = primaryDarkIsLight ? '#ffffff' : (colorGray || '#474747');

      const primaryLightIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT]);
      const primaryLightTextColor = primaryLightIsLight ? (colorGray || '#474747') : '#ffffff';
      const primaryLightTextColorOpp = primaryLightIsLight ? '#ffffff' : (colorGray || '#474747');

      // secondary
      const secondaryIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR]);
      const secondaryTextColor = secondaryIsLight ? (colorGray || '#474747') : '#ffffff';
      const secondaryTextColorOpp = secondaryIsLight ? '#ffffff' : (colorGray || '#474747');

      const secondaryDarkIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK]);
      const secondaryDarkTextColor = secondaryDarkIsLight ? (colorGray || '#474747') : '#ffffff';
      const secondaryDarkTextColorOpp = secondaryDarkIsLight ? '#ffffff' : (colorGray || '#474747');

      const secondaryLightIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT]);
      const secondaryLightTextColor = secondaryLightIsLight ? (colorGray || '#474747') : '#ffffff';
      const secondaryLightTextColorOpp = secondaryLightIsLight ? '#ffffff' : (colorGray || '#474747');

      // accent
      const accentIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR]);
      const accentTextColor = accentIsLight ? (colorGray || '#474747') : '#ffffff';
      const accentTextColorOpp = accentIsLight ? '#ffffff' : (colorGray || '#474747');

      const accentDarkIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK]);
      const accentDarkTextColor = accentDarkIsLight ? (colorGray || '#474747') : '#ffffff';
      const accentDarkTextColorOpp = accentDarkIsLight ? '#ffffff' : (colorGray || '#474747');

      const accentLightIsLight = isLightColor(cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT]);
      const accentLightTextColor = accentLightIsLight ? (colorGray || '#474747') : '#ffffff';
      const accentLightTextColorOpp = accentLightIsLight ? '#ffffff' : (colorGray || '#474747');

      return [
        // Primary -> X
        [
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Primary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Primary Light',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Primary Text',
            color2: primaryTextColor,
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Primary Text Opp.',
            color2: primaryTextColorOpp,
          },
          {
            color1Title: 'Primary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
            color2Title: 'Primary Dark Text',
            color2: primaryDarkTextColor,
          },
          {
            color1Title: 'Primary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
            color2Title: 'Primary Dark Text Opp.',
            color2: primaryDarkTextColorOpp,
          },
          {
            color1Title: 'Primary Light',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
            color2Title: 'Primary Light Text',
            color2: primaryLightTextColor,
          },
          {
            color1Title: 'Primary Light',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
            color2Title: 'Primary Light Text Opp.',
            color2: primaryLightTextColorOpp,
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Secondary',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Secondary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Secondary Light',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Primary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
            color2Title: 'Secondary',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
          },
          {
            color1Title: 'Primary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
            color2Title: 'Secondary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
          },
          {
            color1Title: 'Primary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
            color2Title: 'Secondary Light',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Primary Light',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
            color2Title: 'Secondary',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
          },
          {
            color1Title: 'Primary Light',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
            color2Title: 'Secondary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
          },
          {
            color1Title: 'Primary Light',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
            color2Title: 'Secondary Light',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Accent',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Accent Dark',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
          },
          {
            color1Title: 'Primary',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
            color2Title: 'Accent Light',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
          },
          {
            color1Title: 'Primary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
            color2Title: 'Accent',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
          },
          {
            color1Title: 'Primary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
            color2Title: 'Accent Dark',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
          },
          {
            color1Title: 'Primary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
            color2Title: 'Accent Light',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
          },
          {
            color1Title: 'Primary Light',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
            color2Title: 'Accent',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
          },
          {
            color1Title: 'Primary Light',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
            color2Title: 'Accent Dark',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
          },
          {
            color1Title: 'Primary Light',
            color1: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
            color2Title: 'Accent Light',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
          },
        ],

        // Secondary -> X
        [
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Secondary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Secondary Light',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Secondary Text',
            color2: secondaryTextColor,
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Secondary Text Opp.',
            color2: secondaryTextColorOpp,
          },
          {
            color1Title: 'Secondary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
            color2Title: 'Secondary Dark Text',
            color2: secondaryDarkTextColor,
          },
          {
            color1Title: 'Secondary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
            color2Title: 'Secondary Dark Text Opp.',
            color2: secondaryDarkTextColorOpp,
          },
          {
            color1Title: 'Secondary Light',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
            color2Title: 'Secondary Light Text',
            color2: secondaryLightTextColor,
          },
          {
            color1Title: 'Secondary Light',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
            color2Title: 'Secondary Light Text Opp.',
            color2: secondaryLightTextColorOpp,
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Primary',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Primary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Primary Light',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Secondary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
            color2Title: 'Primary',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
          },
          {
            color1Title: 'Secondary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
            color2Title: 'Primary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
          },
          {
            color1Title: 'Secondary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
            color2Title: 'Primary Light',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Secondary Light',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
            color2Title: 'Primary',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
          },
          {
            color1Title: 'Secondary Light',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
            color2Title: 'Primary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
          },
          {
            color1Title: 'Secondary Light',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
            color2Title: 'Primary Light',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Accent',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Accent Dark',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
          },
          {
            color1Title: 'Secondary',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
            color2Title: 'Accent Light',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
          },
          {
            color1Title: 'Secondary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
            color2Title: 'Accent',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
          },
          {
            color1Title: 'Secondary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
            color2Title: 'Accent Dark',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
          },
          {
            color1Title: 'Secondary Dark',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
            color2Title: 'Accent Light',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
          },
          {
            color1Title: 'Secondary Light',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
            color2Title: 'Accent',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
          },
          {
            color1Title: 'Secondary Light',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
            color2Title: 'Accent Dark',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
          },
          {
            color1Title: 'Secondary Light',
            color1: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
            color2Title: 'Accent Light',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
          },
        ],

        // Accent -> X
        [
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Accent Dark',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Accent Light',
            color2: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Accent Text',
            color2: accentTextColor,
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Accent Text Opp.',
            color2: accentTextColorOpp,
          },
          {
            color1Title: 'Accent Dark',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
            color2Title: 'Accent Dark Text',
            color2: accentDarkTextColor,
          },
          {
            color1Title: 'Accent Dark',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
            color2Title: 'Accent Dark Text Opp.',
            color2: accentDarkTextColorOpp,
          },
          {
            color1Title: 'Accent Light',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
            color2Title: 'Accent Light Text',
            color2: accentLightTextColor,
          },
          {
            color1Title: 'Accent Light',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
            color2Title: 'Accent Light Text Opp.',
            color2: accentLightTextColorOpp,
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Primary',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Primary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Primary Light',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Accent Dark',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
            color2Title: 'Primary',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
          },
          {
            color1Title: 'Accent Dark',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
            color2Title: 'Primary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
          },
          {
            color1Title: 'Accent Dark',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
            color2Title: 'Primary Light',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Accent Light',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
            color2Title: 'Primary',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR],
          },
          {
            color1Title: 'Accent Light',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
            color2Title: 'Primary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_DARK],
          },
          {
            color1Title: 'Accent Light',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
            color2Title: 'Primary Light',
            color2: cssState[CSS_VARIABLES_KEYS.PRIMARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Secondary',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Secondary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
          },
          {
            color1Title: 'Accent',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR],
            color2Title: 'Secondary Light',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Accent Dark',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
            color2Title: 'Secondary',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
          },
          {
            color1Title: 'Accent Dark',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
            color2Title: 'Secondary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
          },
          {
            color1Title: 'Accent Dark',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_DARK],
            color2Title: 'Secondary Light',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
          },
          {
            color1Title: 'Accent Light',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
            color2Title: 'Secondary',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR],
          },
          {
            color1Title: 'Accent Light',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
            color2Title: 'Secondary Dark',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_DARK],
          },
          {
            color1Title: 'Accent Light',
            color1: cssState[CSS_VARIABLES_KEYS.ACCENT_COLOR_LIGHT],
            color2Title: 'Secondary Light',
            color2: cssState[CSS_VARIABLES_KEYS.SECONDARY_COLOR_LIGHT],
          },
        ],
      ];
    },
    [cssState]
  );
}
