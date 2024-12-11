import { IconButton, useAriaMessaging } from '@utahdts/utah-design-system';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

const COPY_CODE = 'Copy code';
const COPIED = 'Copied';

/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLElement | null>} props.copyRef Ref to the element that will be copied from
 * @param {(copiedText: string) => string} [props.onCopy] allows morphing the text to copy eg. (draftText) => transformedText
 * @returns {import('react').JSX.Element}
 */
export function CopyButton({ copyRef, onCopy }) {
  const { addPoliteMessage } = useAriaMessaging();

  const [state, setState] = useImmer({
    showFeedback: false,
    copyButtonTitle: COPY_CODE,
    copyButtonTooltip: COPY_CODE,
  });

  useEffect(
    () => {
      let delay = NaN;
      if (state.showFeedback) {
        setState((draftState) => {
          draftState.copyButtonTitle = COPIED;
        });
        delay = window.setTimeout(() => {
          setState((draftState) => {
            draftState.showFeedback = false;
            draftState.copyButtonTitle = COPY_CODE;
          });
        }, 1500);
      }
      return () => {
        clearTimeout(delay);
      };
    },
    [state.showFeedback]
  );

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
                // @ts-expect-error
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
