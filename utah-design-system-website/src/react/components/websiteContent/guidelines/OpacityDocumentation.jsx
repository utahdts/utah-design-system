/* eslint-disable max-len */

export function OpacityDocumentation() {
  const renderExamples = () => {
    const values = [...Array(11).keys()];
    return values.map((v) => (
      <div className="flex flex-col items-center" key={`opacity-${v}`}>
        <div className={`color-example_item color-example_item--small square color-example_item--primary-color color-example_item--opacity-${v}`} />
        {v * 10}%
      </div>
    ));
  };
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Opacity</h1>
      <p className="lead-in mt-spacing">
        Changing the opacity or transparency of an element can be a way to stylize the interface or its effects.
      </p>

      <hr />

      <h2 id="section-example" className="mb-spacing">Example</h2>
      <div className="flex flex-1 flex-wrap justify-center mb-spacing-xl">
        {renderExamples()}
      </div>

      <h2 id="section-areas-to-consider" className="mb-spacing mt-spacing">Areas to Consider</h2>
      <h3 id="section-stacking-context">Stacking Context</h3>
      <p>
        Every HTML element in a page lives in a conceptual <code>z-axis</code>. Some parts might appear to the user
        to be on top or under each other. When adjusting an element&apos;s opacity, keep in mind what other elements
        might be affected, as it can cause spatial confusion.
      </p>

      <h3 id="section-accessibility">Accessibility</h3>
      <p>
        If an element has its opacity adjusted, make sure any text within that element has a contrast of at least <code>4.5:1</code>.
      </p>

      <h2 id="section-direction-guidance">Direction and Guidance</h2>
      <p>
        The opacity of an element is a range between <code>100%</code> (fully opaque) and <code>0%</code> (completely transparent).
        Changing the opacity of an element can be a way to show different effects, such as hover, pressed, or disabled.
      </p>

      <h3 id="section-css">CSS</h3>
      <p>
        Opacity can be adjusted using the <code>opacity</code> property. Its value ranges from <code>1</code> to <code>0</code>.
        However, this property affects the whole element and its children. An alternative solution to this approach is to target
        a specific property of the element and change its color value using an <code>rgba()</code> color space. A different shade
        of solid color can also be used to achieve the same effect.
      </p>
    </div>
  );
}
