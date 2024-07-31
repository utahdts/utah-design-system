/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import processListScreenshot from '../../../../../../../static/images/screenshots/components/progress-list/ProcessList.png';
import { LightBox } from '../../../../../lightbox/LightBox';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { Disclaimer } from '../../../../Disclaimer';

export function ProcessListDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Process List</h1>
      <p className="lead-in">A process list displays a series of essential instructions or stages in a clear and organized manner.</p>
      <Disclaimer />
      <hr />

      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Process List"
        renderedExample={<LightBox image={processListScreenshot} alt="Process List with three steps" className="flex-3up-gap" />}
        quickTips={(
          <>
            <p className="mb-auto">A process list is a numbered list that includes the following:</p>
            <ul>
              <li>A number for each item in the list, enclosed in a circle.</li>
              <li>Lines connecting all the circled numbers.</li>
              <li>A title for each step.</li>
              <li>Detail for each step (optional) can include:</li>
              <ul>
                <li>Text.</li>
                <li><Link to={pageUrls.links}>Hyperlinks</Link>.</li>
                <li><Link to={pageUrls.lists}>Lists</Link>.</li>
                <li>Form elements and <Link to={pageUrls.button}>buttons</Link>.</li>
              </ul>
            </ul>
          </>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul>
        <li>
          <strong>Highlighting an important process.</strong> The process list should be used selectively on your website, highlighting significant processes.
        </li>
        <li>
          <strong>Displaying high-level individual steps.</strong> Utilize process lists to establish a distinct hierarchy and assist users in readily
          distinguishing between individual steps or stages within a process.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Multi-page forms or wizards.</strong> Utilize a <Link to={pageUrls.stepIndicator}>step indicator</Link> to guide users through a
          form or process that spans across multiple pages. This component assists users in keeping track of their progress and provides a visual
          representation of the steps involved, facilitating a seamless user experience.
        </li>
        <li>
          <strong>When showing current status or progress.</strong> Use a <Link to={pageUrls.stepIndicator}>step indicator</Link>  to show the user
          the current step in a multi-step process.
        </li>
        <li>
          <strong>In-page navigation.</strong> Use a <Link to={pageUrls.sidePanelNavigation}>side navigation</Link> to display the &quot;sub-navigation&quot;
          within a section or page of the website.
        </li>
        <li>
          <strong>The steps are non-sequential.</strong> Use <Link to={pageUrls.lists}>unordered lists</Link> or <Link to={pageUrls.lists}>icon lists</Link> to
          display text that doesn&apos;t have a clear, logical order to it.
        </li>
        <li>
          <strong>Breaking down complex content to improve readability.</strong> Use <Link to={pageUrls.lists}>ordered and unordered lists</Link> to
          divide sentences and paragraphs into concise and structured lists. These lists are integrated into the general content of the page and do not require the same
          typographical hierarchy or visual prominence as process lists.
        </li>
        <li>
          <strong>The process can be summed up in one sentence.</strong> If you have a process in which the majority of steps can be explained succinctly in one
          sentence, don&apos;t complicate it with an unnecessary process list.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Be thoughtful about the number of steps.</strong> To maintain clarity and avoid confusion, a process list should ideally consist of three to ten
          steps. This range ensures that the list remains manageable and easily understandable for users.
        </li>
        <li>
          <strong>Use a heading to describe the purpose of the process.</strong> To provide clarity regarding the process described,
          the use of a <Link to={pageUrls.headings}>heading</Link> is recommended. While optional, you may include a concise paragraph block between the heading and
          the process list as well.
        </li>
        <li>
          <strong>Use consistent headings.</strong> Ensure that headings exhibit a parallel structure, such as consistently starting with an action verb, and
          maintain consistent punctuation. Additionally, it is recommended to keep the headings concise, ideally fitting within a single line whenever possible.
        </li>
        <li>
          <strong>Add other types of content as needed.</strong> The body of each list item can be used to display additional rich text content
          including <code>HTML</code>, images, and other components like <Link to={pageUrls.button}>buttons</Link>, <Link to={pageUrls.forms}>form elements</Link>,
          images, <Link to={pageUrls.lists}>simple lists</Link>, <Link to={pageUrls.links}>links</Link>, and <Link to={pageUrls.table}>tables</Link>.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The text within the process list must maintain a <code>4.5:1</code> contrast ratio against the background.</li>
        <li>The process indicators (i.e. numbers contained within circles) must maintain a <code>4.5:1</code> contrast ratio against the background.</li>
        <li>When using custom colors be sure the minimum contrast requirements are met.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>
          Lists are not keyboard operable, unless the list items themselves are operable. In such a situation, the list items will retain the
          element&apos;s default keyboard interaction. For example, in a list of <Link to={pageUrls.links}>links</Link>, each link will be in
          the tab order and can be activated by <code>Enter</code>.
        </li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Use a semantic <Link to={pageUrls.lists}>ordered list</Link> <code>&lt;ol&gt;</code> to organize the process list.
        </li>
        <li>
          Avoid using <Link to={pageUrls.headings}>headings</Link> alone for each step. Try to provide both a heading and accompanying content
          that offers a detailed description of each step. This ensures comprehensive guidance and clarity for users throughout the process.
        </li>
        <li>
          Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!
        </li>
      </ul>
    </div>
  );
}
