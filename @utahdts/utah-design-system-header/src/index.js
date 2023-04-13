// @ts-check
import packageJson from '../package.json';
import './css/index.scss';

// report version for troubleshooting sake
const fileVersion = packageJson.version.replace(/\./g, '');
// eslint-disable-next-line no-console
console.log(`Utah Header v${fileVersion}`);

export { default as childrenMenuTypes } from './js/enumerations/childrenMenuTypes';
export { default as events } from './js/enumerations/events';
export { default as popupPlacement } from './js/enumerations/popupPlacement';
export { default as sizes } from './js/enumerations/sizes';
export { loadHeader, removeHeader } from './js/lifecycle/lifecycle';
export { default as renderDOMSingle } from './js/misc/renderDOMSingle';
export { default as baseSettings } from './js/settings/baseSettings';
export { getUtahHeaderSettings, setUtahHeaderSettings } from './js/settings/settings';
