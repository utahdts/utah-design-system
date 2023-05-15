// eslint-disable-next-line import/no-unresolved
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
      {
        settingsSnippet: {
          utahId: {
            menuItems: [
              {
                actionUrl: { url: 'https://utah.gov', openInNewTab: true },
                title: 'Utah.Gov',
              },
              {
                actionFunction: FUNCTION_PLACEHOLDER,
                title: 'Custom menu item',
              },
            ],
          },
        },
        title: 'Menu Items',
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
          logo: { htmlString: LOGO_IMAGE },
          showTitle: false,
        },
        title: 'Just Brand',
      },
      {
        settingsSnippet: {
          logo: { htmlString: LOGO_IMAGE },
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
              actionDom: '<div>Hello World! <button>Do not press me.</button></div>',
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
  // --- Main Menu --- //
  {
    options: [
      // -- actionUrl -- //
      {
        settingsSnippet: {
          mainMenu: {
            menuItems: [
              {
                actionUrl: { url: '/' },
                title: 'Home',
              },
            ],
            title: 'Utah Design System Main Menu',
          },
        },
        title: 'Url (Home)',
      },
      // -- actionFunction -- //
      {
        settingsSnippet: {
          mainMenu: {
            menuItems: [
              {
                actionFunction: FUNCTION_PLACEHOLDER,
                title: 'Function',
              },
            ],
            title: 'Utah Design System Main Menu',
          },
        },
        title: 'Function',
      },
      // -- actionFunctionUrl -- //
      {
        settingsSnippet: {
          mainMenu: {
            menuItems: [
              {
                actionFunctionUrl: {
                  actionFunction: FUNCTION_PLACEHOLDER,
                  url: 'https://visible-url.edu',
                },
                title: 'Function/Url',
              },
            ],
            title: 'Utah Design System Main Menu',
          },
        },
        title: 'Func/Url',
      },
      // -- actionMenu -- //
      {
        settingsSnippet: {
          mainMenu: {
            menuItems: [
              {
                actionMenu: [
                  {
                    title: 'child2-1',
                    actionMenu: [
                      {
                        title: 'child2-1-1',
                        actionUrl: { url: '/children' },
                      },
                      {
                        title: 'child2-1-2',
                        actionUrl: { url: '/children' },
                      },
                      {
                        title: 'child2-1-3',
                        actionUrl: { url: '/children' },
                      },
                    ],
                  },
                  {
                    title: 'child2-2',
                    actionMenu: [
                      {
                        title: 'child2-2-1',
                        actionUrl: { url: '/children' },
                      },
                      {
                        title: 'child2-2-2',
                        actionUrl: { url: '/children' },
                      },
                      {
                        title: 'child2-2-3',
                        actionUrl: { url: '/children' },
                      },
                    ],
                  },
                ],
                title: 'Menu',
              },
            ],
            title: 'Utah Design System Main Menu',
          },
        },
        title: 'Menu',
      },
    ],
    title: 'Main Menu',
  },
];

// add combo action item presets that use same settings as the already entered presets

// main menu - all
const mainMenusPreset = utahHeaderPresets.find((preset) => preset.title === 'Main Menu');
if (!mainMenusPreset) {
  // this means 'Main Menu' the preset above got ganked
  throw new Error('utahHeaderPresets: "Main Menu" preset not found.');
}
mainMenusPreset.options.push({
  title: 'All',
  settingsSnippet: {
    mainMenu: {
      menuItems: mainMenusPreset.options.map((option) => option.settingsSnippet.mainMenu.menuItems[0]),
      title: 'Utah Design System Main Menu',
    },
  },
});

// action items - all
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
