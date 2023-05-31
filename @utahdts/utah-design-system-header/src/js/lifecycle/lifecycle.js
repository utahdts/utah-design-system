// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import mediaQueriesCSS from '../../css/media-queries.css?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MobileMenuWrapper from '../renderables/mobile/html/MobileMenuWrapper.html?raw';

import domConstants, { getCssClassSelector } from '../enumerations/domConstants';
import events from '../enumerations/events';
import checkForError from '../misc/checkForError';
import notNull from '../misc/notNull';
import renderDOMSingle from '../misc/renderDOMSingle';
import renderMobileActionItems from '../renderables/actionItems/renderMobileActionItems';
import renderFooter from '../renderables/footer/renderFooter';
import HeaderWrapper from '../renderables/headerWrapper/HeaderWrapper';
import renderMainMenu from '../renderables/mainMenu/renderMainMenu';
import renderMenuWithTitle from '../renderables/menu/renderMenuWithTitle';
import addMobileMenuContentItem from '../renderables/mobile/addMobileMenuContentItem';
import hookupHamburger from '../renderables/mobile/hookupHamburger';
import { hookupUtahIdInMobileMenu, removeUtahIdInMobileMenu } from '../renderables/mobile/hookupUtahIdInMobileMenu';
import renderMobileMenuHomeMenu from '../renderables/mobile/renderMobileMenuHomeMenu';
import { hideMobileMenu } from '../renderables/mobile/util/showHideHamburgerElements';
import renderOfficialWebsite from '../renderables/utahLogo/renderOfficialWebsite';
import getUtahHeaderSettings from '../settings/getUtahHeaderSettings';
import { fetchUtahIdUserDataAsync } from '../utahId/utahIdData';
import { loadGlobalEvents, unloadGlobalEvents } from './globalEvents';
import hookupMobileActionItemKeyboarding from './hookupMobileActionItemKeyboarding';

function loadCssSettings() {
  // see the file `media-queries.css` for where these placeholders are used
  const mediaQueriesCssReplaced = mediaQueriesCSS
    .replace(domConstants.MEDIA_SIZE__TABLET_PORTRAIT__PLACEHOLDER, `${getUtahHeaderSettings().mediaSizes.tabletPortrait}px`)
    .replace(domConstants.MEDIA_SIZE__TABLET_LANDSCAPE__PLACEHOLDER, `${getUtahHeaderSettings().mediaSizes.tabletLandscape}px`)
    .replace(domConstants.MEDIA_SIZE__MOBILE__PLACEHOLDER, `${getUtahHeaderSettings().mediaSizes.mobile}px`);
  let cssHeaderMediaTag = document.getElementById(domConstants.CSS_HEADER_MEDIA_TAG_ID);
  if (!cssHeaderMediaTag) {
    cssHeaderMediaTag = document.createElement('style');
    cssHeaderMediaTag.id = domConstants.CSS_HEADER_MEDIA_TAG_ID;
  }
  cssHeaderMediaTag.innerHTML = mediaQueriesCssReplaced;
  document.body.appendChild(cssHeaderMediaTag);
}

/**
 * Based on the current settings, determine in to which DOM element to insert the utah design system header.
 * defaults to document.body (at the top)
 *
 * @returns {HTMLElement}
 */
function determineTargetElementForHeader() {
  const settings = getUtahHeaderSettings();

  /** @type {HTMLElement | null} */
  let domTarget = document.body;
  if (settings.domLocationTarget) {
    const targets = (
      [
        settings.domLocationTarget.cssSelector,
        settings.domLocationTarget.element,
        settings.domLocationTarget.elementFunction,
      ]
        .filter((setting) => setting)
    );
    if (targets.length < 1) {
      throw new Error('loadHeader: domLocationTarget must either have a value for one of its properties or not be specified at all');
    } else if (targets.length > 1) {
      throw new Error('loadHeader: domLocationTarget must only have one target specified');
    }
    if (settings.domLocationTarget.cssSelector) {
      domTarget = document.querySelector(settings.domLocationTarget.cssSelector);
      checkForError(!domTarget, `loadHeader: element not found for domLocationTarget.cssSelector ${settings.domLocationTarget.cssSelector}`);
    } else if (settings.domLocationTarget.element) {
      domTarget = settings.domLocationTarget.element;
    } else if (settings.domLocationTarget.elementFunction) {
      domTarget = settings.domLocationTarget.elementFunction();
      checkForError(!domTarget, 'loadHeader: element not returned from domLocationTarget.elementFunction');
    } else {
      throw new Error('loadHeader: domLocationTarget must have at least one field set');
    }
  }
  return notNull(domTarget, 'loadHeader: domTarget is null (how?!)');
}

export function loadHeader() {
  const existingHeader = document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.HEADER]));
  if (!existingHeader) {
    // Load the Header Wrapper
    const header = HeaderWrapper();

    const domTarget = determineTargetElementForHeader();
    domTarget.insertBefore(header, domTarget.firstChild);

    const officialWebsite = renderOfficialWebsite();
    header.after(officialWebsite);

    // load the main menu
    const { mainMenuWrapper, utahIdPopup } = renderMainMenu();
    if (mainMenuWrapper) {
      officialWebsite.after(mainMenuWrapper);
    }
    const mobileMenuWrapper = renderDOMSingle(MobileMenuWrapper);
    officialWebsite.after(mobileMenuWrapper);

    // hide mobile menu on background trigger
    const mobileMenuBackdrop = /** @type {HTMLElement} */ (document.querySelector(getCssClassSelector(domConstants.MOBILE_MENU__BACKDROP)));
    if (!mobileMenuBackdrop) {
      throw new Error('mobileMenuInteractionHandler: mobileMenuBackdrop not found');
    }
    if (mobileMenuBackdrop.onclick) {
      throw new Error('mobileMenuInteractionHandler: mobileMenuBackdrop already has onclick');
    }
    mobileMenuBackdrop.onclick = () => hideMobileMenu();

    const mobileMenuHomeMenu = renderMobileMenuHomeMenu();
    const mainMenuWithTitle = renderMenuWithTitle(mobileMenuHomeMenu, 'Main Menu');
    mainMenuWithTitle.appendChild(mobileMenuHomeMenu);
    const mobileMenuHomeMenuContentItem = addMobileMenuContentItem(mainMenuWithTitle);
    hookupHamburger(mobileMenuHomeMenuContentItem);
    if (utahIdPopup) {
      // this is a copy of the menu used in the top right profile button, which is labelled by that button, but instead, in mobile,
      // the labeling is done at the tabPanel layer
      utahIdPopup.closest('div')?.removeAttribute('aria-labelledby');
      hookupUtahIdInMobileMenu(mobileMenuWrapper, utahIdPopup);
    } else {
      removeUtahIdInMobileMenu();
    }
    renderMobileActionItems();

    hookupMobileActionItemKeyboarding();

    loadGlobalEvents();

    loadCssSettings();

    fetchUtahIdUserDataAsync()
      // eslint-disable-next-line no-console
      .catch((e) => console.error(e));

    // UDS-564
    // there are four parts to deciding the state of the main menu bar: main menu, search, utahId, action items
    // there are certain scenarios where the main menu bar is not shown
    // the following removes the bar if any of these scenarios occur
    const settings = getUtahHeaderSettings();
    if (
      (!settings.mainMenu && !settings.actionItems && settings.utahId === false && !settings.onSearch)
      || (!settings.mainMenu && !settings.actionItems && settings.utahId === false && settings.onSearch)
      || (!settings.mainMenu && settings.actionItems && settings.utahId === false && !settings.onSearch)
    ) {
      mobileMenuWrapper.classList.add(domConstants.MAIN_MENU__REMOVED);
      mainMenuWrapper.remove();
    }
    if (
      (!settings.mainMenu && !settings.actionItems && settings.utahId && !settings.onSearch)
      || (!settings.mainMenu && settings.actionItems && settings.utahId && !settings.onSearch)
      || (!settings.mainMenu && settings.actionItems && !settings.utahId && settings.onSearch)
    ) {
      mainMenuWrapper.classList.add(domConstants.DESKTOP__HIDDEN);
    }
  }

  renderFooter();
}

/**
 * @param {boolean} shouldTriggerUnloadEvent if removing to readd, then the event shouldn't fire
 */
export function removeHeader(shouldTriggerUnloadEvent) {
  document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.HEADER]))?.remove();
  document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.MAIN_MENU__OUTER]))?.remove();
  document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.MOBILE_MENU]))?.remove();
  document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.LOGO_OFFICIAL_WRAPPER]))?.remove();

  unloadGlobalEvents();

  if (shouldTriggerUnloadEvent) {
    // take the event dispatch out of this execution flow to allow for timing of events *after* this execution flow.
    setTimeout(() => document.dispatchEvent(new Event(events.HEADER_UNLOADED)), 0);
  }
}
