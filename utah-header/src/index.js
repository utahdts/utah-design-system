// @ts-check
import packageJson from '../package.json';
import './css/index.scss';

// report version for troubleshooting sake
const fileVersion = packageJson.version.replace(/\./g, '');
// eslint-disable-next-line no-console
console.log(`Utah Header v${fileVersion}`);

export { default as popupPlacement } from './js/enumerations/popupPlacement';
export { loadHeader, removeHeader } from './js/lifecycle/lifecycle';
export { getUtahHeaderSettings, setUtahHeaderSettings } from './js/settings/settings';
