// @ts-check
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ICON_BUTTON_APPEARANCE } from '../../enums/buttonEnums';
import componentColors from '../../enums/componentColors';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import Tooltip from '../Tooltip/Tooltip';

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
  isTitleVisible: PropTypes.bool,
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
  isTitleVisible: false,
  innerRef: null,
  isDisabled: false,
  size: formElementSizesEnum.MEDIUM,
};

/**
 * @typedef {import('../../enums/buttonEnums').IconButtonAppearance} IconButtonAppearance
*/

/**
 * @param {Object} props
 * @param {IconButtonAppearance} [props.appearance]
 * @param {string | null | undefined} [props.className]
 * @param {'primary' | 'secondary' | 'accent' | 'none' | undefined} [props.color]
 * @param {import('react').ReactNode} props.icon
 * @param {string | null | undefined} [props.id]
 * @param {React.MutableRefObject<HTMLButtonElement>} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isTitleVisible]
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClick]
 * @param {'small1x' | 'small' | 'medium' | 'large' | 'large1x' | undefined} [props.size]
 * @param {string} props.title
 * @returns {JSX.Element}
 */
function IconButton({
  appearance,
  className,
  color,
  icon,
  id,
  innerRef: draftInnerRef,
  isDisabled,
  isTitleVisible,
  onClick,
  size,
  title,
  ...rest
}) {
  const [referenceElement, setReferenceElement] = /** @type {typeof useState<HTMLButtonElement | null>} */ (useState)(null);
  if (draftInnerRef && referenceElement) {
    draftInnerRef.current = referenceElement;
  }

  return (
    <>
      <button
        className={joinClassNames(
          'button icon-button',
          className,
          `${(appearance === ICON_BUTTON_APPEARANCE.BORDERLESS) ? 'icon-button--' : 'button--'}${appearance}`,
          // default color is none
          (color && color !== 'none') ? `button--${color}-color` : null,
          (isTitleVisible ? 'icon-button--visible-title' : null),
          // default size is medium
          (size && size !== formElementSizesEnum.MEDIUM) ? `icon-button--${size}` : null
        )}
        disabled={isDisabled}
        id={id || undefined}
        onClick={onClick}
        ref={setReferenceElement}
        type="button"
        {...rest}
      >
        {icon}
        <span className={isTitleVisible ? undefined : 'visually-hidden'}>{title}</span>
      </button>
      <Tooltip referenceElement={referenceElement}>{title}</Tooltip>
    </>
  );
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
