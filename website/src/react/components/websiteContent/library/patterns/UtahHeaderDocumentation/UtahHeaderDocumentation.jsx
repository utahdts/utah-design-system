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
import { useCallback, useRef } from 'react';
import baseSettings from 'utah-design-system-header/src/js/settings/baseSettings';
import useInteractiveHeaderJsonState from './useInteractiveHeaderJsonState';

const propTypes = {};
const defaultProps = {};

function UtahHeaderDocumentation() {
  const interactiveTextAreaRef = useRef();
  const {
    headerJsonString,
    setHeaderJsonString,
    headerIsOn,
    setHeaderIsOn,
  } = useInteractiveHeaderJsonState();

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
            defaultValue={headerJsonString}
            ref={interactiveTextAreaRef}
            // TODO: style should be changed to css?
            style={{ width: '100%', height: '500px' }}
          />
        </div>
        <div>
          <div>
            {/* TODO: this is probably better as a toggle button than a button that changes its title */}
            <Button
              className={`interactive-utah-header__custom-header-is-${headerIsOn ? 'on' : 'off'}`}
              onClick={useCallback(() => setHeaderIsOn((wasHeaderOn) => !wasHeaderOn))}
            >
              {`Turn ${headerIsOn ? 'Off' : 'On'} Custom Header`}
            </Button>
          </div>
          <div>
            <Button
              id="apply-interactive-utah-header"
              onClick={useCallback(() => setHeaderJsonString(interactiveTextAreaRef.current.value))}
            >
              Apply
            </Button>
          </div>
          <div>
            <Button
              onClick={useCallback(
                () => {
                  const resetHeaderString = JSON.stringify(baseSettings, undefined, 4);
                  setHeaderJsonString(resetHeaderString);
                  interactiveTextAreaRef.current = resetHeaderString;
                }
              )}
            >
              Reset
            </Button>
          </div>
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
