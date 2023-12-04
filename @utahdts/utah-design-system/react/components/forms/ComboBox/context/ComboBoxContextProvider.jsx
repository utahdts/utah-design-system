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
import ComboBoxContext from './ComboBoxContext';

/** @typedef { import('../../../../jsDocTypes').ComboBoxContext} ComboBoxContext */
/** @typedef { import('../../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */
/** @typedef { import('../../../../jsDocTypes').ComboBoxOption} ComboBoxOption */
/** @typedef {import('../../../../jsDocTypes').Event} Event */
/** @typedef { import('../../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.comboBoxId
 * @param {string} [props.defaultValue]
 * @param {((newValue: string) => void)} [props.onChange]
 * @param {(() => void)} [props.onClear]
 * @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp]
 * @param {(() => void)} [props.onSubmit]
 * @param {string} [props.value]
 * @returns {JSX.Element}
 */
export default function ComboBoxContextProvider({
  children,
  comboBoxId,
  defaultValue,
  onChange,
  onClear,
  onKeyUp,
  onSubmit,
  value,
}) {
  const { onChange: onChangeFormContext } = useFormContext();
  const textInputRef = useRef(/** @type {HTMLInputElement | null} */(null));

  const comboBoxImmerRef = useRef(/** @type {import('use-immer').ImmerHook<ComboBoxContextValue> | null} */(null));
  const onChangeFormValue = useCallback(
    /** @param {string} newValue */
    (newValue) => {
      comboBoxImmerRef.current?.[1]((draftContext) => {
        draftContext.isFilterValueDirty = false;
      });
      if (onChange) {
        // give parent first crack
        onChange(newValue);
      } else {
        // if parent controls onChange then don't set the value automatically
        comboBoxImmerRef.current?.[1]((draftContext) => {
          draftContext.optionValueSelected = newValue;
          draftContext.filterValue = draftContext.options.find((option) => option.value === newValue)?.label || '';
        });

        // let the form context know about the change, if there is a form context
        onChangeFormContext?.({ fieldPath: comboBoxId, value: newValue });
      }
    },
    [comboBoxId, onChange, onChangeFormContext]
  );

  const comboBoxImmer = /** @type {typeof useImmer<ComboBoxContextValue>} */ (useImmer)({
    filterValue: '',
    optionValueFocused: null,
    isFilterValueDirty: false,
    isOptionsExpanded: false,
    onChange: onChangeFormValue,
    onClear,
    onKeyUp,
    onSubmit,
    options: [],
    optionsFiltered: [],
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
        const filteredOptions = options.filter((option) => (!filterValueLowerCase || option.labelLowerCase.includes(filterValueLowerCase)));

        // let children know the selected filter value has changed
        setComboBoxState((draftContextValue) => {
          draftContextValue.optionsFiltered = filteredOptions;
        });
      } else {
        setComboBoxState((draftContextValue) => {
          draftContextValue.optionValueHighlighted = null;
          draftContextValue.optionsFiltered = options;
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [comboBoxImmer[0].filterValue, comboBoxImmer[0].options, setComboBoxState]
  );

  /** @type {[ComboBoxContextValue, import('use-immer').Updater<ComboBoxContextValue>, import('react').MutableRefObject<HTMLInputElement | null>]} */
  const providerValue = useMemo(
    () => [
      ...comboBoxImmer,
      textInputRef,
    ],
    [comboBoxImmer]
  );

  return (
    <ComboBoxContext.Provider value={providerValue}>
      {children}
    </ComboBoxContext.Provider>
  );
}
