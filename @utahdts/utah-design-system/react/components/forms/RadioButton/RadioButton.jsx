import { useCallback } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { useRadioButtonGroupContext } from './context/useRadioButtonGroupContext';

/**
 * wrap in a RadioButtonGroup to control a clump of RadioButtons. Can have a RadioButton without a RadioButtonGroup,
 * but then it is always uncontrolled.
 * @param {object} props
 * @param {string} [props.className]
 * @param {boolean} [props.defaultIsChecked] allows default checking if uncontrolled (not in RadioButtonGroup)
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name] groups radio buttons together in the DOM; from context, though can override or be solo
 * @param {string} props.value
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function RadioButton({
  className,
  defaultIsChecked,
  id,
  innerRef,
  isDisabled,
  label,
  labelClassName,
  name,
  value,
  wrapperClassName,
  ...rest
}) {
  const [contextValues] = useRadioButtonGroupContext();

  if (!contextValues && !name) {
    // eslint-disable-next-line no-console
    console.warn('RadioButton: in uncontrolled mode, a RadioButton must have a supplied `name` attribute');
  }

  /** @type {string | undefined} */
  let currentValue;
  if (contextValues) {
    currentValue = contextValues.value || '';
  } else {
    // not in a ComboBoxGroup
    currentValue = undefined;
  }
  const isControlled = !!(contextValues);

  const onChange = useCallback(
    () => {
      // only ever triggered if the radio button becomes selected
      if (contextValues) {
        contextValues.onChange(value);
      }
      // else - uncontrolled so don't do anything
    },
    [contextValues, name, value]
  );

  return (
    <div className={joinClassNames('input-wrapper input-wrapper--radio', wrapperClassName)} ref={innerRef}>
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
      </label>
      <input
        checked={isControlled ? currentValue === value : undefined}
        defaultChecked={defaultIsChecked}
        className={className}
        disabled={isDisabled}
        id={id}
        name={contextValues?.name ?? name}
        onChange={isControlled ? onChange : undefined}
        type="radio"
        {...rest}
      />
    </div>
  );
}
