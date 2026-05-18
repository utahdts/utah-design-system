export { childrenMenuTypes } from './js/enumerations/childrenMenuTypes';
export { PopupPlacement } from './js/enumerations/popupPlacement';
export { events } from './js/enumerations/events';
export { sizes } from './js/enumerations/sizes';
export { loadHeader, removeHeader } from './js/lifecycle/lifecycle';
export { renderDOMSingle } from './js/misc/renderDOMSingle';
export { defaultSettings } from './js/settings/defaultSettings';
export { getUtahHeaderSettings } from './js/settings/getUtahHeaderSettings';
export { setUtahFooterSettings, setUtahHeaderSettings } from './js/settings/settings';
export { popupFocusHandler } from './js/misc/popupFocusHandler';
// @ts-expect-error __UtahHeaderVersion__ is populated at build time by vite, see vite.config.js
export const UTDS_VERSION = __UtahHeaderVersion__ || 'unknown';
