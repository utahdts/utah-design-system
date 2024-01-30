import {
  MultiSelect,
  MultiSelectOption,
  MultiSelectOptionGroup,
  Tab,
  TabGroup,
  TabList, TabPanel, TabPanels
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { MultiSelectExampleCodeReact } from './MultiSelectExampleCodeReact';
import { MultiSelectExampleProps } from './MultiSelectExampleProps';
import { MultiSelectExampleRender } from './MultiSelectExampleRender';
import MultiSelectCssClassesDocumentation from './MultiSelectBoxCssClassesDocumentation';
import MultiSelectPropsDocumentation from './MultiSelectPropsDocumentation';

export function MultiSelectDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Multi-select</h1>
      <p className="lead-in">
        A multi-select allows you to search and choose multiple options from an option menu. A <Link to={pageUrls.comboBox}>combo box</Link> lets
        you search options to select a single item, while a <Link to={pageUrls.select}>select</Link> lets you pick a single option from a list.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          className: '',
          errorMessage: '',
          id: 'multi-select-example-id',
          isClearable: false,
          isDisabled: false,
          label: 'Choose a mighty 5',
          isRequired: false,
          values: /** @type {string[]} */ ([]),
        }}
        CODE_EXAMPLE={MultiSelectExampleCodeReact}
        PROPS_EXAMPLE={MultiSelectExampleProps}
        RENDER_EXAMPLE={MultiSelectExampleRender}
      />
      <StaticExample
        title="Multi-Select Example"
        renderedExample={(
          <div style={{ width: '60%' }}>
            <MultiSelect id="multi-select__static-example" label="Which Mythical Creature?">
              <MultiSelectOption label="Basilisk" value="basilisk" />
              <MultiSelectOption label="Blemmyae" value="blemmyae" />
              <MultiSelectOption label="Cardinal" value="cardinal" />
              <MultiSelectOption label="Dragon" value="dragon" />
              <MultiSelectOption label="Griffin" value="griffin" />
              <MultiSelectOption label="Kraken" value="kraken" />
              <MultiSelectOption label="Manticore" value="manticore" />
              <MultiSelectOption label="Roc" value="roc" />
              <MultiSelectOption label="Unicorn" value="unicorn" />
            </MultiSelect>
          </div>
        )}
        quickTips={(
          <ul>
            <li>A multi-select input allows the user to select multiple options from a list.</li>
            <li>The user can search the list of options by typing in the field.</li>
            <li>The list of available options is narrowed by the search.</li>
            <li>Selected options are added as clearable tags to the input when they are selected.</li>
            <li>The user can clear all options by hitting the clear icon (x) on the right side of the input.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Multi-Select With Option Groups Example"
        renderedExample={(
          <div style={{ width: '60%' }}>
            <MultiSelect id="multi-select__static-example" label="Which Mythical Creature?">
              <MultiSelectOptionGroup label="Lizard-Like">
                <MultiSelectOption label="Basilisk" value="basilisk" />
                <MultiSelectOption label="Dragon" value="dragon" />
                <MultiSelectOption label="Kraken" value="kraken" />
              </MultiSelectOptionGroup>
              <MultiSelectOptionGroup label="Airborne Animal">
                <MultiSelectOption label="Cardinal" value="cardinal" />
                <MultiSelectOption label="Griffin" value="griffin" />
                <MultiSelectOption label="Roc" value="roc" />
              </MultiSelectOptionGroup>
              <MultiSelectOptionGroup label="Ground Animal">
                <MultiSelectOption label="Blemmyae" value="blemmyae" />
                <MultiSelectOption label="Manticore" value="manticore" />
                <MultiSelectOption label="Unicorn" value="unicorn" />
              </MultiSelectOptionGroup>
            </MultiSelect>
          </div>
        )}
      />

      <h2 className="mb-spacing" id="guidance">Guidance</h2>
      <h3>When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Choose multiple options.</strong> When the user can select multiple options from a predefined list of options.</li>
        <li><strong>Search for option.</strong> Allows users to search in the list of provided options.</li>
        <li><strong>Use sparingly.</strong> Use the multi-select component when a user needs to choose from about 10 or more possible options.</li>
        <li><strong>Limited space.</strong>. Use a combo box for presenting options when screen real estate is limited.</li>
        <li><strong>Don&apos;t overuse.</strong> Too many multi-select inputs can be overwhelming to the user.</li>
      </ul>
      <h3>When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Fewer than 4 Options.</strong> For fewer than 4 items, consider using check boxes.</li>
        <li>
          <strong>Fewer than 10 Options.</strong> Consider a <Link to={pageUrls.comboBox}>combo box</Link> if you require a single
          selection, are providing fewer than 10 options, and the customer needs the ability to search.
        </li>
        <li>
          <strong>Single-select.</strong> If you need to limit the user to a single choice, use
          a <Link to={pageUrls.select}>select</Link> or <Link to={pageUrls.comboBox}>combo box</Link> instead.
        </li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Alphabetize list options.</strong> If there are more than 5 options, consider showing options in alphabetical or
          other predictable ordering for easy scanning.
        </li>
        <li>
          <strong>Placeholder text (optional).</strong> Placeholder text like &quot;Select Multiple&quot; is typically displayed in the
          multi-select field. After the user makes a selection, the placeholder text is replaced with the user&apos;s selection.
        </li>
        <li>
          <strong>Consider dependent options.</strong> Avoid making options in one select menu change based on the input of another. Users
          often don&apos;t understand how choosing an item in one impacts another.
        </li>
        <li>
          <strong>Use a good default.</strong> When most users will (or should) pick a particular set of options, make it the default.
        </li>
        <li>
          <strong>Don&apos;t auto-submit.</strong> Don&apos;t use JavaScript to automatically submit the form (or do anything else) when an
          option is chosen. Offer a &quot;submit&quot; button at the end of the form instead. Users often change their choices multiple
          times. Auto-submission is also less accessible.
        </li>
        <li>
          <strong>Icon.</strong> The caret icon is positioned to the right of the container and visually distinguishes this as a multi-select input.
        </li>
        <li>
          <strong>Selected options.</strong> The multi-select shows selected items as tags and removes selected items from the dropdown part so that
          you cannot accidentally select an item twice.
        </li>
        <li>
          <strong>Clear button (x).</strong> Each selected option should have a clear button (x) inside the tag allowing the user to deselect
          the option and remove it from the field. The user may also select the clear icon (x) on the far right side to clear ALL selections.
        </li>
        <li>
          <strong>Searching.</strong> By default, the user can perform a text search to identify options once the input has focus.  For example,
          typing &quot;Ca&quot; would filter your options to include &quot;Cat, Canary, and Carrot, but not Cougar&quot;.  Selecting Return or
          clicking on the option will add it to the input with any other options that have been selected.
        </li>
      </ul>

      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>Text in the multi-select Input must maintain a <code>4.5:1</code> contrast ratio.</li>
        <li>The multi-select input boundary must maintain a <code>3:1</code> contrast ratio against the background.</li>
        <li>The focus of the multi-select should be a <code>3:1</code> contrast ratio.</li>
        <li>The multi-select popup should follow the contrast guidelines for a typical <Link to={pageUrls.popups}>popup</Link> component.</li>
      </ul>

      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>Use Tab to move between form elements. The select should display a visible focus state when users tab to them.</li>
        <li>Use arrow keys (arrow left / arrow right) to highlight options that are already selected.</li>
        <li>Use the Delete or Backspace key to remove a highlighted option.</li>
        <li>Begin typing in the field to narrow the list of options.</li>
        <li>Use arrow keys (arrow up ↑/ arrow down ↓) to navigate between select options.</li>
        <li>Use Enter to select an option.</li>
        <li>Use Esc to collapse the popup.</li>
      </ul>

      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>
          The <code>aria-multiselectable</code> attribute provides a way to inform assistive technology users that they
          may select more than one item from the current selectable items if they so choose.
        </li>
        <li>
          Always pair a <code>label</code> with a <code>select</code>. Include a <code>for</code> attribute on
          each <code>label</code> with a value matching the <code>id</code> attribute on the corresponding <code>select</code>. Don&apos;t
          replace the label with the default with placeholder or default selection.
        </li>
        <li>
          Don&apos;t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission
          disrupts screen readers because they select each option as they read them.
        </li>
        <li>
          If you customize this component, ensure that it continues to meet the accessibility requirements.
        </li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="component-props-css">
          <TabList>
            <Tab id="component-props-css">CSS</Tab>
            <Tab id="component-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="component-props-css">
              <MultiSelectCssClassesDocumentation />
            </TabPanel>
            <TabPanel tabId="component-props-react">
              <MultiSelectPropsDocumentation />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
