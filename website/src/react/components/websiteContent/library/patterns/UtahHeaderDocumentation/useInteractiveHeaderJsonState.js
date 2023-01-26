import { useImmer } from 'use-immer';
import defaultSettings from 'utah-design-system-header/src/js/settings/defaultSettings';
import localStorageKeys from '../../../../../enums/localStorageKeys';
import stringifyHeaderSettings from './stringifyHeaderSettings';

export default function useInteractiveHeaderJsonState() {
  const [headerJson, setHeaderJson] = useImmer(() => (
    localStorage.getItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS)
    || stringifyHeaderSettings(defaultSettings)
  ));

  return [
    headerJson,
    (immerSet) => {
      // TODO: store in local storage
      setHeaderJson(immerSet);
    },
  ];
}
