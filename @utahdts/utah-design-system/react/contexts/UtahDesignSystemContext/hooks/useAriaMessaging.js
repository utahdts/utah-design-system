import { useCallback, useMemo } from 'react';
import { useUtahDesignSystemContext } from '../useUtahDesignSystemContext';

/** @returns {{addAssertiveMessage: (message: string) => void, addPoliteMessage: (message: string) => void}} */
export function useAriaMessaging() {
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
