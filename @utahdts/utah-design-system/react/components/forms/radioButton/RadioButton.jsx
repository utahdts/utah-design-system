// @ts-check
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useRadioButtonsContext } from './hooks/useRadioButtonsContext';
import RefShape from '../../../propTypesShapes/RefShape';

const propTypes = {
  className: PropTypes.string,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
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
    state: {
      currentValue,
      currentName,
    },
    setValue,
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
        name={name || currentName}
        onChange={useCallback(() => setValue(value), [setValue, value])}
        ref={innerRef}
        type="radio"
        value={value}
      />
    </div>
  );
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
