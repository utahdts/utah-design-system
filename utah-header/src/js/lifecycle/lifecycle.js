// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import mediaQueriesCSS from '../../css/media-queries.css?raw';

import domConstants, { getCssClassSelector } from '../enumerations/domConstants';
import events from '../enumerations/events';
import HeaderWrapper from '../renderables/headerWrapper/HeaderWrapper';
import renderMainMenu from '../renderables/mainMenu/renderMainMenu';
import addMobileMenuContentItem from '../renderables/mobile/addMobileMenuContentItem';
import { hookupHamburger } from '../renderables/mobile/hookupHamburger';
import hookupUtahIdInMobileMenu from '../renderables/mobile/hookupUtahIdInMobileMenu';
import renderMobileMenuHomeMenu from '../renderables/mobile/renderMobileMenuHomeMenu';
import renderMobileMenuWrapper from '../renderables/mobile/renderMobileMenuWrapper';
import { getUtahHeaderSettings } from '../settings/settings';
import { fetchUtahIdUserDataAsync } from '../utahId/utahIdData';
import { loadGlobalEvents, unloadGlobalEvents } from './globalEvents';

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
    const mobileMenuWrapper = renderMobileMenuWrapper(utahIdPopup);
    header.after(mobileMenuWrapper);

    const mobileMenuHomeMenu = renderMobileMenuHomeMenu();
    const mobileMenuHomeMenuContentItem = addMobileMenuContentItem(mobileMenuHomeMenu);
    hookupHamburger(mobileMenuHomeMenuContentItem);
    hookupUtahIdInMobileMenu(mobileMenuWrapper, utahIdPopup);

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
