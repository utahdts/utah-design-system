// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import joinClassNames from '../../util/joinClassNames';
import handleEvent from '../../util/handleEvent';
import RefShape from '../../propTypesShapes/RefShape';

const propTypes = {
  // most often is the title of the tag, but can also contain most anything
  children: PropTypes.node.isRequired,
  // modify your tag via classname like 'tag--primary' and other modifiers found in the tag.scss
  className: PropTypes.string,
  // the tag id
  id: PropTypes.string,
  // a ref to attach to the actual DOM <button> or <span> element
  innerRef: RefShape,
  // an icon for the left/right side
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  // tag isDisabled state
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  // event for when the tag is clicked: (e) => { ... do something with e ...}
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    formElementSizesEnum.SMALL,
    formElementSizesEnum.MEDIUM,
    formElementSizesEnum.LARGE,
  ]),
};
const defaultProps = {
  className: null,
  id: null,
  innerRef: null,
  iconLeft: null,
  iconRight: null,
  isDisabled: false,
  isSelected: false,
  onClick: null,
  size: formElementSizesEnum.MEDIUM,
};

/**
 * @param {Object} props
 * @param {React.ReactNode | null} props.children
 * @param {string | null} [props.className]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {React.ReactNode | null} [props.iconLeft]
 * @param {React.ReactNode | null} [props.iconRight]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isSelected]
 * @param {string | null} [props.id]
 * @param {EventAction | null} [props.onClick]
 * @param {FormElementSizes} [props.size]
 * @returns {JSX.Element}
 */
function ClickableTag({
  children = null,
  className = null,
  id = null,
  innerRef = null,
  iconLeft = null,
  iconRight = null,
  isDisabled = false,
  isSelected = false,
  onClick = null,
  size = formElementSizesEnum.MEDIUM,
  ...rest
}) {
  return (
    <div className="tag__wrapper">
      <button
        aria-pressed={isSelected}
        className={joinClassNames(
          'tag',
          'tag__button',
          className,
          isSelected ? 'tag--selected' : '',
          `tag--${size}`
        )}
        disabled={isDisabled}
        id={id}
        // @ts-ignore
        onClick={onClick && handleEvent((e) => onClick?.(e))}
        ref={innerRef}
        type="button"
        {...rest}
      >
        {
          iconLeft
            ? <span className="tag--icon tag--icon-left">{iconLeft}</span>
            : null
        }
        {children}
        {
          iconRight
            ? <span className="tag--icon tag--icon-right">{iconRight}</span>
            : null
        }
      </button>
    </div>
  );
}

ClickableTag.propTypes = propTypes;
ClickableTag.defaultProps = defaultProps;

export default ClickableTag;
