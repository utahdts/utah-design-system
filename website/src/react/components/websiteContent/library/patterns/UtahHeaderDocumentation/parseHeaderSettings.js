import valueAtPath from '@utahdts/utah-design-system/react/util/state/valueAtPath';
import { renderDOM } from 'utah-design-system-header/src/js/misc/renderDOM';
import objectsPathsWithKeys from '../../../../../util/objectsPathsWithKeys';

/**
 * @typedef {import('utah-design-system-header/src/js/misc/jsDocTypes').Settings} Settings
*/

/**
 * turns string functions and DOM in to actual functions and DOM
 * @param {string} settingsString
 * @returns {Settings}
 */
export default function parseHeaderSettings(settingsString) {
  /** @type {Settings} */
  const resultSettings = JSON.parse(settingsString);

  const customFields = ['actionFunction', 'actionDom', 'icon', 'logo'];
  const actionItems = objectsPathsWithKeys(resultSettings, customFields);

  actionItems.forEach((actionItem) => {
    switch (actionItem.searchKey) {
      case 'actionFunction': {
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
