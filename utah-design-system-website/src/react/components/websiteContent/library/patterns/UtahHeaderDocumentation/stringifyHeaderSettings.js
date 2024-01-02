import { valueAtPath } from '@utahdts/utah-design-system';
import { copyObjectWithoutFields } from '../../../../../util/copyObjectWithoutFields';
import { objectsPathsWithKeys } from '../../../../../util/objectsPathsWithKeys';

export const FUNCTION_PLACEHOLDER = '--replace with a real function--';

/** @typedef {import('@utahdts/utah-design-system-header').Settings} Settings */

/**
 * turns functions and DOM in to strings so they can be saved correctly
 * @param {Settings} settingsObject
 * @returns {string}
 */
export function stringifyHeaderSettings(settingsObject) {
  // !!!! Changes here need to also be made in parseHeaderSettings.js !!!! //
  const customFields = ['actionDom', 'actionFunction', 'icon', 'onAuthChanged', 'onProfile', 'onSignIn', 'onSignOut', 'actionDom', 'onSearch'];
  const actionItems = objectsPathsWithKeys(settingsObject, customFields);

  const copySettings = copyObjectWithoutFields(settingsObject, customFields);

  actionItems.forEach((actionItem) => {
    switch (actionItem.searchKey) {
      case 'actionFunction':
      case 'onAuthChanged':
      case 'onProfile':
      case 'onSignIn':
      case 'onSignOut':
      case 'onSearch': {
        // convert functions to strings (onSearch can be false)
        const isFalseValue = valueAtPath({ object: settingsObject, path: actionItem.path })[actionItem.searchKey] === false;
        valueAtPath({ object: copySettings, path: actionItem.path })[actionItem.searchKey] = isFalseValue ? false : FUNCTION_PLACEHOLDER;
      } break;

      // ignore that actionDom can be a function (the example page just always shows strings since functions are such a bugger to work in the editor)
      case 'actionDom':
      case 'icon': {
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
