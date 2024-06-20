import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function TabGroupPropsDocumentation() {
  return (
    <>
      <h3><code>TabGroup</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the tab group.<br />
              Includes <code>TabGroupTitle</code>, <code>TabList</code>, <code>Tab</code>, <code>TabPanels</code> and <code>TabPanel</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the tab group wrapper.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Which tab should be selected by default.<br />
              Must match the corresponding tab <code>id</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">isVertical</code></TableCell>
            <TableCell><code>boolean</code></TableCell>
            <TableCell><code>false</code></TableCell>
            <TableCell>
              Change the orientation of the tab group.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>function</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The function to call when a tab is clicked.<br />
              The selected tab <code>id</code> is passed as the value.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This props will determine which tab should be shown.<br />
              Can be used to programmatically control the component.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TabGroupTitle</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the title.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the title.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">tagName</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><code>div</code></TableCell>
            <TableCell>
              The HTML element used to wrap around the title.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TabList</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the tab list.<br />
              Includes <code>Tab</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the tab list wrapper.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>Tab</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Typically, the label of the tab.<br />
              Will be part of a <code>button</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The <code>id</code> attribute of the tab.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TabPanels</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the panels.<br />
              Includes <code>TabPanel</code>.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TabPanel</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of a panel.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the panel wrapper.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">tabId</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The corresponding tab id.<br />
              Must match the <code>id</code> prop of its corresponding <code>Tab</code>.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>
    </>
  );
}
