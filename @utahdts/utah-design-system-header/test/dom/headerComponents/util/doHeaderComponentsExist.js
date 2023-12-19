// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from 'vitest';
import domConstants from '../../../../src/js/enumerations/domConstants';

/** @param {any} headerComponentsExist */
export function testSanity(headerComponentsExist) {
  // if this changes, then there are more scenarios for which to check
  expectHeaderComponentsExistSanityCheck();
  const knownMethods = [
    // sanity functions
    'expectHeaderComponentsExistSanityCheck',
    'testSanity',
    // testing "utility" functions
    'isActionItemsInCitizenExperience',
    'isDesktopMainMenuOn',
    'isMobileMainMenuOn',
    'isMobileActionItemsInMobileContent',
    'isMobileHamburgerInCitizenExperience',
    'isMobileHamburgerInMainMenu',
    'isMobileHomeActionItemInMobileContent',
    'isMobileSearchInCitizenExperience',
    'isMobileUtahIdActionItemInMobileContent',
    'isMobileUtahIdInInMainMenu',
    'isSearchInCitizenExperience',
    'isSearchInDesktopMainMenu',
    'isSearchInMobileMainMenu',
    'isUtahIdInCitizenExperience',
  ];

  test('Sanity: Known Methods', () => {
    expect(Object.values(headerComponentsExist).length).toBe(knownMethods.length);
    expect(knownMethods.length).toBe(Object.values(headerComponentsExist).length);
  });

  test.each(knownMethods)(
    'testSanity: %s',
    (knownMethod) => {
      expect(headerComponentsExist[knownMethod]).toBeTruthy();
    }
  );
}

export function expectHeaderComponentsExistSanityCheck() {
  // failing a test here means a constant got changed and these tests may no longer
  // target correctly. The following expects should be useful in finding the new targets
  // also check all the headerComponent tests to make sure they are correctly testing
  // where header objects should be found in all the scenarios.
  // NOTE: not all these are used in this test, and maybe some were added... sorry. it's a pain i know.
  expect(domConstants.UTAH_DESIGN_SYSTEM).toBe('utah-design-system');
  expect(domConstants.HEADER).toBe('utds-header');
  expect(domConstants.FOOTER).toBe('utds-footer');
  expect(domConstants.ICON_BUTTON).toBe('icon-button');
  expect(domConstants.CSS_HEADER_MEDIA_TAG_ID).toBe('cssHeaderMediaTag');
  expect(domConstants.IS_CLOSED).toBe('is-closed');
  expect(domConstants.IS_OPEN).toBe('is-open');
  expect(domConstants.VISUALLY_HIDDEN).toBe('visually-hidden');
  expect(domConstants.MEDIA_SIZE__MOBILE__PLACEHOLDER).toBe('media-size__mobile__PLACEHOLDER');
  expect(domConstants.MEDIA_SIZE__TABLET_LANDSCAPE__PLACEHOLDER).toBe('media-size__tablet-landscape__PLACEHOLDER');
  expect(domConstants.MEDIA_SIZE__TABLET_PORTRAIT__PLACEHOLDER).toBe('media-size__tablet-portrait__PLACEHOLDER');
  expect(domConstants.ACTION_ITEM).toBe('utds-header-action-item');
  expect(domConstants.ACTION_ITEM__ICON_BUTTON).toBe('utds-header-action-item__icon-button');
  expect(domConstants.ACTION_ITEM__ICON_BUTTON_TITLE).toBe('utds-header-action-item__icon-button--has-title');
  expect(domConstants.ACTION_ITEM__TITLE).toBe('utds-header-action-item__title');
  expect(domConstants.ACTION_ITEMS__WRAPPER).toBe('utds-action-items-wrapper');
  expect(domConstants.BADGE__LABEL).toBe('utds-badge__label');
  expect(domConstants.BADGE__VALUE).toBe('utds-badge__value');
  expect(domConstants.BADGE_WRAPPER).toBe('utds-badge__wrapper');
  expect(domConstants.BADGE_WRAPPER__SMALL).toBe('utds-badge__wrapper--small');
  expect(domConstants.BADGE_WRAPPER__ACTION_ITEM).toBe('utds-badge__wrapper--action-item');
  expect(domConstants.CITIZEN_EXPERIENCE).toBe('utds-citizen-experience-wrapper');
  expect(domConstants.CITIZEN_EXPERIENCE_MOBILE).toBe('utds-citizen-experience-wrapper--mobile');
  expect(domConstants.FOOTER_HORIZONTAL_DIVIDER).toBe('utds-footer__horizontal-divider');
  expect(domConstants.LOGO).toBe('utds-logo-wrapper');
  expect(domConstants.LOGO_OFFICIAL_CLOSE_BUTTON).toBe('utds-official-website-popup__close-button');
  expect(domConstants.LOGO_OFFICIAL_WRAPPER).toBe('utds-official-website-popup__wrapper');
  expect(domConstants.LOGO_SVG).toBe('utah-logo-svg');
  expect(domConstants.LOGO_VERT_LINE).toBe('utds-logo-vert-line');
  expect(domConstants.MAIN_MENU).toBe('main-menu__wrapper');
  expect(domConstants.MAIN_MENU__HAMBURGER).toBe('main-menu__hamburger');
  expect(domConstants.MAIN_MENU__HAMBURGER_ID).toBe('utds-main-menu__hamburger');
  expect(domConstants.MAIN_MENU__HAMBURGER_ICON_ID).toBe('utds-main-menu__hamburger-icon');
  expect(domConstants.MAIN_MENU__MENU_TOP).toBe('main-menu__menu-top');
  expect(domConstants.MAIN_MENU__NAV).toBe('main-menu__nav');
  expect(domConstants.MAIN_MENU__OUTER).toBe('main-menu__outer');
  expect(domConstants.MAIN_MENU__SEARCH).toBe('main-menu__search');
  expect(domConstants.MAIN_MENU__TITLE).toBe('main-menu__title');
  expect(domConstants.MENU_ITEM).toBe('menu-item');
  expect(domConstants.MENU_ITEM__BUTTON_TITLE).toBe('menu-item__button-title');
  expect(domConstants.MENU_ITEM__LINK_TITLE).toBe('menu-item__link-title');
  expect(domConstants.MENU_ITEM__SELECTED).toBe('menu-item--selected');
  expect(domConstants.MENU_ITEM__TITLE).toBe('menu-item__title');
  expect(domConstants.MENU_ITEM__FLY_OUT).toBe('menu-item--fly_out');
  expect(domConstants.MENU_ITEM__INLINE).toBe('menu-item--inline');
  expect(domConstants.MENU_ITEM__MEGA_MENU).toBe('menu-item--mega-menu');
  expect(domConstants.MOBILE__HIDDEN).toBe('utds-header-mobile--hidden');
  expect(domConstants.MOBILE__UTAH_ID).toBe('utds-header-mobile__utah-id-wrapper');
  expect(domConstants.MOBILE__VIP_ACTION_ITEMS__LEFT).toBe('utds-header-mobile__vip-action-items--left');
  expect(domConstants.MOBILE__VIP_ACTION_ITEMS__RIGHT).toBe('utds-header-mobile__vip-action-items--right');
  expect(domConstants.ACTION_ITEM__SELECTED).toBe('utds-header-mobile-menu__action-item--selected');
  expect(domConstants.MOBILE_MENU).toBe('utds-header-mobile-menu');
  expect(domConstants.MOBILE_MENU__ACTION_BAR).toBe('utds-header-mobile-menu__action-bar');
  expect(domConstants.MOBILE_MENU__BACKDROP).toBe('utds-header-mobile-menu__backdrop');
  expect(domConstants.MOBILE_MENU__CONTENT).toBe('utds-header-mobile-menu__content');
  expect(domConstants.MOBILE_MENU__CONTENT_ITEM).toBe('utds-header-mobile-menu__content-item');
  expect(domConstants.MOBILE_MENU__WRAPPER).toBe('utds-header-mobile-menu__wrapper');
  expect(domConstants.MOBILE_MENU_ACTON_BAR__HOME_ID).toBe('utds-header-mobile-menu_action-bar__home');
  expect(domConstants.MOBILE_MENU_ACTON_BAR__PROFILE_ID).toBe('utds-header-mobile-menu_action-bar__profile');
  expect(domConstants.MOBILE_MENU_ACTION_BAR__ACTION_ITEM_WRAPPER).toBe('utds-header-mobile-menu__action-item');
  expect(domConstants.POPUP_MENU).toBe('vertical-menu');
  expect(domConstants.POPUP_MENU__BUTTON_TITLE).toBe('vertical-menu__button-title');
  expect(domConstants.POPUP_MENU__CHEVRON).toBe('vertical-menu__chevron');
  expect(domConstants.POPUP_MENU__DIVIDER).toBe('vertical-menu__divider');
  expect(domConstants.POPUP_MENU__LINK_TEXT).toBe('vertical-menu__link-text');
  expect(domConstants.POPUP_MENU__LINK_TITLE).toBe('vertical-menu__link-title');
  expect(domConstants.POPUP_MENU__PLAIN_TITLE).toBe('vertical-menu__plain-title');
  expect(domConstants.POPUP_MENU__TITLE).toBe('vertical-menu__title');
  expect(domConstants.POPUP_MENU_WRAPPER__WRAPPER).toBe('vertical-menu__wrapper');
  expect(domConstants.POPUP_MENU_WRAPPER__WRAPPER_TITLE).toBe('vertical-menu__wrapper-title');
  expect(domConstants.POPUP__HIDDEN).toBe('popup__wrapper--hidden');
  expect(domConstants.POPUP__VISIBLE).toBe('popup__wrapper--visible');
  expect(domConstants.POPUP__WRAPPER).toBe('popup__wrapper');
  expect(domConstants.EXTERNAL_LINK).toBe('utds-icon-after-external-link');
  expect(domConstants.EXTERNAL_LINK__NEW_TAB).toBe('utds-new-tab-link-a11y');
  expect(domConstants.POPUP_ARROW).toBe('popup__arrow');
  expect(domConstants.POPUP_CONTENT_WRAPPER).toBe('popup__content');
  expect(domConstants.POPUP_WRAPPER).toBe('popup__wrapper');
  expect(domConstants.SEARCH__SEARCH_BACKDROP).toBe('search-backdrop');
  expect(domConstants.SEARCH__SEARCH_CLOSE_BUTTON).toBe('search-modal__close-button');
  expect(domConstants.SEARCH__SEARCH_BUTTON).toBe('search-modal__button');
  expect(domConstants.SEARCH__SEARCH_BUTTON_WRAPPER).toBe('search-modal__button-wrapper');
  expect(domConstants.SEARCH__SEARCH_INPUT).toBe('search-modal__input');
  expect(domConstants.SEARCH__SEARCH_MODAL).toBe('search-modal');
  expect(domConstants.SIZE__LARGE).toBe('large');
  expect(domConstants.SIZE__MEDIUM).toBe('medium');
  expect(domConstants.TITLE).toBe('utds-title-wrapper');
  expect(domConstants.TITLE__LOGO).toBe('utds-title-wrapper__logo');
  expect(domConstants.TITLE__TITLE).toBe('utds-title-wrapper__title');
  expect(domConstants.TOOLTIP).toBe('utds-tooltip');
  expect(domConstants.TOOLTIP__CONTENT).toBe('tooltip__content');
  expect(domConstants.TOOLTIP__WRAPPER).toBe('tooltip__wrapper');
  expect(domConstants.TOOLTIP__WRAPPER__HIDDEN).toBe('tooltip__wrapper--hidden');
  expect(domConstants.TOOLTIP__WRAPPER__VISIBLE).toBe('tooltip__wrapper--visible');
  expect(domConstants.UTAH_ID).toBe('utds-utah-id-wrapper');
  expect(domConstants.UTAH_ID__BUTTON).toBe('utds-utah-id__button');
}

// tried using getCssClassSelector and domConstants, but the code got really hard to see what was being tested
// so converted to plain strings and expects so that if the domConstants change, the tests will fail, but the
// tests become readable AND even better, can copy/paste to browser to test a document.querySelector!

// ----------------- MAIN MENU ----------------- //
/**
 * @returns {boolean}
 */
export function isDesktopMainMenuOn() {
  const mainMenuWrapper = document.querySelector('.main-menu__wrapper');
  const mainMenuOuter = document.querySelector('.main-menu__outer');
  return (
    (
      !!mainMenuWrapper
      && !mainMenuWrapper.classList.contains(domConstants.VISUALLY_HIDDEN)
      && !mainMenuWrapper.classList.contains(domConstants.DESKTOP__HIDDEN)
    )
    && (!!mainMenuOuter && !mainMenuOuter.classList.contains(domConstants.DESKTOP__HIDDEN))
  );
}
/**
 * @returns {boolean}
 */
export function isMobileMainMenuOn() {
  const mainMenu = document.querySelector('.main-menu__wrapper');
  return !!mainMenu && !mainMenu.classList.contains('utds-header-mobile--hidden');
}

// ----------------- UTAH ID ----------------- //
/**
 * @returns {boolean}
 */
export function isUtahIdInCitizenExperience() {
  return !!document.querySelector('.utds-utah-id-wrapper .utds-utah-id__button');
}
/**
 * @returns {boolean}
 */
export function isMobileUtahIdInInMainMenu() {
  return !!document.querySelector('.main-menu__wrapper .utds-header-mobile__utah-id-wrapper .utds-utah-id__button');
}
/**
 * @returns {boolean}
 */
export function isMobileUtahIdActionItemInMobileContent() {
  const mobileActionBarItems = document.querySelectorAll('.utds-header-mobile-menu__action-bar > div .icon-button');
  const actionItems = [...mobileActionBarItems].filter((actionItem) => actionItem.classList.contains('icon-profile'));
  return !!actionItems.length;
}

// ----------------- ACTION ITEMS ----------------- //
/**
 * @returns {boolean}
 */
export function isActionItemsInCitizenExperience() {
  return !!document.querySelector('.utds-action-items-wrapper .utds-header-action-item:first-child');
}
/**
 * @returns {boolean}
 */
export function isMobileActionItemsInMobileContent() {
  const mobileActionBarItems = document.querySelectorAll('.utds-header-mobile-menu__action-bar > div .icon-button');
  // filter out home, search, and utahid icons
  const actionItems = [...mobileActionBarItems].filter((actionItem) => (
    !actionItem.classList.contains('icon-home')
    && !actionItem.classList.contains('icon-profile')
  ));
  return !!actionItems.length;
}

// ----------------- SEARCH ----------------- //
/**
 * @returns {boolean}
 */
export function isSearchInCitizenExperience() {
  return !!document.querySelector('.utds-citizen-experience-wrapper .main-menu__search');
}
/**
 * @returns {boolean}
 */
export function isMobileSearchInCitizenExperience() {
  const mobileSearchInCitizenExperience = document.querySelector('.utds-citizen-experience-wrapper--mobile .main-menu__search');
  if (mobileSearchInCitizenExperience) {
    // should render as a button, not a div
    if (mobileSearchInCitizenExperience.tagName !== 'BUTTON') {
      throw new Error(`isMobileSearchInCitizenExperience: mobile search icon should be a button but was a '${mobileSearchInCitizenExperience.tagName}'`);
    }
  }
  return !!mobileSearchInCitizenExperience;
}
/**
 * @returns {boolean}
 */
export function isSearchInDesktopMainMenu() {
  const mainMenuSearch = document.querySelector('.main-menu__wrapper .main-menu__search');
  return !!mainMenuSearch && !mainMenuSearch?.classList?.contains(domConstants.DESKTOP__HIDDEN);
}
/**
 * @returns {boolean}
 */
export function isSearchInMobileMainMenu() {
  const mainMenuSearch = document.querySelector('.main-menu__wrapper .main-menu__search');
  return !!mainMenuSearch?.classList;
}

// ----------------- MOBILE HOME ICON ----------------- //
/**
 * @returns {boolean}
 */
export function isMobileHomeActionItemInMobileContent() {
  const mobileActionBarItems = document.querySelectorAll('.utds-header-mobile-menu__action-bar > div .icon-button');
  const actionItems = [...mobileActionBarItems].filter((actionItem) => actionItem.classList.contains('icon-home') && !actionItem.classList.contains(domConstants.DESKTOP__HIDDEN));
  return !!actionItems.length;
}

// ----------------- MOBILE HAMBURGER ----------------- //
/**
 * @returns {boolean}
 */
export function isMobileHamburgerInMainMenu() {
  return !!document.querySelector('.main-menu__wrapper .main-menu__hamburger');
}
export function isMobileHamburgerInCitizenExperience() {
  return !!document.querySelector('.utds-citizen-experience-wrapper--mobile .main-menu__hamburger');
}
