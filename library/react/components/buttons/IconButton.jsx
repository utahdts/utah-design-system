import PropTypes from 'prop-types';
import { ICON_BUTTON_APPEARANCE } from '../../enums/buttonEnums';
import componentColors from '../../enums/componentColors';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import RefShape from '../../propTypesShapes/RefShape';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  // the appearance of the button
  appearance: PropTypes.oneOf([
    ICON_BUTTON_APPEARANCE.OUTLINED,
    ICON_BUTTON_APPEARANCE.SOLID,
    ICON_BUTTON_APPEARANCE.BORDERLESS,
  ]),
  // css classes for the button
  className: PropTypes.string,
  // the base color of the button
  color: PropTypes.oneOf([
    componentColors.PRIMARY,
    componentColors.SECONDARY,
    componentColors.ACCENT,
    componentColors.NONE,
  ]),
  // the icon for the button
  icon: PropTypes.node.isRequired,
  // the button id
  id: PropTypes.string,
  // a ref to attach to the actual DOM <button> element
  innerRef: RefShape,
  // button isDisabled state
  isDisabled: PropTypes.bool,
  // what to do when the button is clicked
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf([
    formElementSizesEnum.SMALL1X,
    formElementSizesEnum.SMALL,
    formElementSizesEnum.MEDIUM,
    formElementSizesEnum.LARGE,
    formElementSizesEnum.LARGE1X,
  ]),
  // A title is used for accessibility purposes to describe the button for screen readers
  title: PropTypes.string.isRequired,
};
const defaultProps = {
  appearance: ICON_BUTTON_APPEARANCE.OUTLINED,
  className: null,
  color: componentColors.NONE,
  id: null,
  innerRef: null,
  isDisabled: false,
  size: formElementSizesEnum.MEDIUM,
};

/**
 * @typedef {import('../../propTypesShapes/RefShape').Ref} Ref
 * @typedef IconButtonProps {
 *   @property {'solid', 'outlined' | 'borderless' | undefined} [appearance]
 *   @property {string | null | undefined} [className]
 *   @property {'primary' | 'secondary' | 'accent' | 'none' | undefined} [color]
 *   @property {Element} icon
 *   @property {string | null | undefined} [id]
 *   @property {Ref | null | undefined} [innerRef]
 *   @property {boolean} [isDisabled]
 *   @property {(e: Event) => void | null | undefined} [onClick]
 *   @property {'small1x' | 'small' | 'medium' | 'large' | 'large1x' | undefined} [size]
 *   @property {string} title
 * }
 */

/**
 * @param {IconButtonProps} props
 * @returns {JSX.Element}
 */
function IconButton({
  appearance,
  className,
  color,
  icon,
  id,
  innerRef,
  isDisabled,
  onClick,
  size,
  title,
  ...rest
}) {
  return (
    <button
      className={joinClassNames(
        'button icon-button',
        className,
        `${(appearance === ICON_BUTTON_APPEARANCE.BORDERLESS) ? 'icon-button--' : 'button--'}${appearance}`,
        // default color is none
        (color && color !== 'none') ? `button--${color}-color` : null,
        // default size is medium
        (size && size !== formElementSizesEnum.MEDIUM) ? `icon-button--${size}` : null
      )}
      disabled={isDisabled}
      id={id}
      onClick={handleEvent(onClick)}
      ref={innerRef}
      type="button"
      {...rest}
    >
      {icon}
      <span className="visually-hidden">{title}</span>
    </button>
  );
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
