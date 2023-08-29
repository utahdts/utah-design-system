/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */

import LightBox from '../../lightbox/LightBox';
import lineChart from '../../../../static/images/screenshots/examples/LineChart.png';
import barChart from '../../../../static/images/screenshots/examples/BarChart.png';
import StaticExample from '../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function DataVisualizationsDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Data Visualizations</h1>
      <p className="lead-in mt-spacing">
        Data visualizations can be used to convey patterns and connections within a dataset. They can include line charts, bar charts, or other graphs.
      </p>

      <hr />

      <h2 id="section-example" className="mb-spacing">Example</h2>
      <StaticExample
        renderedExample={(
          <div className="flex gap">
            <LightBox image={lineChart} alt="Line chart" className="flex-2up-gap" />
            <LightBox image={barChart} alt="Bar chart" className="flex-2up-gap" />
          </div>
        )}
      />

      <h2 id="section-areas-to-consider" className="mb-spacing mt-spacing">Areas to Consider</h2>
      <ul className="mb-spacing">
        <li><strong>Keep it simple.</strong> Try to use simple ways to visualize the data. If the visualization is too complex and/or requires interaction, it could impact the user’s ability to digest the information.</li>
        <li><strong>Sum it up.</strong> Add a text summary to ensure users understand the meaning of the data shown. Avoid relying on the visualization alone.</li>
        <li><strong>Images.</strong> If the visualization uses axes labels or a legend, make sure to use textual elements rather than an image.</li>
        <li><strong>Labels.</strong> Make sure to properly label any axis and/or elements to help users associate charts with data. Color alone is not enough.</li>
        <li><strong>Style and color.</strong> Avoid relying on color alone. Use a combination of styles and color with different levels of brightness to help with accessibility. <br />For example, use solid lines <strong>and</strong> dotted lines in a line chart.</li>
      </ul>

      <h2 id="section-direction-guidance">Note on Accessibility</h2>
      <p>
        Trying to make a complex data visualization accessible can be challenging. We recommend offering an alternative way for users with visual impairments to still read the data: a visually hidden table or plain text can help.
      </p>
      <p>
        Moreover, when looking for a third-party tool to help create data visualizations, make sure to take accessibility into account. Try to assess its compatibility with assistive technologies like screen reader, and keyboard navigation.
      </p>
    </div>
  );
}

DataVisualizationsDocumentation.propTypes = propTypes;
DataVisualizationsDocumentation.defaultProps = defaultProps;

export default DataVisualizationsDocumentation;
