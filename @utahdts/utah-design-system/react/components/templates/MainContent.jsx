import React from 'react';
import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerRef: RefShape,
};
const defaultProps = {
  className: null,
  innerRef: null,
};

function MainContent({ children, className, innerRef }) {
  return (
    <main className={className} id="mainContent" ref={innerRef}>
      {children}
    </main>
  );
}

MainContent.propTypes = propTypes;
MainContent.defaultProps = defaultProps;

export default MainContent;
