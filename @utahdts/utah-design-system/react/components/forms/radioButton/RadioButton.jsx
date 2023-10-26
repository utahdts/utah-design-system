// @ts-check
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useRadioButtonsContext } from './hooks/useRadioButtonsContext';
import RefShape from '../../../propTypesShapes/RefShape';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  innerRef: RefShape,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
};
const defaultProps = {
  className: null,
  isDisabled: false,
  innerRef: null,
  name: null,
  value: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string | null} [props.name]
 * @param {string | null} [props.value]
 * @returns {JSX.Element}
 */
export function RadioButton({
  className,
  id,
  isDisabled,
  innerRef,
  label,
  name,
  value,
}) {
  const {
    currentOnChange,
    currentValue,
    currentOnFormKeyPress,
  } = useRadioButtonsContext();

  return (
    <div className="input-wrapper input-wrapper--radio">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <label htmlFor={id}>{label}</label>
      <input
        checked={currentValue === value}
        className={className}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={useCallback(currentOnChange, [currentOnChange])}
        onKeyPress={currentOnFormKeyPress}
        ref={innerRef}
        type="radio"
        value={value}
      />
    </div>
  );
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
