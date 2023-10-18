import PropTypes from 'prop-types';
import { formElementSizesEnum } from '@utahdts/utah-design-system';

export default PropTypes.exact({
  className: PropTypes.string,
  isClearable: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf([
    formElementSizesEnum.SMALL,
    formElementSizesEnum.MEDIUM,
    formElementSizesEnum.LARGE,
  ]),
  // title is put in as the "children" of the Button component
  title: PropTypes.string,
});
