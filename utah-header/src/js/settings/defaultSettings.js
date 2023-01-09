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
      action: () => console.log('Waffle clicked'),
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
