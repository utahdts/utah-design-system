import PropTypes from 'prop-types';
import { formElementSizesEnum } from 'utah-design-system-react-library';

export default PropTypes.exact({
  appearance: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  id: PropTypes.string,
  isBusy: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([formElementSizesEnum.SMALL, formElementSizesEnum.MEDIUM, formElementSizesEnum.LARGE, formElementSizesEnum.LARGE1X]),
  // title is put in as the "children" of the Button component
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
});
