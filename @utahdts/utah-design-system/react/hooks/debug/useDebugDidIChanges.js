import { useRef } from 'react';

/**
 * check if values change between renders
 * helpful for debugging useEffect/useMemo/useCallback etc
 * @param {Record<string, any> | undefined | null} fields
 * @param {string} [description]
 */
export function useDebugDidIChanges(fields, description) {
  const previousFieldsRef = useRef({ ...fields });

  const changedFields = Object.entries(fields || {}).filter(([key, value]) => previousFieldsRef.current[key] !== value);
  changedFields.forEach(([key, value]) => {
    // eslint-disable-next-line no-console
    console.log(`CHANGED${description ? ` (${description})` : ''}: ${key}; '${previousFieldsRef.current[key]}' => '${value}`);
    previousFieldsRef.current[key] = value;
  });
}
