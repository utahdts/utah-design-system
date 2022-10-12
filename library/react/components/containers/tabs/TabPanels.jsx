import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

function TabPanels({ children }) {
  return (
    <div className="tab-group__panels">
      {children}
    </div>
  );
}

TabPanels.propTypes = propTypes;
TabPanels.defaultProps = defaultProps;

export default TabPanels;
