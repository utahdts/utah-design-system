import identity from 'lodash/identity';
import castArray from 'lodash/castArray';
import trim from 'lodash/trim';

/**
 * pass in comma separated list of class name strings to be trimmed, filtered, and joined together with a space
 */
export default (...classNames) => (
  // convert passed in parameters to an array
  castArray(Array.from(classNames))

    // in case classes were passed as an array, flatten the array so its just one level; ie [['1', '2'], '3'] becomes ['1', '2', '3']
    .flat(Infinity)

    // trim spaces off
    .map(trim)

    // remove blanks
    .filter(identity)

    // put a space between them all
    .join(' ')
);
