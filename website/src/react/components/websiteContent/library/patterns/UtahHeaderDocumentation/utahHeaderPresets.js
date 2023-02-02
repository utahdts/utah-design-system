// eslint-disable-next-line import/no-unresolved
import logoPng from '../../../../../../static/images/designSystemCircleGray.png';

const LOGO_IMAGE = `<img src="${logoPng}" id="design-system-logo" />`;

export default [
  // --- Agency Brand / Title --- //
  {
    options: [
      {
        settingsSnippet: {
          logo: null,
          showTitle: true,
          title: 'State of Utah Preset Title',
        },
        title: 'None',
      },
      {
        settingsSnippet: {
          logo: null,
          showTitle: true,
          title: 'State of Utah Preset Title',
        },
        title: 'Just Title',
      },
      {
        settingsSnippet: {
          logo: LOGO_IMAGE,
          showTitle: false,
        },
        title: 'Just Brand',
      },
      {
        settingsSnippet: {
          logo: LOGO_IMAGE,
          showTitle: true,
          title: 'State of Utah Preset Title',
        },
        title: 'Title & Brand',
      },
    ],
    title: 'Agency Brand/Title',
  },

  // --- actionItems Icons --- //
  {
    options: [
      {
        settingsSnippet: {
          actionItems: [],
        },
        title: 'None',
      },
      {
        settingsSnippet: {
          actionItems: [
            {
              actionPopupMenu: {
                menuItems: [
                  {
                    actionUrl: { url: 'https://google.com' },
                    title: 'Item #1',
                  },
                  {
                    actionUrl: { url: 'https://utah.gov', openInNewTab: true },
                    title: 'Utah.Gov',
                  },
                  {
                    actionFunction: () => console.log('TRIGGERED'),
                    title: 'Custom menu item',
                  },
                ],
                title: 'Divisions Menu',
              },
              className: 'icon-waffle',
              icon: '<span class="utds-icon-before-waffle" aria-hidden="true" />',
              showTitle: true,
              title: 'Divisions',
            },
          ],
        },
        title: 'Waffle Icon',
      },
    ],
    title: 'Action Items',
  },
];
