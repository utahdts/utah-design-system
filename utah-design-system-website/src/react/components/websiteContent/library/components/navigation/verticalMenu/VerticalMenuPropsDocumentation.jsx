import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function VerticalMenuPropsDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.PROPS}>
      <TableRow>
        <TableCell><code className="primary-color">className</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          This css class will be added to the container. This will be added to the <code>&lt;nav&gt;</code> element.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">currentMenuItem</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>WebsiteMainMenu</code>
            <code>WebsiteMainMenuItem</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          The currently active menu item.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">menus</code></TableCell>
        <TableCell><code>WebsiteMainMenu[]</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          Menus to display.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">triggerOnHover</code></TableCell>
        <TableCell><code>boolean</code></TableCell>
        <TableCell><code>true</code></TableCell>
        <TableCell>
          Should the sub-menu open when the user hover over the item.<br />
          Designed to be used for <code>childrenMenuType: flyout</code>.
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
