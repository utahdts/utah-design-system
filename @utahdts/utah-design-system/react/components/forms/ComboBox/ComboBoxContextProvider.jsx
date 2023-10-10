// @ts-check
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from 'react';
import { useImmer } from 'use-immer';
import useFormContext from '../useFormContext';
import ComboBoxContext from './ComboBoxContext';

/** @typedef { import('../../../jsDocTypes').ComboBoxContext} ComboBoxContext */
/** @typedef { import('../../../jsDocTypes').ComboBoxContextValue} ComboBoxContextValue */
/** @typedef { import('../../../jsDocTypes').ComboBoxOption} ComboBoxOption */
/** @typedef { import('../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.comboBoxId
 * @returns {JSX.Element}
 */
export default function ComboBoxContextProvider({ children, comboBoxId }) {
  // @ts-ignore
  const { onChange } = useFormContext();

  const comboBoxImmer = /** @type {typeof useImmer<ComboBoxContextValue>} */ (useImmer)({
    filterValue: '',
    isOptionsExpanded: false,
    options: [],
    optionsFiltered: [],
    registerOption: (newOption) => {
      comboBoxImmer[1]((draftContext) => {
        draftContext.options.push(newOption);
      });
    },
    selectedOptionValue: null,
    unregisterOption: (optionValue) => {
      comboBoxImmer[1]((draftContext) => {
        draftContext.options = draftContext.options.filter((option) => option.value !== optionValue);
      });
    },
  });
  const setComboBoxState = comboBoxImmer[1];

  const onChangeFormValue = useCallback(
    /** @param {string} newValue */
    (newValue) => {
      onChange({ id: comboBoxId, newValue });
    },
    [comboBoxId, onChange]
  );

  // handle options or filterValue changes
  useEffect(
    () => {
      const { filterValue, options, selectedOptionValue } = comboBoxImmer[0];

      const filterValueLowerCase = filterValue.toLocaleLowerCase();

      // filter options to just ones including filterValue
      const filteredOptions = options.filter((option) => (!filterValueLowerCase || option.labelLowerCase.includes(filterValueLowerCase)));

      // if there's an exact match, use its value as the newSelectedOptionValue
      /** @type {string | null} */
      let newSelectedOptionValue = filteredOptions.find((option) => option.labelLowerCase === filterValueLowerCase)?.value ?? null;
      onChangeFormValue(newSelectedOptionValue ?? '');

      // otherwise, use existing value if it is not filtered out
      if (!newSelectedOptionValue) {
        newSelectedOptionValue = filteredOptions.find((option) => option.value === selectedOptionValue)?.value ?? null;
      }

      // otherwise, use first possible value
      if (!newSelectedOptionValue) {
        newSelectedOptionValue = filteredOptions[0]?.value;
      }

      // otherwise, leave with null since there are no visible options

      // let children know the selected filter value has changed
      setComboBoxState((draftContextValue) => {
        draftContextValue.selectedOptionValue = newSelectedOptionValue;
        draftContextValue.optionsFiltered = filteredOptions;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [comboBoxImmer[0].filterValue, comboBoxImmer[0].options, setComboBoxState]
  );

  return (
    <ComboBoxContext.Provider value={comboBoxImmer}>
      {children}
    </ComboBoxContext.Provider>
  );
}
