// eslint-disable-next-line import/no-unresolved
import { renderDOM } from 'utah-design-system-header/src/js/misc/renderDOM';
import logoPng from '../../../../../../static/images/designSystemCircleGray.png';
import { FUNCTION_PLACEHOLDER } from './stringifyHeaderSettings';

const LOGO_IMAGE = `<img src="${logoPng}" id="design-system-logo" />`;

const utahHeaderPresets = [
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
      // actionItems: None
      {
        settingsSnippet: {
          actionItems: [],
        },
        title: 'None',
      },

      // actionItems: Waffle
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
                    actionFunction: FUNCTION_PLACEHOLDER,
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

      // actionItems: Alerts
      {
        settingsSnippet: {
          actionItems: [
            {
              actionFunction: FUNCTION_PLACEHOLDER,
              badge: {
                // Note: make sure the `label` is plural/singular to match the value
                label: 'Unread Alerts',
                value: 2,
              },
              icon: '<span class="utds-icon-before-alert" aria-hidden="true" />',
              showTitle: false,
              title: 'Alerts',
            },
          ],
        },
        title: 'Alerts Icon',
      },
      // actionItems: help
      {
        settingsSnippet: {
          actionItems: [
            {
              actionDom: renderDOM('<div>Hello World! <button>Do not press me.</button></div>'),
              badge: {
                // Note: make sure the `label` is plural/singular to match the value
                label: 'Help Items Available',
              },
              icon: '<span class="utds-icon-before-help" aria-hidden="true" />',
              showTitle: false,
              title: 'Help',
            },
          ],
        },
        title: 'Help',
      },
    ],
    title: 'Action Items',
  },
];

utahHeaderPresets[1].options.push({
  title: 'Waffle, Alerts, Help',
  settingsSnippet: {
    actionItems: [
      ...utahHeaderPresets[1].options[1].settingsSnippet.actionItems,
      ...utahHeaderPresets[1].options[2].settingsSnippet.actionItems,
      ...utahHeaderPresets[1].options[3].settingsSnippet.actionItems,
    ],
  },
});

export default utahHeaderPresets;
