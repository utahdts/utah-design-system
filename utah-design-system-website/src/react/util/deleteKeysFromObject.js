import { isArray, isObject } from 'lodash';

/**
 * the "key-del" library seemed to be fighting with immer, so rewrote a poor-man's version here
 * remove all matching keys from the object and from any sub-objects
 * assumes passed in obj is mutable
 * @param {{[key: string]: any}} draftObj
 * @param {string[]} keys
 * @returns {{[key: string]: any}}
 */
export function deleteKeysFromObject(draftObj, keys) {
  Object.entries(draftObj)
    .forEach(([key, value]) => {
      if (keys.includes(key)) {
        delete draftObj[key];
      } else if (isObject(value) && !isArray(value)) {
        draftObj[key] = deleteKeysFromObject(value, keys);
      } else if (isArray(value)) {
        value.forEach((arrayValue) => {
          if (isObject(arrayValue) && !isArray(arrayValue)) {
            deleteKeysFromObject(arrayValue, keys);
          }
        });
      }
    });
  return draftObj;
}
