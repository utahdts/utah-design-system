// eslint-disable-next-line import/no-unresolved
import { renderDOM } from 'utah-design-system-header/src/js/misc/renderDOM';
import logoPng from '../../../../../../static/images/designSystemCircleGray.png';
import { FUNCTION_PLACEHOLDER } from './stringifyHeaderSettings';

const LOGO_IMAGE = `<img src="${logoPng}" id="design-system-logo" />`;

const utahHeaderPresets = [
  // --- Size --- //
  {
    options: [
      { settingsSnippet: { size: 'SMALL' }, title: 'Small' },
      { settingsSnippet: { size: 'MEDIUM' }, title: 'Medium' },
      { settingsSnippet: { size: 'LARGE' }, title: 'Large' },
    ],
    title: 'Header Size',
  },

  // --- UtahID --- //
  {
    options: [
      { settingsSnippet: { utahId: false }, title: 'None' },
      { settingsSnippet: { utahId: true }, title: 'Automatic' },
      {
        settingsSnippet: {
          utahId: {
            currentUser: {
              authenticated: true,
              first: 'Philo',
            },
            onProfile: FUNCTION_PLACEHOLDER,
            onSignIn: FUNCTION_PLACEHOLDER,
            onSignOut: FUNCTION_PLACEHOLDER,
          },
        },
        title: 'With User',
      },
      {
        settingsSnippet: {
          utahId: {
            currentUser: null,
            onProfile: FUNCTION_PLACEHOLDER,
            onSignIn: FUNCTION_PLACEHOLDER,
            onSignOut: FUNCTION_PLACEHOLDER,
          },
        },
        title: 'Without User',
      },
    ],
    title: 'UtahId Integration',
  },

  // --- Agency Brand / Title --- //
  {
    options: [
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
      // actionItems: settings
      {
        settingsSnippet: {
          actionItems: [
            {
              actionPopupMenu: {
                menuItems: [
                  {
                    actionUrl: { url: 'https://utah.gov' },
                    title: 'Settings',
                  },
                  {
                    actionUrl: { url: 'https://utah.gov', openInNewTab: true },
                    title: 'Utah.Gov',
                  },
                  {
                    actionFunction: FUNCTION_PLACEHOLDER,
                    title: 'Clickable menu item',
                  },
                ],
                title: 'Settings Menu',
              },
              icon: '<span class="utds-icon-before-gear" aria-hidden="true" />',
              showTitle: false,
              title: 'Settings',
            },
          ],
        },
        title: 'Settings',
      },
    ],
    title: 'Action Items',
  },
];

// add combo action item preset that uses same settings as the already entered presets
const actionItemsPreset = utahHeaderPresets.find((preset) => preset.title === 'Action Items');
if (!actionItemsPreset) {
  // this means 'Action Items' the preset above got ganked
  throw new Error('utahHeaderPresets: "Action Items" preset not found.');
}
actionItemsPreset.options.push({
  title: 'All',
  settingsSnippet: {
    actionItems: [
      ...actionItemsPreset.options.map((option) => option.settingsSnippet.actionItems).flat(),
    ],
  },
});

export default utahHeaderPresets;
