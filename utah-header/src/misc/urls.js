/*
URL for other developers to use:
prod/at/dev: https://id.utah.gov/api/userInfo

URLs for DTS Hosting Engineering development:
utah id development at: https://id.at.utah.gov/api/userInfo
utah id development dev: https://id.dev.utah.gov/api/userInfo
*/
import ENVIRONMENT from "./environment";

/**
 * Generate a url based on domain, path, params
 * @param {string} domain - The domain and protocol part of the url: e.g. https://id.utah.gov
 * @param {string} path - The path part of the url
 * @param {string[]} params - Array of params to add to the url. Note: do not include ? or & in the params
 * @param {string} env - The environment the web service is running under
 * @returns {string}
 */
export function generateURL({ domain, path, params, env }) {
	params = (params || []).filter(s => s);
	const hasParams = params && params.length;

	let envStr = '';

	//PROD is default and doesn't need to be used as a parameter
	if (hasParams && env && env !== ENVIRONMENT.PROD && env !== ENVIRONMENT.CUSTOM) {
		envStr = `&${URLS.UTAH_ID_ENV_PARAM(env)}`;
	} else if (env && env !== ENVIRONMENT.PROD && env !== ENVIRONMENT.CUSTOM) {
		envStr = `?${URLS.UTAH_ID_ENV_PARAM(env)}`
	}

	let paramStr = '';
	if (hasParams) {
		paramStr = `?${params.join('&')}`;
	}

	return `${domain}${path}${paramStr}${envStr}`
}

/**
 * URLS and URL parts for generating UtahID URLs
 */
const URLS = {
	UTAH_ID: 'https://id.utah.gov',
	UTAH_ID_TEST: 'https://id.at.utah.gov',
	UTAH_ID_DEV: 'https://id.dev.utah.gov',
	UTAH_ID_USER_INFO: '/api/userInfo',

	// use utGlobals.utahIdURLs.signin instead, if it is available
	UTAH_ID_LOGIN: '/login',

	// use utGlobals.utahIdURLs.signout instead, if it is available
	UTAH_ID_LOGOUT: '/logout',
	UTAH_ID_GOTO_PARAM: goto => `goto=${encodeURIComponent(goto)}`,
	UTAH_ID_ENV_PARAM: env => env ? `e=${env}` : '',
};
export default URLS;
