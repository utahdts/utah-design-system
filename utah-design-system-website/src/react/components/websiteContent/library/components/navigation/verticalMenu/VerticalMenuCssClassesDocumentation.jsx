import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function VerticalMenuCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.vertical-menu</code></TableCell>
        <TableCell>The base css class for a vertical menu.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.vertical-menu__header</code></TableCell>
        <TableCell>Css class for the menu header title.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.vertical-menu__item</code></TableCell>
        <TableCell>Css class for each menu item - <code>li</code> element.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.vertical-menu__title</code></TableCell>
        <TableCell>Css class for each menu item title - <code>span</code> element.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.vertical-menu__title__plain</code></TableCell>
        <TableCell>
          Css class for each plain menu item title.<br />
          Designed to be used for <code>childrenMenuType: plain</code>.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.vertical-menu__link-title</code></TableCell>
        <TableCell>Css class for each menu item link - <code>a</code> element.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.vertical-menu__link-text</code></TableCell>
        <TableCell>Css class for interactive menu items that are not links.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.vertical-menu__divider</code></TableCell>
        <TableCell>Css class a divider.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
