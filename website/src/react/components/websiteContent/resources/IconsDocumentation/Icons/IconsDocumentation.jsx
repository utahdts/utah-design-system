/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { useRef } from 'react';
import { useImmer } from 'use-immer';
import PreCodeForRef from '../../../../preCode/PreCodeForRef';
import StaticExample from '../../../../staticExamples/StaticExample';
import iconsDocumentationIcons from './iconsDocumentationIcons';

const propTypes = {};
const defaultProps = {};

function IconsDocumentation() {
  const [state, setState] = useImmer({
    currentIcon: iconsDocumentationIcons[3],
  });
  const iconDOMRef1 = useRef();
  const iconDOMRef2 = useRef();
  const iconDOMRef3 = useRef();
  const iconDOMRef4 = useRef();

  function clickIconButton(icon) {
    setState((draftState) => {
      draftState.currentIcon = icon;
    });
  }

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Icons</h1>
      <p className="lead-in">
        The Utah Design System provides a set of standard icons in the form of a font.
        The font file size is very small and should load quickly.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <div className="icon-example__grid mb-spacing">
        {iconsDocumentationIcons.map((icon) => (
          <button
            className="icon-example__button"
            key={`${icon.cssClass}-icon-button`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              clickIconButton(icon);
            }}
          >
            <span className={`utds-icon-before-${icon.cssClass}`} aria-hidden="true" />
            <span className="font-size-2xs">{`${icon.cssClass} (${icon.letter})`}</span>
          </button>
        ))}
      </div>
      <StaticExample
        title="Accessible Icon Strategy 1"
        className="icon-example__static"
        renderedExample={(
          <>
            <div className="icon-example__icon-big">
              <div ref={iconDOMRef1}>
                <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} aria-hidden="true" />
                <span className="visually-hidden">{state?.currentIcon?.title}</span>
              </div>
            </div>
            <div>
              <PreCodeForRef deps={[state.currentIcon]} targetRef={iconDOMRef1} />
            </div>
          </>
        )}
        quickTips={(
          <ul>
            <li>The icon itself is invisible to screen readers.</li>
            <li>A visually hidden title accompanies the icon, and is read by the screen reader.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Accessible Icon Strategy 2"
        className="icon-example__static"
        renderedExample={(
          <>
            <div className="icon-example__icon-big">
              <div ref={iconDOMRef2}>
                <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} role="img" title={state?.currentIcon?.title} />
              </div>
            </div>
            <div>
              <PreCodeForRef deps={[state.currentIcon]} targetRef={iconDOMRef2} />
            </div>
          </>
        )}
        quickTips={(
          <ul>
            <li>The icon is treated as an image.</li>
            <li>The <code>title</code> attribute is read by the screen reader.</li>
            <li>Drawback: the <code>title</code> attribute causes a system or browser tooltip to appear.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Accessible Icon Strategy 3"
        className="icon-example__static"
        renderedExample={(
          <>
            <div className="icon-example__icon-with-text">
              <div ref={iconDOMRef3}>
                <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} aria-hidden="true" />
                <span>{state?.currentIcon?.title}</span>
              </div>
              <div ref={iconDOMRef4}>
                <span>{state?.currentIcon?.title}</span>
                <span className={`utds-icon-after-${state?.currentIcon?.cssClass}`} aria-hidden="true" />
              </div>
            </div>
            <div>
              <PreCodeForRef deps={[state.currentIcon]} targetRef={iconDOMRef3} />
              <PreCodeForRef deps={[state.currentIcon]} targetRef={iconDOMRef4} />
            </div>
          </>
        )}
        quickTips={(
          <ul>
            <li>The icon is ignored by screen readers. Use this for icons that are purely decorative and provide no additional context.</li>
            <li>The icon is accompanied by visible text which is read by the screen reader.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Use icons for extra clarity.</strong> Icons can provide extra context and clarity for web users.</li>
        <li><strong>Draw extra attention.</strong> Icons can draw attention to useful actions and messages.</li>
        <li><strong>Use with text.</strong> Use in conjunction with some kind of accompanying text or action, such as a link, list, or icon button.</li>
        <li><strong>Use when space is limited.</strong> Icons can provide meaning when space is limited in a web view.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Use text first.</strong> Generally icons shouldn&apos;t be used as a replacement for text if there is ample room.</li>
        <li><strong>Don&apos;t use ambiguous icons.</strong> Choose a different icon when the meaning is ambiguous, or if you can, communicate the action through text.</li>
        <li><strong>Use illustrations and photographs.</strong> Don&apos;t use an icon as a replacement for an illustrative image or photograph.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Icon position.</strong> The font icons above can be positioned <code>before</code> or <code>after</code> the accompanying text or elements. For example:
          <ul>
            <li>
              <code>class=&quot;utds-icon-before-help&quot;</code>
            </li>
            <li>
              <code>class=&quot;utds-icon-after-help&quot;</code>
            </li>
          </ul>
        </li>
        <li><strong>Use with actions or links.</strong> Icons should always be used in conjunction with some action or text.</li>
        <li><strong>Icon size with text.</strong> The icon size should compliment the neighboring text. Avoid overpowering the text with large icons.</li>
        <li><strong>Use similar icons sizes.</strong> Neighboring icons should maintain a similar relative size.</li>
        <li><strong>Be consistent.</strong> You should be consistent with your icon usage across websites and applications.
          Don&apos;t use an icon in an unintuitive way. (e.g. Don&apos;t use a search icon to indicate an item can be edited.)
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessability</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>An icon that provides contextual meaning must maintain a <code>4.5:1</code> contrast ratio or better at a readable size.</li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>Icons that provide semantic meaning must have some kind of descriptive text. (See accessible icon strategies above.)</li>
        <li>Accessible inline SVG icon strategy:
          <pre className="gray-block mt-auto">
            &lt;svg viewBox=&quot;0 0 20 20&quot; role=&quot;img&quot;&gt;<br />
            &nbsp;&nbsp;&lt;title&gt;Description of Action&lt;/title&gt;<br />
            &nbsp;&nbsp;&lt;g&gt;...&lt;/g&gt;<br />
            &lt;/svg&gt;<br />
          </pre>
        </li>
        <li>Icons that are purely decorative should be hidden with <code>aria-hidden=&quot;true&quot;</code> attribute.</li>
      </ul>
    </div>
  );
}

IconsDocumentation.propTypes = propTypes;
IconsDocumentation.defaultProps = defaultProps;

export default IconsDocumentation;
