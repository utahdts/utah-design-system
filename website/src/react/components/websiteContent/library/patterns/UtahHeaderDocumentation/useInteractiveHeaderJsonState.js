import { useEffect, useRef, useState } from 'react';
import { getUtahHeaderSettings, setUtahHeaderSettings } from 'utah-design-system-header';
import localStorageKeys from '../../../../../enums/localStorageKeys';
import parseHeaderSettings from './parseHeaderSettings';
import stringifyHeaderSettings from './stringifyHeaderSettings';

export default function useInteractiveHeaderJsonState() {
  const [headerJsonString, setHeaderJsonString] = useState(() => (
    localStorage.getItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS)
    || stringifyHeaderSettings(getUtahHeaderSettings())
  ));
  const originalHeader = useRef(getUtahHeaderSettings());

  useEffect(
    () => {
      // on load, use the current headerJsonString settings from localstorage
      setUtahHeaderSettings(parseHeaderSettings(headerJsonString));
      return () => {
        // put original settings back when leaving page
        setUtahHeaderSettings(originalHeader.current);
      };
    },
    []
  );

  return [
    headerJsonString,
    (newHeaderString) => {
      localStorage.setItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS, newHeaderString);
      setHeaderJsonString(newHeaderString);
      setUtahHeaderSettings(parseHeaderSettings(newHeaderString));
    },
    originalHeader.current,
  ];
}
