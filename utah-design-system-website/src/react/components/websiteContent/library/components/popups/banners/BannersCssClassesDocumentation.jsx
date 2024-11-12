import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';
import { pageUrls } from '../../../../../routing/pageUrls';

export function BannersCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.banner__wrapper</code></TableCell>
        <TableCell>This is the overall wrapper class for the banner.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <div className="props-code-wrapper">
            <code>.banner--bottom</code> |{' '}
            <code>.banner--bottom-right</code> |{' '}
            <code>.banner--bottom-left</code> |{' '}
            <code>.banner--top</code> |{' '}
            <code>.banner--top-right</code> |{' '}
            <code>.banner--top-left</code>
          </div>
        </TableCell>
        <TableCell>CSS class modifiers for banner position.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <div className="props-code-wrapper">
            <code>.banner--info</code> |{' '}
            <code>.banner--warning</code> |{' '}
            <code>.banner--danger</code> |{' '}
            <code>.banner--success</code> |{' '}
            <code>.banner--dark</code> |{' '}
            <code>.banner--primary</code> |{' '}
            <code>.banner--primary-light</code> |{' '}
            <code>.banner--primary-dark</code> |{' '}
            <code>.banner--secondary</code> |{' '}
            <code>.banner--secondary-light</code> |{' '}
            <code>.banner--secondary-dark</code> |{' '}
            <code>.banner--accent</code> |{' '}
            <code>.banner--accent-light</code> |{' '}
            <code>.banner--accent-dark</code>
          </div>
        </TableCell>
        <TableCell>
          CSS class modifiers to change the banner color.<br />
          See <Link to={`${pageUrls.colorGuidelines}#section-status-colors`}>color guidelines overview</Link>.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <div className="props-code-wrapper">
            <code>.banner--small</code> |{' '}
            <code>.banner--medium</code> |{' '}
            <code>.banner--large</code>
          </div>
        </TableCell>
        <TableCell>
          CSS class modifiers to change the banner <code>max-width</code>.<br />
          Widths are:
          <div className="props-code-wrapper">
            <code>320px</code> |{' '}
            <code>640px</code> |{' '}
            <code>960px</code>.
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.banner__message</code></TableCell>
        <TableCell>This is the overall wrapper class for <code>BannerMessage</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.banner__icon</code></TableCell>
        <TableCell>This is the overall wrapper class for <code>BannerIcon</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.banner__close-button</code></TableCell>
        <TableCell>This is used for the close button.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.banner-global__wrapper</code></TableCell>
        <TableCell>This is the global container class for all banners.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.banner-global__zone</code></TableCell>
        <TableCell>This class is used to style the global container.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <div className="props-code-wrapper">
            <code>.banner-global__bottom</code> |{' '}
            <code>.banner-global__bottom-right</code> |{' '}
            <code>.banner-global__bottom-left</code> |{' '}
            <code>.banner-global__top</code> |{' '}
            <code>.banner-global__top-right</code> |{' '}
            <code>.banner-global__top-left</code>
          </div>
        </TableCell>
        <TableCell>CSS class modifiers to group banners according to the global container.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
