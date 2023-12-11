// @ts-check
import trim from 'lodash/trim';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useImmer } from 'use-immer';
import useFormContext from '../../FormContext/useFormContext';
import { ComboBoxContext } from './ComboBoxContext';

/** @typedef { import('@utahdts/utah-design-system').ComboBoxContextNonStateRef} ComboBoxContextNonStateRef */
/** @typedef { import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */

/**
 * @template MutableRefObjectT
 * @typedef {import('react').MutableRefObject<MutableRefObjectT>} MutableRefObject
 */

/**
 * @template UpdaterT
 * @typedef {import('use-immer').Updater<UpdaterT>} Updater
 */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.comboBoxId
 * @param {string} [props.defaultValue]
 * @param {((newValue: string) => void)} [props.onChange]
 * @param {(() => void)} [props.onClear]
 * @param {(() => void)} [props.onSubmit]
 * @param {string} [props.value]
 * @returns {JSX.Element}
 */
export function ComboBoxContextProvider({
  children,
  comboBoxId,
  defaultValue,
  onChange,
  onClear,
  onSubmit,
  value,
}) {
  const { onChange: onChangeFormContext } = useFormContext();

  const comboBoxImmerRef = useRef(/** @type {import('use-immer').ImmerHook<ComboBoxContextValue> | null} */(null));
  const onChangeFormValue = useCallback(
    /** @param {string} newValue */
    (newValue) => {
      comboBoxImmerRef.current?.[1]((draftContext) => {
        draftContext.optionValueSelected = newValue;
        draftContext.filterValue = draftContext.options.find((option) => option.value === newValue)?.label || '';
        draftContext.isFilterValueDirty = false;
      });
      if (onChange) {
        // give parent first crack
        onChange(newValue);
      } else {
        // let the form context know about the change, if there is a form context
        onChangeFormContext?.({ fieldPath: comboBoxId, value: newValue });
      }
    },
    [comboBoxId, onChange, onChangeFormContext]
  );

  const comboBoxContextNonStateRef = useRef({
    currentOptionGroupId: '',
    textInput: /** @type {HTMLInputElement | null} */(null),
  });

  const comboBoxImmer = /** @type {typeof useImmer<ComboBoxContextValue>} */ (useImmer)({
    filterValue: '',
    optionValueFocused: null,
    isFilterValueDirty: false,
    isOptionsExpanded: false,
    onChange: onChangeFormValue,
    onClear,
    onSubmit,
    options: [],
    optionsFiltered: [],
    optionsFilteredWithoutGroupLabels: [],
    registerOption: (newOption) => {
      comboBoxImmer[1]((draftContext) => {
        draftContext.options.push(newOption);
      });
    },
    optionValueFocusedId: null,
    optionValueHighlighted: null,
    optionValueSelected: defaultValue ?? value ?? null,
    unregisterOption: (optionValue) => {
      comboBoxImmer[1]((draftContext) => {
        draftContext.options = draftContext.options.filter((option) => option.value !== optionValue);
      });
    },
  });
  const setComboBoxState = comboBoxImmer[1];
  comboBoxImmerRef.current = comboBoxImmer;

  // handle a controlled component changing its value
  useEffect(
    () => {
      if (value !== undefined && value !== comboBoxImmer[0].optionValueSelected) {
        comboBoxImmer[1]((draftState) => {
          draftState.optionValueSelected = value;
          draftState.filterValue = draftState.options.find((option) => option.value === value)?.label ?? draftState.filterValue;
          draftState.isFilterValueDirty = false;
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  // handle options or filterValue changes
  useEffect(
    () => {
      const {
        filterValue,
        isFilterValueDirty,
        options,
      } = comboBoxImmer[0];
      if (isFilterValueDirty) {
        const filterValueLowerCase = trim(filterValue).toLocaleLowerCase();

        // filter options to just ones including filterValue
        const filteredOptions = options.filter(
          (option) => option.isGroupLabel || (!filterValueLowerCase || option.labelLowerCase.includes(filterValueLowerCase))
        );

        // let children know the selected filter value has changed
        setComboBoxState((draftContextValue) => {
          draftContextValue.optionsFiltered = filteredOptions;
          draftContextValue.optionsFilteredWithoutGroupLabels = filteredOptions.filter((option) => !option.isGroupLabel);
        });
      } else {
        setComboBoxState((draftContextValue) => {
          draftContextValue.optionValueHighlighted = null;
          draftContextValue.optionsFiltered = options;
          draftContextValue.optionsFilteredWithoutGroupLabels = options.filter((option) => !option.isGroupLabel);
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [comboBoxImmer[0].filterValue, comboBoxImmer[0].options, setComboBoxState]
  );

  // eslint-disable-next-line max-len
  /** @type {[ComboBoxContextValue, Updater<ComboBoxContextValue>, MutableRefObject<ComboBoxContextNonStateRef>]} */
  const providerValue = useMemo(
    () => [
      ...comboBoxImmer,
      comboBoxContextNonStateRef,
    ],
    [comboBoxImmer, comboBoxContextNonStateRef]
  );

  return (
    <ComboBoxContext.Provider value={providerValue}>
      {children}
    </ComboBoxContext.Provider>
  );
}
