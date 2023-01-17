// @ts-check
import domConstants, { getCssClassSelector } from '../enumerations/domConstants';
import events from '../enumerations/events';
import HeaderWrapper from '../renderables/headerWrapper/HeaderWrapper';
import { loadGlobalEvents, unloadGlobalEvents } from './globalEvents';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import mediaQueriesCSS from '../../css/media-queries.css?raw';
import { getSettings } from '../settings/settings';

function loadCssSettings() {
  // see the file `media-queries.css` for where these placeholders are used
  const mediaQueriesCssReplaced = mediaQueriesCSS
    .replace(domConstants.MEDIA_SIZE__TABLET_PORTRAIT__PLACEHOLDER, `${getSettings().mediaSizes.tabletPortrait}px`)
    .replace(domConstants.MEDIA_SIZE__TABLET_LANDSCAPE__PLACEHOLDER, `${getSettings().mediaSizes.tabletLandscape}px`)
    .replace(domConstants.MEDIA_SIZE__MOBILE__PLACEHOLDER, `${getSettings().mediaSizes.mobile}px`);
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
    // TODO: CSS has potentially not loaded yet? so there will be a flicker between time header shows and css loads...
    // TODO: could maybe set a timeout for loading the header so that css loads and then header renders...
    // TODO: but then header will bounce in to view from the top...
    // TODO: could place a placeholder div that is the same size of the header, then settimeout to load header after css loads...?

    // // Load the Main Menu
    // if (document.body.firstChild) {
    //   document.body.insertBefore(MainMenu(), document.body.firstChild);
    // } else {
    //   document.body.appendChildAll(MainMenu());
    // }

    // Load the Header Wrapper
    const header = HeaderWrapper();
    document.body.insertBefore(header, document.body.firstChild);

    loadGlobalEvents();

    // Trigger a custom event ('utahHeaderLoaded') that developers can listen for
    // in their applications.
    // The event needs to wait for the UMD library to load the global window.utahHeader
    // module. Use setTimeout to wait for this script to finish running before firing
    // the `utahHeaderLoaded` event.
    setTimeout(() => document.dispatchEvent(new Event(events.HEADER_LOADED)), 0);

    loadCssSettings();
  }
}

export function removeHeader() {
  document.querySelector(getCssClassSelector([domConstants.UTAH_DESIGN_SYSTEM, domConstants.HEADER]))?.remove();

  unloadGlobalEvents();

  // take the event dispatch out of this execution flow to allow for timing of events *after* this execution flow.
  setTimeout(() => document.dispatchEvent(new Event(events.HEADER_UNLOADED)), 0);
}
