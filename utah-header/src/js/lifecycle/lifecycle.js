// @ts-check
import HeaderWrapper from '../renderables/headerWrapper/HeaderWrapper';

export function loadHeader() {
  const existingHeader = document.querySelector('.utah-design-system.utds-header');
  if (!existingHeader) {
    // // Load the Main Menu
    // if (document.body.firstChild) {
    //   document.body.insertBefore(MainMenu(), document.body.firstChild);
    // } else {
    //   document.body.appendChildAll(MainMenu());
    // }

    // Load the Header Wrapper
    const header = HeaderWrapper();
    document.body.insertBefore(header, document.body.firstChild);

    // Trigger a custom event ('utahHeaderLoaded') that developers can listen for
    // in their applications.
    // The event needs to wait for the UMD library to load the global window.utahHeader
    // module. Use setTimeout to wait for this script to finish running before firing
    // the `utahHeaderLoaded` event.
    setTimeout(() => document.dispatchEvent(new Event('utahHeaderLoaded')), 0);
  }
}

export function removeHeader() {
  document.querySelector('.utah-design-system.utds-header')?.remove();

  // take the event dispatch out of this execution flow to allow for timing of events *after* this execution flow.
  setTimeout(() => document.dispatchEvent(new Event('utahHeaderUnloaded')), 0);
}
