import ICON_TYPES from "./IconTypes";
import renderDOM from "./renderDOM";

/**
 * Render an image/icon as an svg, function that returns a rendered dom element, a dom node, or an image url
 * @param {*} icon - Function, svg, dom node, image url
 * @param {string} iconType - The type of icon using the ICON_TYPES enum
 * @param {HTMLCollection|Node} iconWrapper - Where to append the icon
 * @param {[string]} cssClasses - CSS classes to add to the iconWrapper
 * @returns HTMLElement
 */
export default function ({ icon, iconType, iconWrapper, cssClasses }) {
	let renderIcon;

	switch (iconType) {
		case ICON_TYPES.FUNCTION:
			renderIcon = icon();
			break;

		case ICON_TYPES.STRING:
			renderIcon = renderDOM(icon);
			break;

		case ICON_TYPES.URL:
			renderIcon = document.createElement('img');
			renderIcon.src = icon;
			break;

		case ICON_TYPES.DOMNODE:
			renderIcon = icon;
			break;

		default:
			// With no iconType specified, we have to fall back to detection.
			if (typeof icon === 'string') {
				renderIcon = renderDOM(icon);
			} else if (typeof icon === 'object' && icon.src) {
				renderIcon = document.createElement('img');
				renderIcon.src = icon.src;
			} else if (typeof icon === 'function') {
				renderIcon = icon();
			} else {
				renderIcon = icon;
			}
			break;
	}

	if (renderIcon) {
		if (cssClasses) {
			iconWrapper.classList.add(...cssClasses);
		}
		iconWrapper.appendChildAll(renderIcon);
	}
}