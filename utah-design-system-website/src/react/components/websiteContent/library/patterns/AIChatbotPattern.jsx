import { Link } from 'react-router-dom';
import { pageUrls } from '../../../routing/pageUrls';

export function AIChatbotPattern() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">AI Chatbot</h1>
      <p className="lead-in"> An Artificial Intelligence (A.I.) chatbot is a software that simulates human-like conversation. It can generate dynamic answers based on a user’s input and a given context.
        It can be designed as a widget or as a dedicated full-page feature. </p>

      <hr />

      <h2 id="section-example">Examples</h2>

      <h2 id="section-guidance" className="mb-spacing mt-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Availability.</strong> If support is needed around-the-clock.
        </li>
        <li>
          <strong>Context.</strong> An AI chatbot can be a useful tool for improving user access to and comprehension of large or complex content.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>FAQ.</strong> A simple Frequently Asked Questions (FAQ) page is often sufficient if users can find the majority of the information they require within a minimal number of questions.
        </li>
        <li>
          <strong>Contact Us.</strong> Offering a contact form is an effective way to help users get more information.
        </li>
        <li>
          <strong>Search.</strong> For small applications and/or websites, a search feature is usually enough to allow users to find content.
        </li>
        <li>
          <strong>Structure.</strong> Designing content with a good hierarchy in mind can help users get to where they need to easier and faster.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <h4 id="section-usability-common">In common</h4>
      <ul className="mb-spacing">
        <li>
          <strong>Clear Intent.</strong> The chatbot should introduce itself as such and clearly state when it is expecting the user to provide information.
        </li>
        <li>
          <strong>Conversational.</strong> Keep the user’s request and the chatbot’s answer visually different. It should be easy at a glance to identify the author. Color alone is not enough.
        </li>
        <li>
          <strong>Thinking.</strong> While the chatbot is generating an answer, the input should be disabled, and a placeholder should be displayed where the reply would appear. Typically, a skeleton is used.
        </li>
      </ul>

      <h4 id="section-usability-widget">Widget approach</h4>
      <ul className="mb-spacing">
        <li>
          <strong>Popup.</strong> In this approach, the chatbot should behave like a <Link to={pageUrls.popups}>Popup</Link>.
        </li>
        <li>
          <strong>Bottom-to-top.</strong> Replies should be structured in a messaging style, with the newest response placed at the end of the conversation thread.
        </li>
        <li>
          <strong>Focus.</strong> After the user opens the chatbot, focus should be placed on the text area.
        </li>
        <li>
          <strong>Persistence.</strong> Closing the popup would minimize it. The chatbot is persistent.
        </li>
        <li>
          <strong>Skip to chatbot.</strong> Similar to a <Link to={pageUrls.skipLink}>Skip Link</Link>, a link should be present to allow users to skip the main content and start using the widget. <i>E.g</i> “Skip to chatbot”.
        </li>
      </ul>

      <h4 id="section-usability-full-page">Full-page approach</h4>
      <ul className="mb-spacing">
        <li>
          <strong>Top-to-bottom.</strong> The most recent answer should appear at the top of the chain of replies.
        </li>
        <li>
          <strong>Reply.</strong> To facilitate the process of replying to an answer, a button should be present after each reply from the chatbot. It should clearly indicate its purpose. <i>E.g</i> “Follow-up or ask something else”. Clicking on it should put the focus back onto the text area.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Text within the chatbot must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>For more information about links accessibility, consult the <Link to={pageUrls.links}>Links</Link> documentation.</li>
        <li>For more information about text areas accessibility, consult the <Link to={pageUrls.textArea}>Text Area</Link> documentation.</li>
        <li>For more information about popups accessibility, consult the <Link to={pageUrls.popups}>Popup</Link> documentation.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li><strong>Navigation.</strong> Users should be able to navigate between replies using arrow keys.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          <strong>Aria-live.</strong> Users must get notified of new messages. Make sure an aria-live region is present.
        </li>
      </ul>
    </div>
  );
}
