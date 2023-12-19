import { castArray, identity, trim } from 'lodash';

/**
 * pass in comma separated list of class name strings to be trimmed, filtered, and joined together with a space
 * @param {(string | boolean | any[] | null | undefined)[]} classNames really can be anything, but should be string if truey
 * @returns {string}
 */
export function joinClassNames(...classNames) {
  return (
    // convert passed in parameters to an array
    castArray(Array.from(classNames))

      // in case classes were passed as an array, flatten the array so its just one level; ie [['1', '2'], '3'] becomes ['1', '2', '3']
      .flat(Infinity)

      // trim spaces off
      .map((className) => (typeof className === 'string' ? trim(className) : className))

      // remove blanks
      .filter(identity)

      // put a space between them all
      .join(' ')
  );
}
