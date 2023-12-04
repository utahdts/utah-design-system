// @ts-check
import { uniq } from 'lodash';
import React from 'react';
import useRefAlways from '../../../hooks/useRefAlways';
import joinClassNames from '../../../util/joinClassNames';
import ComboBox from '../ComboBox/ComboBox';
import { MultiSelectTags } from './MultiSelectTags';
import useMultiSelectContext from './context/useMultiSelectContext';
import useAriaMessaging from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.errorMessage]
 * @param {React.RefObject} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {string} [props.placeholder]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export function MultiSelectComboBox({
  children,
  className,
  errorMessage,
  innerRef,
  isClearable,
  isDisabled,
  isRequired,
  label,
  labelClassName,
  name,
  placeholder,
  wrapperClassName,
  ...rest
}) {
  const [multiSelectContextValue, setMultiSelectContextValue] = useMultiSelectContext();
  const multiSelectContextValueRef = useRefAlways(multiSelectContextValue);
  const selectedValuesRef = useRefAlways(multiSelectContextValue.selectedValues);
  const { addPoliteMessage } = useAriaMessaging();

  return (
    <ComboBox
      className={joinClassNames('multi-select', className)}
      errorMessage={errorMessage}
      id={multiSelectContextValue.multiSelectId}
      innerRef={innerRef}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isShowingClearableIcon={isClearable && !!multiSelectContextValue.selectedValues.length}
      label={label}
      labelClassName={labelClassName}
      name={name}
      onChange={(newValue) => {
        multiSelectContextValue.onChange(uniq(selectedValuesRef.current.concat(newValue)));
      }}
      onClear={multiSelectContextValue.onClear}
      onKeyUp={(e, currentFilter) => {
        let eventIsHandled = false;
        if (e.key === 'Backspace' && !currentFilter && multiSelectContextValueRef.current.selectedValues.length) {
          eventIsHandled = true;
          setMultiSelectContextValue((draftContext) => {
            const deadTag = draftContext.selectedValues.pop();
            addPoliteMessage(`${deadTag} removed`);
          });
        }
        return eventIsHandled;
      }}
      placeholder={placeholder}
      tagChildren={<MultiSelectTags isDisabled={isDisabled} />}
      // the value is always unset because the multi-select will own and show the current value
      value=""
      wrapperClassName={wrapperClassName}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {/* children has the multiselect options in it */}
      {children}
    </ComboBox>
  );
}
