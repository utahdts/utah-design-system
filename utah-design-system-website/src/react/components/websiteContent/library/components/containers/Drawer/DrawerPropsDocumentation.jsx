import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function DrawerPropsDocumentation() {
  return (
    <>
      <h3><code>Drawer</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">ariaLabelledBy</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Must match the <code>id</code> of the drawer title.<br />
              Needed for accessibility.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the drawer.<br />
              Includes <code>DrawerTitle</code>, <code>DrawerContent</code> and <code>DrawerFooter</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the drawer wrapper.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The <code>id</code> attribute of the drawer.<br />
              Will be added to the <code>dialog</code> element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>Ref&lt;HTMLDivElement&gt;</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;div&gt;</code>{' '}
              element allowing the parent component to interact directly with the actual DOM element.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onEscape</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>KeyboardEventHandler</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The function to call when the user hits the <code>esc</code> key.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">onClose</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>MouseEventHandler</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The function to call when the user closes the drawer.<br />
              If not defined, will hide the close button.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">position</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>drawer--right</code>
                |
                <code>drawer--left</code>
              </div>
            </TableCell>
            <TableCell><code>drawer--right</code></TableCell>
            <TableCell>
              Used to position the drawer.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>DrawerTitle</code></h3>
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
              The CSS class to use on the title.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The <code>id</code> attribute of the title.<br />
              Will be added to the <code>div</code> element.
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

      <h3><code>DrawerContent</code></h3>
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
              The content of the component.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS class to use on the content.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The <code>id</code> attribute of the content.<br />
              Will be added to the <code>div</code> element.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>DrawerFooter</code></h3>
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
              The content of the footer.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS class to use on the footer.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The <code>id</code> attribute of the footer.<br />
              Will be added to the <code>div</code> element.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>
    </>
  );
}
