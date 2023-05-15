// @ts-check

/**
 * @typedef {'solid' | 'outline'} ButtonAppearance
 *
 * @enum {ButtonAppearance}
*/
export const BUTTON_APPEARANCE = {
  SOLID: /** @type {ButtonAppearance} */ ('solid'),
  OUTLINED: /** @type {ButtonAppearance} */ ('outlined'),
};

/**
 * @typedef {'button' | 'reset' | 'submit'} ButtonTypes
 *
 * @enum {ButtonTypes}
*/
export const BUTTON_TYPES = {
  BUTTON: /** @type {ButtonTypes} */ ('button'),
  RESET: /** @type {ButtonTypes} */ ('reset'),
  SUBMIT: /** @type {ButtonTypes} */ ('submit'),
};

/**
 * @typedef {'solid' | 'outlined' | 'borderless'} IconButtonAppearance
 *
 * @enum {IconButtonAppearance}
*/
export const ICON_BUTTON_APPEARANCE = {
  SOLID: /** @type {IconButtonAppearance} */ ('solid'),
  OUTLINED: /** @type {IconButtonAppearance} */ ('outlined'),
  BORDERLESS: /** @type {IconButtonAppearance} */ ('borderless'),
};
