// @ts-check
import React, { useEffect, useMemo, useRef } from 'react';
import { useImmer } from 'use-immer';
import useRefAlways from '../../../../hooks/useRefAlways';
import { MultiSelectContext } from './MultiSelectContext';

/** @typedef {import('../../../../jsDocTypes').MultiSelectContext} MultiSelectContextType */
/** @typedef {import('../../../../jsDocTypes').MultiSelectContextNonStateRef} MultiSelectContextNonStateRef */
/** @typedef {import('../../../../jsDocTypes').MultiSelectContextValue} MultiSelectContextValue */

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
  const multiSelectContextNonStateRef = /** @type {typeof useRef<MultiSelectContextNonStateRef>} */ (useRef)({
    comboBoxDivElement: null,
    selectedOptionTagRefs: [],
  });

  const multiSelectImmer = /** @type {typeof useImmer<MultiSelectContextValue>} */ (useImmer)(() => ({
    focusedValueTagIndex: NaN,
    tagTemplate: null,
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
    onClear: onClear ?? (() => multiSelectImmer[1]((draftContext) => { draftContext.selectedValues = []; })),
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

  // eslint-disable-next-line max-len
  /** @type {[MultiSelectContextValue, import('use-immer').Updater<MultiSelectContextValue>, import('react').MutableRefObject<MultiSelectContextNonStateRef>]} */
  const providerValue = useMemo(
    () => [...multiSelectImmer, multiSelectContextNonStateRef],
    [multiSelectImmer]
  );

  return (
    <MultiSelectContext.Provider value={providerValue}>
      {children}
    </MultiSelectContext.Provider>
  );
}
