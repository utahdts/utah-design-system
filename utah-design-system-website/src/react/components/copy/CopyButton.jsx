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
    copyButtonTitle: 'Copy code',
  });

  useEffect(() => {
    let delay;
    if (state.showFeedback) {
      setState((draftState) => {
        draftState.copyButtonTitle = 'Copied';
      });
      delay = setTimeout(() => {
        setState((draftState) => {
          draftState.showFeedback = false;
          draftState.copyButtonTitle = 'Copy code';
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
            // eslint-disable-next-line no-console
            navigator.clipboard.writeText(copiedText).catch((e) => console.error(e));
            setState((draftState) => {
              draftState.showFeedback = true;
            });
          } else {
            // eslint-disable-next-line no-console
            console.error('Clipboard is not available');
          }
        }}
        title={state.copyButtonTitle}
      />
      {/* TODO: Notify the screen reader the text was copied to the clipboard */}
    </div>
  );
}

CopyButton.propTypes = propTypes;
CopyButton.defaultProps = defaultProps;

export default CopyButton;
