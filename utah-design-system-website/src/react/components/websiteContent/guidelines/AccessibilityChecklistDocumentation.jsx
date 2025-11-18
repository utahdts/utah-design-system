/* eslint-disable max-len */
import {
  ExternalLink,
  formElementSizesEnum,
  LinkCallback,
  Tag,
} from '@utahdts/utah-design-system';
import { useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext/useAppContext';
import { pageUrls } from '../../routing/pageUrls';
import { WcagRulesBlock } from './WcagRulesBlock';

export function AccessibilityChecklistDocumentation() {
  const { setAppState } = useAppContext();
  return (
    <div className="documentation-content a11y-checklist">
      <h1 id="h1-top">Accessibility Checklist & Testing</h1>
      <p className="lead-in">
        This comprehensive checklist simplifies the essential requirements of
        WCAG 2.1 Level AA into actionable steps for your testing and development
        teams. It serves as a practical guide, integrating both automated and
        manual testing items to help you achieve and maintain accessibility
        compliance. Throughout this page, you’ll find links to in-depth
        resources and documentation to support your full accessibility journey.
        For more in depth information also visit the{" "}
        <NavLink to={pageUrls.accessibility}>
          accessibility overview page
        </NavLink>
        .
      </p>

      <WcagRulesBlock />

      <p>
        Automated and manual testing are both essential for a comprehensive
        accessibility audit. Automated tools can quickly check for objective
        errors, while manual testing is necessary to evaluate the user
        experience and dynamic functionality. Here is your checklist, organized
        into these two groups, with additional items for a more complete review.
      </p>

      <hr />

      <h2 id="section-checklist-download">Checklist Download</h2>
      <p className="mb-spacing">
        This checklist is available as a Google Sheet to aid in website testing.
        Make a copy of the checklist to test your websites:
      </p>
      <div className="flex justify-center mb-spacing-l">
        <ExternalLink
          href="https://docs.google.com/spreadsheets/d/1q_jnJv6jx4b6zBYdrnqt5xUAHF4VUwd4YQjrU7ziSx0/edit?usp=sharing"
          //@ts-expect-error This is spread into the component
          className="button button--primary-color button--solid button--large"
        >
          <span className="button--icon button--icon-left"><span className="utds-icon-before-doc-square" aria-hidden="true" /></span>
          Get the checklist
        </ExternalLink>
      </div>

      <hr />

      <h2 id="automated-testing">
        <strong>Automated Testing</strong>
      </h2>
      <p>
        These checks can be performed using tools like <ExternalLink href="https://wave.webaim.org/">WebAIM’s WAVE tool</ExternalLink>. These
        tools are highly effective for catching common, code-level issues.
      </p>

      <h3>Automated Testing Key</h3>
      <p className="mb-auto">
        <ExternalLink href="https://wave.webaim.org/">WebAIM’s WAVE tool</ExternalLink> can find two
        kinds of issues: <strong>errors</strong> and <strong>alerts</strong>. These are represented
        in this checklist with the follow tags:
      </p>
      <ul className="mb-spacing-l">
        <li>
          <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: [description]</Tag> :
          In WAVE, an Error signifies a definite accessibility issue caused by a code-level failure.
          These issues create immediate barriers for users and must be addressed by correcting the underlying code.
        </li>
        <li>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: [description]</Tag> :
          Alerts indicate a possible accessibility issue that the automated tool cannot definitively judge.
          These items are not automatically failures, but they must be manually reviewed by a human
          to confirm whether they pose an actual barrier to users.
        </li>
      </ul>

      <h3>Automated Testing Checklist</h3>

      <ul className="checkbox-list">
        <li>
          <strong>HTML structure and semantics:</strong>{' '}
          Use <Link to={pageUrls.paragraphs}>semantic HTML</Link> markup.
          <ul>
            <li>
              <strong>Missing page title:</strong> A page title should succinctly and accurately
              describe the purpose of the page.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Missing or uninformative page title</Tag>
            </li>
            <li>
              <strong>Proper headings:</strong> <Link to={pageUrls.headings}>Headings</Link> should be in
              hierarchical order without skipping levels (&lt;h1&gt; to
              &lt;h6&gt;).
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Skipped heading level</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Missing first level heading</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: No heading structure</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Possible heading</Tag>
            </li>
            <li>
              <strong>Empty heading:</strong> Never using empty
              headings solely for content spacing.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Empty heading</Tag>
            </li>
            <li>
                  <strong>Lists:</strong> Ensure that <Link to={pageUrls.lists}>lists</Link> (&lt;ul&gt;,
                  &lt;ol&gt;) are used for list-like content.
                  <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Possible list</Tag>
                </li>
            <li>
              <strong>Text size:</strong> Generally the <Link to={pageUrls.typography}>page text size</Link> should be 16px
              or larger, and generally no smaller than 14px for things like captions.
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Very small text</Tag>
            </li>
            <li>
              <strong>Underlined text:</strong> Underlines imply a link. Remove underlines from non-link
              text and use styling like bold or italics instead.
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Underlined text</Tag>
            </li>
            <li>
              <strong>Justified text:</strong> Text that is aligned to both the left and right margins,
              often resulting in large gaps between words, known as "rivers of white", which can make it
              difficult to read.
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Justified text</Tag>
            </li>
            <li>
              <strong>Tables:</strong> <Link to={pageUrls.table}>Tables</Link> should use semantic tags to describe the structure of the table.
              Never use tables for layout, or have an empty &lt;th&gt; element. If the cell is not a header
              or must remain empty (such as the top-left cell in a data table), make the cell a &lt;td&gt;
              rather than a &lt;th&gt;.
              <ul>
                <li>
                  Use a &lt;caption&gt; element to describe the table instead of using
                  the colspan attribute to provide a pseudo table caption.
                </li>
              </ul>
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Empty table header</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Layout table</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Possible table caption</Tag>
            </li>
            <li>
              <strong>Title attribute:</strong> The title attribute is unreliable for accessible content
              because it often fails to display on touch devices and is ignored by many screen readers.
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Redundant title text</Tag>
            </li>
          </ul>
        </li>
        <li><strong>Links:</strong>
          <ul>
            <li>
              <strong>Descriptive links:</strong> <Link to={pageUrls.links}>Links</Link> must be
              descriptive and make sense out of context, avoiding generic
              phrases like "click here".
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Suspicious link text</Tag>
            </li>
            <li>
              <strong>Broken and redundant links</strong>: Avoid links that repeat or links to non-existent pages
              or sections of the website.
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Redundant link</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Broken same-page link</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Broken link</Tag>
            </li>
            <li>
              <strong>Empty links</strong>: Links must contain text to convey their purpose to all users, including
              screen readers. The Design System provides a css utility class <code>visually-hidden</code> to hide
              text from the screen, but make it available for screen readers. This is generally used for
              icon button links.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Empty link</Tag>
            </li>
          </ul>
        </li>
        <li>
          <strong>Color and contrast:</strong>
          <ul>
            <li>
              <strong>Text contrast:</strong> Text, including links, should have
              a minimum 4.5:1 (AA) <Link to={`${pageUrls.accessibility}#section-limited-vision-contrast`}>contrast ratio</Link> with its background. Beware of
              false positives.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Very low contrast</Tag>
            </li>
          </ul>
        </li>
        <li>
          <strong>Forms and Buttons:</strong>
          <ul>
            <li>
              <strong>Form labels:</strong> Every <Link to={pageUrls.formGuidelines}>form</Link> input must be
              associated with a descriptive &lt;label&gt; tag.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Empty form label</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Missing form label</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Multiple form labels</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Orphaned form label</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Select missing label</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Unlabeled form control with title</Tag>
            </li>
            <li>
              <strong>Buttons:</strong> Every button element requires
              valid descriptive text. A &lt;button&gt; element is present that contains no
              text content (or alternative text), or an &lt;input type=&quot;submit&quot;&gt;,
              &lt;input type=&quot;button&quot;&gt;, or &lt;input type=&quot;reset&quot;&gt; has an empty or
              missing value attribute.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Empty button</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Image button missing alternative text</Tag>
            </li>
            <li>
              <strong>Javascript Jump Menu:</strong> This is a &lt;select&gt;
              element that triggers a new web page with the "<strong>onchange</strong>" event handler.
              When navigating with the keyboard, each change in the select menu
              triggers a page change in browsers, thus making navigation very difficult.
              Therefore, it is important to avoid using <strong>onchange</strong> event
              handlers with &lt;select&gt; elements.
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: JavaScript jump menu</Tag>
            </li>
          </ul>
        </li>
        <li>
          <strong>Tabindex:</strong> Using tabindex values greater than 0 (e.g., tabindex="1")
          on any element is a bad practice because it overrides the browser’s natural flow,
          creating a confusing, non-linear tab order that is fragile and difficult to
          maintain for keyboard users. Instead, rely solely on the document’s source order
          (DOM) to define the focus sequence.
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Tabindex</Tag>
        </li>
        <li>
          <strong>Images:</strong>
          <ul>
            <li>
              <strong>Image alternative text (alt text):</strong> All images must
              have an alt attribute. WAVE will flag suspected <Link to={`${pageUrls.accessibility}#alt-text`}>alt text</Link> with
              non-descriptive text like “image”, duplicate alt text, and long alt text.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Missing alternative text</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Linked image missing alternative text</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: A nearby image has the same alternative text</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Long alternative text</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Redundant alternative text</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Suspicious alternative text</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Image with title</Tag>
            </li>
            <li>
              <strong>Missing alt text:</strong> Alt text must be used on: image maps, image map areas, image
              buttons.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Image button missing alternative text</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Image map area missing alternative text</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Image map missing alternative text</Tag>
            </li>
            <li>
              <strong>Decorative images:</strong> If an image is purely decorative, the alt attribute should be
              empty (alt="") or use aria-hidden.
            </li>
            <li>
              <strong>Spacer image missing alternative text:</strong> If
              the image is a spacer image, give the image null/empty alternative
              text (alt=""). Alternatively, consider using CSS instead of spacer
              images to control positioning and layout.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Spacer image missing alternative text</Tag>
            </li>
          </ul>
        </li>
        <li>
          <strong>Multimedia:</strong>
          <ul>
            <li>
              <strong>Video captions:</strong> Videos are required to have synchronized captions.
              This automated test will show an error for YouTube videos that are
              missing captions. However, it can’t verify that the captions
              correctly describe the content of the video. This will required manual
              testing.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: YouTube video missing captions</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Audio/Video</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: HTML5 video or audio</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Vimeo video</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: YouTube automated captions</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: YouTube video</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: YouTube video not found</Tag>
            </li>
            <li>
              <strong>Audio transcripts:</strong> Audio content must be presented in
              a text format to be fully accessible to users who are deaf and hard of hearing.
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Audio/Video</Tag>
            </li>
          </ul>
        </li>
        <li>
          <strong>Links to external document:</strong> External documents (such as PDFs, Word files,
          and spreadsheets) introduce an additional accessibility burden. Every external document
          must be rigorously tested for essential elements like <Link to={`${pageUrls.accessibility}#section-limited-vision-contrast`}>color contrast</Link>, a logical
          heading structure, and image <Link to={`${pageUrls.accessibility}#alt-text`}>alt text</Link>.<br /><br />
          Because of this testing overhead and the variety of document types, it is highly
          recommended that you prioritize presenting content as HTML web pages over using
          external files. This approach ensures your information is consistently delivered
          in the most accessible and mobile-friendly format.
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to document</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to Excel spreadsheet</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to Google document</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to Google file</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to Google Form</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to Google Presentation</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to Google Sheet</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to PDF document</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to PowerPoint document</Tag>
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Link to Word document</Tag>
        </li>
        <li>
          <strong>ARIA (Accessible Rich Internet Applications)</strong>
          <ul>
            <li>
              <strong>Broken ARIA reference:</strong> An aria-labelledby or aria-describedby
              attribute exists, but the target for the reference does not exist.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Broken ARIA reference</Tag>
            </li>
            <li>
              <strong>Broken ARIA menu:</strong> When building an ARIA menu, you’re required
              to include certain aria elements to make the menu function. An element with
              role="menu" does not contain at least one element with role="menuitem",
              role="menuitemcheckbox", or role="menuitemradio".
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Broken ARIA menu</Tag>
            </li>
          </ul>
        </li>
        <li>
          <strong>&lt;noscript&gt; tag:</strong> This tag should never be used to provide
          accessible versions of inaccessible content to the user. Nearly all users
          have javascript enabled.
          <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Noscript element</Tag>
        </li>
      </ul>

      <hr />

      <h2 id="manual-testing">
        <strong>Manual Testing</strong>
      </h2>
      <p>
        These items require a person to interact with the site to verify the
        user experience. They are critical for evaluating functionality that an
        automated tool cannot fully understand.
      </p>


      <h3 id="one-time-tests">One Time Tests</h3>
      <p>
        These elements usually require a single test per website, as they
        are typically established within the site’s primary template and
        css. However, if your website lacks a template, you might need to
        test several pages to guarantee compliance.
      </p>
      <ul className="checkbox-list">
        <li>
          <strong>HTML structure, semantic HTML, and content:</strong>
          Use <Link to={pageUrls.paragraphs}>semantic HTML</Link> markup.
          <ul>
            <li>
              <strong>Language Tag:</strong> Every page must have a defined
              language in the HTML tag to help assistive technology
              pronounce words correctly. Check your page’s language and make
              sure it’s correct. &lt;html lang=”en-US” … &gt;
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Language missing or invalid</Tag>
            </li>
            <li>
              <strong>Landmark roles:</strong> Use <Link to={`${pageUrls.accessibility}#section-landmark-roles`}>landmark roles</Link>{' '}
              (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;)
              logically. The majority of content should reside in the
              &lt;main&gt; element. A page should have the following:
              <ul>
                <li>
                  One &lt;header&gt; as a direct descendant of the
                  &lt;body&gt; element.
                </li>
                <li>
                  One or two &lt;nav&gt; elements. (main menu and side menu)
                </li>
                <li>One &lt;main&gt; element.</li>
                <li>
                  One &lt;footer&gt; as a direct descendant of the
                  &lt;body&gt; element.
                </li>
              </ul>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: No page regions</Tag>
            </li>
          </ul>
        </li>
        <li>
          <strong>Links:</strong>
          <ul>
            <li>
              <strong>Identifiable:</strong> Links must be easily
              identifiable from the rest of the content on a page. (Using
              underline is the preferred method)
            </li>
            <li>
              <strong>Hover state:</strong> Links must have a clear hover
              state. (This can be the arrow cursor changing to a hand
              cursor.)
            </li>
            <li>
              <strong>Focus:</strong> The focus indicator must be visible
              and have sufficient contrast (3:1).
            </li>
            <li>
              <strong>Skip link:</strong> A visible <Link to={pageUrls.skipLink}>skip link</Link> or "Skip to main content"
              link at the top of the page should be accessible via keyboard.
              The standard Utah Header can be configured to provide a
              functional skip link.
              <Tag size={formElementSizesEnum.SMALL} className="tag--error">Error: Broken skip link</Tag>
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="multiple-page-tests" className="mt-spacing">Multiple Page Tests</h3>
      <p>
        While testing every page may not be feasible on a large website,
        every effort should be used to test the most trafficked pages. You
        could manually test every page on your website, but we know that the
        time and resources might not be available to do that.
      </p>
      <p>
        To ensure ongoing accessibility, it’s recommended to implement a
        regular, comprehensive accessibility audit of your website, focusing
        on the most critical and frequently used pages. Additionally, a
        proactive approach is essential: all new content created for the
        website should be tested for accessibility as it is developed and
        before it is published. This ensures that accessibility is built in
        from the start, rather than being an afterthought.
      </p>
      <p>
        However, ultimately it’s your agency’s responsibility to comply with
        the State and Federal rules. You should work with your agency
        leadership to determine what level of review and compliance that
        they are comfortable with.
      </p>
      <ul className="checkbox-list">
        <li>
          <strong>HTML structure, semantic HTML, and content:</strong>
          <ul>
            <li>
              <strong>Page title:</strong> A page title should succinctly and
              accurately describe the purpose of the page. This is the first
              thing users see or read in their browser tab and search results, making
              it critical for quick identification and navigation.
            </li>
            <li>
              <strong>Logical heading structure:</strong> (&lt;h1&gt;,
              &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;)
              Ensure headings are used in a logical order. To help evaluate
              this the WAVE tool has a “Structure” tab that can clearly show
              the heading levels and order they appear.
              <ul>
                <li>
                  Avoid using large, styled text for titles in the body of your website.
                  Use HTML headings to provide a logical, structural outline. This
                  enables screen reader users to navigate the page quickly and understand
                  the content hierarchy.
                </li>
              </ul>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Skipped heading level</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Missing first level heading</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: No heading structure</Tag>
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Possible heading</Tag>
            </li>
            <li>
              <strong>Semantic:</strong> Use <Link to={pageUrls.paragraphs}>semantic HTML</Link> markup.
              <ul>
                <li>
                  <strong>Lists:</strong> Ensure that lists (&lt;ul&gt;,
                  &lt;ol&gt;) are used for list-like content.
                  <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Possible list</Tag>
                </li>
                <li>
                  <strong>Tables:</strong>{' '}
                  <ul>
                    <li>Use the <Link to={pageUrls.table}>table</Link> element to describe tabular data.</li>
                    <li>
                      &lt;thead&gt; and &lt;tbody&gt; provide semantic meaning to the
                      table structure, distinguishing the header rows from the main data rows.
                    </li>
                    <li>
                      Use the &lt;th&gt; element for table headers (with appropriate
                      scope attributes). The scope attribute defines what cells that
                      the header &lt;th&gt; element relates to. Possible enumerated
                      values are: col, row, colgroup, rowgroup.
                    </li>
                    <li>
                      Use the &lt;caption&gt; element to provide a title for the
                      table.
                    </li>
                  </ul>
                </li>
                <li><strong>&lt;article&gt;:</strong> Represents a self-contained composition within a document, page, or site.</li>
                <li><strong>&lt;aside&gt;:</strong> Contains content that is indirectly related to the main content.</li>
                <li><strong>&lt;section&gt;:</strong> Defines a thematic grouping of content, such as chapters or sections.</li>
              </ul>
            </li>
            <li>
              <strong>Plain language:</strong> The body text should be clear
              and understandable, typically at an 8th-grade reading level.
            </li>
          </ul>
        </li>
        <li>
          <strong>Links:</strong>
          <ul>
            <li>
              <strong>Descriptive link and button text:</strong>{" "}
              Generic link text, such as "click here," are not descriptive
              or meaningful out of context. <strong> Automated tools may catch some
                obvious issues, but can’t catch everything.</strong>
            </li>
            <li>
              <strong>Links that open in a new tab:</strong> Ensure the
              link’s behavior will be communicated in a way that is apparent
              to all users. Doing this will help people understand what will
              happen before activating the link.
              e.g. <ExternalLink href="https://governor.utah.gov">Visit the Governor’s Website</ExternalLink>
              <ul>
                <li>
                  The link has a visual indicator and visually hidden text
                  like "opens in a new tab" to warn screen reader users.
                </li>
              </ul>
              <em>You may need to check for this on all pages or one time
              depending how your website implements a solution.</em>
            </li>
          </ul>
        </li>
        <li>
          <strong>Minimum size:</strong> Interactive elements such as{' '}
          <Link to={pageUrls.button}>Buttons</Link> should be at least <Link to={`${pageUrls.accessibility}#section-motor-functionality`}>24 by 24 pixels</Link>.
        </li>
        <li>
          <strong>Images:</strong>
          <ul>
            <li>
              <strong>Alternative (alt) text:</strong> The image’s alt
              attribute (<Link to={`${pageUrls.accessibility}#alt-text`}>alt text</Link>) gives a description of an image for
              people who may not be able to view them. Make sure the alt
              description includes any text within the image. Don’t make
              descriptions too long. In WordPress use the media library to
              fill out alt text.
            </li>
          </ul>
        </li>
        <li>
          <strong>Keyboard navigation:</strong>
          <ul>
            <li>
              <strong>Warning: Tab order:</strong> Use the &lt;Tab&gt; key
              to ensure all interactive elements can be reached in a logical
              sequence. Usually doesn’t require extra testing if you have
              not tried to alter the tab index - Warning.
            </li>
            <li>
              <strong>Keyboard traps:</strong> Test that the user can move
              focus both into and out of all components (e.g., modals,
              carousels) using the keyboard.
            </li>
            <li>
              <strong>Functionality:</strong> Verify that all functionality
              (links, buttons, form fields) can be operated using only the
              keyboard (&lt;Enter&gt;, &lt;Spacebar&gt;, &lt;Arrow Keys&gt;,
              &lt;Escape&gt;).
            </li>
            <li>
              <strong>Dismissible:</strong> Content that appears on hover or
              focus must be dismissible. Users must be able to close the
              content without moving their mouse or keyboard focus away from
              the triggering element. Using the &lt;Escape&gt; key is the
              standard and most intuitive way to meet this for keyboard
              users.
            </li>
          </ul>
        </li>
        <li>
          <strong>Keyboard testing guide:</strong>
          <ul>
            <li>
              <strong>Tab:</strong> Navigate to links and form controls. Is
              the tab order sequential and/or logical? Is the focus
              indicator visible and does it meet contrast requirements
              (3:1)?
            </li>
            <li>
              <strong>Shift + Tab:</strong> Navigate backwards. Will the
              user get stuck in any interactive component like a popup or a
              multi-select?
            </li>
            <li>
              <strong>Spacebar:</strong> Activate checkboxes and buttons.
            </li>
            <li>
              <strong>Enter:</strong> Activate links and buttons.
            </li>
            <li>
              <strong>Arrow keys:</strong> Enables the user to navigate
              through vertical menus, radio buttons, checkboxes,
              select/drop-down menus, sliders, tab panels, auto-complete,
              etc.
            </li>
            <li>
              <strong>Escape:</strong> Does this dismiss all interactive
              elements, including browser dialogs or menus, and take the
              user back to the main content?
            </li>
          </ul>
        </li>
        <li>
          <strong>Color and contrast</strong>
          <ul>
            <li>
              <strong>Text:</strong> Text, including links, has a 4.5:1
              <Link to={`${pageUrls.accessibility}#section-limited-vision-contrast`}>contrast ratio</Link> to its background.
            </li>
            <li>
              <strong>Headings:</strong> Headings and large bold text should
              pass the contrast ratio of 3:1.
            </li>
            <li>
              <strong>Interactive element contrast:</strong> Buttons, form
              fields, and interactive elements require a 3:1 contrast ratio
              for their borders or outlines.
            </li>
            <li>
              <strong>Error: Text over images:</strong> Ensure any text
              overlapping an image has sufficient contrast (4.5:1), and is
              not too busy.
            </li>
            <li>
              <strong>Text in images:</strong> Avoid using text in images at
              all costs. Text within an image must pass 4.5:1 contrast ratio
              and must be described in the alt text. It must also be large
              enough to be read on all screen sizes (minimum 16px). But,
              don’t do it. Just don’t.
            </li>
            <li>
              <strong>No color-only information:</strong> Do not rely on
              color alone to convey meaning, especially in text, charts, or
              graphs. Use shapes, icons, labels, or textures in addition to
              color to provide context.
            </li>
          </ul>
        </li>
        <li>
          <strong>Screen reader compatibility:</strong>
          <ul>
            <li>
              <strong>Reading order:</strong> Navigate the site with a
              screen reader to ensure the content is read in a logical and
              understandable order. Screen readers and other assistive
              technologies will follow the underlying document structure,
              which means elements placed visually adjacent but structured
              separately in the code might be read out of sequence, leading
              to confusion. Therefore, verifying the reading order is a
              crucial step in accessibility testing.
            </li>
          </ul>
        </li>
        <li>
          <strong>Responsiveness and zoom:</strong>
          <ul>
            <li>
              <strong>Page Resizing:</strong> Manually zoom the page up to
              200% to ensure the layout does not break, text remains
              readable, and functionality is preserved. Never disable
              viewport zooming.
            </li>
            <li>
              <strong>Orientation:</strong> Test the site in different
              screen orientations (e.g., portrait vs. landscape on a mobile
              device).
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="test-everything" className="mt-spacing">Test All Instances</h3>
      <p>
        Some elements such as forms, interactive elements, popups,
        multimedia, and custom elements on your website should have more
        extensive testing. Where possible you should test each individual
        part to ensure that accessibility requirements are being met. This
        thorough approach is crucial because these complex elements often
        present unique challenges for users with disabilities. Ensuring
        their accessibility isn’t just about compliance, but about providing
        a functional experience for all users, preventing frustration, and
        allowing everyone to fully engage with your website’s content and
        features.
      </p>
      <p>
        Again, your agency is ultimately responsible for complying with
        State and Federal regulations. You should consult your agency’s
        leadership to establish the acceptable level of review and
        compliance.
      </p>
      <ul className="checkbox-list">
        <li>
          <strong>Forms and interactive elements:</strong>{' '}
          <em>It is important to test all <Link to={pageUrls.formGuidelines}>forms</Link> for accessibility.</em>
          <ul>
            <li>
              <strong>Simple Vertical Layout:</strong> Design
              forms using a simple vertical flow whenever possible. This
              reduces cognitive load and ensures the layout is inherently
              compatible with the mobile-first approach common across all
              devices.
            </li>
            <li>
              <strong>Labels:</strong> Form inputs and controls have a
              descriptive label and are visible to the user. The labels
              are correctly tied to their respective input.
            </li>
            <li>
              <strong>Tab Order and Visual Focus Indicators:</strong> Tab
              order of form fields is logical. All interactive elements must
              have a visible focus indicator that meets contrast
              requirements (3:1).
            </li>
            <li>
              <strong>Keyboard Only:</strong> Forms can be completed using
              only a keyboard. In dropdown menus, you can navigate and
              select items using the keyboard alone.
            </li>
            <li>
              <strong>Required fields:</strong> If a required field is left
              blank, keyboard focus shifts to that field when the user is
              notified. Required fields are clearly labeled. Appropriate
              required attributes are used on the input elements.
            </li>
            <li>
              <strong>Form errors are clearly identified:</strong> If an
              input error is automatically detected, the item that is in
              error is identified and the error is described to the user in
              text. For added accessibility, provide a mechanism that allows
              the user to jump to errors.
            </li>
            <li>
              <strong>Fieldset:</strong> Group form elements together, where
              needed, using the fieldset element. Use a &lt;legend&gt; element
              to describe the fieldset group.
              <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Fieldset missing legend</Tag>
            </li>
            <li>
              <strong>Minimum size:</strong> Interactive elements such as{' '}
              <Link to={pageUrls.button}>Buttons</Link> should be at least <Link to={`${pageUrls.accessibility}#section-motor-functionality`}>24 by 24 pixels</Link>.
            </li>
            <li>
              <strong>Data Retained (AAA):</strong> Data entered is retained
              if the page is refreshed or too much time is taken to fill out
              form fields.
            </li>
          </ul>
        </li>
        <li>
          <strong>Custom components:</strong><br />
          <em>Thoroughly test all custom components with a keyboard, mouse, and screen reader</em>
          <ul>
            <li>
              <strong>ARIA components:</strong> If native HTML elements are not used,
              check that ARIA (Accessible Rich Internet Applications) roles
              and states are properly implemented to convey a component’s
              purpose. Test all non-native elements. Remember: The first rule of ARIA:
              Before you use ARIA, use native HTML elements or attributes first!
              <ul>
                <li>
                  <strong>Keyboard and mouse:</strong> To guarantee that all users can
                  access critical content and functionality, your custom components
                  must not rely solely on the mouse. Use a device-independent event
                  that handles both mouse and keyboard input, or explicitly provide
                  separate handlers for each input type.
                  <Tag size={formElementSizesEnum.SMALL} className="tag--warning">Alert: Device dependent event handler</Tag>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Dynamic Updates:</strong> Test that screen readers are
          alerted to dynamic content changes, such as validation errors
          or live status updates.
        </li>
        <li>
          <strong>Modals and popups:</strong>{' '}
          <em>Test all variations of popups.</em>
          <ul>
            <li>
              <strong>Direct focus:</strong> When the modal or popup opens,
              the keyboard focus must automatically jump inside it. Usually
              it is best to focus on the title of the modal.
            </li>
            <li>
              <strong>Keep focus inside:</strong> For modals, the user
              should only be able to use the keyboard to navigate between
              elements within the modal. The focus should not escape to the
              background page.
            </li>
            <li>
              <strong>Use "escape" to close:</strong> The Escape key must
              always close the modal or popup. Users can also use a close
              button to close the modal.
            </li>
            <li>
              <strong>Restore focus:</strong> When the modal closes, the
              keyboard focus must return to the exact element that opened
              it.
            </li>
          </ul>
        </li>
        <li>
          <strong>Charts, graphs, and maps:</strong>
          <ul>
            <li>
              Provide a text alternative for complex images such as charts,
              graphs, and maps.
            </li>
          </ul>
        </li>
        <li>
          <strong>Motion and multimedia:</strong>{' '}
          <em>Test all variations of multimedia.</em>
          <ul>
            <li>
              <strong>Motion control:</strong> Check if motion can
              be controlled (stopped, started, or paused). Use both your
              mouse and keyboard to control the motion.
            </li>
            <li>
              <strong>Don’t start automatically:</strong> Motion should not
              start automatically if it lasts more than five seconds, or if
              it contains any flashing elements that can cause seizures.
            </li>
            <li>
              <strong>Enough time:</strong> Content stays on the screen for
              at least 5 seconds to allow the user to digest the
              information.
            </li>
            <li>
              <strong>Video and audio content:</strong>
              <ul>
                <li>
                  <strong>Video Accessibility Requirements</strong>
                  <ul>
                    <li>
                      <strong>Captions/Transcripts:</strong> All video content must
                      include accurate captions and/or a full text transcript.
                    </li>
                    <li>
                      <strong>Audio Descriptions:</strong> Videos that convey
                      essential visual information (e.g., demonstrations, graphs,
                      silent actions) must have a corresponding audio description.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Audio Accessibility Requirements</strong>
                  <ul>
                    <li><strong>Transcripts:</strong> All standalone audio content
                    (like podcasts) must include an accurate full text transcript.</li>
                  </ul>
                </li>
                <li>
                  <strong>Manual Testing Note: </strong>
                  Remember to <strong>manually test</strong> all captions, transcripts,
                  and audio descriptions to confirm their accuracy and synchronization.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Documents:</strong>
          <ul>
            <li>
              <strong>PDF accessibility:</strong> Verify that all PDF
              documents meet <Link to={`${pageUrls.accessibility}#section-limited-vision-contrast`}>contrast requirements</Link>, are properly tagged, and
              are readable by a screen reader.
            </li>
            <li>
              <strong>Prioritize HTML over PDF:</strong> When feasible, it
              is highly recommended to prioritize HTML over PDF for
              presenting web content. PDFs are often not optimized for
              mobile responsiveness. Ensuring accessibility for PDFs
              requires specialized tools and a distinct workflow, which can
              add complexity and cost. Favoring HTML allows you to leverage
              native web accessibility features for a consistent and
              adaptable experience.
            </li>
            <li>
              <strong>PDF Accessibility: Adobe Acrobat Pro:</strong> For
              State of Utah operations, Adobe Acrobat Pro is an approved
              technology for working with PDF documents, particularly when
              it comes to accessibility. This specific version of Acrobat is
              indispensable for anyone needing to view or edit the crucial
              accessibility information embedded within a PDF file.
              <ul>
                <li>
                  <strong>Inspect Accessibility Tags:</strong> Verify that
                  PDFs are properly tagged.
                </li>
                <li>
                  <strong>Reading Order:</strong> Verify that the reading order
                  is correct by using the Reading Order feature.
                </li>
                <li>
                  <strong>Remediate Accessibility Issues:</strong> Identify
                  and correct common accessibility barriers.
                </li>
                <li>
                  <strong>Manage Document Properties:</strong> Access and
                  modify document properties related to accessibility.
                </li>
                <li>
                  <strong>Create Accessible PDFs:</strong> When absolutely
                  needed, develop new PDF documents from scratch with
                  accessibility in mind.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <hr />

      <h2 id="tools">Tools For Accessibility Testing</h2>
      <p>
        These tools are essential for performing a thorough accessibility review.
        They combine automated checks (for speed) with manual inspection capabilities
        (for accuracy), ensuring compliance with standards and a better experience for all users.
      </p>
      <ul>
        <li>
          <strong>WebAIM WAVE Tool</strong> (Chrome plugin or website): Used to identify
          automated accessibility errors, alerts, and structural issues.
          <ul>
            <li>
              <strong>How to use Chrome plugin:</strong>{' '}
              <ExternalLink href="https://chromewebstore.google.com/detail/jbbplnpkjmmeebjpijfedlgcdilocofh">Install the Chrome plugin</ExternalLink>,
              navigate to the page, and click the WAVE icon. The tool overlays icons on the page and
              provides a sidebar report detailing Errors, Alerts, Features, and the reading Order.
            </li>
            <li>
              <strong>How to use WAVE website:</strong>{' '}
              <ExternalLink href="https://wave.webaim.org/">Navigate to the WAVE website</ExternalLink>, and
              enter you website’s url in the "Web page address" field then click the arrow or hit Enter.
            </li>
          </ul>
        </li>
        <li>
          <strong>Color Contrast Checker by Pivotal Accessibility</strong> (Chrome plugin):
          Used specifically for verifying text and background color contrast against WCAG standards.
          <ul>
            <li>
              <strong>How to Use:</strong>{' '}
              <ExternalLink href="https://chromewebstore.google.com/detail/gbfgefkhkofclanlcgnhlbmfgjjomock">Activate the plugin</ExternalLink>{' '}
              and use an eyedropper tool to sample the foreground (text) and background
              colors directly from the page to instantly get the pass/fail result.
            </li>
          </ul>
        </li>
        <li>
          <strong>Utah Design System Color Contrast Tool</strong> (Website Tool): Used to test color combinations by selecting from a spectrum or entering hex values.
          <ul>
            <li>
              <strong>How to Use:</strong>{' '}
              Go to the <ExternalLink href="https://designsystem.utah.gov/resources/demoPage">Utah Design System website</ExternalLink> and {' '}
              <LinkCallback
                actionDescription="Opens the Utah Design System Color Picker"
                callback={useCallback(() => { setAppState((draftAppState) => { draftAppState.isColorPickerShown = true; }); }, [setAppState])}
                href="design-system_color-picker"
              >
                click on the gear icon
              </LinkCallback>
              {' '}in the header. Enter the hex code or choose colors using the visual spectrum (eye dropper).
              The tool will display the contrast ratio and show you a preview of how the
              colors look together on the website, helping you achieve compliance visually.
              Use the contrast tab to see the contrast ratio for two selected colors.
            </li>
          </ul>
        </li>
        <li>
          <strong>WebAIM Contrast Checker</strong> (Website Tool): Used to verify the
          contrast ratio between any two specific colors.
          <ul>
            <li>
              <strong>How to Use:</strong> <ExternalLink href="https://webaim.org/resources/contrastchecker/">Go to the website</ExternalLink>, input the hexadecimal or
              RGB values for the foreground (text) and background colors,
              and the tool instantly reports if the contrast passes or fails
              WCAG standards.
            </li>
          </ul>
        </li>
        <li>
          <strong>Google Chrome Accessibility Tree</strong> (Built-in Developer Tools):
          Provides a structural view of how the browser exposes page content to
          assistive technologies (like screen readers), which is helpful for
          understanding semantics and reading order.
          <ul>
            <li>
              <strong>How to Use:</strong> Open Chrome Developer Tools (F12 or
              right-click &gt; Inspect). In the <strong>Elements</strong> panel,
              find the tab or button to switch from the standard DOM view to the{' '}
              <strong>Accessibility Tree</strong> view to check roles, names, and properties.{' '}
              <ExternalLink href="https://blog.pope.tech/2023/11/27/how-to-use-chromes-accessibility-tree/">Learn about Chrome Accessibility Tree here.</ExternalLink>
            </li>
          </ul>
        </li>
        <li>
          <strong>Google Chrome Lighthouse</strong> (Built-in Developer Tools): Used for automated auditing,
          providing a high-level score and actionable recommendations across performance, SEO, and accessibility.
          <ul>
            <li>
              <strong>How to Use:</strong> Open Chrome Developer Tools. Click the <strong>Lighthouse</strong> tab.
              Select the <strong>Accessibility</strong> category and click "Analyze page load."
              It generates a score and a list of specific pass/fail audits.
            </li>
          </ul>
        </li>
        <li>
          <strong>Accessibility Insights</strong> (Chrome/Edge Extension or Desktop App): Developed by Microsoft,
          this is a comprehensive tool that provides FastPass, a two-step process to quickly find
          common, high-impact accessibility issues using automated checks and assisted manual
          review (Tab Stops). It also offers a full Assessment against WCAG 2.1 AA standards.
          <ul>
            <li>
              <strong>How to Use:</strong> <ExternalLink href="https://accessibilityinsights.io/downloads/">Install the browser extension</ExternalLink>,
              navigate to the page, and click the extension icon. Choose FastPass for a
              quick check or Assessment for a guided, full WCAG audit. It provides clear
              visual highlighting of failures directly on the page.
            </li>
          </ul>

        </li>
        <li>
          <strong>Social Security Administration - ANDI</strong> (Accessible Name & Description Inspector)
          (Bookmarklet): A lightweight, browser-based tool developed by the SSA that
          specializes in element-by-element inspection. It is designed to reveal what
          a screen reader should say (the accessible name and description) for
          interactive elements, tables, and images.

          <ul>
            <li>
              <strong>How to Use:</strong> <ExternalLink href="https://www.ssa.gov/accessibility/andi/help/install.html">Install it as a bookmarklet</ExternalLink>{" "}
              (a bookmark that runs JavaScript). Click the bookmark to launch ANDI on
              any page. Use the module dropdown (e.g., "Focusable elements," "Tables")
              to inspect specific areas and review the "ANDI Output" box to see how a
              screen reader interprets the selected element.
            </li>
          </ul>
        </li>
      </ul>

      <hr />

      <h2 id="screen-reader-help">
        <strong>Screen Reader Help</strong>
      </h2>
      <p>
        To effectively test the accessibility of digital content, it’s crucial
        to understand how users with visual impairments interact with a webpage.
        This primarily involves using screen readers, which are software
        applications that attempt to identify and interpret what is being
        displayed on the screen, then present it to the user with
        text-to-speech or a braille device.
      </p>

      <ul>
        <li>
          <strong>Common Screen Readers:</strong>
          <ul>
            <li>
              <strong>NVDA (Windows):</strong>{" "}
              <ExternalLink href="https://webaim.org/articles/nvda/">
                https://webaim.org/articles/nvda/
              </ExternalLink>
            </li>
            <li>
              <strong>JAWS (Windows):</strong>{" "}
              <ExternalLink href="https://webaim.org/articles/jaws/">
                https://webaim.org/articles/jaws/
              </ExternalLink>
            </li>
            <li>
              <strong>Narrator (Windows):</strong>{" "}
              <ExternalLink href="https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1">
                https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1
              </ExternalLink>
            </li>
            <li>
              <strong>VoiceOver (Mac):</strong>{" "}
              <ExternalLink href="https://support.apple.com/en-bh/guide/voiceover/vo4be8816d70/10/mac">
                https://support.apple.com/en-bh/guide/voiceover/vo4be8816d70/10/mac
              </ExternalLink>
            </li>
            <li>
              <strong>VoiceOver (iPhone):</strong>{" "}
              <ExternalLink href="https://support.apple.com/en-bh/guide/iphone/iph3e2e415f/ios">
                https://support.apple.com/en-bh/guide/iphone/iph3e2e415f/ios
              </ExternalLink>
            </li>
          </ul>
        </li>
        <li>
          <strong>General Tips for Screen Reader Testing:</strong>
          <ul>
            <li>
              <strong>Immerse Yourself:</strong> Try to use the screen reader
              with your monitor turned off or your eyes closed for a more
              authentic experience.
            </li>
            <li>
              <strong>Keyboard Navigation is Key:</strong> Screen reader users
              primarily rely on keyboard navigation. Ensure all interactive
              elements are reachable and operable using only the keyboard.
            </li>
            <li>
              <strong>Understand Focus Order:</strong> Pay close attention to
              the logical tab order of interactive elements.
            </li>
            <li>
              <strong>Listen Carefully to Output:</strong> Listen to the
              information being conveyed by the screen reader.
            </li>
            <li>
              <strong>Utilize Accessibility Tree Tools:</strong> Google Chrome’s
              Accessibility Tree is helpful for understanding the reading order
              and how a screen reader will interpret your web page.
            </li>
          </ul>
        </li>
      </ul>

    </div>
  );
}
