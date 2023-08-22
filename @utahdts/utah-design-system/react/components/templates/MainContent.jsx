import React from 'react';
import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  innerRef: RefShape,
};
const defaultProps = {
  className: null,
  id: 'main-content',
  innerRef: null,
};

// The MainContent component renders a <main> tag.
// Use primarily to provide a target for the skip link.
function MainContent({
  children,
  className,
  id,
  innerRef,
  ...rest
}) {
  return (
    <main className={className} id={id} ref={innerRef} {...rest}>
      {children}
    </main>
  );
}

MainContent.propTypes = propTypes;
MainContent.defaultProps = defaultProps;

export default MainContent;
