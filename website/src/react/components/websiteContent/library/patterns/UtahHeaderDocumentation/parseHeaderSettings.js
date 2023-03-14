import { renderDOM, valueAtPath } from '@utahdts/utah-design-system';
import objectsPathsWithKeys from '../../../../../util/objectsPathsWithKeys';

/**
 * @typedef {import('utah-design-system-header/src/js/misc/jsDocTypes').Settings} Settings
*/

export class ParseHeaderSettingsError extends Error {
}

/**
 * turns string functions and DOM in to actual functions and DOM
 * @param {string} settingsString
 * @returns {Settings}
 */
export default function parseHeaderSettings(settingsString) {
  /** @type {Settings} */
  let resultSettings;
  try {
    resultSettings = JSON.parse(settingsString);
  } catch (e) {
    throw new ParseHeaderSettingsError(e);
  }

  // !!!! Changes here need to also be made in stringifyHeaderSettings.js !!!! //
  const customFields = ['actionDom', 'actionFunction', 'icon', 'logo', 'onAuthChanged', 'onProfile', 'onSignIn', 'onSignOut'];
  const actionItems = objectsPathsWithKeys(resultSettings, customFields);

  actionItems.forEach((actionItem) => {
    switch (actionItem.searchKey) {
      case 'actionFunction':
      case 'onAuthChanged':
      case 'onProfile':
      case 'onSignIn':
      case 'onSignOut': {
        // convert function strings to actual MOCKED functions with contents as an alert
        const functionObject = valueAtPath({ object: resultSettings, path: actionItem.path });
        // eslint-disable-next-line no-alert
        functionObject[actionItem.searchKey] = (() => alert('Utah Header - placeholder function invoked'));
      } break;

      case 'actionDom':
      case 'icon':
      case 'logo': {
        const domString = actionItem.object[actionItem.searchKey];
        valueAtPath({ object: resultSettings, path: actionItem.path })[actionItem.searchKey] = (
          (!domString || domString === 'null') ? null : renderDOM(domString)
        );
      } break;

      default:
        throw new Error(`parseHeaderSettings: Invalid searchKey for actionItem: '${actionItem.searchKey}'`);
    }
  });

  return resultSettings;
}
