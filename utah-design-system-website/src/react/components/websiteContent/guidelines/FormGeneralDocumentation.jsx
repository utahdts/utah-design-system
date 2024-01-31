/* eslint-disable max-len */
import {
  ExternalLink
} from '@utahdts/utah-design-system';
import { Link, NavLink } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';
import { PreCodeForCodeString } from '../../preCode/PreCodeForCodeString';
import { StaticExample } from '../../staticExamples/StaticExample';
import { LightBox } from '../../lightbox/LightBox';
import formFlowHorizontal from '../../../../static/images/screenshots/components/form-elements/formFlowHorizontal.png';
import formFlowVertical from '../../../../static/images/screenshots/components/form-elements/formFlowVertical.png';
import formFocus from '../../../../static/images/screenshots/components/form-elements/focus-form-elements.gif';

export function FormGeneralDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Form General Guidance</h1>
      <p className="lead-in">
        Here are some guidelines for achieving good form accessibility and usability for users. For additional accessibility guidance, view the <NavLink to={pageUrls.accessibility}>accessibility overview page</NavLink>.
      </p>

      <hr />
      <h2 id="section-accessibility-checklist" className="text-center mt-spacing">Validation and Data Privacy</h2>
      <div className="text-center">
        <p className="mb-auto">
          To learn more about form validation or data privacy requirements use the links below.
        </p>
        <div className="flex justify-center mt-spacing mb-spacing-xl gap">
          <Link
            to={pageUrls.validation}
            className="button button--primary-color button--solid"
          >
            Form Validation{' '}
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </Link>
          <Link
            to={pageUrls.dataPrivacy}
            className="button button--primary-color button--solid"
          >
            Data Privacy{' '}
            <span className="button--icon button--icon-right"><span className="utds-icon-before-arrow-right" aria-hidden="true" /></span>
          </Link>
        </div>
      </div>
      <hr className="mb-spacing" />

      <h2 id="checklist">Form Accessibility Checklist</h2>
      <ul>
        <li>Use a simple vertical form layout when possible to reduce the cognitive load on users.</li>
        <li>Form inputs and controls have a descriptive label and are visible to the user.</li>
        <li>The label is tied directly to the form input to aid those using assistive technology.</li>
        <li>Provide visible focus indicators for all form elements.</li>
        <li>Use native elements first before using ARIA.</li>
        <li>When native elements such as <code>&lt;label&gt;</code> are not sufficient, consider using the following attributes:
          <ul>
            <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label">aria-label</ExternalLink></li>
            <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby">aria-labelledby</ExternalLink></li>
            <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby">aria-describedby</ExternalLink></li>
            <li><ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details">aria-details</ExternalLink></li>
          </ul>
        </li>
        <li>Group form elements together, where needed, using the <code>fieldset</code> element.</li>
        <li>Focus should follow a natural flow. Don&apos;t change the focus index to alter the tabbing order.</li>
      </ul>

      <h2 id="section-forms" className="mt-spacing">Form Accessibility</h2>
      <h3 id="form-layout" className="mt-spacing">Use a simple vertical layout</h3>
      <p>
        By arranging form elements vertically, each field is presented one below the other, creating a
        natural flow and making it easier for users to understand the order in which they need to provide their inputs. This layout helps improve
        usability and accessibility by reducing the cognitive load. It aligns with the way users typically read and process information from top to bottom,
        and allows for efficient scanning and completion of form fields, reducing potential confusion and errors.
      </p>
      <p>
        The following images depict different forms with the arrows indicating different tab orders. Horizontally arranged forms can create an undesirable user experience.
        Depending on the user, they are going to expect the cursor to land in a particular place. If it doesn&apos;t go where they expect, it increases
        the cognitive load trying to figure out where the cursor will actually land.
      </p>
      <StaticExample
        renderedExample={(
          <>
            <LightBox image={formFlowHorizontal} alt="Form Flow Horizontal" className="flex-2up-gap" />
            <LightBox image={formFlowVertical} alt="Form Flow Vertical" className="flex-3up-gap" />
          </>
        )}
        className="mb-auto"
      />

      <h3 id="tie-label">Tie a descriptive label to each form element</h3>
      <p>
        Use the form element <code>&lt;label&gt;</code> or <code>&lt;legend&gt;</code> depending on the form element
        being used, to associate the label to the form element. This enables the user to click anywhere on the label to activate or focus on the input, thus expanding
        the surface area of the form element. Labels are also read to screen reader users as the element receives focus.
      </p>
      <p>
        Don&apos;t hide labels. Descriptive labels help users interact with your form and correctly provide input. Providing only <code>placeholders</code> is not
        sufficient.
      </p>
      <PreCodeForCodeString
        showBackgroundColor
        codeRaw={`
          <div>
            <label for="input1">My Label</label>
            <input type="text" id="input1" … />
          </div>
        `}
      />
      <PreCodeForCodeString
        showBackgroundColor
        codeRaw={`
          <label>
            <span>My Label<span>
            <input type="text" … />
          <label>
        `}
      />

      <h3 id="focus-indicators">Provide visible focus indicators</h3>
      <p>
        Native html elements have default focus behavior that activates when the user clicks or tabs into it. If
        you customize a form element, the focus boundary requires a <code>3:1</code> contrast ratio to its background. Test to make sure that there is a visible focus state
        on each element, to guide the user through the form.
      </p>
      <StaticExample
        renderedExample={(
          <img src={formFocus} alt="form focus example" />
        )}
        className="mb-auto mt-spacing-s"
      />

      <h3 id="native-elements">Use native html elements</h3>
      <p>
        Native HTML elements are designed to be accessible by default. Using <code>role=</code> and other <code>aria-</code> attributes requires additional work
        to make the form elements accessible. Native elements have built-in semantics that convey meaning to assistive technologies.
        By using native elements, you provide a solid foundation for creating accessible web content without relying on additional ARIA attributes.
      </p>
      <p className="block-quote">
        <strong className="font-size-l"><em>The first rule of ARIA: Before you use ARIA, use native HTML elements and attributes first!</em></strong>
      </p>

      <h3 id="group-form-controls">Group related form controls</h3>
      <p>
        The <code>&lt;fieldset&gt;</code> element is useful when you have a logical grouping of form controls that belong together, such
        as a group of <Link to={pageUrls.radioButton}>radio buttons</Link>, <Link to={pageUrls.checkbox}>checkboxes</Link>, or related input fields. It is typically used
        in combination with a single <code>&lt;legend&gt;</code> element, which provides a caption or description for the group of <Link to={pageUrls.forms}>form elements</Link>.
      </p>
      <PreCodeForCodeString
        showBackgroundColor
        codeRaw={`
        <fieldset>
          <legend>Choose your monster's features:</legend>
          <div>
            <input type="checkbox" id="scales" name="scales" checked>
            <label for="scales">Scales</label>
          </div>
          <div>
            <input type="checkbox" id="horns" name="horns">
            <label for="horns">Horns</label>
          </div>
        </fieldset>
        `}
      />

      <h3 id="element-order">Don&apos;t control element order</h3>
      <p>
        Ensure that the form controls are presented in the <code>HTML</code> exactly as they are displayed on the screen,
        without relying on <code>CSS</code> to rearrange them. This preserves the order in which form elements are narrated by screen readers, as they follow the sequence
        specified in the <code>HTML</code>. Also, do not alter the <code>tabindex</code> of the form element to control the tab order.
      </p>

    </div>
  );
}
