/* eslint-disable max-len */
import { StaticExample } from '../../../../../staticExamples/StaticExample';

export function DividersDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Dividers</h1>
      <p className="lead-in"> Dividers are utilized to visually separate content and create a thematic distinction between sections using horizontal or vertical lines. </p>

      <hr />

      <h2 id="section-example">Examples</h2>
      <StaticExample
        title="Horizontal Dividers"
        renderedExample={(
          <div className="flex flex-col">
            <p className="mb-auto">Of the vast amount of certified International Dark Sky Parks and Communities that are part of a catalog of the finest dark skies in the world, the highest concentration are in Utah. Explore the statewide locations and make plans for experiencing natural wonders after the sun sets.</p>
            <hr className="my-spacing-l" />
            <p className="mb-spacing-xs">Given Natural Bridges remote location, it&apos;s no wonder the park has some of the world&apos;s least light-polluted night skies. The International Dark Sky Association named Natural Bridges the world&apos;s first “International Dark Sky Park.” Accordingly, park rangers not only give interpretive discussions on astronomy but also changed out the park&apos;s light fixtures to reduce their own light pollution.</p>
          </div>
        )}
        quickTips={(
          <ul>
            <li>Horizontal Dividers are created by using the native <code>&lt;hr&gt;</code> HTML horizontal rule.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Vertical Dividers"
        renderedExample={(
          <div className="flex">
            <p className="flex-1 pr-spacing">Of the vast amount of certified International Dark Sky Parks and Communities that are part
              of a catalog of the finest dark skies in the world, the highest concentration are in Utah. Explore the statewide locations and make
              plans for experiencing natural wonders after the sun sets.
            </p>
            <div role="separator" aria-orientation="vertical" className="border-right" />
            <p className="flex-1 pl-spacing">Given Natural Bridges remote location, it&apos;s no wonder the park has some of the world&apos;s least
              light-polluted night skies. The International Dark Sky Association named Natural Bridges the world&apos;s first “International Dark Sky
              Park.” Accordingly, park rangers not only give interpretive discussions on astronomy but also changed out the park&apos;s light fixtures
              to reduce their own light pollution.
            </p>
          </div>
        )}
        quickTips={(
          <ul>
            <li>Vertical Dividers can be created by using <code>border-left</code> or <code>border-right</code></li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing mt-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>When separating elements.</strong> Use dividers to separate elements in a layout if it is not possible to
          achieve sufficient visual separation through the use of white space.
        </li>
        <li>
          <strong>When grouping related elements.</strong> When incorporating dividers into a layout, it is best to use
          them sparingly and mainly for grouping together related elements, rather than isolating each item individually.
        </li>
        <li>
          <strong>Design element and aesthetics.</strong> Horizontal and vertical dividers are versatile visual design elements that enhance organization, structure, and balance in compositions.
          Horizontal dividers separate sections, improving readability and guiding the viewer&apos;s eye. Vertical dividers create symmetry, hierarchy, and alignment within grids or columns.
          Skillful use of these elements enhances both aesthetics and clarity in your design.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>If negative space can naturally group content.</strong> While dividers can be effective in separating content
          into different groups or sections, it&apos;s important to use them sparingly, as excessive use can overwhelm the user.
          In some cases, negative space can also be used to achieve the same result.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>It&apos;s just a line.</strong> A horizontal or vertical divider is a simple line.
        </li>
        <li>
          <strong>Organizing related content.</strong> To create the impression of containers and differentiate between groups of content,
          apply dividers between collections of content.
        </li>
        <li>
          <strong>Breaking up dense content.</strong> Using dividers can help to establish a clear visual hierarchy within a layout, resulting
          in a cleaner and more readable design.
        </li>
        <li>
          <strong>Types of dividers.</strong> There are two main types of dividers: vertical and horizontal. Usually a divider
          is <code>1px</code> thick. You may use a thicker divider <code>2px - 4px</code> to provide more emphasis and stronger separation where
          absolutely needed.
        </li>
        <li>
          <strong>Noticeable, but not obnoxious.</strong> Dividers in a layout should be noticeable, but at the same time blend well with the
          overall design, so they don&apos;t appear jarring or disruptive to the user.
        </li>
        <li>
          <strong>&lt;hr&gt; is an empty element.</strong> This tag is an empty element and therefore only requires an opening
          tag (&lt;hr&gt;) for horizontal dividers.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Since dividers are decorative elements, they do not have any specific contrast requirements.</li>
        <li>If the divider is critically important to the layout, a divider with a <code>3:1</code> contrast ratio is better.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>None</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          In most cases, <code>&lt;hr&gt;</code> tags are used for visual purposes only. Therefore, it does not need to be announced by
          a screen reader. Add the attribute <code>aria-hidden=&quot;true&quot;</code> so screen readers will ignore the element. If the
          element <i>should</i> be announced by a screen reader, the <code>aria-hidden</code> attribute can be removed.
        </li>
        <li>
          The <code>separator</code> role indicates the element is a divider that separates and distinguishes sections of content or groups of
          menu items. The implicit ARIA role of the native break <code>&lt;hr&gt;</code> element
          is <code>role=&quot;separator&quot;</code>. Therefore, a vertical divider should include <code>role=&quot;separator&quot;</code> as
          it is not a native element.
        </li>
        <li>
          <code>&lt;hr&gt;</code> elements have an implicit <code>aria-orientation</code> value of <code>horizontal</code>. Vertical
          separators should have <code>aria-orientation=&quot;vertical&quot;</code>.
        </li>
        <li>
          Use native <code>&lt;hr&gt;</code> elements for horizontal separators. Remember: The first rule of ARIA: Before you use ARIA,
          use native HTML elements or attributes first!
        </li>
      </ul>
    </div>
  );
}
