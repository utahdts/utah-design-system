/**
 * Given a string, escape any characters that are reserved for regex
 * @param {string} str - The string to escape
 * @returns {string}
 */
export default function (str) {
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}