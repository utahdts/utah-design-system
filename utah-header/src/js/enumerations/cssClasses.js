// @ts-check
/**
 * @param {string | string[]} cssClasses - the class or classes to which to prefix a period, multiples will be combined as a single selector
 * ie: `.class1.class2` instead of `.class1 .class2`
 * @returns {string} the combined classes
 */
export function getCssClassSelector(cssClasses) {
  return `.${(Array.isArray(cssClasses) ? cssClasses : [cssClasses]).join('.')}`;
}

/**
 * An enum for CSS classes used in the utah.gov header
 * @enum {string}
 */
export default {
  UTAH_DESIGN_SYSTEM: 'utah-design-system',
  HEADER: 'utds-header',

  // HTML elements
  ICON_BUTTON: 'icon-button',

  // Modifiers
  VISUALLY_HIDDEN: 'visually-hidden',

  // Header Components
  ACTION_ITEM: 'utds-header-action-item',
  ACTION_ITEM__ICON_BUTTON: 'utds-header-action-item__icon-button',
  ACTION_ITEM__TITLE: 'utds-header-action-item__title',

  CITIZEN_EXPERIENCE: 'utds-citizen-experience-wrapper',

  LOGO_SVG: 'utah-logo-svg',
  LOGO_VERT_LINE: 'utds-logo-vert-line',
  LOGO: 'utds-logo-wrapper',

  SIZE__LARGE: 'large',
  SIZE__MEDIUM: 'medium',

  TITLE: 'utds-title-wrapper',
  TITLE__LOGO: 'utds-title-wrapper__logo',
  TITLE__TITLE: 'utds-title-wrapper__title',

  UTAH_ID: 'utds-utah-id-wrapper',
  UTAH_ID__SIGN_IN: 'utds-utah-id__sign-in',
};
