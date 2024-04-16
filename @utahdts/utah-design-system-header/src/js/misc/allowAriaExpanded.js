/**
 * menus do not use aria-expanded because the popups are always rendered and only
 * shown/hid. Yet to spring readers, they are always visible so they don't need to
 * report expanded.
 * @param {Element} element
 * @returns {boolean}
 */
export function allowAriaExpanded(element) {
  return !element.closest('.menu-item__title') && !element.closest('.vertical-menu__title');
}
