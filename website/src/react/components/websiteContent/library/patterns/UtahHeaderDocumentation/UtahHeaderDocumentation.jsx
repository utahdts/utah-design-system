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
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import events from 'utah-design-system-header/src/js/enumerations/events';
import CopyButton from '../../../../copy/CopyButton';
import PreCode from '../../../../preCode/PreCode';
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

  // hook up dirty state checking for the apply button
  const [isDirty, setIsDirty] = useState(false);
  const isDirtyIntervalRef = useRef(NaN);
  useEffect(
    () => {
      isDirtyIntervalRef.current = setInterval(() => {
        setIsDirty(!headerIsOn || headerString !== interactiveTextAreaRef.current?.value);
      }, 500);

      return () => clearInterval(isDirtyIntervalRef.current);
    },
    [headerIsOn, headerString]
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
              wrap="off"
            />
            <CopyButton copyRef={interactiveTextAreaRef} />
          </div>
          <div className="sandbox-example__props-inputs header-config__controls">
            <div className="header-config__presets">
              {
                utahHeaderPresets.map((preset) => (
                  <UtahHeaderInteractivePresetSelector
                    key={`preset__${preset.title}`}
                    onSelect={(_e, selectedOption) => (
                      // set the new settings object as the new settings state and
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
                isDisabled={!isDirty}
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

      <h2 id="section-utahid-events" className="mb-spacing">UtahID Events</h2>
      <h3 id="section-loaded">UtahID: Loaded</h3>
      <div>
        The Utah Header must load before your javascript code can be interact with it. Once the header is loaded it fires&nbsp;
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        a global document event `{events.utahHeaderLoaded}`. Your code can listen for this event to know when it is safe
        to call utah header functions like `setUtahHeaderSettings()`.
        <PreCode codeRaw={`addEventListener('${events.HEADER_LOADED}', () => setUtahHeaderSettings({title: 'My utah.gov Site'}))`} />
      </div>

      <h3 id="section-unloaded">UtahID: Unloaded</h3>
      <div>
        When the Utah Header is removed, the `unloaded` event will fire. Your code can listen for this event.
        <PreCode codeRaw={`addEventListener('${events.HEADER_UNLOADED}', () => alert('Where did the header go?'))`} />
      </div>

      <h3 id="section-auth-changed">UtahID: Auth Changed</h3>
      <div>
        The Utah ID Button in the top right of the header makes an ajax request to check the current user&apos;s logged in status with UtahID. &nbsp;
        Your javascript code can listen to this event in order to get basic current user information. Seeing as this information is javascript &nbsp;
        provided, it is not trustworthy. You will want to get tokens and/or codes from Utah Login that your server side code can verify.
        <PreCode codeRaw={`addEventListener('${events.AUTH_CHANGED}', (e) => alert(e.detail ? e.detail.userInfo.first + ' is logged in' : 'User is not logged in'))`} />
      </div>

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
