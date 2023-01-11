// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import WaffleIcon from '../renderables/icons/html/WaffleIcon.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import QuestionIcon from '../renderables/icons/html/QuestionIcon.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import AlertIcon from '../renderables/icons/html/AlertIcon.html?raw';
import sizes from '../enumerations/sizes';

/**
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
*/

/**
 * !~! Do not use defaultSettings directly !~!
 * Interact with `settings` using getSettings() and setSettings().
 * @type {Settings} the current settings of the header
 * */
export default {
  actionItems: [
    {
      action: {
        menuItems: [
          {
            action: { url: 'https://google.com?search=how realisitic can you be' },
            title: 'Item #1',
          },
          {
            action: { url: 'https://utah.gov', openInNewTab: true },
            title: 'Utah.Gov',
          },
          {
            action: (e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log('Custom menu item triggered');
            },
            title: 'Custom menu item',
          },
          {
            action: [
              {
                title: 'i am a child',
                action: { url: 'https://dts.utah.gov' },
              },
              {
                title: 'i am a child 2oo',
                action: { url: 'https://dts.utah.gov/2' },
              },
            ],
            title: 'I have children!!',
          },
        ],
        title: 'Divisions Menu',
      },
      className: 'icon-waffle',
      icon: WaffleIcon,
      showTitle: true,
      title: 'Divisions',
    },
    {
      action: () => console.log('Alerts clicked'),
      icon: AlertIcon,
      showTitle: false,
      title: 'Alerts',
    },
    {
      action: () => console.log('Help clicked'),
      icon: QuestionIcon,
      showTitle: false,
      title: 'Help',
    },
  ],
  size: sizes.MEDIUM,
  title: null,
};
