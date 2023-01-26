import { useRef } from 'react';
import { useImmer } from 'use-immer';
import PreCodeForRef from '../../../../preCode/PreCodeForRef';
import StaticExample from '../../../../staticExamples/StaticExample';
import iconsDocumentationIcons from './iconsDocumentationIcons';

const propTypes = {};
const defaultProps = {};

/* eslint-disable react/jsx-one-expression-per-line */
function IconsDocumentation() {
  const [state, setState] = useImmer({
    currentIcon: iconsDocumentationIcons[3],
  });
  const iconDOMRef1 = useRef();
  const iconDOMRef2 = useRef();
  const iconDOMRef3 = useRef();

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
            className="icon-example__item"
            key={`${icon.cssClass}-icon-button`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              clickIconButton(icon);
            }}
          >
            <span className={`utds-icon-before-${icon.cssClass}`} role="img" title={icon.title} />
            <span className="font-size-2xs">{`${icon.cssClass} (${icon.letter})`}</span>
          </button>
        ))}
      </div>
      <StaticExample
        title="Accessible Icon Strategy 1"
        renderedExample={(
          <>
            <div ref={iconDOMRef1}>
              <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} aria-hidden="true" />
              <span className="visually-hidden">{state?.currentIcon?.title}</span>
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
        renderedExample={(
          <>
            <div ref={iconDOMRef2}>
              <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} role="img" title={state?.currentIcon?.title} />
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
        renderedExample={(
          <>
            <div ref={iconDOMRef3}>
              <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} aria-hidden="true" />
              <span>{state?.currentIcon?.title.toUpperCase()}</span>
            </div>
            <div>
              <PreCodeForRef deps={[state.currentIcon]} targetRef={iconDOMRef3} />
            </div>
          </>
        )}
        quickTips={(
          <ul>
            <li>The icon ignored by screen readers. Use this for icons that are purely decorative and provide no additional context.</li>
            <li>The icon is accompanied by visible text which is read by the screen reader.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>Use only when needed.</li>
      </ul>
    </div>
  );
}

IconsDocumentation.propTypes = propTypes;
IconsDocumentation.defaultProps = defaultProps;

export default IconsDocumentation;
