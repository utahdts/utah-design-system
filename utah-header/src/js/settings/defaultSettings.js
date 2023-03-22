// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import AlertIcon from '../renderables/icons/html/AlertIcon.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import GearIcon from '../renderables/icons/html/GearIcon.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import QuestionIcon from '../renderables/icons/html/QuestionIcon.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import WaffleIcon from '../renderables/icons/html/WaffleIcon.html?raw';

import childrenMenuTypes from '../enumerations/childrenMenuTypes';
import sizes from '../enumerations/sizes';

/**
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
*/

/**
 * !~! Do not use defaultSettings directly !~!
 * Interact with `settings` using getUtahHeaderSettings() and setUtahHeaderSettings().
 * @type {Settings} the current settings of the header
 */
export default {
  actionItems: [
    {
      actionPopupMenu: {
        menuItems: [
          {
            actionUrl: { url: 'https://google.com?search=how realisitic can you be' },
            title: 'Item #1',
          },
          {
            actionUrl: { url: 'https://utah.gov', openInNewTab: true },
            title: 'Utah.Gov',
          },
          {
            actionFunction: (e) => {
              e.stopPropagation();
              e.preventDefault();
              // eslint-disable-next-line no-console
              console.log('Custom menu item triggered');
            },
            title: 'Custom menu item',
          },
          {
            actionMenu: [
              {
                title: 'i am a child',
                actionMenu: [
                  {
                    title: 'i am a child',
                    actionUrl: { url: 'https://dts.utah.gov' },
                  },
                  {
                    title: 'i am a child 2oo',
                    actionUrl: { url: 'https://dts.utah.gov/2' },
                  },
                ],
              },
              {
                title: 'i am a child 2oo',
                actionMenu: [
                  {
                    title: 'i am a child2',
                    actionUrl: { url: 'https://dts.utah.gov' },
                  },
                  {
                    title: 'i am a child 2oo2',
                    actionUrl: { url: 'https://dts.utah.gov/2' },
                  },
                ],
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
      actionFunction: () => (
        // eslint-disable-next-line no-console
        console.log('Alerts clicked')
      ),
      badge: {
        // Note: make sure the `label` is plural/singular to match the value
        label: 'Unread Alert',
        value: 1,
      },
      icon: AlertIcon,
      showTitle: false,
      title: 'Alerts',
    },
    {
      actionDom: (() => {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode('Hello World!'));
        const button = document.createElement('button');
        button.appendChild(document.createTextNode('Do not press me.'));
        div.appendChild(button);
        return div;
      }),
      badge: {
        // Note: make sure the `label` is plural/singular to match the value
        label: 'Help Items Available',
      },
      icon: QuestionIcon,
      showTitle: false,
      title: 'Help',
    },
    {
      actionDom: (() => {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode('Toggle Language'));
        const button = document.createElement('button');
        button.appendChild(document.createTextNode('Speak Different'));
        button.onclick = () => alert('lorem ipsum');
        div.appendChild(button);
        return div;
      }),
      icon: GearIcon,
      showTitle: false,
      title: 'Settings',
    },
  ],
  mediaSizes: {
    mobile: 640,
    tabletPortrait: 768,
    tabletLandscape: 1024,
  },
  onSearch: (search) => alert(search),
  showTitle: true,
  size: sizes.MEDIUM,
  title: 'Utah Design System',
  titleURL: '/',
  utahId: true,
  mainMenu: {
    menuItems: [
      {
        actionUrl: { url: '/' },
        title: 'Home',
      },
      {
        actionUrl: { url: '#' },
        title: 'Link to Somewhere',
      },
      {
        isSelected: true,
        actionFunction: () => alert('hello yous guy'),
        title: 'do func',
      },
      {
        actionMenu: [
          {
            title: 'Guidelines and Standards',
            actionUrl: { url: '/guidelines' },
          },
        ],
        title: 'Guidelines/Standards',
      },
      {
        actionMenu: [
          {
            title: 'child1',
            actionMenu: [
              {
                title: 'child1-1',
                actionMenu: [
                  {
                    title: 'child1-1-1',
                    actionUrl: { url: '/children' },
                  },
                  {
                    title: 'child1-1-2',
                    actionUrl: { url: '/children' },
                  },
                  {
                    title: 'child1-1-3',
                    actionUrl: { url: '/children' },
                  },
                ],
              },
              {
                title: 'child1-2',
                actionMenu: [
                  {
                    title: 'child1-2-1',
                    actionUrl: { url: '/children' },
                  },
                  {
                    title: 'child1-2-2',
                    actionUrl: { url: '/children' },
                  },
                  {
                    title: 'child1-2-3',
                    actionUrl: { url: '/children' },
                  },
                ],
              },
            ],
          },
          {
            title: 'child2',
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
          },
        ],
        childrenMenuType: childrenMenuTypes.FLYOUT,
        title: 'Childrens',
      },
      {
        actionMenu: [
          {
            title: 'Title of section 1',
            actionMenu: [
              {
                title: 'child1-1',
                actionMenu: [
                  {
                    title: 'child1-1-1',
                    actionUrl: { url: '/children' },
                  },
                  {
                    title: 'child1-1-2',
                    actionUrl: { url: '/children' },
                  },
                  {
                    title: 'child1-1-3',
                    actionUrl: { url: '/children' },
                  },
                ],
              },
              {
                title: 'child1-2',
                actionMenu: [
                  {
                    title: 'child1-2-1',
                    actionUrl: { url: '/children' },
                  },
                  {
                    title: 'child1-2-2',
                    actionUrl: { url: '/children' },
                  },
                  {
                    title: 'child1-2-3',
                    actionUrl: { url: '/children' },
                  },
                ],
              },
            ],
          },
          {
            title: 'Title of section 2',
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
          },
        ],
        childrenMenuType: childrenMenuTypes.MEGA_MENU,
        title: 'MEGA MENU!',
      },
    ],
    title: 'Utah Design System Main Menu',
  },
};
