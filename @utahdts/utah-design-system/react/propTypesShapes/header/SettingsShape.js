// @ts-check
import { sizes } from '@utahdts/utah-design-system-header';
import PropTypes from 'prop-types';
import ActionItemShape from './ActionItemShape';
import DomLocationTargetShape from './DomLocationTargetShape';
import FooterSettingsShape from './FooterSettingsShape';
import LogoShape from './LogoShape';
import MainMenuShape from './MainMenuShape';
import MediaSizesShape from './MediaSizesShape';
import UtahIdShape from './UtahIdShape';

/**
 * see jsDocTypes.Settings (should always be matched)
 */

export default PropTypes.shape({
  actionItems: PropTypes.arrayOf(ActionItemShape),
  domLocationTarget: DomLocationTargetShape,
  footer: FooterSettingsShape,
  logo: LogoShape,
  mainMenu: MainMenuShape,
  mediaSizes: MediaSizesShape.isRequired,
  onSearch: PropTypes.func,
  showTitle: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(Object.values(sizes)),
  title: PropTypes.string.isRequired,
  titleURL: PropTypes.string.isRequired,
  utahId: PropTypes.oneOfType([UtahIdShape, PropTypes.bool]),
});
