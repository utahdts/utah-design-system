// @ts-check
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  // children are the ComboBoxOption components
  children: PropTypes.node.isRequired,
  isLabelHidden: PropTypes.bool,
  label: PropTypes.string,
};
const defaultProps = {
  isLabelHidden: false,
  label: null,
};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.isLabelHidden]
 * @param {string | null} [props.label]
 * @returns {JSX.Element}
 */
function ComboBoxOptionGroup({
  children,
  label = null,
  isLabelHidden = false,
}) {
  return (
    <div role="list">
      {isLabelHidden ? null : <div className="combo-box-group__title">{label}</div>}
      {children}
    </div>
  );
}

ComboBoxOptionGroup.propTypes = propTypes;
ComboBoxOptionGroup.defaultProps = defaultProps;

export default ComboBoxOptionGroup;
