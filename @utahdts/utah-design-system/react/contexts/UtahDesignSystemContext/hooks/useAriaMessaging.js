// @ts-check
import { useCallback, useMemo } from 'react';
import useUtahDesignSystemContext from '../useUtahDesignSystemContext';

/** @return {{addAssertiveMessage: (message: string) => void, addPoliteMessage: (message: string) => void}} */
export default function useAriaMessaging() {
  const [, setState] = useUtahDesignSystemContext();

  const addPoliteMessage = useCallback(
    /**
     * @param {string} message
     * @returns {void}
     */
    (message) => { setState((draftState) => { draftState.ariaLive.politeMessages.push(message); }); },
    [setState]
  );

  const addAssertiveMessage = useCallback(
    /**
     * @param {string} message
     * @returns {void}
     */
    (message) => { setState((draftState) => { draftState.ariaLive.assertiveMessages.push(message); }); },
    [setState]
  );

  return useMemo(() => ({ addAssertiveMessage, addPoliteMessage }), [addAssertiveMessage, addPoliteMessage]);
}
