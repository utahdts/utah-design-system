import {
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useAriaMessaging } from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { joinClassNames } from '../../util/joinClassNames';
import { trailingS } from '../../util/trailingS';

/**
 * @param {object} props
 * @param {string | null} [props.className]
 * @param {string} props.id
 * @param {number} props.maxLength
 * @param {string | null} [props.text]
 * @returns {import('react').JSX.Element | null}
 */
export function CharacterCount({
  className,
  id,
  maxLength,
  text,
}) {
  const timer = useRef(NaN);
  const { addPoliteMessage } = useAriaMessaging();

  const charactersLeft = text?.length ? (maxLength - text.length) : maxLength;
  const overLimit = text?.length ? (text.length > maxLength) : false;
  const charactersOver = text?.length ? (text.length - maxLength) : 0;

  const displayMessage = useMemo(
    () => (
      overLimit
        ? `${charactersOver} character${trailingS(charactersOver)} over the limit`
        : `${charactersLeft} character${trailingS(charactersLeft)} left`
    ),
    [charactersLeft, charactersOver, overLimit]
  );

  useEffect(
    () => {
      timer.current = window.setTimeout(() => addPoliteMessage(displayMessage), 1500);
      return () => clearTimeout(timer.current);
    },
    [addPoliteMessage, displayMessage]
  );

  return (
    (maxLength !== undefined && maxLength !== null)
      ? (
        <div
          className={joinClassNames('character-count', className, overLimit && 'character-count--over-limit')}
          id={`${id}-character-count`}
        >
          {displayMessage}
        </div>
      )
      : null
  );
}
