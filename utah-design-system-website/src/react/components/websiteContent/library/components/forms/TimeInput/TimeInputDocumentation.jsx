/* eslint-disable max-len */
import { Tab, TabGroup, TabList, TabPanel, TabPanels, TimeInput } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { TimeInputCssClassesDocumentation } from './TimeInputCssClassesDocumentation';
import { TimeInputExampleCodeReact } from './TimeInputExampleCodeReact';
import { TimeInputExampleProps } from './TimeInputExampleProps';
import { TimeInputExampleRender } from './TimeInputExampleRender';
import { TimeInputPropsDocumentation } from './TimeInputPropsDocumentation';

export function TimeInputDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Time Input</h1>
      <p className="lead-in">
        Time input is a component that allows users to key in a time, select from a <Link to={pageUrls.popups}>popup menu</Link>, or
        a <Link to={pageUrls.select}>select</Link> input.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          allowCustomEntry: false,
          className: '',
          timeFormat: 'h:mm a',
          errorMessage: '',
          hasTimePopup: true,
          id: 'time-input-example-id',
          isClearable: false,
          isDisabled: false,
          isRequired: false,
          label: 'Enter a time',
          name: '',
          placeholder: 'h:mm a',
          timeRangeBegin: '',
          timeRangeEnd: '',
          timeRangeIncrement: '15',
          value: '',
        }}
        CODE_EXAMPLE={TimeInputExampleCodeReact}
        PROPS_EXAMPLE={TimeInputExampleProps}
        RENDER_EXAMPLE={TimeInputExampleRender}
      />

      <StaticExample
        title="Default time input"
        renderedExample={(
          <div style={{ width: '220px' }}>
            <TimeInput
              id="time-input-documentation__example-1"
              label="What time is your appointment?"
              // @ts-ignore
              autoComplete="off"
            />
          </div>
        )}
        quickTips={(
          <ul>
            <li>
              The default time input has a label, an <Link to={pageUrls.textInput}>input box</Link>, and
              an <Link to={pageUrls.iconButton}>icon button</Link> that opens up to a <Link to={pageUrls.popups}>popup menu</Link> where
              the user can select times from a list.
            </li>
            <li>
              The menu items should reflect a sequential list of times from which to choose. Time increments should
              remain consistent. E.g. 30 minute or 15 minute increments.
            </li>
            <li>
              Time formats can be either in a <code>12-hour</code> or <code>24-hour</code> format. Consider the target audience and
              how dates and times on the site are formatted so as to stay consistent.
            </li>
            <li>
              Placeholders can be used to denote the time format to use. Be aware that placeholders, by default, do not meet
              the minimum contrast requirements of <code>4.5:1</code>. Additionally, placeholder may not convey meaning to screen readers.
            </li>
          </ul>
        )}
      />
      <p>
        View more information on <Link to={pageUrls.popups}>popup menus</Link>, <Link to={pageUrls.iconButton}>icon buttons</Link>,
        and <Link to={pageUrls.textInput}>text inputs</Link>.
      </p>

      <StaticExample
        id="static-example__select-time-input"
        title="Select time input"
        renderedExample={(
          <div style={{ width: '150px' }}>
            <TimeInput
              allowCustomEntry
              defaultValue="09:16"
              id="time-input-documentation__example-2"
              isClearable
              label="When is bedtime?"
              placeholder="24H:MM"
              timeFormat="HH:mm"
              timeRangeBegin="09:03"
              timeRangeEnd="14:25"
              timeRangeIncrement={13}
              // @ts-ignore
              autoComplete="off"
            />
          </div>
        )}
        quickTips={(
          <ul>
            <li>
              The select time input has a label and underneath is a <Link to={pageUrls.select}>select menu</Link> where the user
              can select times from a preset list of times.
            </li>
            <li>
              The options list should reflect a sequential list of times from which to choose. Time increments should
              remain consistent. E.g. 30 minute or 15 minute increments.
            </li>
            <li>
              Time formats can be either in a <code>12-hour</code> or <code>24-hour</code> format. Consider the target audience
              and how dates on the site are formatted so as to stay consistent.
            </li>
          </ul>
        )}
      />
      <p> View more information on <Link to={pageUrls.select}>Selects</Link>.</p>

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Scheduling.</strong> Use the time input to schedule a time from common, consistent increments, such as
          15 to 30 minute intervals.
        </li>
        <li>
          <strong>Approximate times.</strong> When only a general time frame is needed.
        </li>
        <li>
          <strong>Typing in the time.</strong> If you would like to give the user the option to manually enter the time, use
          the default time input.
        </li>
        <li>
          <strong>Preset list of times.</strong> If there is a preset list of times, and there isn&apos;t a need for the user to
          key in a time, consider the <a href="#static-example__select-time-input">select time input</a>.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Reduced functionality.</strong> If you choose to not use the time input, the user experience will be impacted.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Clear and concise labels.</strong> The label should clearly describe the times that need to be input. For instance,
          instead of just using the word &quot;Time&quot; as a label, consider using &quot;Start Time&quot; or &quot;End Time&quot;.
        </li>
        <li>
          <strong>Default times.</strong> When users will most likely pick a particular time frame, use that as the default.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>All text must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The time input&apos;s boundaries must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>When the time input receives focus or hover events, a border should be added with a minimum <code>3:1</code> contrast ratio.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>
          Ensure that the time input can be operated using only the keyboard. This includes providing keyboard shortcuts
          for opening and closing the time input, navigating the list of time options, and selecting a time.
        </li>
        <li>
          Shortcut keys are assigned to the additional buttons for changing the hour, minutes, and time of day.
        </li>
        <li>
          Keyboard shortcuts include:
          <ul>
            <li>
              <code>Tab</code> key should move the user into the time <Link to={pageUrls.textInput}>input box</Link> and
              the <Link to={pageUrls.iconButton}>icon button</Link> that houses the <Link to={pageUrls.popups}>popup menu</Link>.
            </li>
            <li>
              <code>Arrows (left and right)</code> or tab keys should move the user between the hour, minute, and time of day inputs.
            </li>
            <li>
              <code>Enter</code> or <code>Space</code> key should open the <Link to={pageUrls.popups}>popup</Link>.
            </li>
            <li>
              <code>Arrows (up and down)</code> should move the user through the <Link to={pageUrls.popups}>popup menu</Link> items or
              increment and decrement the <code>hours:minutes</code>.
            </li>
            <li>
              <code>Esc</code> key should dismiss the <Link to={pageUrls.popups}>popup</Link>.
            </li>
          </ul>
        </li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          The description of the date format is associated with the <Link to={pageUrls.textInput}>text input</Link> via <code>aria-describedby</code>, making
          it available to assistive technologies as an accessible description.
        </li>
        <li>
          After a date is chosen, the accessible name of the &quot;Choose Date&quot; <Link to={pageUrls.button}>button</Link> is
          changed to &quot;Change Date, DATE_STRING&quot; where <code>DATE_STRING</code> is the selected date. So, when the dialog
          closes and focus returns to the <Link to={pageUrls.button}>button</Link>, screen reader users hear confirmation of the selected date.
        </li>
        <li>
          If customization is needed for the default time input, follow accessibility guidelines for <Link to={pageUrls.textInput}>text inputs</Link>,
          and <Link to={pageUrls.popups}>popup menus</Link>.
        </li>
        <li>
          For the select time input, follow accessibility guidelines for the <Link to={pageUrls.select}>select input</Link>.
        </li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="time-input-props-css">
          <TabList>
            <Tab id="time-input-props-css">CSS</Tab>
            <Tab id="time-input-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="time-input-props-css">
              <TimeInputCssClassesDocumentation />
            </TabPanel>
            <TabPanel tabId="time-input-props-react">
              <TimeInputPropsDocumentation />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
