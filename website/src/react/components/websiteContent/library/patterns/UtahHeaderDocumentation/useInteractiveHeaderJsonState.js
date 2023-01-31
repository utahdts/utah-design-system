import { useEffect, useRef, useState } from 'react';
import { getUtahHeaderSettings, setUtahHeaderSettings } from 'utah-design-system-header';
import localStorageKeys from '../../../../../enums/localStorageKeys';
import stringifyHeaderSettings from './stringifyHeaderSettings';

export default function useInteractiveHeaderJsonState() {
  const [headerJson, setHeaderJson] = useState(() => (
    localStorage.getItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS)
    || stringifyHeaderSettings(getUtahHeaderSettings())
  ));
  const originalHeader = useRef(getUtahHeaderSettings());

  useEffect(
    () => {
      console.log(JSON.parse(headerJson));
      setUtahHeaderSettings(JSON.parse(headerJson));
      return () => {
        // put original settings back when leaving page
        setUtahHeaderSettings(originalHeader.current);
      };
    },
    []
  );

  return [
    headerJson,
    (newHeaderString) => {
      localStorage.setItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS, newHeaderString);
      console.log(JSON.parse(newHeaderString));
      setHeaderJson(newHeaderString);
      setUtahHeaderSettings(JSON.parse(newHeaderString));
    },
    originalHeader.current,
  ];
}
