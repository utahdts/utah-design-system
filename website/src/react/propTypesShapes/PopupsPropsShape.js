import { popupPlacement } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';

export default PropTypes.exact({
  hasCloseButton: PropTypes.bool,
  isVisible: PropTypes.bool,
  placement: PropTypes.oneOf(Object.values(popupPlacement)),
  popupType: PropTypes.oneOf(['onClick', 'onHover']),
});
