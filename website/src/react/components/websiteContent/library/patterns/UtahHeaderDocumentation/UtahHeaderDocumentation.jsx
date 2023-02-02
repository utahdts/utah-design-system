import {
  Button,
  formElementSizesEnum,
  Switch,
  Tab,
  TabGroup,
  Table, TableBody, TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow, TableRow,
  TableWrapper,
  TabList,
  TabPanel,
  TabPanels
} from '@utahdts/utah-design-system';
import { useCallback, useEffect, useRef } from 'react';
import useInteractiveHeaderState from './useInteractiveHeaderState';
import UtahHeaderInteractivePresetSelector from './UtahHeaderInteractivePresetSelector';
import utahHeaderPresets from './utahHeaderPresets';

const propTypes = {};
const defaultProps = {};

function UtahHeaderDocumentation() {
  const interactiveTextAreaRef = useRef();
  const {
    headerString,
    setHeaderString,
    headerIsOn,
    setHeaderIsOn,
    reset: resetHeader,
    setHeaderSettings,
  } = useInteractiveHeaderState();

  useEffect(
    () => {
      // when string is changed externally (reset, apply), update the text area
      interactiveTextAreaRef.current.value = headerString;
    },
    [headerString]
  );

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Utah Header</h1>
      <p className="lead-in">
        The Utah Header provides cross-site functionality and appearance.
      </p>
      <hr />
      <div className="header-config__title">
        <h2 id="section-example">Header Config</h2>
        <Switch
          id="header-config-on-off"
          label="Turn On/Off Custom Header"
          labelClassName="visually-hidden"
          labelOn="Header Config On"
          labelOff="Header Config Off"
          onChange={useCallback(() => setHeaderIsOn((wasHeaderOn) => !wasHeaderOn))}
          size={formElementSizesEnum.LARGE}
          value={headerIsOn}
          width={140}
        />
      </div>
      <div className="sandbox-example">
        <div className="sandbox-example__top">
          <div className="sandbox-example__component">
            <textarea
              defaultValue={headerString}
              className="sandbox-example__code-editor"
              ref={interactiveTextAreaRef}
              // TODO: style should be changed to css?
              style={{ width: '100%', height: '500px' }}
            />
          </div>
          <div className="sandbox-example__props-inputs header-config__controls">
            <div className="header-config__presets">
              {
                utahHeaderPresets.map((preset) => (
                  <UtahHeaderInteractivePresetSelector
                    key={`preset__${preset.title}`}
                    onSelect={(_e, selectedOption) => (
                      // set the new settings object as the new settings state
                      // apply just the preset.settingsSnippet fields to the settings
                      setHeaderSettings((draftHeaderObject) => {
                        Object.entries(selectedOption.settingsSnippet)
                          .forEach(([settingKey, settingValue]) => {
                            draftHeaderObject[settingKey] = settingValue;
                          });
                      })
                    )}
                    options={preset.options}
                    title={preset.title}
                  />
                ))
              }
            </div>
            <div className="header-config__apply-reset">
              <Button onClick={resetHeader}>Reset</Button>
              <Button
                appearance="solid"
                color="primary"
                id="apply-interactive-utah-header"
                onClick={useCallback(() => setHeaderString(interactiveTextAreaRef.current.value))}
              >
                Apply
              </Button>
            </div>
          </div>
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
