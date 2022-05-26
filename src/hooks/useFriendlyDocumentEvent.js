import { useEffect, useRef } from 'react';

/**
 * document events are a single function. document.onmousedown = {one function}. So if something else already added a handler for onmousedown,
 * adding another handler will clobber the existing one. This func is "friendly" and calls the existing handler and when this hook unmounts it will
 * make the pre-existing handler the current handler. This is broken if the pre-existing handler gets removed before this handler unmounts, but that's
 * a bug for a different day. Probably would want to do it like jquery and add a custom event handler and then register events towards that event
 * so that the custom handler calls the registered events and then can unregister events.
 *
 * @param eventName (string) the event on document to which to attach the event handler; ie onmousedown
 * @param eventHandler (function) function to call with the event when the event fires; if there was a previous event for the document, it too
 *    will be called; the new eventHandler may return false to prevent the previous event from being called.
 */
export default (eventName, eventHandler) => {
  const previousEventHandlerRef = useRef(null);

  useEffect(
    () => {
      // check if there was already a handler for this event and if so "chain" it to the new event handler
      if (document[eventName]) {
        previousEventHandlerRef.current = document[eventName];
      }

      // set new event handler in to document
      document[eventName] = (e) => {
        // call new handler
        const eventHandlerResult = eventHandler(e);

        // if eventHandler returns false then don't propagate event to previous handler
        if (previousEventHandlerRef.current && eventHandlerResult !== false) {
          previousEventHandlerRef.current(e);
        }
      };

      return (
        () => {
          document[eventName] = previousEventHandlerRef.current;
          previousEventHandlerRef.current = null;
        }
      );
    },
    [eventName, eventHandler]
  );
};
