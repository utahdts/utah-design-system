// @ts-check
import packageJson from '../package.json';
import './css/index.scss';

// eslint-disable-next-line no-console
console.log(`Utah Header v${packageJson.version}`);

export { default as childrenMenuTypes } from './js/enumerations/childrenMenuTypes';
export { default as events } from './js/enumerations/events';
export { default as sizes } from './js/enumerations/sizes';
export { loadHeader, removeHeader } from './js/lifecycle/lifecycle';
export { default as renderDOMSingle } from './js/misc/renderDOMSingle';
export { default as defaultSettings } from './js/settings/defaultSettings';
export { default as getUtahHeaderSettings } from './js/settings/getUtahHeaderSettings';
export { setUtahHeaderSettings } from './js/settings/settings';
