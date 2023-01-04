// @ts-check
import packageJson from '../package.json';
import './css/index.scss';
import './misc/Prototypes';

// report version for troubleshooting sake
const fileVersion = packageJson.version.replace(/\./g, '');
// eslint-disable-next-line no-console
console.log(`Utah Header v${fileVersion}`);

export { loadHeader, removeHeader } from './js/lifecycle/lifecycle';
export { getSettings, setSettings } from './js/settings/settings';
