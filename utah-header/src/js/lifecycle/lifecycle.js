// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import mediaQueriesCSS from '../../css/media-queries.css?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import MobileMenuWrapper from '../renderables/mobile/html/MobileMenuWrapper.html?raw';

import domConstants, { getCssClassSelector } from '../enumerations/domConstants';
import events from '../enumerations/events';
import renderDOMSingle from '../misc/renderDOMSingle';
import HeaderWrapper from '../renderables/headerWrapper/HeaderWrapper';
import renderMainMenu from '../renderables/mainMenu/renderMainMenu';
import addMobileMenuContentItem from '../renderables/mobile/addMobileMenuContentItem';
import { hideMobileMenu, hookupHamburger } from '../renderables/mobile/hookupHamburger';
import { hookupUtahIdInMobileMenu, removeUtahIdInMobileMenu } from '../renderables/mobile/hookupUtahIdInMobileMenu';
import renderMobileMenuHomeMenu from '../renderables/mobile/renderMobileMenuHomeMenu';
import { getUtahHeaderSettings } from '../settings/settings';
import { fetchUtahIdUserDataAsync } from '../utahId/utahIdData';
import { loadGlobalEvents, unloadGlobalEvents } from './globalEvents';
import renderMenuWithTitle from '../renderables/menu/renderMenuWithTitle';
import renderMobileActionItems from '../renderables/actionItems/renderMobileActionItems';
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

export function loadHeader() {
  const existingHeader = document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.HEADER]));
  if (!existingHeader) {
    // Load the Header Wrapper
    const header = HeaderWrapper();
    document.body.insertBefore(header, document.body.firstChild);

    // load the main menu
    const { mainMenuWrapper, utahIdPopup } = renderMainMenu();
    if (mainMenuWrapper) {
      header.after(mainMenuWrapper);
    }
    const mobileMenuWrapper = renderDOMSingle(MobileMenuWrapper);
    header.after(mobileMenuWrapper);

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

    // Trigger a custom event ('utahHeaderLoaded') that developers can listen for
    // in their applications.
    // The event needs to wait for the UMD library to load the global window.utahHeader
    // module. Use setTimeout to wait for this script to finish running before firing
    // the `utahHeaderLoaded` event.
    setTimeout(() => document.dispatchEvent(new Event(events.HEADER_LOADED)), 0);

    loadCssSettings();

    fetchUtahIdUserDataAsync();
  }
}

/**
 * @param {boolean} shouldTriggerUnloadEvent if removing to readd, then the event shouldn't fire
 */
export function removeHeader(shouldTriggerUnloadEvent) {
  document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.HEADER]))?.remove();
  document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.MAIN_MENU__OUTER]))?.remove();
  document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.MOBILE_MENU]))?.remove();

  unloadGlobalEvents();

  if (shouldTriggerUnloadEvent) {
    // take the event dispatch out of this execution flow to allow for timing of events *after* this execution flow.
    setTimeout(() => document.dispatchEvent(new Event(events.HEADER_UNLOADED)), 0);
  }
}
