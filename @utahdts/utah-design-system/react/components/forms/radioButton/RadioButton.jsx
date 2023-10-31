// @ts-check
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useRadioButtonsContext } from './hooks/useRadioButtonsContext';
import RefShape from '../../../propTypesShapes/RefShape';
import RequiredStar from '../RequiredStar';
import joinClassNames from '../../../util/joinClassNames';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  innerRef: RefShape,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  wrapperClassName: PropTypes.string,
};
const defaultProps = {
  className: null,
  isDisabled: false,
  isRequired: false,
  innerRef: null,
  labelClassName: null,
  name: null,
  value: null,
  wrapperClassName: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string | null} [props.labelClassName]
 * @param {string | null} [props.name]
 * @param {string | null} [props.value]
 * @param {string | null} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export function RadioButton({
  className = null,
  id,
  isDisabled = false,
  isRequired = false,
  innerRef = null,
  label,
  labelClassName = null,
  name = null,
  value = null,
  wrapperClassName = null,
}) {
  const {
    currentOnChange,
    currentValue,
    currentOnFormKeyPress,
  } = useRadioButtonsContext();

  return (
    <div className={joinClassNames('input-wrapper input-wrapper--radio', wrapperClassName)}>
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <input
        checked={currentValue === value}
        className={className}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={useCallback(currentOnChange, [currentOnChange])}
        onKeyPress={currentOnFormKeyPress}
        ref={innerRef}
        required={isRequired}
        type="radio"
        value={value}
      />
    </div>
  );
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
