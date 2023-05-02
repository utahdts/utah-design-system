import { IconButton, RefShape } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';

const propTypes = {
  // Ref to the element that will be copied from
  copyRef: RefShape.isRequired,
  // allows morphing the text to copy eg. (draftText) => transformedText
  onCopy: PropTypes.func,
};
const defaultProps = {
  onCopy: null,
};

function CopyButton({ copyRef, onCopy }) {
  const [state, setState] = useImmer({
    showFeedback: false,
  });

  useEffect(() => {
    let delay;
    if (state.showFeedback) {
      delay = setTimeout(() => {
        setState((draftState) => {
          draftState.showFeedback = false;
        });
      }, 1500);
    }
    return () => {
      clearTimeout(delay);
    };
  }, [state.showFeedback]);

  return (
    <div className="copy-button">
      <IconButton
        className="copy-button__button icon-button--borderless"
        icon={<span className="utds-icon-before-copy" aria-hidden="true" />}
        onClick={() => {
          if (navigator.clipboard && copyRef.current) {
            let copiedText;
            switch (copyRef.current.tagName) {
              case 'INPUT':
              case 'SELECT':
              case 'TEXTAREA':
                copiedText = copyRef.current.value;
                break;
              default:
                copiedText = copyRef.current.innerText;
                break;
            }
            if (onCopy) {
              copiedText = onCopy(copiedText);
            }
            navigator.clipboard.writeText(copiedText);
            setState((draftState) => {
              draftState.showFeedback = true;
            });
          } else {
            // eslint-disable-next-line no-console
            console.error('Clipboard is not available');
          }
        }}
        title="Copy Code"
      />
      <div
        className={`copy-button__feedback hcenter ${state.showFeedback && 'copy-button__feedback--visible'}`}
        aria-live="polite"
      >
        {
          state.showFeedback
            ? (
              <span>
                Copied
                <span className="visually-hidden">to clipboard</span>
              </span>
            )
            : <span aria-hidden="true">Copied</span>
        }
      </div>
    </div>
  );
}

CopyButton.propTypes = propTypes;
CopyButton.defaultProps = defaultProps;

export default CopyButton;
