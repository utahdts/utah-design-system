// @ts-check
import PropTypes from 'prop-types';
import React, {
  useMemo,
  useEffect,
  useRef,
} from 'react';
import joinClassNames from '../../util/joinClassNames';
import useAriaMessaging from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import trailingS from '../../util/trailingS';

const propTypes = {
  className: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string,
};
const defaultProps = {
  className: null,
  text: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {string} props.id
 * @param {number} props.maxLength
 * @param {string | null} [props.text]
 * @returns {JSX.Element | null}
 */
function CharacterCount({
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

CharacterCount.propTypes = propTypes;
CharacterCount.defaultProps = defaultProps;

export default CharacterCount;
