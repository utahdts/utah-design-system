// @vitest-environment happy-dom
// @ts-check
import sizes from 'utah-design-system-header/src/js/enumerations/sizes';
import { describe, expect, test } from 'vitest';
import stringifyHeaderSettings, { FUNCTION_PLACEHOLDER } from '../../../../../../../src/react/components/websiteContent/library/patterns/UtahHeaderDocumentation/stringifyHeaderSettings';

/**
 * @typedef {import('utah-design-system-header/src/js/misc/jsDocTypes').Settings} Settings
*/

const MATCH_BASIC_FIELDS = [
  '"showTitle": true',
  '"size": "MEDIUM"',
  '"title": "Utah Design System"',
  '"titleURL": "/"',
  '"mediaSizes": {',
  '"mobile": 640,',
  '"tabletPortrait": 768,',
  '"tabletLandscape": 1024',
];

/**
 * @param {string[]} strings the strings to test to satisfy validity
 * @returns {function(string): boolean}
 */
function doesMatchStrings(strings) {
  return (resultStr) => strings.every((testStr) => resultStr.includes(testStr));
}

describe('stringifyHeaderSettings', () => {
  test('basic', () => {
    /** @type {Settings} */
    const settings = {
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleURL: '/',
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      utahId: false,
    };

    expect(stringifyHeaderSettings(settings)).toSatisfy(doesMatchStrings(MATCH_BASIC_FIELDS));
  });

  test('logo: string', () => {
    /** @type {Settings} */
    const settings = {
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleURL: '/',
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      logo: 'just-a-string',
      utahId: false,
    };

    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([...MATCH_BASIC_FIELDS, '"logo": "just-a-string"']));
  });

  test('logo: DOM', () => {
    /** @type {Settings} */
    const settings = {
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleURL: '/',
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      logo: document.createElement('div'),
      utahId: false,
    };

    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([...MATCH_BASIC_FIELDS, '"logo": "<div></div>"']));
  });

  test('actionItems: actionFunction', () => {
    /** @type {Settings} */
    const settings = {
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleURL: '/',
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      actionItems: [
        {
          // eslint-disable-next-line no-alert
          actionFunction: () => alert('time to die'),
          icon: 'i-am-an-icon',
          showTitle: true,
          title: 'action item for life!',
        },
      ],
      utahId: false,
    };

    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([
      ...MATCH_BASIC_FIELDS,
      `"actionFunction": "${FUNCTION_PLACEHOLDER}"`,
      '"icon": "i-am-an-icon',
      '"showTitle": true',
      '"title": "action item for life!"',
    ]));
  });

  test('actionItems: onSignIn/onSignOut/onProfile', () => {
    /** @type {Settings} */
    const settings = {
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleURL: '/',
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      utahId: {
        currentUser: null,
        onProfile: () => console.log('just right to live'),
        onSignIn: () => console.log('too big to live'),
        onSignOut: () => console.log('too small to live'),
      },
    };

    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([
      ...MATCH_BASIC_FIELDS,
      `"onProfile": "${FUNCTION_PLACEHOLDER}"`,
      `"onSignIn": "${FUNCTION_PLACEHOLDER}"`,
      `"onSignOut": "${FUNCTION_PLACEHOLDER}"`,
      '"currentUser": null',
    ]));
  });

  test('actionItems: actionDom', () => {
    /** @type {Settings} */
    const settings = {
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleURL: '/',
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      actionItems: [
        {
          actionDom: document.createElement('span'),
          icon: 'i-am-an-icon',
          showTitle: true,
          title: 'action item for life!',
        },
      ],
      utahId: false,
    };

    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([
      ...MATCH_BASIC_FIELDS,
      '"actionDom": "<span></span>',
      '"icon": "i-am-an-icon',
      '"showTitle": true',
      '"title": "action item for life!"',
    ]));
  });

  test('actionItems: actionPopupMenu: menuItems: actionFunction', () => {
    /** @type {Settings} */
    const settings = {
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleURL: '/',
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      actionItems: [
        {
          actionPopupMenu: {
            title: 'action-menu-1',
            menuItems: [
              {
                title: 'action-menu-1-a',
                // eslint-disable-next-line no-alert
                actionFunction: () => alert('time to live'),
              },
            ],
          },
          icon: 'i-am-an-icon',
          showTitle: true,
          title: 'action item for life!',
        },
      ],
      utahId: false,
    };

    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([
      ...MATCH_BASIC_FIELDS,
      '"title": "action-menu-1-a"',
      `"actionFunction": "${FUNCTION_PLACEHOLDER}"`,
    ]));
  });

  test('actionItems: actionPopupMenu: menuItems: actionFunction (nested)', () => {
    /** @type {Settings} */
    const settings = {
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleURL: '/',
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      actionItems: [
        {
          actionPopupMenu: {
            title: 'action-menu-1',
            menuItems: [
              {
                title: 'action-menu-1-a',
                actionMenu: [
                  {
                    title: 'action-menu-1-a-1',
                    // eslint-disable-next-line no-alert
                    actionFunction: () => alert('time to live'),
                  },
                ],
              },
            ],
          },
          icon: 'i-am-an-icon',
          showTitle: true,
          title: 'action item for life!',
        },
      ],
      utahId: false,
    };

    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([
      ...MATCH_BASIC_FIELDS,
      '"title": "action-menu-1-a-1"',
      `"actionFunction": "${FUNCTION_PLACEHOLDER}"`,
    ]));
  });
});
