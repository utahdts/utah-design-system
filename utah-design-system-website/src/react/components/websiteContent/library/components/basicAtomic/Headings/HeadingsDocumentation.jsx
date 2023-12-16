/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';

export function HeadlineDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Headings</h1>
      <p className="lead-in">
        Headings provide an outline for the page, much like a table of contents or an outline for a book report. Headings
        can be formatted using heading tags (<code>&lt;h1&gt; Heading 1</code> to <code>&lt;h6&gt; Heading 6</code>), with <code>&lt;h1&gt;</code> being the largest font size.
      </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Headings"
        renderedExample={(
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>
        )}
      />
      <p>
        <strong>Heading hierarchy.</strong> The top-level <code>&lt;h1&gt;</code> should describe the page as a whole and reflect the
        page&apos;s <code>&lt;title&gt;</code>. It is preferred to limit a page to a single <code>&lt;h1&gt;</code> element. However, there
        may be cases were multiple <code>&lt;h1&gt;</code> are required.
      </p>
      <p>
        Headings <code>&lt;h2&gt;</code> through <code>&lt;h6&gt;</code> represent increasing levels of &quot;indentation&quot; in
        the outline. It is strongly discouraged to skip heading levels while creating a page outline. For example, in most
        cases, it would not make sense to go from an <code>&lt;h2&gt;</code> to an <code>&lt;h4&gt;</code> heading level in the page
        outline.
      </p>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <code>&lt;h1&gt;</code> Great Places to Visit in Utah
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <code>&lt;h2&gt;</code> Northern Utah
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <code>&lt;h3&gt;</code> National Parks, Monuments, Forests
                  <ul>
                    <li><code>&lt;h4&gt;</code> Dinosaur National Monument</li>
                    <li><code>&lt;h4&gt;</code> Flaming Gorge National Recreation Area</li>
                    <li><code>&lt;h4&gt;</code> Mirror Lake Highway, High Uintahs</li>
                    <li><code>&lt;h4&gt;</code> Timpanogos Cave</li>
                  </ul>
                </li>
                <li>
                  <code>&lt;h3&gt;</code> State Parks
                  <ul>
                    <li><code>&lt;h4&gt;</code> Antelope Island</li>
                    <li><code>&lt;h4&gt;</code> Bear Lake</li>
                    <li><code>&lt;h4&gt;</code> Jordanelle</li>
                    <li><code>&lt;h4&gt;</code> Wasatch Mountain</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <code>&lt;h2&gt;</code> Central Utah
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <code>&lt;h3&gt;</code> State Parks
                  <ul>
                    <li><code>&lt;h4&gt;</code> Territorial State House</li>
                    <li><code>&lt;h4&gt;</code> Yuba Lake</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <code>&lt;h2&gt;</code> Southern Utah
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  <code>&lt;h3&gt;</code> National Parks, Monuments, Forests
                  <ul>
                    <li><code>&lt;h4&gt;</code> Arches National Park</li>
                    <li><code>&lt;h4&gt;</code> Canyonlands National Park
                      <ul style={{ listStyleType: 'none' }}>
                        <li><code>&lt;h5&gt;</code> Island in the Sky</li>
                        <li><code>&lt;h5&gt;</code> The Maze</li>
                        <li><code>&lt;h5&gt;</code> Horseshoe Canyon</li>
                        <li><code>&lt;h5&gt;</code> The Needles</li>
                      </ul>
                    </li>
                    <li><code>&lt;h4&gt;</code> Capitol Reef National Park</li>
                    <li><code>&lt;h4&gt;</code> Bryce Canyon National Park</li>
                    <li><code>&lt;h4&gt;</code> Natural Bridges National Monument</li>
                    <li><code>&lt;h4&gt;</code> Zion National Park</li>
                  </ul>
                </li>
                <li>
                  <code>&lt;h3&gt;</code> State Parks
                  <ul>
                    <li><code>&lt;h4&gt;</code> Goblin Valley State Park</li>
                    <li><code>&lt;h4&gt;</code> Dead Horse Point</li>
                    <li><code>&lt;h4&gt;</code> Kodachrome Basin</li>
                    <li><code>&lt;h4&gt;</code> Snow Canyon</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2 id="section-guidance" className="mb-spacing mt-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Heading 1:</strong> Typically utilized for the title of a page header or workflow header.
        </li>
        <li>
          <strong>Heading 2:</strong> Also referred to as section headings. They are utilized to introduce major content sections on a
          page. They can also be used in independent containers, such as <Link to={pageUrls.modals}>modals</Link> or <Link to={pageUrls.drawers}>drawers</Link>.
          Typically, they are positioned outside of <Link to={pageUrls.card}>cards</Link> in most layouts, but they can also be placed
          inside if it is more appropriate for the context.
        </li>
        <li>
          <strong>Heading 3:</strong> Used to indicate subsets or groupings of information within a section, or to serve as a title
          for individual objects. They are commonly utilized within a <Link to={pageUrls.card}>card</Link> container.
        </li>
        <li>
          <strong>Heading 4:</strong> It is a subset of the <code>&lt;h3&gt;</code> tag. They are often used to display important
          information, such as the name of an employee in a list.
        </li>
        <li>
          <strong>Heading 5:</strong> Heading 5 is typically utilized for long-form content where an additional level of hierarchy is necessary.
        </li>
        <li>
          <strong>Heading 6:</strong> Has it really come to this? If you must subdivide <code>&lt;h5&gt;</code> use this, we suppose.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Highlighting text within a paragraph.</strong> When you want text within a paragraph to stand out, or you want to
          call attention to it, use bold or italic text instead. (Never use underline as it can be confused with a link.)
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Highlighting important areas of content.</strong> Headings are most effective for short, high-emphasis text. They are
          useful for highlighting important areas of content or primary passages of text.
        </li>
        <li>
          <strong>Keeping headings semantic and accessible.</strong> To guarantee that markup is both semantic and accessible, it is
          recommended to use <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> elements for headings.
        </li>
        <li>
          <strong>Using rems to manage font size.</strong>  It is recommended to use relative units (rems) to accommodate the user&apos;s
          settings and ensure that the layout remains consistent and readable.
        </li>
        <li>
          <strong>Maintaining header hierarchy.</strong> Maintaining the correct hierarchical order of headings is critical for preserving
          the semantic structure of content. Skipping heading levels can cause issues in this regard. To prevent such problems, it is recommended
          to separate the semantic meaning of the content from its visual presentation. However, it&apos;s important to note that these
          recommendations are not absolute requirements.
        </li>
        <li>
          <strong>Line Height.</strong> Headings should have a line height that is <code>1.4</code> times the size of the font used. Line
          height is the vertical space between each line of text and is directly related to the size of the text.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The color of the text must maintain a <code>4.5:1</code> contrast ratio or better against its background.</li>
        <li>For headings that are larger than <code>24 pixels</code>, you may use a lower contrast ratio of <code>3:1</code>.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Not applicable.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Remember, The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first! However if you need to use
          aria, follow the guidelines below:
          <ul>
            <li>To change the default semantics of an element to a heading, the <code>role=heading</code> and an appropriate <code>aria-level</code> can be used.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
