// @ts-check
import notNull from './notNull';

/** @returns {string} */
export default function uuidv4() {
  return (
    // @ts-ignore
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
      .replace(
        /[018]/g,
        /**
         * @param {number} c
         * @returns {string}
         */
        // eslint-disable-next-line no-bitwise
        (c) => (c ^ notNull(crypto.getRandomValues(new Uint8Array(1))[0], 'uuidv4: crypto') & (15 >> c) / 4).toString(16)
      )
  );
}
