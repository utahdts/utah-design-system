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
  // Global Information
  UTAH_DESIGN_SYSTEM: 'utah-design-system',
  HEADER: 'utds-header',

  // HTML elements
  ICON_BUTTON: 'icon-button',

  // IDs
  CSS_HEADER_MEDIA_TAG_ID: 'cssHeaderMediaTag',

  // Modifiers
  IS_CLOSED: 'is-closed',
  IS_OPEN: 'is-open',
  VISUALLY_HIDDEN: 'visually-hidden',

  // Replacement Placeholders
  MEDIA_SIZE__MOBILE__PLACEHOLDER: 'media-size__mobile__PLACEHOLDER',
  MEDIA_SIZE__TABLET_LANDSCAPE__PLACEHOLDER: 'media-size__tablet-landscape__PLACEHOLDER',
  MEDIA_SIZE__TABLET_PORTRAIT__PLACEHOLDER: 'media-size__tablet-portrait__PLACEHOLDER',

  // Header Components
  ACTION_ITEM: 'utds-header-action-item',
  ACTION_ITEM__ICON_BUTTON: 'utds-header-action-item__icon-button',
  ACTION_ITEM__ICON_BUTTON_TITLE: 'utds-header-action-item__icon-button--has-title',
  ACTION_ITEM__TITLE: 'utds-header-action-item__title',

  BADGE__LABEL: 'utds-badge__label',
  BADGE__VALUE: 'utds-badge__value',
  BADGE_WRAPPER: 'utds-badge__wrapper',
  BADGE_WRAPPER__SMALL: 'utds-badge__wrapper--small',
  BADGE_WRAPPER__ACTION_ITEM: 'utds-badge__wrapper--action-item',

  CITIZEN_EXPERIENCE: 'utds-citizen-experience-wrapper',

  LOGO_SVG: 'utah-logo-svg',
  LOGO_VERT_LINE: 'utds-logo-vert-line',
  LOGO: 'utds-logo-wrapper',

  MAIN_MENU: 'main-menu__wrapper',
  MAIN_MENU__MENU_TOP: 'main-menu__menu-top',
  MAIN_MENU__NAV: 'main-menu__nav',
  MAIN_MENU__OUTER: 'main-menu__outer',
  MAIN_MENU__SEARCH: 'main-menu__search',
  MAIN_MENU__TITLE: 'main-menu__title',

  MENU_ITEM: 'menu-item',
  MENU_ITEM__BUTTON_TITLE: 'menu-item__button-title',
  MENU_ITEM__LINK_TITLE: 'menu-item__link-title',
  MENU_ITEM__SELECTED: 'menu-item--selected',
  MENU_ITEM__TITLE: 'menu-item__title',
  MENU_ITEM__FLY_OUT: 'menu-item--fly_out',
  MENU_ITEM__INLINE: 'menu-item--inline',
  MENU_ITEM__MEGA_MENU: 'menu-item--mega-menu',

  POPUP_MENU: 'vertical-menu',
  POPUP_MENU__BUTTON_TITLE: 'vertical-menu__button-title',
  POPUP_MENU__CHEVRON: 'vertical-menu__chevron',
  POPUP_MENU__DIVIDER: 'vertical-menu__divider',
  POPUP_MENU__LINK_TEXT: 'vertical-menu__link-text',
  POPUP_MENU__LINK_TITLE: 'vertical-menu__link-title',
  POPUP_MENU__PLAIN_TITLE: 'vertical-menu__plain-title',
  POPUP_MENU__TITLE: 'vertical-menu__title',

  POPUP__HIDDEN: 'popup__wrapper--hidden',
  POPUP__VISIBLE: 'popup__wrapper--visible',
  POPUP__WRAPPER: 'popup__wrapper',

  EXTERNAL_LINK: 'utds-icon-after-external-link',
  EXTERNAL_LINK__NEW_TAB: 'utds-new-tab-link-a11y',

  POPUP_ARROW: 'popup__arrow',
  POPUP_CONTENT_WRAPPER: 'popup__content',
  POPUP_WRAPPER: 'popup__wrapper',

  SIZE__LARGE: 'large',
  SIZE__MEDIUM: 'medium',

  TITLE: 'utds-title-wrapper',
  TITLE__LOGO: 'utds-title-wrapper__logo',
  TITLE__TITLE: 'utds-title-wrapper__title',

  UTAH_ID: 'utds-utah-id-wrapper',
  UTAH_ID__BUTTON: 'utds-utah-id__button',
};
