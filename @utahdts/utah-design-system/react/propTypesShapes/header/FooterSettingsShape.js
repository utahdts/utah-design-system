// @ts-check
import PropTypes from 'prop-types';
import DomLocationTargetShape from './DomLocationTargetShape';

/**
 * see jsDocTypes.FooterSettings (should always be matched)
 */

export default PropTypes.shape({
  domLocationTarget: DomLocationTargetShape,
  showHorizontalRule: PropTypes.bool,
});
