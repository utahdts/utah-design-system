import PropTypes from 'prop-types';
import {
  useCallback, useEffect, useRef, useState
} from 'react';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  maxLength: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string,
};
const defaultProps = {
  maxLength: null,
  value: null,
};

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {number | null} [props.maxLength]
 * @param {string | null} [props.value]
 * @returns {JSX.Element}
 */
export default function CharacterCount({ maxLength, id, value }) {
  const [ariaMessage, setAriaMessage] = useState(undefined);
  const timer = useRef(undefined);

  const charactersLeft = value?.length ? (maxLength - value.length) : maxLength;
  const overLimit = value?.length && (value.length > maxLength);
  const charactersOver = value?.length ? (value.length - maxLength) : 0;

  const displayMessage = useCallback(() => (
    overLimit
      ? `${charactersOver} character${(charactersOver >= 2 ? 's' : '')} over the limit.`
      : `${charactersLeft} character${(charactersLeft >= 2 ? 's' : '')} left.`
  ), [charactersLeft, charactersOver, overLimit]);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setAriaMessage(displayMessage());
      timer.current = undefined;
    }, 1500);
  }, [value]);

  return (
    maxLength
      ? (
        <div>
          <div className={joinClassNames('input-wrapper__character-count', overLimit && 'over-limit')} id={`${id}-character-count`}>
            {displayMessage()}
          </div>
          <div className="visually-hidden" aria-live="polite">{ariaMessage}</div>
        </div>
      )
      : null
  );
}

CharacterCount.propTypes = propTypes;
CharacterCount.defaultProps = defaultProps;
