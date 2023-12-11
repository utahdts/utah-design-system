// @ts-check

/** @typedef {import('@utahdts/utah-design-system').ButtonAppearance} ButtonAppearance */
/** @typedef {import('@utahdts/utah-design-system').ButtonTypes} ButtonTypes */
/** @typedef {import('@utahdts/utah-design-system').IconButtonAppearance} IconButtonAppearance */

/** @enum {ButtonAppearance} */
export const BUTTON_APPEARANCE = {
  SOLID: /** @type {ButtonAppearance} */ ('solid'),
  OUTLINED: /** @type {ButtonAppearance} */ ('outlined'),
};

/** @enum {ButtonTypes} */
export const BUTTON_TYPES = {
  BUTTON: /** @type {ButtonTypes} */ ('button'),
  RESET: /** @type {ButtonTypes} */ ('reset'),
  SUBMIT: /** @type {ButtonTypes} */ ('submit'),
};

/** @enum {IconButtonAppearance} */
export const ICON_BUTTON_APPEARANCE = {
  SOLID: /** @type {IconButtonAppearance} */ ('solid'),
  OUTLINED: /** @type {IconButtonAppearance} */ ('outlined'),
  BORDERLESS: /** @type {IconButtonAppearance} */ ('borderless'),
};
