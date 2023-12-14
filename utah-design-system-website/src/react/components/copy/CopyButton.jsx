import { IconButton, useAriaMessaging } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';

const propTypes = {
  // Ref to the element that will be copied from
  // eslint-disable-next-line react/forbid-prop-types
  copyRef: PropTypes.object.isRequired,
  // allows morphing the text to copy eg. (draftText) => transformedText
  onCopy: PropTypes.func,
};
const defaultProps = {
  onCopy: null,
};

const COPY_CODE = 'Copy code';
const COPIED = 'Copied';

function CopyButton({ copyRef, onCopy }) {
  const { addPoliteMessage } = useAriaMessaging();

  const [state, setState] = useImmer({
    showFeedback: false,
    copyButtonTitle: COPY_CODE,
    copyButtonTooltip: COPY_CODE,
  });

  useEffect(() => {
    let delay;
    if (state.showFeedback) {
      setState((draftState) => {
        draftState.copyButtonTitle = COPIED;
      });
      delay = setTimeout(() => {
        setState((draftState) => {
          draftState.showFeedback = false;
          draftState.copyButtonTitle = COPY_CODE;
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
            addPoliteMessage('Copied to clipboard');
          } else {
            addPoliteMessage('Clipboard not available');
            // eslint-disable-next-line no-console
            console.error('Clipboard is not available');
          }
        }}
        title={COPY_CODE}
        tooltipText={state.copyButtonTitle}
      />
    </div>
  );
}

CopyButton.propTypes = propTypes;
CopyButton.defaultProps = defaultProps;

export default CopyButton;
