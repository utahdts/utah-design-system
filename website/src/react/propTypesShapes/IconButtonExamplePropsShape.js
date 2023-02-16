import { formElementSizesEnum } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';

export default PropTypes.exact({
  appearance: PropTypes.string,
  color: PropTypes.string,
  iconCssClass: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf([
    formElementSizesEnum.SMALL1X,
    formElementSizesEnum.SMALL,
    formElementSizesEnum.MEDIUM,
    formElementSizesEnum.LARGE,
    formElementSizesEnum.LARGE1X,
  ]),
  title: PropTypes.string,
});
