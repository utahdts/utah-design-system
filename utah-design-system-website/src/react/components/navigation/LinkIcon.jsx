import PropTypes from 'prop-types';
import { joinClassNames } from '@utahdts/utah-design-system';

const propTypes = {
  className: PropTypes.string,
};
const defaultProps = {
  className: undefined,
};

/** */
function LinkIcon({ className }) {
  return (
    <span className={joinClassNames(['utds-icon-before-chevron-right', className])} aria-hidden="true" />
  );
}

LinkIcon.propTypes = propTypes;
LinkIcon.defaultProps = defaultProps;

export default LinkIcon;
