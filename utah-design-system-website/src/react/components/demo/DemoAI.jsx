import {
  Button,
  ICON_BUTTON_APPEARANCE,
  IconButton,
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  TextArea,
  useAriaMessaging
} from '@utahdts/utah-design-system';
import { useCallback, useRef, useState } from 'react';
import { DemoAIResponse } from './DemoAIResponse.jsx';

export function DemoAI() {
  const timer = useRef(NaN);
  const { addPoliteMessage } = useAriaMessaging();

  const [draft, setDraft] = useState('');
  const [answers, setAnswers] = useState(/** @type { {id: number, isGenerating: boolean, prompt: string}[] } */([]));
  const [isDisabled, setIsDisabled] = useState(false);
  const [showModal, setModal] = useState(false);

  const onChange = useCallback((/** @type {import('react').ChangeEvent<HTMLTextAreaElement>} */ e) => {
    setDraft(e.target.value);
  }, [setDraft]);

  const setFocus = useCallback(() => {
    document.getElementById("utah-ai")?.focus();
  }, []);

  const openModal = useCallback(() => {
    setModal(true);
  }, [setModal]);

  const closeModal = useCallback(() => {
    setModal(false);
  }, [setModal]);

  const newChat = useCallback(() => {
    closeModal()
    setDraft('');
    setAnswers([]);
  }, [setDraft, setAnswers, closeModal]);

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
      if (!isDisabled && draft.length !== 0) submit();
    }
  }, [submit, draft]);

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
            onKeyDown={onEnter}
            onChange={onChange} />
        </div>
        <div className="flex justify-between items-center gap">
          <div className="flex justify-start items-center gap">
            <IconButton
              icon={<span className="utds-icon-before-edit-box" aria-hidden="true" />}
              size="small1x"
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              onClick={openModal}
              isDisabled={isDisabled}
              title="Start a new chat"
            />
          </div>
          <div className="flex justify-end items-center gap">
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
          <DemoAIResponse
            key={answer.id}
            answer={answer}
            onKeyChange={onKeyChange}
            setFocus={setFocus}
            openModal={openModal}
            isDisabled={isDisabled}
          />
        ))}
      </div>}
      {showModal ?
        <Modal
          ariaLabelledBy="new-chat-modal-title"
          id="new-chat-modal"
          onClose={closeModal}
          onEscape={closeModal}
        >
          <ModalTitle id="new-chat-modal-title">
            Start new chat?
          </ModalTitle>
          <ModalContent id="new-chat-modal-content">
            Utah A.I. doesn’t save your conversations. Are you sure you wish to clear the chat history and start a new chat? (This cannot be undone.)
          </ModalContent>
          <ModalFooter className="flex float-right flex-wrap" id="new-chat-modal-footer">
            <Button onClick={closeModal} className="mr-spacing">Cancel</Button>
            <Button onClick={newChat} className="button--solid button--primary-color">Start New Chat</Button>
          </ModalFooter>
        </Modal> : ''}
    </div>
  )
}
