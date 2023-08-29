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
  FOOTER: 'utds-footer',

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
  ACTION_ITEMS__WRAPPER: 'utds-action-items-wrapper',

  BADGE__LABEL: 'utds-badge__label',
  BADGE__VALUE: 'utds-badge__value',
  BADGE_WRAPPER: 'utds-badge__wrapper',
  BADGE_WRAPPER__SMALL: 'utds-badge__wrapper--small',
  BADGE_WRAPPER__ACTION_ITEM: 'utds-badge__wrapper--action-item',

  CITIZEN_EXPERIENCE: 'utds-citizen-experience-wrapper',
  CITIZEN_EXPERIENCE_MOBILE: 'utds-citizen-experience-wrapper--mobile',

  FOOTER_COPYRIGHT_YEAR: 'utds-footer__copyright-year',
  FOOTER_HORIZONTAL_DIVIDER: 'utds-footer__horizontal-divider',
  FOOTER_LINKS: 'utds-footer__links',

  LOGO: 'utds-logo-wrapper',
  LOGO_OFFICIAL_CLOSE_BUTTON: 'utds-official-website-popup__close-button',
  LOGO_OFFICIAL_WRAPPER: 'utds-official-website-popup__wrapper',
  LOGO_SVG: 'utah-logo-svg',
  LOGO_VERT_LINE: 'utds-logo-vert-line',

  MAIN_MENU: 'main-menu__wrapper',
  MAIN_MENU__HAMBURGER: 'main-menu__hamburger',
  MAIN_MENU__HAMBURGER_ID: 'utds-main-menu__hamburger',
  MAIN_MENU__HAMBURGER_ICON_ID: 'utds-main-menu__hamburger-icon',
  MAIN_MENU__MENU_TOP: 'main-menu__menu-top',
  MAIN_MENU__NAV: 'main-menu__nav',
  MAIN_MENU__OUTER: 'main-menu__outer',
  MAIN_MENU__REMOVED: 'main-menu-is-removed',
  MAIN_MENU__SEARCH: 'main-menu__search',
  MAIN_MENU__TITLE: 'main-menu__title',

  MENU_ITEM: 'menu-item',
  MENU_ITEM__ARROW: 'menu-item__menu-arrow',
  MENU_ITEM__BUTTON_TITLE: 'menu-item__button-title',
  MENU_ITEM__LINK_TITLE: 'menu-item__link-title',
  MENU_ITEM__LINK_TITLE_SPAN: 'menu-item__link-title-span',
  MENU_ITEM__SELECTED: 'menu-item--selected',
  MENU_ITEM__SELECTED_PARENT: 'menu-item--selected_parent',
  MENU_ITEM__TITLE: 'menu-item__title',
  MENU_ITEM__FLY_OUT: 'menu-item--fly_out',
  MENU_ITEM__INLINE: 'menu-item--inline',
  MENU_ITEM__MEGA_MENU: 'menu-item--mega-menu',

  DESKTOP__HIDDEN: 'utds-header-desktop--hidden',
  MOBILE__HIDDEN: 'utds-header-mobile--hidden',
  MOBILE__UTAH_ID: 'utds-header-mobile__utah-id-wrapper',
  MOBILE__VIP_ACTION_ITEMS__LEFT: 'utds-header-mobile__vip-action-items--left',
  MOBILE__VIP_ACTION_ITEMS__RIGHT: 'utds-header-mobile__vip-action-items--right',

  ACTION_ITEM__SELECTED: 'utds-header-mobile-menu__action-item--selected',
  MOBILE_MENU: 'utds-header-mobile-menu',
  MOBILE_MENU__ACTION_BAR: 'utds-header-mobile-menu__action-bar',
  MOBILE_MENU__BACKDROP: 'utds-header-mobile-menu__backdrop',
  MOBILE_MENU__CONTENT: 'utds-header-mobile-menu__content',
  MOBILE_MENU__CONTENT_ITEM: 'utds-header-mobile-menu__content-item',
  MOBILE_MENU__LAST_FOCUSABLE: 'utds-header-mobile-menu__hidden-last-focusable',
  MOBILE_MENU__WRAPPER: 'utds-header-mobile-menu__wrapper',

  MOBILE_MENU_ACTON_BAR__HOME_ID: 'utds-header-mobile-menu_action-bar__home',
  MOBILE_MENU_ACTON_BAR__PROFILE_ID: 'utds-header-mobile-menu_action-bar__profile',
  MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER: 'utds-header-mobile-menu__action-item',

  POPUP_MENU: 'vertical-menu',
  POPUP_MENU__BUTTON_TITLE: 'vertical-menu__button-title',
  POPUP_MENU__CHEVRON: 'vertical-menu__chevron',
  POPUP_MENU__DIVIDER: 'vertical-menu__divider',
  POPUP_MENU__LINK_TEXT: 'vertical-menu__link-text',
  POPUP_MENU__LINK_TITLE: 'vertical-menu__link-title',
  POPUP_MENU__PLAIN_TITLE: 'vertical-menu__plain-title',
  POPUP_MENU__TITLE: 'vertical-menu__title',

  POPUP_MENU_WRAPPER__WRAPPER: 'vertical-menu__wrapper',
  POPUP_MENU_WRAPPER__WRAPPER_TITLE: 'vertical-menu__wrapper-title',

  POPUP__HIDDEN: 'popup__wrapper--hidden',
  POPUP__VISIBLE: 'popup__wrapper--visible',
  POPUP__WRAPPER: 'popup__wrapper',

  EXTERNAL_LINK: 'utds-icon-after-external-link',
  EXTERNAL_LINK__NEW_TAB: 'utds-new-tab-link-a11y',

  POPUP_ARROW: 'popup__arrow',
  POPUP_CONTENT_WRAPPER: 'popup__content',
  POPUP_WRAPPER: 'popup__wrapper',

  SEARCH__SEARCH_BACKDROP: 'search-backdrop',
  SEARCH__SEARCH_CLOSE_BUTTON: 'search-modal__close-button',
  SEARCH__SEARCH_BUTTON: 'search-modal__button',
  SEARCH__SEARCH_BUTTON_WRAPPER: 'search-modal__button-wrapper',
  SEARCH__SEARCH_INPUT: 'search-modal__input',
  SEARCH__SEARCH_MODAL: 'search-modal',

  SIZE__LARGE: 'large',
  SIZE__MEDIUM: 'medium',

  SKIP_LINK_LINK: 'skip-link__link',
  SKIP_LINK_WRAPPER: 'skip-link__wrapper',

  TITLE: 'utds-title-wrapper',
  TITLE__LOGO: 'utds-title-wrapper__logo',
  TITLE__TITLE: 'utds-title-wrapper__title',

  TOOLTIP: 'utds-tooltip',
  TOOLTIP__CONTENT: 'tooltip__content',
  TOOLTIP__WRAPPER: 'tooltip__wrapper',
  TOOLTIP__WRAPPER__HIDDEN: 'tooltip__wrapper--hidden',
  TOOLTIP__WRAPPER__VISIBLE: 'tooltip__wrapper--visible',

  UTAH_ID: 'utds-utah-id-wrapper',
  UTAH_ID__BUTTON: 'utds-utah-id__button',
};
