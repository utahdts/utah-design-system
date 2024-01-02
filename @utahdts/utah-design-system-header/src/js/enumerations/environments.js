/** @typedef {import('src/@types/jsDocTypes.d').Environments} Environments */

/**
 * An enum for possible environments you can target for UtahID login.
 * @enum {Environments}
 */
export const environments = {
  NONE: /** @type {Environments} */ ('none'),
  PROD: /** @type {Environments} */ ('a1'),
  AT: /** @type {Environments} */ ('a2'),
  DEV: /** @type {Environments} */ ('a3'),
  CUSTOM: /** @type {Environments} */ ('custom'),
  UNITTEST: /** @type {Environments} */ ('unittest'),
};
