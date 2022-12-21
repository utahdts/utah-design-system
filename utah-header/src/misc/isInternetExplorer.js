/**
 * A function that returns true if the currently running browser is Internet Explorer
 * @returns {boolean}
 */
export default function () {
	return !!window.document.documentMode;
}