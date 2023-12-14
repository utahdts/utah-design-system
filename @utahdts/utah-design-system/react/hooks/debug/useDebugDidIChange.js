import { useRef } from 'react';

/**
 * check if a value changes between renders
 * helpful for debugging useEffect/useMemo/useCallback etc
 * @template FieldT
 * @param {FieldT} field
 * @param {string} fieldName
 */
export function useDebugDidIChange(field, fieldName) {
  const fieldRef = useRef(field);
  if (fieldRef.current !== field) {
    // eslint-disable-next-line no-console
    console.log(`CHANGED: ${fieldName}; '${fieldRef.current}' => '${field}`);
    fieldRef.current = field;
  }
}
