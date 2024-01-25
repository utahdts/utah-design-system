import { trim } from 'lodash';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useImmer } from 'use-immer';
import { useFormContext } from '../../FormContext/useFormContext';
import { useMultiSelectContext } from '../../MultiSelect/context/useMultiSelectContext';
import { ComboBoxContext } from './ComboBoxContext';
import { valueAtPath } from '../../../../util/state/valueAtPath';

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
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} props.comboBoxId
 * @param {string} [props.defaultValue]
 * @param {boolean} [props.isValueClearedOnSelection]
 * @param {((newValue: string) => void)} [props.onChange]
 * @param {(() => void)} [props.onClear]
 * @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp]
 * @param {(() => void)} [props.onSubmit]
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function ComboBoxContextProvider({
  children,
  comboBoxId,
  defaultValue,
  isValueClearedOnSelection,
  onChange,
  onClear,
  onKeyUp,
  onSubmit,
  value,
}) {
  const { onChange: onChangeFormContext, state } = useFormContext();
  const [, setMultiSelectContext] = useMultiSelectContext();

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

  const comboBoxContextNonStateRef = useRef({
    currentOptionGroupId: '',
    textInput: /** @type {HTMLInputElement | null} */(null),
  });

  const comboBoxImmer = /** @type {typeof useImmer<ComboBoxContextValue>} */ (useImmer)({
    filterValue: '',
    optionValueFocused: null,
    isFilterValueDirty: false,
    isOptionsExpanded: false,
    isValueClearedOnSelection: !!isValueClearedOnSelection,
    onChange: onChangeFormValue,
    onClear,
    onKeyUp,
    onSubmit,
    options: [],
    optionsFiltered: [],
    optionsFilteredWithoutGroupLabels: [],
    registerOption: (newOption) => {
      comboBoxImmer[1]((draftContext) => {
        const oldOption = draftContext.options.find((searchOption) => searchOption.value === newOption.value);
        if (oldOption) {
          Object.assign(oldOption, newOption);
        } else {
          draftContext.options.push(newOption);
        }
        // `optionValueSelected` may be for an option that has not yet been registered
        // check if the newly registered option is a match for `optionValueSelected`
        const selectedOption = draftContext.options.find((option) => option.value === draftContext.optionValueSelected);
        draftContext.filterValue = selectedOption?.label ?? '';
      });
    },
    optionValueFocusedId: null,
    optionValueHighlighted: null,
    optionValueSelected: defaultValue ?? value ?? valueAtPath({ object: state, path: comboBoxId }) ?? null,
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
          draftContextValue.optionsFilteredWithoutGroupLabels = filteredOptions.filter((option) => !option.isGroupLabel && !option.isHidden);
        });
      } else {
        setComboBoxState((draftContextValue) => {
          draftContextValue.optionValueHighlighted = null;
          draftContextValue.optionsFiltered = options;
          draftContextValue.optionsFilteredWithoutGroupLabels = options.filter((option) => !option.isGroupLabel && !option.isHidden);
        });
      }
    },
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

  // update multi-select-context if there is one when combo box's options change
  useEffect(
    () => {
      setMultiSelectContext((draftContext) => {
        draftContext.comboBoxOptions = comboBoxImmer[0].options;
      });
    },
    [comboBoxImmer[0].options]
  );
  useEffect(
    () => {
      setMultiSelectContext((draftContext) => {
        draftContext.isOptionsExpanded = comboBoxImmer[0].isOptionsExpanded;
      });
    },
    [comboBoxImmer[0].isOptionsExpanded]
  );

  return (
    <ComboBoxContext.Provider value={providerValue}>
      {children}
    </ComboBoxContext.Provider>
  );
}
