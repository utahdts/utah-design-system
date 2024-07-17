/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import stepIndicatorScreenshot from '../../../../../../../static/images/mockups/StepIndicator.jpg';
import { LightBox } from '../../../../../lightbox/LightBox';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { Disclaimer } from '../../../../Disclaimer';

export function StepIndicatorDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Step Indicator</h1>
      <p className="lead-in">
        A step indicator is a visual representation of a user&apos;s progress through a lengthy, multi-step process, by breaking it up into multiple logical steps.
      </p>
      <Disclaimer />
      <hr />
      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Step Indicator"
        renderedExample={<LightBox image={stepIndicatorScreenshot} alt="Step Indicator" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>Progress track: This line links the steps together in a gated step indicator.</li>
            <li>Current step: This shows the step that the user is on.</li>
            <li>Upcoming step: This shows the step(s) beyond the current step, closer to completion.</li>
            <li>Completed step: This shows the step(s) the user has already completed, closer to the beginning.</li>
            <li>Disabled: A grayed-out label indicates a step that users cannot visit.</li>
            <li>Step label: This describes the purpose of the step.</li>
            <li>Step indicator: The circle that indicates the step.</li>
            <li>
              Responsive behavior:
              <ul>
                <li>On small screens, consider hiding step labels and showing only step indicators.</li>
              </ul>
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Organizing multiple steps and screens.</strong> The step indicator should be utilized when users are working through
          a form or process that spans multiple pages, organized into three or more high-level steps or chapters. This feature assists
          users in comprehending the progression of lengthy forms and minimizes uncertainty by providing a clear sense of completion
          for each screen.
        </li>
        <li>
          <strong>Breaking a large goal into smaller steps.</strong> Use step indicators to break lengthy processes into easy to follow,
          manageable steps to prevent the user from feeling overwhelmed.
        </li>
        <li>
          <strong>Display completed tasks.</strong> Use step indicators to show completed tasks. This will help the user know where
          they are in relation to where they have been, and what sections are to follow.
        </li>
        <li>
          <strong>Linear progression.</strong> The step indicator should be utilized when there is a need for users to complete a linear
          workflow consisting of multiple significant steps. While the workflow is linear, users can review previous steps once completed.
          However, steps cannot be skipped.
        </li>
        <li>
          <strong>One task at a time.</strong> When you aim to provide users with a clear understanding of a complex workflow, while
          ensuring their focus remains on one task at a time.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Very short forms.</strong> If a form or process consists of fewer than three sections, avoid using a step indicator.
        </li>
        <li>
          <strong>Long forms with conditional logic.</strong> If the number of steps in a process has the potential to change based on user input, consider another approach.
        </li>
        <li>
          <strong>Nonlinear progression.</strong> The step indicator isn&apos;t appropriate for nonlinear forms or interactions that
          might be completed in any order (i.e. skipping steps).
        </li>
        <li>
          <strong>Fewer than 3 and more than 5 steps.</strong> For workflows that contain fewer than 3 or more than 5 large steps, consider
          an <Link to={pageUrls.lists}>unordered list</Link> (3 or less) or a <Link to={pageUrls.lists}>process list</Link> (5+).
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Logical progression of steps.</strong> Present the steps in a left-to-right order, clearly indicating to the user that they are
          engaged in a multi-step process and showcasing the direction of movement. Additionally, provide the option for the user to navigate back
          to a previous step to review their submitted data.
        </li>
        <li>
          <strong>Indicate the user&apos;s progress.</strong> Select a distinct color and text treatment for the current step segment that sets it
          apart from both the completed and pending step segments. The current segment should be visually prominent.  While pending segments should
          be less prominent, they should still maintain accessible contrast and not appear disabled. Additionally you may use numbers or icons to
          indicate progression.
        </li>
        <li>
          <strong>When labeling step indicators, use short or single-word labels.</strong> For optimal clarity, choose very concise words that
          accurately conveys the meaning of the indicator. (i.e. Settings, Shipping, Payment, etc.)
        </li>
        <li>
          <strong>Stepping forward and backward.</strong> To facilitate navigation, it is recommended to provide separate controls for stepping
          forward and backward through a form. Utilize navigation elements to allow
          users to navigate through the form easily.
        </li>
        <li>
          <strong>Button group navigation.</strong> You may use a <Link to={pageUrls.button}>primary button</Link> labeled &quot;Continue&quot; to
          progress to the next step and a <Link to={pageUrls.button}>secondary button</Link> labeled &quot;Back&quot; to move to the previous step.
          <ul>
            <li>Place <Link to={pageUrls.button}>buttons</Link> at the bottom of the page content.</li>
            <li>When moving to the next or previous step, automatically scroll the page back up so the indicator is at the top of the viewport.</li>
          </ul>
        </li>
        <li>
          <strong>Return to a previous step.</strong> Click the step indicator, or offer a &quot;Back&quot; <Link to={pageUrls.button}>secondary button</Link>.
        </li>
        <li>
          <strong>Display step and total steps left of the heading.</strong> Using text like &quot;[step] of [total]&quot; next to the heading of what is
          required reinforces the number of total steps and helps users keep track of their location in the overall process.
        </li>
        <li>
          <strong>Use nouns or verbs, but not both.</strong> Ensure consistency in the use of either nouns or verbs across all steps. Avoid mixing nouns
          and verbs in the labels of the steps to maintain clarity and coherence.
        </li>
        <li>
          <strong>Match labels to linked pages.</strong> Ensure that step labels use consistent terminology with the corresponding pages to which they
          link. Avoid using different terms, such as &quot;Order&quot; in the page title and &quot;Payment&quot; as a step label, within the same workflow.
        </li>
        <li>
          <strong>Placement.</strong> It is recommended to center the step indicator above the content.
        </li>
        <li>
          <strong>Avoid page loads between steps.</strong> To avoid conflicts with the animation of the step indicator and ensure a seamless transition,
          you are advised to avoid using page loads between steps.
        </li>
        <li>
          <strong>Validation.</strong> Use <Link to={pageUrls.validation}>validation</Link> to confirm that a previous step has been completed. If the
          user cannot proceed onto another step without first completing a task, use an <Link to={pageUrls.banners}>inline banner</Link> to inform them.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The segment indicators must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>The label text and icon indicator must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>When using custom colors be sure the minimum contrast requirements are met.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>
          When a user is allowed to navigate by the step indicators, use the <code>tab</code> key to navigate to each enabled step.
          Use <code>space</code> or <code>enter</code> to select the step.
        </li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>Use a semantic ordered list <code>&lt;ol&gt;</code> to organize the step indicators.</li>
        <li>Use visually hidden text on labels to add clarity as needed. Use visually hidden text to make the completion status of each step explicit. (i.e. &quot;Step completed&quot;)</li>
        <li>Indicate the current step. When using labeled segments, use <code>aria-current=&quot;true&quot;</code> on the list item representing the current step.</li>
      </ul>
    </div>
  );
}
