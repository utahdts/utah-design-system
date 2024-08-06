import { sizes } from '@utahdts/utah-design-system-header';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import logoPng from './static/images/designSystemCircleGray.png';

/** @typedef {import('@utahdts/utah-design-system-header').SettingsInput} SettingsInput */

/**
 * These are the base default settings for the Design System Website
 * see Routing.jsx for where the mainMenu gets added
 * @type {() => SettingsInput} base settings of the header
 */
export function useWebsiteUtahHeaderSettings() {
  const navigate = useNavigate();
  return useMemo(
    () => ({
      footer: {
        showHorizontalRule: true,
        domLocationTarget: {
          cssSelector: '#utah-footer-placeholder',
        },
      },
      logo: { imageUrl: logoPng },
      // mainMenu is set in Routing.jsx
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleUrlAction: {
        actionUrl: '/',
        actionFunction: (e) => {
          e.stopPropagation();
          e.preventDefault();
          navigate('/');
        },
      },
      utahId: true,
      skipLinkUrl: '#main-content',
    }),
    []
  );
}
