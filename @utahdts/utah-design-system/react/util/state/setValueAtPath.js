import { cloneDeep, isArray, isObject } from 'lodash';
import { notNull } from '../notNull';

/**
 * Deep cloning the entire state is rarely the desired functionality, especially
 * if there are large chunks of data in the state causing the clone to be slow.
 * Keep in mind that React does pointer comparison to see if an object has changed
 * so shallow cloning all objects in the path notifies React of changes along that path.
 * Methodology
 * 1) do a shallow clone of the state
 * 2) shallow clone the object that is changing and all the objects in the path to that object
 * 3) deep clone the new value
 *
 * note: if path to the object doesn't exist then it won't be created; but if the field in the object doesn't exist then it will be created
 *
 * ie field not there
 * state = { a: { b: { c: 3 } } }
 * path = a.b
 * field = d
 * value = 4
 * result: { a: { b: { d: 4, c: 3 } } }
 * note that the 'd' field did get created
 *
 * ie object not there
 * state = { a: { b: { c: 3 } } }
 * path = a.b.d
 * field = e
 * value = 4
 * result: { a: { b: { c: 3 } } }
 * note that the 'e' field did not get created because there is no 'd' object
 * @template SetValueAtPathT
 * @param {object} params
 * @param {Record<string, any>} params.object
 * @param {string} params.path
 * @param {SetValueAtPathT} params.value
 * @returns {Record<string, any>}
 */
export function setValueAtPath({ object, path, value }) {
  // not a deep clone; does not create a new object because immer will do that
  const result = object || {};

  // payload can be an array of targets or a single one
  const parts = (path || '').split('.');
  const pathPieces = parts.slice(0, -1);
  const field = notNull(parts.pop(), 'setValueAtPath: paths are empty');
  const valueCloned = cloneDeep(value);

  if (path) {
    // shallow clone all objects in the path
    const targetObject = pathPieces.reduce((draftNextLevel, pathPiece) => {
      // if current level isn't an object then childObj is undefined (can't get a field out of a non-object)
      let childObj;
      if (isObject(draftNextLevel)) {
        childObj = draftNextLevel[pathPiece];
        if (childObj === undefined || childObj === null) {
          // childObj is missing, so add a blank object
          draftNextLevel[pathPiece] = {};
          childObj = draftNextLevel[pathPiece];
        } else if (isObject(childObj)) {
          // no need to clone a non-object
          if (isArray(childObj)) {
            childObj = childObj.concat([]);
          } else {
            childObj = { ...childObj };
          }
          // put clone back in state so that the pointers change which will trigger react to render
          draftNextLevel[pathPiece] = childObj;
        }
      }
      return childObj;
    }, result);

    // set value of target object
    if (targetObject && isObject(targetObject)) {
      // set deep cloned value
      targetObject[field] = valueCloned;
    }
  } else if (field) {
    // set field on root state object
    result[field] = valueCloned;
  }

  return result;
}
