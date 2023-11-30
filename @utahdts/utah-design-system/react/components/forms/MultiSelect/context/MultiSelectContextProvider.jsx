// @ts-check
import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import useRefAlways from '../../../../hooks/useRefAlways';
import { MultiSelectContext } from './MultiSelectContext';

/** @typedef {import('../../../../jsDocTypes').MultiSelectContextValue} MultiSelectContextValue */
/** @typedef {import('../../../../jsDocTypes').MultiSelectContext} MultiSelectContextType */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.multiSelectId
 * @param {string[]} [props.defaultValues]
 * @param {((newValues: string[]) => void)} [props.onChange]
 * @param {(() => void)} [props.onClear]
 * @param {string[]} [props.values]
 * @returns {JSX.Element}
 */
export default function MultiSelectContextProvider({
  children,
  multiSelectId,
  defaultValues,
  onChange,
  onClear,
  values,
}) {
  const onChangeRef = useRefAlways(onChange);

  const multiSelectImmer = /** @type {typeof useImmer<MultiSelectContextValue>} */ (useImmer)(() => /** @type {MultiSelectContextValue} */({
    hasTagTemplate: false,
    multiSelectId,
    onChange: (newValues) => {
      if (onChangeRef.current) {
        onChangeRef.current(newValues);
      } else {
        multiSelectImmer[1]((draftContext) => {
          draftContext.selectedValues = newValues;
        });
      }
    },
    onClear,
    selectedValues: values ?? defaultValues ?? [],
  }));

  // when values changes externally, update the inner context state
  useEffect(
    () => {
      multiSelectImmer[1]((draftContext) => {
        if (values && draftContext.selectedValues !== values) {
          draftContext.selectedValues = values;
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values]
  );

  return (
    <MultiSelectContext.Provider value={multiSelectImmer}>
      {children}
    </MultiSelectContext.Provider>
  );
}
