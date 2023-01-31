import valueAtPath from '@utahdts/utah-design-system/react/util/state/valueAtPath';
import copyObjectWithoutFields from '../../../../../util/copyObjectWithoutFields';
import objectsPathsWithKeys from '../../../../../util/objectsPathsWithKeys';

/**
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
*/

/**
 * turns functions and DOM in to strings so they can be saved correctly
 * @param {Settings} settingsObject
 * @returns {string}
 */
export default function stringifyHeaderSettings(settingsObject) {
  const customFields = ['actionFunction', 'actionDom', 'icon', 'logo'];
  const actionItems = objectsPathsWithKeys(settingsObject, customFields);

  const copySettings = copyObjectWithoutFields(settingsObject, customFields);

  actionItems.forEach((actionItem) => {
    switch (actionItem.searchKey) {
      case 'actionFunction':
        // convert functions to strings
        valueAtPath({ object: copySettings, path: actionItem.path })[actionItem.searchKey] = actionItem.object[actionItem.searchKey].toString();
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

  return JSON.stringify(copySettings);
}
