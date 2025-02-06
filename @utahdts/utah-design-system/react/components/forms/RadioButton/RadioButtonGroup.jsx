import { joinClassNames } from '../../../util/joinClassNames';
import { ErrorMessage } from '../ErrorMessage';
import { RequiredStar } from '../RequiredStar';
import { RadioButtonGroupContextProvider } from './context/RadioButtonGroupContextProvider';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.defaultValue] starting value if not controlled
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {(newValue: string) => void} [props.onChange] respond to changes of current value if controlled
 * @param {string} [props.value] value of the currently selected Radio Button if controlled
 * @returns {import('react').JSX.Element}
 */
export function RadioButtonGroup({
  children,
  className,
  defaultValue,
  errorMessage,
  id,
  isRequired,
  label,
  onChange,
  value,
}) {
  return (
    <>
      <fieldset id={id} className={joinClassNames('fieldset fieldset--radio-wrapper', className)}>
        <legend>
          {label}
          {isRequired ? <RequiredStar /> : null}
        </legend>
        <RadioButtonGroupContextProvider
          defaultValue={defaultValue}
          name={id}
          onChange={onChange}
          value={value}
        >
          {children}
        </RadioButtonGroupContextProvider>
      </fieldset>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </>
  );
}
