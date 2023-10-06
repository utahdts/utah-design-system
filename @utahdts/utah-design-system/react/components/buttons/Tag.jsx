// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import joinClassNames from '../../util/joinClassNames';
import handleEvent from '../../util/handleEvent';
import RefShape from '../../propTypesShapes/RefShape';
import IconButton from './IconButton';

const propTypes = {
  // most often is the title of the tag, but can also contain most anything
  children: PropTypes.node.isRequired,
  // modify your tag via classname like 'tag--primary' and other modifiers found in the tag.scss
  className: PropTypes.string,
  // a ref to attach to the actual DOM <button> or <span> element
  innerRef: RefShape,
  // an icon for the left/right side
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  // the tag id
  id: PropTypes.string,
  // tag isDisabled state
  isDisabled: PropTypes.bool,
  onClear: PropTypes.func,
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
  innerRef: null,
  iconLeft: null,
  iconRight: null,
  isDisabled: false,
  id: null,
  onClear: null,
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
 * @param {string | null} [props.id]
 * @param {EventAction | null} [props.onClear]
 * @param {EventAction | null} [props.onClick]
 * @param {FormElementSizes} [props.size]
 * @returns {JSX.Element}
 */
function Tag({
  children = null,
  className = null,
  innerRef = null,
  iconLeft = null,
  iconRight = null,
  isDisabled = false,
  id = null,
  onClear = null,
  onClick = null,
  size = formElementSizesEnum.MEDIUM,
  ...rest
}) {
  return (
    <div className={joinClassNames('tag__wrapper', onClear && !onClick && 'tag--clearable')}>
      {
        onClick
          ? (
            <button
              className={joinClassNames(
                'tag',
                'tag__button',
                className,
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
          )
          : (
            <span
              className={joinClassNames(
                'tag',
                className,
                // default size is medium
                `tag--${size}`
              )}
              id={id}
              ref={innerRef}
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
            </span>
          )
        }
      {
        (onClear && !onClick)
          ? (
            <IconButton
              className="tag__clear-button icon-button--borderless icon-button--small1x"
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
