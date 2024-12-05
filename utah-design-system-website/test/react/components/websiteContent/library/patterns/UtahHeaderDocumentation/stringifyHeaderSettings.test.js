import { sizes } from '@utahdts/utah-design-system-header';
import { describe, expect, test } from 'vitest';
import { FUNCTION_PLACEHOLDER, stringifyHeaderSettings } from '../../../../../../../src/react/components/websiteContent/library/patterns/UtahHeaderDocumentation/stringifyHeaderSettings';

/** @typedef {import('@utahdts/utah-design-system-header').Settings} Settings */

const MATCH_BASIC_FIELDS = [
  '"showTitle": true',
  '"size": "MEDIUM"',
  '"title": "Utah Design System"',
  '"titleUrl": "/"',
  '"mediaSizes": {',
  '"mobile": 640,',
  '"tabletPortrait": 768,',
  '"tabletLandscape": 1024',
];

/**
 * @param {string[]} strings the strings to test to satisfy validity
 * @returns {function(string): boolean} true if all the strings match the testStr
 */
function doesMatchStrings(strings) {
  return (resultStr) => strings.every((testStr) => resultStr.includes(testStr));
}

describe('stringifyHeaderSettings', () => {
  test('basic', () => {
    /** @type {Settings} */
    const settings = {
      applicationType: 'wordpress',
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleUrl: '/',
      mainMenu: {
        menuItems: [],
        title: 'test-menu',
      },
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      utahId: false,
    };

    expect(stringifyHeaderSettings(settings)).toSatisfy(doesMatchStrings(MATCH_BASIC_FIELDS));
  });

  test('actionItems: actionFunction', () => {
    /** @type {Settings} */
    const settings = {
      applicationType: 'wordpress',
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleUrl: '/',
      mainMenu: {
        menuItems: [],
        title: 'test-menu',
      },
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
      applicationType: 'wordpress',
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleUrl: '/',
      mainMenu: {
        menuItems: [],
        title: 'test-menu',
      },
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      utahId: {
        currentUser: null,
        onProfile: () => { 'just right to live'; },
        onSignIn: () => { 'too big to live'; },
        onSignOut: () => { 'too small to live'; },
      },
    };
    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([
      ...MATCH_BASIC_FIELDS,
      `"onProfile": "${FUNCTION_PLACEHOLDER}"`,
      `"onSignIn": "${FUNCTION_PLACEHOLDER}"`,
      `"onSignOut": "${FUNCTION_PLACEHOLDER}"`,
    ]));
  });

  test('actionItems: onAuthChanged', () => {
    /** @type {Settings} */
    const settings = {
      applicationType: 'wordpress',
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleUrl: '/',
      mainMenu: {
        menuItems: [],
        title: 'test-menu',
      },
      mediaSizes: {
        mobile: 640,
        tabletPortrait: 768,
        tabletLandscape: 1024,
      },
      utahId: {
        currentUser: undefined,
        onAuthChanged: () => { 'too small to live'; },
      },
    };

    const result = stringifyHeaderSettings(settings);
    expect(result).toSatisfy(doesMatchStrings([
      ...MATCH_BASIC_FIELDS,
      `"onAuthChanged": "${FUNCTION_PLACEHOLDER}"`,
    ]));
    // undefined doesn't get carried over so that it is really undefined
    expect(result.includes('currentUser')).toBeFalsy();
  });

  test('actionItems: actionPopupMenu: menuItems: actionFunction', () => {
    /** @type {Settings} */
    const settings = {
      applicationType: 'wordpress',
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleUrl: '/',
      mainMenu: {
        menuItems: [],
        title: 'test-menu',
      },
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
      applicationType: 'wordpress',
      showTitle: true,
      size: sizes.MEDIUM,
      title: 'Utah Design System',
      titleUrl: '/',
      mainMenu: {
        menuItems: [],
        title: 'test-menu',
      },
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
