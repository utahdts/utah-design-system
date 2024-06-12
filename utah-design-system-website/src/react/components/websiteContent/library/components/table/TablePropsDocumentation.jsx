import { ExternalLink, TableCell, TableRow } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { SettingsDocumentation } from '../../documentation/SettingsDocumentation';
import { documentationTypes } from '../../../../../enums/documentationTypes';
import { pageUrls } from '../../../../routing/pageUrls';

export function TablePropsDocumentation() {
  return (
    <>
      <h3><code>Table</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the table.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;table&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;table&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;table&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>table</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableBody</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The content of the table body.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table body.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;tbody&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableSectionElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;tbody&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;tbody&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>tbody</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableBodyData</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The content of the table body data.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordIdField</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              What property from the data set should be used to generate unique keys.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">records</code></TableCell>
            <TableCell><code>[object]</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The data set.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableBodyDataCellTemplate</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
                <span> | </span>
                <code>function</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The content of the table cell.<br />
              This will be rendered inside a <code>TableCell</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table cell.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;td&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;td&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;td&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onClick</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The function to call when the table cell is clicked.<br />
              Will return an <code>event</code> and the record data.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onDoubleClick</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The function to call when the table cell is double clicked.<br />
              Will return an <code>event</code> and the record data.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Used to retrieve the value from the record data.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>TableCell</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableBodyDataRowTemplate</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the table row.<br />
              This will be rendered inside a <code>TableRow</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table row.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableRowElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;tr&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;tr&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onClick</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The function to call when the table row is clicked.<br />
              Will return an <code>event</code> and the record data.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onDoubleClick</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The function to call when the table row is double clicked.<br />
              Will return an <code>event</code> and the record data.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>TableRow</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableCell</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The content of the table cell.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table cell.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;td&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;td&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;td&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>&lt;td&gt;</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterComboBox</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">a11yLabel</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              This should be an accessibility readable field name.
              `&apos;Filter`&apos; will be prepended to it.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Typically, the list of options for the combo box.<br />
              Includes <code>TableFilterComboBoxOption</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table header.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>&apos;string&apos;</code>
                <span> | </span>
                <code>&apos;number&apos;</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The default value of the input on initial render.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">exactMatch</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell><code>false</code></TableCell>
            <TableCell>
              Should the filter be an exact match.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the input&apos;s value changes.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              What record field should the filter be based on.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>number</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>The selected option&apos;s value.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>th</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterComboBoxAllOptions</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">a11yLabel</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              This should be an accessibility readable field name.
              `&apos;Filter`&apos; will be prepended to it.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table header.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>&apos;string&apos;</code>
                <span> | </span>
                <code>&apos;number&apos;</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The default value of the input on initial render.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">exactMatch</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell><code>false</code></TableCell>
            <TableCell>
              Should the filter be an exact match.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the input&apos;s value changes.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              What field should the filter be based on.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>number</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>The selected option&apos;s value.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>th</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterComboBoxOption</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>ComboBoxOption</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">label</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              This label used for the <code>ComboBoxOption</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              This value of the <code>ComboBoxOption</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>ComboBoxOption</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableContextConsumer</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Accepts one parameter: <code>tableContext</code>.<br />
              Expects to return <code>React.JSX.Element</code> or <code>null</code>.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterCustom</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the filter.<br />
              Accepts two parameters: <code>filterValues</code> and <code>setFilterValues</code>.<br />
              Expects to return <code>React.JSX.Element</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>th</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>ComboBoxOption</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterDate</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">a11yLabel</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              This should be an accessibility readable field name.
              `&apos;Filter`&apos; will be prepended to it.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table header.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell><code>&apos;string&apos;</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The default value of the input on initial render.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the input&apos;s value changes.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              What field should the filter be based on.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>The selected option&apos;s value.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>th</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterNone</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Typically empty, but can be anything you`&apos;d like.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>th</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>th</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterSelect</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">a11yLabel</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              This should be an accessibility readable field name.
              `&apos;Filter`&apos; will be prepended to it.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Typically, the list of options for the select.<br />
              Includes <code>TableFilterSelectOption</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table header.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>&apos;string&apos;</code>
                <span> | </span>
                <code>&apos;number&apos;</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The default value of the input on initial render.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">exactMatch</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell><code>false</code></TableCell>
            <TableCell>
              Should the filter be an exact match.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the input&apos;s value changes.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              What field should the filter be based on.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>number</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>The selected option&apos;s value.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>th</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterSelectAllOptions</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">a11yLabel</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              This should be an accessibility readable field name.
              `&apos;Filter`&apos; will be prepended to it.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table header.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>&apos;string&apos;</code>
                <span> | </span>
                <code>&apos;number&apos;</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The default value of the input on initial render.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">exactMatch</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell><code>false</code></TableCell>
            <TableCell>
              Should the filter be an exact match.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the input&apos;s value changes.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              What field should the filter be based on.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
                <span> | </span>
                <code>number</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>The selected option&apos;s value.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>th</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilterSelectOption</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <TableRow>
          <TableCell><code className="primary-color">className</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>null</TableCell>
          <TableCell>
            This CSS class will be added to the <code>SelectOption</code>.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code className="primary-color">label</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><em>required</em></TableCell>
          <TableCell>
            This label used for the <code>SelectOption</code>.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code className="primary-color">value</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><em>required</em></TableCell>
          <TableCell>
            This value of the <code>SelectOption</code>.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code className="primary-color">...rest</code></TableCell>
          <TableCell>
            <div className="props-code-wrapper">
              <code>...any</code>
            </div>
          </TableCell>
          <TableCell>null</TableCell>
          <TableCell>Additional props you wish to pass to the <code>SelectOption</code>.</TableCell>
        </TableRow>
      </div>

      <h3><code>TableFilterTextInput</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">a11yLabel</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              This should be an accessibility readable field name.
              `&apos;Filter`&apos; will be prepended to it.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table header.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The default value of the input on initial render.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">exactMatch</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell><code>false</code></TableCell>
            <TableCell>
              Should the filter be an exact match.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the input&apos;s value changes.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              What field should the filter be based on.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>The selected option&apos;s value.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>th</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFilters</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Typically, the set of filters.
              Includes
              <div className="props-code-wrapper">
                <code>TableFilterComboBox</code>
                <code>TableFilterComboBoxAllOptions</code>
                <code>TableFilterComboBoxOption</code>
                <code>TableFilterCustom</code>
                <code>TableFilterDate</code>
                <code>TableFilterNone</code>
                <code>TableFilterSelect</code>
                <code>TableFilterSelectAllOptions</code>
                <code>TableFilterSelectOption</code>
                <code>TableFilterTextInput</code>.
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the table row.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell><code>Record&lt;string, any&gt;</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Starting values for the filters so that the filters can begin with preselected values.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;tr&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableRowElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;tr&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;tr&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the inputs&apos; value changes.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell><code>Record&lt;string, any&gt;</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Filters value.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>tr</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFoot</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Includes <code>TableFootCell</code>, <code>TableFootRow</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>tfoot</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;tfoot&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableSectionElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;tfoot&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;tfoot&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>tfoot</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFootCell</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the table cell.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>td</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;td&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;td&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;td&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>td</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableFootRow</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the table row.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>tr</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;tr&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableRowElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;tr&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;tr&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>tr</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableHead</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the table head.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>thead</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;thead&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableSectionElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;thead&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;thead&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>thead</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableHeadCell</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The content of the table cell.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>th</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;th&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableCellElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;th&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;th&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onClick</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The function to call when the table cell is clicked.<br />
              Will return an <code>event</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              What record field should the header cell be based on.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">scope</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>&apos;row&apos;</code>
                <span> | </span>
                <code>&apos;col&apos;</code>
                <span> | </span>
                <code>&apos;rowgroup&apos;</code>
                <span> | </span>
                <code>&apos;colgroup&apos;</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Defines the cells that the header element relates to.
              <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope">Learn more</ExternalLink>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">tableSortingFieldPaths</code></TableCell>
            <TableCell><code>[string]</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The <code>TableSortingRule</code> component has a <code>recordFieldPath</code> property that is used as a key for its sorting rule.
              The <code>TableHeadCell</code>, when clicked, sets which sorting rules to apply by using their <code>recordFieldPath</code> keys as
              provided in this <code>tableSortingFieldPaths</code> property.
              Order determines order of sorting.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>th</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableHeadRow</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the table head row.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>tr</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;tr&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableRowElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;tr&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;tr&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>tr</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TablePagination</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell>All</TableCell>
            <TableCell>N/A</TableCell>
            <TableCell>N/A</TableCell>
            <TableCell>
              See the <Link to={pageUrls.pagination}>Pagination documentation</Link> page.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableRow</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the table row.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>tr</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;tr&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLTableRowElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;tr&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;tr&gt;</code> DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>tr</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableSortingRule</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">a11yLabel</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>A11y notification to be read when this sort rule is applied.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">customSort</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>Sorting function.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultIsAscending</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell><code>true</code></TableCell>
            <TableCell>
              Should the field sort ascending by default.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultIsAscending</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>date</code>
                <span> | </span>
                <code>number</code>
                <span> | </span>
                <code>string</code>
              </div>
            </TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>
              What type of data is being sorted.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">recordFieldPath</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Should match with a <code>recordFieldPath</code> for a <code>TableHeadCell</code> in the table
              OR as one of the <code>tableSortingFieldPaths</code> in a <code>TableHeadCell</code>.<br />
              If your records need a calculated field, it is suggested to calculate the value and store it on the record
              and set this path to the calculated value`&apos;s path.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableSortingRules</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Typically, includes <code>TableSortingRule</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              What column should be sorted by default.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function called when the table is sorted.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The column being currently sorted.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>TableWrapper</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Typically, includes <code>Table</code> and its children.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This CSS class will be added to the <code>div</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              An id to put on the <code>&lt;div&gt;</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLDivElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;div&gt;</code> element allowing the parent component to interact
              directly with the actual <code>&lt;div&gt;</code> DOM element.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>
    </>
  );
}
