// @ts-check
import cssClasses, { getCssClassSelector } from '../enumerations/cssClasses';
import events from '../enumerations/events';
import HeaderWrapper from '../renderables/headerWrapper/HeaderWrapper';
import { loadGlobalEvents, unloadGlobalEvents } from './globalEvents';

export function loadHeader() {
  const existingHeader = document.querySelector(getCssClassSelector([cssClasses.UTAH_DESIGN_SYSTEM, cssClasses.HEADER]));
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
  }
}

export function removeHeader() {
  document.querySelector(getCssClassSelector([cssClasses.UTAH_DESIGN_SYSTEM, cssClasses.HEADER]))?.remove();

  unloadGlobalEvents();

  // take the event dispatch out of this execution flow to allow for timing of events *after* this execution flow.
  setTimeout(() => document.dispatchEvent(new Event(events.HEADER_UNLOADED)), 0);
}
