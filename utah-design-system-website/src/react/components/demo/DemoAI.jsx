import {
  Button,
  ConfirmationButton,
  ConfirmationChildren,
  ExternalLink,
  ICON_BUTTON_APPEARANCE,
  IconButton,
  InitialChildren,
  TextArea,
  useAriaMessaging
} from '@utahdts/utah-design-system';
import { useCallback, useRef, useState } from 'react';

export function DemoAI() {
  const timer = useRef(NaN);
  const { addPoliteMessage } = useAriaMessaging();

  const [draft, setDraft] = useState('');
  const [answers, setAnswers] = useState(/** @type { {id: number, isGenerating: boolean, prompt: string}[] } */([]));
  const [isDisabled, setIsDisabled] = useState(false);

  const onChange = useCallback((/** @type {import('react').ChangeEvent<HTMLTextAreaElement>} */ e) => {
    setDraft(e.target.value);
  }, [setDraft]);

  const reset = useCallback(() => setDraft(''), [setDraft]);

  const setFocus = useCallback(() => {
    document.getElementById("utah-ai")?.focus();
  }, []);

  const newChat = useCallback(() => {
    setDraft('');
    setAnswers([]);
    setFocus();
  }, [setDraft, setAnswers, setFocus]);

  const timeoutCallback = useCallback(() => {
    setIsDisabled(false);
    setAnswers((prevAnswers) =>
      prevAnswers.map((answer) => ({
        ...answer,
        isGenerating: false,
      }))
    );
    addPoliteMessage('Utah A.I. has generated an answer. Use your up and bottom arrow keys to navigate between responses.');
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, [answers, setAnswers, setIsDisabled, addPoliteMessage]);

  const submit = useCallback(() => {
    const newAnswer = { id: answers.length + 1, isGenerating: true, prompt: draft };
    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);

    setDraft('');
    setIsDisabled(true);
    addPoliteMessage('Utah A.I. is generating an answer.');
    if (timer.current) clearTimeout(timer.current);
    timer.current = window.setTimeout(timeoutCallback, 4000);
  }, [draft, answers, timer, setDraft, setAnswers, setIsDisabled, addPoliteMessage]);

  const onKeyChange = useCallback((/** @type {import('react').KeyboardEvent} */ event) => {
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
    }
    const elId = event.currentTarget.id.match(/\d/g) || [answers.length];
    switch (event.key) {
      case 'ArrowDown':
        if (
          event.currentTarget.id.includes('user-prompt')
        ) {
          document.getElementById(`ai-answer_${elId[0]}`)?.focus();
        } else if (
          event.currentTarget.id.includes('ai-answer')
          && !event.currentTarget.id.includes('1')
        ) {
          document.getElementById(`user-prompt_${Number(elId[0]) - 1}`)?.focus();
        }
        break;

      case 'ArrowUp':
        if (
          event.currentTarget.id.includes('user-prompt')
          && !event.currentTarget.id.includes(answers.length.toString())
        ) {
          document.getElementById(`ai-answer_${Number(elId[0]) + 1}`)?.focus();
        } else if (
          event.currentTarget.id.includes('ai-answer')
        ) {
          document.getElementById(`user-prompt_${elId[0]}`)?.focus();
        }
        break;

      default:
        break;
    }
  }, []);

  const onEnter = useCallback((/** @type {import('react').KeyboardEvent} */ event) => {
    if (event.key === 'Enter' && !(event.key === 'Enter' && event.shiftKey)) {
      event.preventDefault();
      if (!isDisabled || draft.length !== 0) submit();
    }
  }, [submit]);

  return (
    <div className="chatbot__wrapper">
      <div className="chatbot__input-wrapper">
        <div>
          <TextArea
            id="utah-ai"
            label="Utah A.I."
            labelClassName="visually-hidden"
            placeholder="Ask Utah A.I. anything"
            value={draft}
            isDisabled={isDisabled}
            // @ts-ignore
            onKeyUp={onEnter}
            onChange={onChange} />
        </div>
        <div className="flex justify-between items-center gap">
          <div className="flex justify-start items-center gap">
            <ConfirmationButton
              className="button icon-button icon-button--borderless icon-button--small1x"
              appearance="outlined"
              onClick={newChat}
              size="small1x"
            >
              <InitialChildren>
                <span className="utds-icon-before-edit-box" aria-hidden="true" />
                <span className="visually-hidden">Start a new chat</span>
              </InitialChildren>
              <ConfirmationChildren>
                Are you sure?
              </ConfirmationChildren>
            </ConfirmationButton>
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
              Submit <span className="ml-spacing-xs uds-icon">&#xe941;</span>
            </Button>
          </div>
        </div>
      </div>
      <p className="disclaimer text-center font-size-xs my-spacing-xs">
        Utah A.I. provides general information only and may make mistakes. Its responses should not be considered or relied upon as legal advice and do not constitute an official agency decision. Do not enter personal or sensitive information in this chat.
      </p>
      {!!answers.length && <div className="chatbot__answers">
        {answers.sort((a, b) => b.id - a.id).map((answer) => (
          <div key={answer.id}>
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
                      <ConfirmationButton
                        className="button icon-button icon-button--borderless icon-button--small1x"
                        appearance="outlined"
                        onClick={newChat}
                        size="small1x"
                      >
                        <InitialChildren>
                          <span className="utds-icon-before-edit-box" aria-hidden="true" />
                          <span className="visually-hidden">Start a new chat</span>
                        </InitialChildren>
                        <ConfirmationChildren>
                          Are you sure?
                        </ConfirmationChildren>
                      </ConfirmationButton>
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
          </div>
        ))}
      </div>}
    </div>
  )
}
