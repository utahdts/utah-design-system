import { Button, TextInput, useAriaMessaging } from '@utahdts/utah-design-system';
import { useImmer } from 'use-immer';
import { AccessibilityTestingScenario } from './AccessibilityTestingScenario';

export function AccessibilityTestingMessages() {
  const { addPoliteMessage, addAssertiveMessage } = useAriaMessaging();
  const [messages, setMessages] = useImmer({ politeMessage: 'I am polite', assertiveMessage: 'I am assertive' });

  return (
    <>
      <h2>Accessibility Messages</h2>
      <AccessibilityTestingScenario title="Messages Scenario #1 - Polite messages">
        <p className="lead-in">A polite message should not interrupt other messages while an assertive messages should interrupt.</p>
        <div className="accessibility-scenario__component">
          <TextInput
            id="accessibility-polite-message"
            label="Polite Message"
            onChange={(e) => setMessages((draftMessages) => { draftMessages.politeMessage = e.target.value; })}
            value={messages.politeMessage}
          />
          <TextInput
            id="accessibility-assertive-message"
            label="Assertive Message"
            onChange={(e) => setMessages((draftMessages) => { draftMessages.assertiveMessage = e.target.value; })}
            value={messages.assertiveMessage}
          />
          <Button onClick={() => addPoliteMessage(messages.politeMessage)}>
            Add polite message
          </Button>
          <Button onClick={() => addAssertiveMessage(messages.assertiveMessage)}>
            Add assertive message
          </Button>
        </div>
      </AccessibilityTestingScenario>
    </>
  );
}
