import { Button, ExternalLink, ICON_BUTTON_APPEARANCE, IconButton, TextArea, useAriaMessaging } from '@utahdts/utah-design-system';
import { useCallback, useRef, useState } from 'react';

export function DemoAI() {
  const timer = useRef(NaN);
  const { addPoliteMessage } = useAriaMessaging();
  const [draft, setDraft] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const onChange = useCallback((/** @type {import('react').ChangeEvent<HTMLTextAreaElement>} */ e) => {
    setDraft(e.target.value);
  }, [setDraft]);
  const reset = useCallback(() => setDraft(''), [setDraft]);
  const newChat = useCallback(() => {
    setDraft('');
    setPrompt('');
    setFocus();
  }, [setDraft]);
  const submit = useCallback(() => {
    setPrompt(draft);
    setDraft('');
    setIsDisabled(true);
    setIsGenerating(true);
    addPoliteMessage('Utah A.I. is generating an answer.');
    timer.current = window.setTimeout(() => {
      setIsDisabled(false);
      setIsGenerating(false)
      addPoliteMessage('Utah A.I. has generated an answer. This is an example.');
      clearTimeout(timer.current);
    }, 4000);
  }, [draft, setDraft, setPrompt, setIsDisabled]);
  const setFocus = useCallback(() => {
    document.getElementById("utah-ai")?.focus();
  }, []);

  const onKeyChange = (/** @type {import('react').KeyboardEvent} */ event) => {
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
    }
    switch (event.key) {
      case 'ArrowUp':
        if (event.currentTarget.id === 'ai-response') {
          document.getElementById('user-prompt')?.focus();
        }
        break;

      case 'ArrowDown':
        if (event.currentTarget.id === 'user-prompt') {
          document.getElementById('ai-response')?.focus();
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="chatbot__wrapper">
      <div className="chatbot__input-wrapper">
        <TextArea
          id="utah-ai"
          label="Utah A.I."
          placeholder="Ask Utah A.I. anything"
          value={draft}
          isDisabled={isDisabled}
          onChange={onChange} />
      </div>
      <div className="flex justify-between items-center gap">
        <div className="flex justify-start items-center gap">
          <IconButton
            size="small1x"
            appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
            icon={(<span className="utds-icon-before-edit-box" aria-hidden="true" />)}
            onClick={newChat}
            isDisabled={isDisabled}
            title="Start a new chat" />
        </div>
        <div className="flex justify-end items-center gap">
          <IconButton
            size="small1x"
            appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
            icon={(<span className="utds-icon-before-restart" aria-hidden="true" />)}
            onClick={reset}
            isDisabled={isDisabled}
            title="Reset prompt" />
          <Button
            onClick={submit}
            size="small"
            color="primary"
            appearance="solid"
            type="button"
            isDisabled={isDisabled || draft.length === 0}
          >
            Submit
          </Button>
        </div>
      </div>
      <p className="disclaimer text-center font-size-xs my-spacing-xs">
        Utah A.I. provides general information only and may make mistakes. Its responses should not be considered or relied upon as legal advice and do not constitute an official agency decision. Do not enter personal or sensitive information in this chat.
      </p>
      {prompt && <div className="chatbot__answers">
        <hr />
        <div className="chatbot__answer-wrapper">
          <div className="chatbot__answer-user mt-spacing-xs answer" tabIndex={0} id="user-prompt" onKeyDown={onKeyChange}>
            <p className="mb-auto">
              <span className="visually-hidden">User prompt: </span>
              {prompt}
            </p>
          </div>
          <div className="chatbot__answer-ai">
            {isGenerating ?
              <div aria-busy="true" className="flex flex-col gap-s">
                <div className="skeleton skeleton--line"></div>
                <div className="skeleton skeleton--line"></div>
              </div>
              : <div>
                  <p className="answer mb-spacing-s" tabIndex={0} id="ai-response" onKeyDown={onKeyChange}>
                    <span className="visually-hidden">Utah A.I. response: </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus nunc nisi, efficitur ac pellentesque at, auctor id ante. Vivamus at blandit lorem.{" "}
                    <ExternalLink href="#">Source</ExternalLink>
                  </p>
                  <div className="flex gap-xs">
                    <IconButton
                      icon={(
                        <svg width="15" height="12" viewBox="0 0 15 12">
                          <path d="M10 12L8.83333 10.7786L11.8125 7.71429H3.75C2.70833 7.71429 1.82292 7.33929 1.09375 6.58929C0.364583 5.83929 0 4.92857 0 3.85714C0 2.78571 0.364583 1.875 1.09375 1.125C1.82292 0.375 2.70833 0 3.75 0H4.16667V1.71429H3.75C3.16667 1.71429 2.67361 1.92143 2.27083 2.33571C1.86806 2.75 1.66667 3.25714 1.66667 3.85714C1.66667 4.45714 1.86806 4.96429 2.27083 5.37857C2.67361 5.79286 3.16667 6 3.75 6H11.8125L8.83333 2.91429L10 1.71429L15 6.85714L10 12Z"/>
                        </svg>
                      )}
                      size="small1x"
                      appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                      onClick={setFocus}
                      title="Follow-up or ask something else" />
                    <IconButton
                      size="small1x"
                      appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                      icon={(<span className="utds-icon-before-edit-box" aria-hidden="true" />)}
                      onClick={newChat}
                      isDisabled={isDisabled}
                      title="Start a new chat" />
                    <IconButton
                      icon={(<span className="uds-icon">&#xe925;</span>)}
                      size="small1x"
                      appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                      onClick={()=>{}}
                      title="See more options" />
                  </div>
              </div>
            }
          </div>
        </div>
      </div>}
    </div>
  )
}
