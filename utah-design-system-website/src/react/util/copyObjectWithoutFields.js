/**
 * deep copy an object but skip certain keys. This is useful for if functions or DOM or other things
 * are in the object that can't be copied. structuredClone almost does the job but gets errors cloning
 * DOM and functions. JSON.parse(JSON.stringify(object)) works but doesn't skip fields.
 * @param {Record<string, any> | any[]} object the object in to which to search
 * @param {string[]} skipKeys the keys for which to search in the object and its children
 * @returns {Record<string, any> | any[]} the objects with the key
 */
export function copyObjectWithoutFields(object, skipKeys) {
  return JSON.parse(JSON.stringify(
    object,
    (key, value) => (skipKeys.includes(key) ? undefined : value)
  ));
}
