/**
 * Convert an input string such as a title to a valid html id
 * @param {string} inputString The string to convert to an html id string
 */
export default function stringToId(inputString) {
  let retVal;
  retVal = inputString?.toLowerCase();
  retVal = retVal?.replaceAll(' ', '-');
  retVal = retVal?.replaceAll(/[^a-zA-Z0-9-]+/g, '');
  return retVal;
}
