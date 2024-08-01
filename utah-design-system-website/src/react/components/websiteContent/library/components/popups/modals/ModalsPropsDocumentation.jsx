import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function ModalsPropsDocumentation() {
  return (
    <>
      <h3><code>Modal</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">ariaLabelledBy</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Used for accessibility.<br />
              Must be matching an id within the modal, typically in <code>ModalTitle</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The content of the modal.<br />
              Includes <code>ModalContent</code>, <code>ModalFooter</code>, and <code>ModalTitle</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the modal.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              An id to put on the <code>&lt;dialog&gt;</code> element.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLDivElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;div&gt;</code> element allowing the parent component to interact
              directly with the actual DOM element.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">onEscape</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the <code>esc</code> key is pressed. Will return an <code>event</code> object.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">onClose</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the modal is close. Will return an <code>event</code> object.<br />
              Will also display a close button, if set.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>ModalContent</code></h3>
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
              The CSS Class to use on the content.
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
        </SettingsDocumentation>
      </div>

      <h3><code>ModalFooter</code></h3>
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
              The CSS Class to use on the content.
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
        </SettingsDocumentation>
      </div>

      <h3><code>ModalTitle</code></h3>
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
              The CSS Class to use on the content.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              An id to put on the <code>&lt;div&gt;</code> element.<br />
              Make sure to match the <code>ariaLabelledBy</code> prop in <code>Modal</code>.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>
    </>
  );
}
