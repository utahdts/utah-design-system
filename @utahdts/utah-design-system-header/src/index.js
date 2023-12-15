import './css/index.scss';

export { default as childrenMenuTypes } from './js/enumerations/childrenMenuTypes';
export { default as PopupPlacement } from './js/enumerations/popupPlacement';
export { default as events } from './js/enumerations/events';
export { default as sizes } from './js/enumerations/sizes';
export { loadHeader, removeHeader } from './js/lifecycle/lifecycle';
export { default as renderDOMSingle } from './js/misc/renderDOMSingle';
export { default as defaultSettings } from './js/settings/defaultSettings';
export { default as getUtahHeaderSettings } from './js/settings/getUtahHeaderSettings';
export { setUtahFooterSettings, setUtahHeaderSettings } from './js/settings/settings';
