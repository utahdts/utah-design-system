import { useCallback } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { useFormContext } from '../FormContext/useFormContext';
import { useRadioButtonGroupContext } from './context/useRadioButtonGroupContext';

/**
 * wrap in a RadioButtonGroup to control a clump of RadioButtons. Can have a RadioButton without a RadioButtonGroup
 * ,but then it is always uncontrolled.
 * @param {object} props
 * @param {string} [props.className]
 * @param {boolean} [props.defaultIsChecked] allows default checking if uncontrolled (not in RadioButtonGroup)
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name] groups radio buttons together in the DOM; from context, though can override or be solo
 * @param {string} props.value the html radio button's value to put in to the form data if this radio button is selected
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
  const {
    setState: formContextSetState,
    state: formContextState,
  } = useFormContext();

  const [contextValues] = useRadioButtonGroupContext();

  if (!contextValues && !formContextSetState && !name) {
    // eslint-disable-next-line no-console
    console.warn('RadioButton: in uncontrolled mode, a RadioButton must have a supplied `name` attribute');
  }

  /** @type {string | undefined} */
  let currentValue;
  if (contextValues) {
    currentValue = contextValues.value || '';
  } else if (formContextState && name) {
    // not in a ComboBoxGroup but is in a FormContext
    // @ts-ignore
    currentValue = formContextState?.[name];
  } else {
    // not in a ComboBoxGroup and not in a FormContext
    currentValue = undefined;
  }
  const isControlled = !!(formContextState || contextValues);

  const onChange = useCallback(
    () => {
      // only ever triggered if the radio button becomes selected
      if (contextValues) {
        contextValues.onChange(value);
      } else if (formContextSetState && name) {
        // controlled by form context
        formContextSetState((draftState) => {
          // @ts-ignore
          draftState[name] = value;
        });
      }
      // else - uncontrolled so don't do anything
    },
    [contextValues, formContextSetState, name, value]
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
