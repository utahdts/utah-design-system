/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import elevationExample from '../../../../static/images/screenshots/spacing/guidelines/elevation-best-practice.webp';
import { PreCodeForCodeString } from '../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../routing/pageUrls';

export function DepthElevationShadowsDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Depth, Elevation, & Shadows</h1>
      <p className="lead-in">
        At its core, elevation deals with the different layers of components on a website. The terms &quot;depth&quot; and &quot;shadows&quot; are
        also used interchangeably. However, they refer to the underlying structure of how components are positioned on a site. By combining
        surfaces and shadows, elevations create an illusion of depth or lift. They not only guide users through the interface, but also indicate
        interactive elements by creating the illusion of the component hovering over the main content.
      </p>
      <p>
        The Utah Design System offers six distinct types of elevation that are specifically used to indicate interactivity with components. Three of the
        options include a border to assist in low contrast situations and three without borders when the contrast is high enough on its own. Below are
        the elevation specifications provided with the design system:
      </p>
      <hr />

      <h2 id="section-example">Examples</h2>

      <div className="flex justify-center gap-l flex-wrap my-spacing-l">
        <div className="depth-example depth-example__small depth-example--border">Example<br />Small<br />Border</div>
        <div className="depth-example depth-example__small-borderless">Example<br />Small<br />Borderless</div>
        <div className="depth-example depth-example__medium depth-example--border">Example<br />Medium<br />Border</div>
        <div className="depth-example depth-example__medium-borderless">Example<br />Medium<br />Borderless</div>
        <div className="depth-example depth-example__large depth-example--border">Example<br />Large<br />Border</div>
        <div className="depth-example depth-example__large-borderless">Example<br />Large<br />Borderless</div>
      </div>

      <h3 id="section-example">CSS Variables for Drop Shadows</h3>
      <PreCodeForCodeString
        showBackgroundColor
        allowScrollOverflow
        maxHeight="300px"
        codeRaw={`
          /* elevation box shadows */
          --drop-shadow-color: rgba(0, 0, 0, 0.3);
          --drop-shadow-color-top: rgba(0, 0, 0, 0.15);
          --elevation-small: 0 3px 6px var(--drop-shadow-color);
          --elevation-medium: 0 6px 12px var(--drop-shadow-color);
          --elevation-large: 0 12px 16px var(--drop-shadow-color);
          --elevation-small-borderless: 0 3px 6px var(--drop-shadow-color), 0 -3px 3px var(--drop-shadow-color-top);
          --elevation-medium-borderless: 0 6px 12px var(--drop-shadow-color), 0 -3px 6px var(--drop-shadow-color-top);
          --elevation-large-borderless: 0 12px 16px var(--drop-shadow-color),  0 -3px 12px var(--drop-shadow-color-top);
        `}
      />

      <hr />

      <h2 id="section-areas-to-consider" className="mb-spacing">Areas to Consider</h2>
      <h3 id="section-accessibility">Accessibility</h3>
      <p>
        It&apos;s important to note that there are no specific, universally mandated accessibility requirements dedicated to shadows. Instead,
        the broader principles of contrast and clarity can indirectly influence how shadows are implemented. Pay special attention to contrast,
        focus indication, text legibility, and motion sensitivities when applying elevation to individual components.
      </p>
      <p>
        For more information please refer to the <Link to={pageUrls.accessibility}>accessibility guidance</Link>.
      </p>

      <h3 id="section-layering-stacking">Layering and Stacking</h3>
      <p className="mb-auto">
        Utilize different elevations to create a sense of depth and order. For example:
      </p>
      <ul>
        <li>
          <strong>Multi surface effect.</strong> The perception of multiple layers can be created by positioning elements on top of other elements.
          Box shadows of different distances on the <code>x</code> and <code>y</code> axis can help contribute to this sense of elevation.
        </li>
        <li><strong>Focus attention.</strong> Toggling a <Link to={pageUrls.tooltips}>tooltip</Link>, when a user hovers over an element to provide additional clarity.</li>
      </ul>
      <p className="mt-spacing">
        To maintain a clean and focused user interface, it is advisable to refrain from overusing shadows. Excessive shadow effects can introduce
        visual clutter and draw users&apos; attention away from the intended focal points. When shadows are used sparingly and purposefully, they
        can enhance the hierarchy and emphasize important elements. However, exercising restraint in their application is key to preventing distractions
        and ensuring a seamless user experience.
      </p>

      <img src={elevationExample} alt="Example of acceptable and unacceptable elevation usage" style={{ maxWidth: '100%' }} />

      <h3 id="section-direction-guidance" className="mb-spacing">Direction & Guidance</h3>
      <ul>
        <li>
          <strong>Shadow color.</strong> If you choose not to use a solid black, try to keep the shadow as realistic as possible. Avoid using
          light colors and instead use dark grays.
        </li>
        <li>
          <strong>Subtle shadows.</strong> Shadows should be subtle and natural-looking. Avoid using harsh or unrealistic shadows that may distract
          or confuse users. Employ shadows with low opacity and feathered edges. Consider the light source to create a realistic effect (typically the light source would
          originate from the top of the viewport).
        </li>
        <li>
          <strong>Focus indication.</strong> When an elevated component is interactive or focusable, it&apos;s crucial to provide a clear and visible indication
          of focus. This helps users who navigate through the interface using keyboards or assistive technologies to understand which element is currently selected
          or receiving focus. E.g. An action card where the entire <Link to={pageUrls.card}>card</Link> is clickable, needs to have a focus state.
        </li>
        <li>
          <strong>Text legibility.</strong> If text is placed on an elevated surface, ensure that it remains legible and easy to read. Consider the color contrast
          between the text and its background, as well as the size and type of font used. The text should have sufficient contrast and be large enough to be read
          comfortably by users with visual impairments. See <Link to={pageUrls.accessibility}>accessibility</Link>.
        </li>
        <li>
          <strong>Motion sensitivity.</strong> Some users may be sensitive to motion or have vestibular disorders. When using motion or animations, ensure
          they are subtle and not excessive. Motion may be uncomfortable or disorienting for certain individuals. Provide options to disable or customize
          animations, if possible. See <Link to={pageUrls.accessibility}>accessibility</Link>.
        </li>
        <li>
          <strong>Consider depth cues.</strong> Use visual cues such as shadows and gradients to indicate depth and separation between components. These cues help
          users understand the spatial relationships between different elements on the screen. While depth and shadows can enhance a design, using them excessively
          can lead to a cluttered and confusing interface. Exercise restraint and use depth sparingly to highlight important elements and interactions.
        </li>
      </ul>
    </div>
  );
}
