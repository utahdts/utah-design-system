/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import dateInputScreenshot from '../../../../../../../static/images/screenshots/components/dateInput/dateInput.jpg';
import { LightBox } from '../../../../../lightbox/LightBox';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';

export function DateInputDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Date Input</h1>
      <p className="lead-in">The Date Input is a specialized input field that can present a date picker popup to the user.</p>
      <hr />
      <h2 id="example">Example</h2>
      <StaticExample
        title="Date Input Examples"
        renderedExample={<LightBox image={dateInputScreenshot} alt="Date Input" className="flex-3up-gap" />}
        quickTips={(
          <ul>
            <li>A Date Input can also have a Calendar Icon Button.</li>
            <li>When you press the icon button a date picker popup will appear.</li>
            <li>You can navigate the popup using the keyboard. (see below)</li>
            <li>Optionally, include a today button to quickly navigate to today&apos;s date</li>
          </ul>
        )}
      />

      <h2 className="mb-spacing" id="section-description-guidance">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Enter a formatted date</strong>. Use a date input to allow users to enter a correctly formatted date.</li>
        <li><strong>Use date picker popup</strong>. A date picker popup can make it easier for the user to pick a date in context with the current date, such as scheduling an event or appointment. Additionally, the date picker can be useful for choosing a date in relation to the day of the week.</li>
        <li><strong>Entire date</strong>. The date input is used to collect the entire date such as <code>01/02/2023</code>, and not a part of the date such as the day, month, or year. Use separate inputs or select inputs to collect part of a date.</li>
        <li><strong>Date range</strong>. Consider using two date inputs to capture a date range.</li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Familiar dates</strong>. The date picker popup is less useful for picking familiar dates such as birthdays. Consider not showing the date picker icon in these cases as the user experience can be frustrating to find an exact date that is months or years in the past or future.</li>
        <li><strong>Date context is not needed</strong>. Typically, the date picker popup is not needed when the context of the date is not important, such as knowing the day of the week at a particular date is on.</li>
        <li><strong>Use browser&apos;s built-in date input</strong>. Optionally, you may choose to use the browser&apos;s built in date input. e.g. <code>&lt;input type=&quot;date&quot; /&gt;</code>. However, you will not be able to style the popup.</li>
      </ul>
      <h3 id="section-usability">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>Provide a formatting hint as part of the label such as &quot;mm/dd/yyyy&quot; so users know what format is expected if they decide to enter the date directly.</li>
        <li>Avoid using the date picker popup to collect familiar dates such as birthdays, life events, or dates in the far past or future.</li>
        <li>The date picker popup will typically appear when the user presses the calendar icon button. Avoid automatically popping open the date picker when the date input receives focus.</li>
        <li>The calendar icon button is styled to compliment the input field, and therefore does not maintain the typical appearance of most icon buttons. See <Link to={pageUrls.iconButton}>icon button</Link>.</li>
        <li>The user should be allowed to skip months or years by pressing the arrows at the top of the date picker popup.</li>
        <li>The days of the week should be visible above the calendar dates.</li>
        <li>The current date should be highlighted on the popup so the user can orient themselves.</li>
        <li>You may optionally include a &quot;today&quot; button that will automatically select the current date.</li>
        <li>Do not automatically submit the form when the user picks a date.</li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>The input text and the date picker text and icons should maintain a <code>4.5:1</code> or higher contrast ratio.</li>
        <li>Button boundaries, such as the current date and picked date should maintain a <code>3:1</code> contrast ratio.</li>
        <li>The popup should follow the contrast guidelines for a typical popup component. See <Link to={pageUrls.popups}>popup</Link>.</li>
      </ul>
      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>You should be able to navigate the entire date popup using only the keyboard. Pressing <code>return</code> or <code>space</code> on the calendar icon button will cause the date picker popup to appear. Focus will be automatically set to the selected date.</li>
        <li>You can close the popup by hitting the <code>escape</code> key.</li>
        <li>The <code>tab</code> key will focus on the month and year arrows, the currently selected day, and the &quot;today&quot; button.</li>
        <li>When the user presses &quot;return/enter&quot; the date picker popup will close with the highlighted date being added to the input field.</li>
        <li>Additionally you may navigate the date picker popup with the following keyboard shortcuts (Mac-equivalent commands are in parentheses):
          <ul>
            <li>Days, use left and right arrows</li>
            <li>Weeks, use up and down arrows</li>
            <li>Months, use  page up (fn + up arrow) and page down (fn + down arrow)</li>
            <li>Years use shift + page up (shift + fn + up arrow) and shift + page down (shift + fn + down arrow)</li>
            <li>Home (fn + left arrow) and End (fn + right arrow) keys navigate to the beginning and end of a week</li>
          </ul>
        </li>
      </ul>
      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>Always pair a label with a date input. Include a <code>for</code> attribute on each label with a value matching the <code>id</code> attribute on the corresponding input.</li>
        <li>The icon button should have an accessible label such as &quot;Choose Date&quot;. This label should change to &quot;Change Date&quot; if the field already has a date entered. Optionally, you may also include the chosen date: &quot;Change Date, 03/14/2024&quot;.</li>
        <li>Visually, day names headers are abbreviated. Screen reader users will be provided the full names using the <code>abbr</code> attribute. e.g. <code>&lt;td abbr=&quot;Wednesday&quot;&gt;We&lt;/td&gt;</code></li>
        <li>Use an <code>aria-live</code> region for the Month - Year. When the user changes the month or year it will read to them the current month being displayed.</li>
      </ul>
    </div>
  );
}
