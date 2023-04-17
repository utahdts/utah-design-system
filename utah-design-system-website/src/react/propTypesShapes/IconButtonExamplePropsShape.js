import { componentColors, formElementSizesEnum, ICON_BUTTON_APPEARANCE } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';

/**
 * @typedef IconButtonExampleProps {
 *   @property {'solid' | 'outlined' | 'borderless'} appearance
 *   @property {'primary' | 'secondary' | 'accent' | 'none'} color
 *   @property {string} iconCssClass
 *   @property {string} id
 *   @property {boolean} isDisabled
 *   @property {'small1x' | 'small' | 'medium' | 'large' | 'large1x'} size
 *   @property {string} title
 * }
 */

export default PropTypes.exact({
  appearance: PropTypes.oneOf(Object.values(ICON_BUTTON_APPEARANCE)),
  color: PropTypes.oneOf(Object.values(componentColors)),
  iconCssClass: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf([
    formElementSizesEnum.SMALL1X,
    formElementSizesEnum.SMALL,
    formElementSizesEnum.MEDIUM,
    formElementSizesEnum.LARGE,
    formElementSizesEnum.LARGE1X,
  ]),
  title: PropTypes.string,
});
