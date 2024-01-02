import { useEffect, useMemo, useRef } from 'react';
import { useImmer } from 'use-immer';
import { useRefAlways } from '../../../../hooks/useRefAlways';
import { MultiSelectContext } from './MultiSelectContext';

/** @typedef {import('@utahdts/utah-design-system').MultiSelectContext} MultiSelectContextType */
/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextNonStateRef} MultiSelectContextNonStateRef */
/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextValue} MultiSelectContextValue */

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} props.multiSelectId
 * @param {string[]} [props.defaultValues]
 * @param {((newValues: string[]) => void)} [props.onChange]
 * @param {(() => void)} [props.onClear]
 * @param {string[]} [props.values]
 * @returns {import('react').JSX.Element}
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
    textInput: null,
  });

  const multiSelectImmer = /** @type {typeof useImmer<MultiSelectContextValue>} */ (useImmer)(() => ({
    clearButtonHasFocus: false,
    comboBoxOptions: [],
    focusedValueTagIndex: NaN,
    tagTemplate: null,
    isOptionsExpanded: false,
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
    optionTagClassNames: {},
    selectedValues: values ?? defaultValues ?? [],
    textInputHasFocus: false,
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
