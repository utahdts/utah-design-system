import {
  Tab,
  TabGroup,
  Table, TableBody, TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow, TableRow,
  TableWrapper,
  TabList,
  TabPanel,
  TabPanels,
} from 'utah-design-system-react-library';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import SegmentedButtonExampleCodeReact from './SegmentedButtonExampleCodeReact';
import SegmentedButtonExampleProps from './SegmentedButtonExampleProps';
import SegmentedButtonExampleRender from './SegmentedButtonExampleRender';
import StaticExample from '../../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function SegmentedButtonDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Segmented Button</h1>
      <p className="lead-in">
        A group of
        <code>&lt;button&gt;</code>
        that have a common functionality.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        RENDER_EXAMPLE={SegmentedButtonExampleRender}
        PROPS_EXAMPLE={SegmentedButtonExampleProps}
        CODE_EXAMPLE={SegmentedButtonExampleCodeReact}
      />
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

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="segmented-button-props-css">
          <TabList>
            <Tab id="segmented-button-props-css">CSS</Tab>
            <Tab id="segmented-button-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="segmented-button-props-css">
              <TableWrapper>
                <Table className="table--lines-x">
                  <TableHead>
                    <TableHeadRow>
                      <TableHeadCell className="text-left css-classes">Css Classes</TableHeadCell>
                      <TableHeadCell className="text-left">Description</TableHeadCell>
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell><code>.class</code></TableCell>
                      <TableCell>Class description.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>
            <TabPanel tabId="segmented-button-props-react">
              <TableWrapper>
                <Table className="table--lines-x">
                  <TableHead>
                    <TableHeadRow>
                      <TableHeadCell className="text-left">Property</TableHeadCell>
                      <TableHeadCell className="text-left">Type</TableHeadCell>
                      <TableHeadCell className="text-left">Default</TableHeadCell>
                      <TableHeadCell className="text-left">Description</TableHeadCell>
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell><code className="primary-color">props</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>string</code>
                        </div>
                      </TableCell>
                      <TableCell>null</TableCell>
                      <TableCell>
                        What does this do?
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

SegmentedButtonDocumentation.propTypes = propTypes;
SegmentedButtonDocumentation.defaultProps = defaultProps;

export default SegmentedButtonDocumentation;
