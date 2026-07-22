import { ExternalLink, ICON_BUTTON_APPEARANCE, IconButton } from '@utahdts/utah-design-system';
import { CopyButton } from '../copy/CopyButton.jsx';
import { useRef } from 'react';

/**
 * @param {object} props
 * @param {{ prompt: string, id: number, isGenerating: boolean }} props.answer
 * @param {import('react').KeyboardEventHandler} props.onKeyChange
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} props.setFocus
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} props.openModal
 * @param {boolean} [props.isDisabled]
 * @returns {import('react').JSX.Element}
 */
export function DemoAIResponse({
  answer,
  onKeyChange,
  setFocus,
  openModal,
  isDisabled = false,
}) {
  const childrenRef = useRef(/** @type {HTMLDivElement | null} */(null));
  return (
    <div>
      <hr />
      <div className="chatbot__answer-wrapper">
        <div className="chatbot__answer-user mt-spacing-xs answer" tabIndex={0} id={`user-prompt_${answer.id}`} onKeyDown={onKeyChange}>
          <p className="mb-auto">
            <span className="visually-hidden">User prompt: </span>
            {answer.prompt}
          </p>
        </div>
        <div className="chatbot__answer-ai">
          {answer.isGenerating ?
            <div aria-busy="true" className="flex flex-col gap-s">
              <div className="skeleton skeleton--line"></div>
              <div className="skeleton skeleton--line"></div>
            </div>
            : <div>
              <p className="answer mb-spacing-s" tabIndex={0} id={`ai-answer_${answer.id}`} onKeyDown={onKeyChange}>
                <span className="visually-hidden">Utah A.I. response: </span>
                <span ref={childrenRef}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus nunc nisi, efficitur ac pellentesque at, auctor id ante. Vivamus at blandit lorem.{" "}
                  <ExternalLink href="#">Source</ExternalLink>
                </span>
              </p>
              <div className="flex gap-xs chatbot__answer-toolbar">
                <IconButton
                  icon={(
                    <svg width="15" height="12" viewBox="0 0 15 12">
                      <path d="M10 12L8.83333 10.7786L11.8125 7.71429H3.75C2.70833 7.71429 1.82292 7.33929 1.09375 6.58929C0.364583 5.83929 0 4.92857 0 3.85714C0 2.78571 0.364583 1.875 1.09375 1.125C1.82292 0.375 2.70833 0 3.75 0H4.16667V1.71429H3.75C3.16667 1.71429 2.67361 1.92143 2.27083 2.33571C1.86806 2.75 1.66667 3.25714 1.66667 3.85714C1.66667 4.45714 1.86806 4.96429 2.27083 5.37857C2.67361 5.79286 3.16667 6 3.75 6H11.8125L8.83333 2.91429L10 1.71429L15 6.85714L10 12Z"/>
                    </svg>
                  )}
                  size="small1x"
                  appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                  onClick={setFocus}
                  isDisabled={isDisabled}
                  title="Follow-up or ask something else" />
                <IconButton
                  icon={<span className="utds-icon-before-edit-box" aria-hidden="true" />}
                  size="small1x"
                  appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                  onClick={openModal}
                  isDisabled={isDisabled}
                  title="Start a new chat"
                />
                <CopyButton copyRef={childrenRef} copyCode="Copy response" isDisabled={isDisabled} />
                <IconButton
                  icon={(<span className="uds-icon">&#xe925;</span>)}
                  size="small1x"
                  appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                  // eslint-disable-next-line no-console
                  onClick={()=>{console.log('Clicked see more options')}}
                  isDisabled={isDisabled}
                  title="See more options" />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
