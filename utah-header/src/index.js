// @ts-check
import packageJson from '../package.json';
import HeaderWrapper from './js/headerWrapper/HeaderWrapper';
import './misc/Prototypes';
import './css/index.scss';

const fileVersion = packageJson.version.replace(/\./g, '');
console.log(`Utah Header v${fileVersion}`);

// const cssFileName = `utahHeader.css`;
// const jsFileName = `utahHeader.bundle.js`;

// use same path as the javascript file
// let cssFilePath = Array.prototype.filter.call(document.getElementsByTagName('script'), i => {
//   let regex = new RegExp(escapeRegex(jsFileName));
//   return i.getAttribute('src') && i.getAttribute('src').search(regex) >= 0;
// })[0];

// initialize css to not display the header or menu so that it doesn't flicker before the CSS file loads
// const loadingCSS = `.${CSS_CLASSES.UTAH_GOV_HEADER}, .${CSS_CLASSES.HIVEBURGER_MAIN_MENU}{display:none;}`;
// const loadingHTML = document.createElement('style');
// loadingHTML.innerHTML = loadingCSS;
// document.head.appendChild(loadingHTML);

// jest tests don't have a <script> element, nor do they need css
// if (cssFilePath) {
//   cssFilePath = cssFilePath.src.split(jsFileName)[0];
//   //write css link href to head
//   const cssLink = document.createElement('link');
//   cssLink.setAttribute('rel', 'stylesheet');
//   cssLink.setAttribute('href', cssFilePath + cssFileName);
//   document.head.appendChild(cssLink);
// } else if (!window.process) {
//   console.error('Unable to locate the cssFilePath. The HTML may be missing a "script" tag. Please contact the Utah Header developers.')
// }

/**
 * Will load the header in its default state and size
 */
export default function loadHeader() {
  const existingHeader = document.querySelector('.utah-design-system.utds-header');
  if (!existingHeader) {
    console.log('Loading header...');
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
  console.log('Unloading header...');
  document.querySelector('.utah-design-system.utds-header')?.remove();

  // take the event dispatch out of this execution flow to allow for timing of events *after* this execution flow.
  setTimeout(() => document.dispatchEvent(new Event('utahHeaderUnloaded')), 0);
}

// Manipulate the DOM only after it has loaded.
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => loadHeader());
} else {
  loadHeader();
}
