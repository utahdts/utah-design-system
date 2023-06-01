import { joinClassNames } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import CopyButton from '../copy/CopyButton';

export const PreCodeProps = {
  addHorizontalPadding: PropTypes.bool,
  allowScrollOverflow: PropTypes.bool,
  className: PropTypes.string,
  maxHeight: PropTypes.string,
  propsForPre: PropTypes.object,
  showBackgroundColor: PropTypes.bool,
};
export const PreCodeDefaultProps = {
  addHorizontalPadding: false,
  allowScrollOverflow: false,
  className: '',
  maxHeight: null,
  propsForPre: {},
  showBackgroundColor: false,
};

const propTypes = {
  ...PreCodeProps,
  children: PropTypes.node.isRequired,
};
const defaultProps = {
  ...PreCodeDefaultProps,
};

// The PreCode component takes children containing some sort of "code" and wraps it in a "pre" tag.
function PreCode({
  addHorizontalPadding,
  allowScrollOverflow,
  children,
  className,
  maxHeight,
  propsForPre,
  showBackgroundColor,
}) {
  const childrenRef = useRef(/** @type {HTMLDivElement | null} */(null));

  return (
    <pre
      className={joinClassNames(
        className,
        showBackgroundColor && 'gray-block',
        allowScrollOverflow && 'pre-block--overflow',
        addHorizontalPadding && 'pre-block--padded'
      )}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={allowScrollOverflow ? '0' : undefined}
      style={maxHeight && { maxHeight: `${maxHeight}` }}
      {...propsForPre}
    >
      <div
        className={joinClassNames(allowScrollOverflow && 'pre-block__overflow-content')}
        ref={childrenRef}
      >
        {children}
      </div>
      <CopyButton copyRef={childrenRef} />
    </pre>
  );
}

PreCode.propTypes = propTypes;
PreCode.defaultProps = defaultProps;

export default PreCode;
