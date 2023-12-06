// @ts-check
import { isFunction, uniq } from 'lodash';
import React from 'react';
import useAriaMessaging from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import useRefAlways from '../../../hooks/useRefAlways';
import joinClassNames from '../../../util/joinClassNames';
import { ComboBox } from '../ComboBox/ComboBox';
import { MultiSelectTags } from './MultiSelectTags';
import useMultiSelectContext from './context/useMultiSelectContext';

/**
 * @template MutableRefT
 * @typedef {import('../../../jsDocTypes').MutableRef<MutableRefT>} MutableRef
 */

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.errorMessage]
 * @param {MutableRef<HTMLDivElement | null>} [props.innerRef]
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
  innerRef: draftInnerRef,
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
  const [multiSelectContextValue, setMultiSelectContextValue, multiSelectContextNonStateRer] = useMultiSelectContext();
  const multiSelectContextValueRef = useRefAlways(multiSelectContextValue);
  const selectedValuesRef = useRefAlways(multiSelectContextValue.selectedValues);
  const { addPoliteMessage } = useAriaMessaging();

  return (
    <ComboBox
      className={joinClassNames('multi-select', className)}
      errorMessage={errorMessage}
      id={multiSelectContextValue.multiSelectId}
      innerRef={(ref) => {
        if (draftInnerRef) {
          if (isFunction(draftInnerRef)) {
            draftInnerRef(ref);
          } else {
            draftInnerRef.current = ref;
          }
        }
        multiSelectContextNonStateRer.current.comboBoxDivElement = ref;
      }}
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
        // check that filter is blank and that there are options selected
        if (!currentFilter && multiSelectContextValueRef.current.selectedValues.length) {
          if (e.key === 'Backspace') {
            eventIsHandled = true;
            setMultiSelectContextValue((draftContext) => {
              const deadTag = draftContext.selectedValues.pop();
              addPoliteMessage(`${deadTag} removed`);
            });
          }
          if (e.key === 'ArrowLeft') {
            eventIsHandled = true;
            setMultiSelectContextValue((draftContext) => {
              draftContext.focusedValueTagIndex = draftContext.selectedValues.length - 1;
            });
          }
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
