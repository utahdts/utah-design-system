import { useImmer } from 'use-immer';
import StaticExample from '../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

/* eslint-disable react/jsx-one-expression-per-line */
function IconsDocumentation() {
  const iconsList = [
    {
      cssClass: 'ext-link',
      title: 'external link',
      letter: 'A',
    },
    {
      cssClass: 'waffle',
      title: 'waffle',
      letter: 'B',
    },
    {
      cssClass: 'alert',
      title: 'alert',
      letter: 'C',
    },
    {
      cssClass: 'help',
      title: 'help',
      letter: 'D',
    },
    {
      cssClass: 'bookmark',
      title: 'bookmark',
      letter: 'E',
    },
    {
      cssClass: 'search',
      title: 'search',
      letter: 'F',
    },
    {
      cssClass: 'check',
      title: 'checkmark',
      letter: 'G',
    },
    {
      cssClass: 'star',
      title: 'star',
      letter: 'H',
    },
    {
      cssClass: 'info',
      title: 'info',
      letter: 'I',
    },
    {
      cssClass: 'unfold-less',
      title: 'unfold less',
      letter: 'J',
    },
    {
      cssClass: 'unfold-more',
      title: 'unfold more',
      letter: 'K',
    },
    {
      cssClass: 'circle-chevron-down',
      title: 'circle chevron down',
      letter: 'L',
    },
    {
      cssClass: 'circle-chevron-up',
      title: 'circle chevron up',
      letter: 'M',
    },
    {
      cssClass: 'chevron-up',
      title: 'chevron up',
      letter: 'N',
    },
    {
      cssClass: 'chevron-right',
      title: 'chevron right',
      letter: 'O',
    },
    {
      cssClass: 'chevron-down',
      title: 'chevron down',
      letter: 'P',
    },
    {
      cssClass: 'chevron-left',
      title: 'chevron left',
      letter: 'Q',
    },
    {
      cssClass: 'arrow-up',
      title: 'arrow up',
      letter: 'R',
    },
    {
      cssClass: 'arrow-right',
      title: 'arrow right',
      letter: 'S',
    },
    {
      cssClass: 'arrow-down',
      title: 'arrow down',
      letter: 'T',
    },
    {
      cssClass: 'arrow-left',
      title: 'arrow left',
      letter: 'U',
    },
    {
      cssClass: 'plus',
      title: 'plus',
      letter: 'V',
    },
    {
      cssClass: 'minus',
      title: 'minus',
      letter: 'W',
    },
    {
      cssClass: 'x-icon',
      title: 'close',
      letter: 'X',
    },
    {
      cssClass: 'edit',
      title: 'edit',
      letter: 'Y',
    },
    {
      cssClass: 'edit-box',
      title: 'edit box',
      letter: 'Z',
    },
    {
      cssClass: 'verified',
      title: 'verified',
      letter: 'a',
    },
    {
      cssClass: 'gear',
      title: 'gear',
      letter: 'b',
    },
    {
      cssClass: 'doc',
      title: 'doc',
      letter: 'c',
    },
    {
      cssClass: 'doc-square',
      title: 'doc square',
      letter: 'd',
    },
    {
      cssClass: 'warning',
      title: 'warning',
      letter: 'e',
    },
    {
      cssClass: 'error',
      title: 'error',
      letter: 'f',
    },
  ];

  const [state, setState] = useImmer({
    currentIcon: iconsList[3],
  });

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
        {iconsList.map((icon) => (
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
            <div>
              <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} aria-hidden="true" />
              <span className="visually-hidden">{state?.currentIcon?.title}</span>
            </div>
            <div>Code Example</div>
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
            <div>
              <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} role="img" title={state?.currentIcon?.title} />
            </div>
            <div>Code Example</div>
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
            <div>
              <span className={`utds-icon-before-${state?.currentIcon?.cssClass}`} aria-hidden="true" />
              <span>{state?.currentIcon?.title.toUpperCase()}</span>
            </div>
            <div>Code Example</div>
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
