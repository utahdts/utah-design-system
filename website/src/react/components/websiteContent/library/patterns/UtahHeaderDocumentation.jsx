import {
  Button,
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
} from '@utahdts/utah-design-system';
import { useRef } from 'react';
import { setSettings } from 'utah-design-system-header';

const propTypes = {};
const defaultProps = {};

function UtahHeaderDocumentation() {
  const interactiveTextAreaRef = useRef();

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Utah Header</h1>
      <p className="lead-in">
        The Utah Header provides cross-site functionality and appearance.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <div>
        <div>
          <textarea
            defaultValue={JSON.stringify(JSON.parse('{"title": "{INTERACTIVE} Utah Design System"}'), null, 4)}
            ref={interactiveTextAreaRef}
            // TODO: style should be changed to css?
            style={{ width: '100%', height: '500px' }}
          />
        </div>
        <div>
          <div>on/off</div>
          <div>
            <Button
              id="apply-interactive-utah-header"
              onClick={() => {
                try {
                  const newSettingsString = interactiveTextAreaRef.current.value;
                  // eslint-disable-next-line no-eval
                  const newSettings = JSON.parse(newSettingsString);
                  console.log({ newSettings });
                  setSettings(newSettings);
                } catch (e) {
                  console.error(e);
                  alert(e.message);
                }
              }}
            >
              Apply
            </Button>
          </div>
          <div>Reset</div>
          <div>Preset #1</div>
          <div>Preset #2</div>
          <div>Preset #3</div>
        </div>
      </div>

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>Use always.</li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="segmented-button-props-css">
          <TabList>
            <Tab id="segmented-button-props-css">CSS</Tab>
            <Tab id="segmented-button-props-react">JS</Tab>
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

UtahHeaderDocumentation.propTypes = propTypes;
UtahHeaderDocumentation.defaultProps = defaultProps;

export default UtahHeaderDocumentation;
