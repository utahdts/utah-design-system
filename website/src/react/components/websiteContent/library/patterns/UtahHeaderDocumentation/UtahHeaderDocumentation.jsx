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
import { useCallback, useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import logoPng from '../../../../../../static/images/designSystemCircleGray.png';
import useInteractiveHeaderState from './useInteractiveHeaderState';
import UtahHeaderInteractivePresetSelector from './UtahHeaderInteractivePresetSelector';

const propTypes = {};
const defaultProps = {};

const LOGO_IMAGE = `<img src="${logoPng}" id="design-system-logo" />`;
const PRESET_VALUE_NONE = '--none--';
const PRESETS = [
  {
    options: [
      {
        settingsSnippet: {
          logo: null,
          showTitle: true,
          title: 'State of Utah Preset Title',
        },
        title: 'None',
        value: PRESET_VALUE_NONE,
      },
      {
        settingsSnippet: {
          logo: null,
          showTitle: true,
          title: 'State of Utah Preset Title',
        },
        title: 'Just Title',
        value: 'just-title',
      },
      {
        settingsSnippet: {
          logo: LOGO_IMAGE,
          showTitle: false,
        },
        title: 'Just Brand',
        value: 'just-brand',
      },
      {
        settingsSnippet: {
          logo: LOGO_IMAGE,
          showTitle: true,
          title: 'State of Utah Preset Title',
        },
        title: 'Title & Brand',
        value: 'brand-and-title',
      },
    ],
    stateKey: 'agencyBrandTitle',
    title: 'Agency Brand/Title',
  },
];

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
  const [presetValues, setPresetValues] = useImmer(() => PRESETS.reduce((state, preset) => ({ ...state, [preset.stateKey]: PRESET_VALUE_NONE }), {}));

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
      <h2 id="section-example">Example</h2>
      <div>
        <div>
          <textarea
            defaultValue={headerString}
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
              onClick={useCallback(() => setHeaderString(interactiveTextAreaRef.current.value))}
            >
              Apply
            </Button>
          </div>
          <div>
            <Button onClick={resetHeader}>Reset</Button>
          </div>
          {
            PRESETS.map((preset) => (
              <UtahHeaderInteractivePresetSelector
                key={`preset__${preset.title}`}
                onSelect={(_e, selectedOption) => (
                  setPresetValues((draftPresetValues) => {
                    // update state
                    draftPresetValues[preset.stateKey] = selectedOption.value;

                    // set the new settings object as the new settings state
                    // apply just the preset.settingsSnippet fields to the settings
                    setHeaderSettings((draftHeaderObject) => {
                      Object.entries(selectedOption.settingsSnippet)
                        .forEach(([settingKey, settingValue]) => {
                          draftHeaderObject[settingKey] = settingValue;
                        });
                    });
                  })
                )}
                options={preset.options}
                title={preset.title}
                value={presetValues[preset.stateKey]}
              />
            ))
          }
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
