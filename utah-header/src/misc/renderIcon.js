// TODO: review this file for inclusion
import ICON_TYPES from './IconTypes';
import renderDOM from './renderDOM';

/**
 * Render an image/icon as an svg, function that returns a rendered dom element, a dom node, or an image url
 * @param {*} icon - Function, svg, dom node, image url
 * @param {string} iconType - The type of icon using the ICON_TYPES enum
 * @param {HTMLCollection|Node} iconWrapper - Where to append the icon
 * @param {[string]} cssClasses - CSS classes to add to the iconWrapper
 * @returns HTMLElement
 */
export default function renderIcon({
  icon,
  iconType,
  iconWrapper,
  cssClasses,
}) {
  let renderedIcon;

  switch (iconType) {
    case ICON_TYPES.FUNCTION:
      renderedIcon = icon();
      break;

    case ICON_TYPES.STRING:
      renderedIcon = renderDOM(icon);
      break;

    case ICON_TYPES.URL:
      renderedIcon = document.createElement('img');
      renderedIcon.src = icon;
      break;

    case ICON_TYPES.DOMNODE:
      renderedIcon = icon;
      break;

    default:
      // With no iconType specified, we have to fall back to detection.
      if (typeof icon === 'string') {
        renderedIcon = renderDOM(icon);
      } else if (typeof icon === 'object' && icon.src) {
        renderedIcon = document.createElement('img');
        renderedIcon.src = icon.src;
      } else if (typeof icon === 'function') {
        renderedIcon = icon();
      } else {
        renderedIcon = icon;
      }
      break;
  }

  if (renderedIcon) {
    if (cssClasses) {
      iconWrapper.classList.add(...cssClasses);
    }
    iconWrapper.appendChildAll(renderedIcon);
  }
}
