// @ts-check
/**
 * @param {string | string[]} domConstants - the class or classes to which to prefix a period, multiples will be combined as a single selector
 * ie: `.class1.class2` instead of `.class1 .class2`
 * @returns {string} the combined classes
 */
export function getCssClassSelector(domConstants) {
  return `.${(Array.isArray(domConstants) ? domConstants : [domConstants]).join('.')}`;
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

  // IDs
  CSS_HEADER_MEDIA_TAG_ID: 'cssHeaderMediaTag',

  // Modifiers
  VISUALLY_HIDDEN: 'visually-hidden',

  // Replacement Placeholders
  MEDIA_SIZE__MOBILE__PLACEHOLDER: 'var(--media-size__mobile__PLACEHOLDER)',
  MEDIA_SIZE__TABLET_LANDSCAPE__PLACEHOLDER: 'var(--media-size__tablet-landscape__PLACEHOLDER)',
  MEDIA_SIZE__TABLET_PORTRAIT__PLACEHOLDER: 'var(--media-size__tablet-portrait__PLACEHOLDER)',

  // Header Components
  ACTION_ITEM: 'utds-header-action-item',
  ACTION_ITEM__ICON_BUTTON: 'utds-header-action-item__icon-button',
  ACTION_ITEM__ICON_BUTTON_TITLE: 'utds-header-action-item__icon-button--has-title',
  ACTION_ITEM__TITLE: 'utds-header-action-item__title',

  BADGE_WRAPPER: 'utds-badge__wrapper',
  BADGE_WRAPPER__SMALL: 'utds-badge__wrapper--small',

  CITIZEN_EXPERIENCE: 'utds-citizen-experience-wrapper',

  LOGO_SVG: 'utah-logo-svg',
  LOGO_VERT_LINE: 'utds-logo-vert-line',
  LOGO: 'utds-logo-wrapper',

  POPUP_MENU: 'utds-header-popup-menu',
  POPUP_MENU__LINK: 'utds-header-popup-menu__link',
  POPUP_MENU__LINK_TEXT: 'utds-header-popup-menu__link-text',
  POPUP__HIDDEN: 'utds-popup__wrapper--hidden',
  POPUP__VISIBLE: 'utds-popup__wrapper--visible',

  POPUP_ARROW: 'utds-popup__arrow',
  POPUP_CONTENT_WRAPPER: 'utds-popup__content',
  POPUP_WRAPPER: 'utds-popup__wrapper',

  SIZE__LARGE: 'large',
  SIZE__MEDIUM: 'medium',

  TITLE: 'utds-title-wrapper',
  TITLE__LOGO: 'utds-title-wrapper__logo',
  TITLE__TITLE: 'utds-title-wrapper__title',

  UTAH_ID: 'utds-utah-id-wrapper',
  UTAH_ID__SIGN_IN: 'utds-utah-id__sign-in',
};
