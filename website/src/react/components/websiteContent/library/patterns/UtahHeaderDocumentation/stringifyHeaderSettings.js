import { valueAtPath } from '@utahdts/utah-design-system';
import copyObjectWithoutFields from '../../../../../util/copyObjectWithoutFields';
import objectsPathsWithKeys from '../../../../../util/objectsPathsWithKeys';

export const FUNCTION_PLACEHOLDER = '--replace with a real function--';

/**
 * @typedef {import('utah-design-system-header/src/js/misc/jsDocTypes').Settings} Settings
*/

/**
 * turns functions and DOM in to strings so they can be saved correctly
 * @param {Settings} settingsObject
 * @returns {string}
 */
export default function stringifyHeaderSettings(settingsObject) {
  // !!!! Changes here need to also be made in parseHeaderSettings.js !!!! //
  const customFields = ['actionDom', 'actionFunction', 'icon', 'logo', 'onAuthChanged', 'onProfile', 'onSignIn', 'onSignOut'];
  const actionItems = objectsPathsWithKeys(settingsObject, customFields);

  const copySettings = copyObjectWithoutFields(settingsObject, customFields);

  actionItems.forEach((actionItem) => {
    switch (actionItem.searchKey) {
      case 'actionFunction':
      case 'onAuthChanged':
      case 'onProfile':
      case 'onSignIn':
      case 'onSignOut':
        // convert functions to strings
        valueAtPath({ object: copySettings, path: actionItem.path })[actionItem.searchKey] = FUNCTION_PLACEHOLDER;
        break;

      case 'actionDom':
      case 'icon':
      case 'logo': {
        const possiblyDOM = actionItem.object[actionItem.searchKey];
        valueAtPath({ object: copySettings, path: actionItem.path })[actionItem.searchKey] = (
          possiblyDOM instanceof window.Element ? possiblyDOM.outerHTML : possiblyDOM
        );
      } break;

      default:
        throw new Error(`stringifyHeaderSettings: Invalid searchKey for actionItem: '${actionItem.searchKey}'`);
    }
  });

  return JSON.stringify(copySettings, undefined, 2);
}
