import PropTypes from 'prop-types';
import React from 'react';
import componentColors from '../../enums/componentColors';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import joinClassNames from '../../util/joinClassNames';
import handleEvent from '../../util/handleEvent';
import RefShape from '../../propTypesShapes/RefShape';
import IconButton from './IconButton';

const propTypes = {
  // most often is the title of the button, but can also contain most anything
  children: PropTypes.node.isRequired,
  // modify your button via classname like 'button--primary' and other modifiers found in the button.scss
  className: PropTypes.string,
  // the base color of the button
  color: PropTypes.oneOf([
    componentColors.PRIMARY,
    componentColors.SECONDARY,
    componentColors.ACCENT,
    componentColors.NONE,
  ]),
  // a ref to attach to the actual DOM <button> element
  innerRef: RefShape,
  // an icon for the left/right side
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  // the button id
  id: PropTypes.string,
  isClearable: PropTypes.bool,
  // button isDisabled state
  isDisabled: PropTypes.bool,
  onClear: PropTypes.func,
  // event for when the button is clicked: (e) => { ... do something with e ...}
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    formElementSizesEnum.SMALL,
    formElementSizesEnum.MEDIUM,
    formElementSizesEnum.LARGE,
  ]),
};
const defaultProps = {
  className: null,
  color: componentColors.NONE,
  innerRef: null,
  iconLeft: null,
  iconRight: null,
  isClearable: false,
  isDisabled: false,
  id: null,
  onClear: null,
  onClick: null,
  size: formElementSizesEnum.MEDIUM,
};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {ComponentColors} [props.color]
 * @param {React.RefObject} [props.innerRef]
 * @param {React.ReactNode} [props.iconLeft]
 * @param {React.ReactNode} [props.iconRight]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {string} [props.id]
 * @param {EventAction} [props.onClear]
 * @param {EventAction} [props.onClick]
 * @param {FormElementSizes} [props.size]
 * @returns {JSX.Element}
 */
function Tag({
  children,
  className,
  color,
  innerRef,
  iconLeft,
  iconRight,
  isClearable,
  isDisabled,
  id,
  onClear,
  onClick,
  size,
  ...rest
}) {
  return (
    <div className={joinClassNames('tag__wrapper', isClearable && !onClick && 'tag--clearable')}>
      {
        onClick
          ? (
            <button
              className={joinClassNames(
                'tag',
                'tag__button',
                className,
                // default color is none
                (color && color !== 'none') ? `tag--${color}-color` : null,
                // default size is medium
                (size && size !== formElementSizesEnum.MEDIUM) ? `tag--${size}` : null
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
          )
          : (
            <span
              className={joinClassNames(
                'tag',
                className,
                // default color is none
                (color && color !== 'none') ? `tag--${color}-color` : null,
                // default size is medium
                (size && size !== formElementSizesEnum.MEDIUM) ? `tag--${size}` : null
              )}
              id={id}
              ref={innerRef}
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
            </span>
          )
        }
      {
        (isClearable && !onClick)
          // @ts-ignore
          ? (
            <IconButton
              className={joinClassNames('tag__clear-button icon-button--borderless icon-button--small1x')}
              icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
              onClick={onClear}
              title="Clear tag"
              isDisabled={isDisabled}
            />
          )
          : null
      }
    </div>
  );
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
