import React from 'react';
import PropTypes from 'prop-types';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  className: PropTypes.string,
};
const defaultProps = {
  className: undefined,
};

function LinkIcon({ className }) {
  return (
    <span className={joinClassNames(['material-symbols-outlined link-icon', className])}>chevron_right</span>
  );
}

LinkIcon.propTypes = propTypes;
LinkIcon.defaultProps = defaultProps;

export default LinkIcon;
