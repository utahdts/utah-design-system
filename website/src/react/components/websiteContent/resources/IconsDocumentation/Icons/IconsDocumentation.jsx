import StaticExample from '../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function IconsDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Icons (suck)</h1>
      <p className="lead-in">
        An icon looks nice but has no context.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <StaticExample
        title="Look at this"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>Here is a quick tip.</li>
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
