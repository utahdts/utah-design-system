import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function BannersPropsDocumentation() {
  return (
    <>
      <h3><code>Banner</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The content of the banner.<br />
              Includes <code>BannerMessage</code>, and <code>BannerIcon</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the banner.
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
              directly with the actual DOM element.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">onClose</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Function to call when the banner is close. Will return an <code>event</code> object.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">position</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>inline</code>
                <span> | </span>
                <code>bottom</code>
                <span> | </span>
                <code>bottom-left</code>
                <span> | </span>
                <code>bottom-right</code>
                <span> | </span>
                <code>top</code>
                <span> | </span>
                <code>top-left</code>
                <span> | </span>
                <code>top-right</code>
              </div>
            </TableCell>
            <TableCell><code>bottom-left</code></TableCell>
            <TableCell>
              Where should the banner appear.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">size</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>small</code>
                <span> | </span>
                <code>medium</code>
                <span> | </span>
                <code>large</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Sets the banner&apos;s max-width.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>BannerMessage</code></h3>
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
              The content of the banner.
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
        </SettingsDocumentation>
      </div>

      <h3><code>BannerIcon</code></h3>
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
              The content of the icon.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the icon.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>
    </>
  );
}
