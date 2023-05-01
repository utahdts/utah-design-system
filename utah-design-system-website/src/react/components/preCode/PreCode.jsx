import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { joinClassNames } from '@utahdts/utah-design-system';
import formatPreCode from './formatPreCode';

const propTypes = {
  addHorizontalPadding: PropTypes.bool,
  allowScrollOverflow: PropTypes.bool,
  className: PropTypes.string,
  // the raw unformatted DOM code string (probably from an innerHTML?)
  codeRaw: PropTypes.string.isRequired,
  maxHeight: PropTypes.string,
  showBackgroundColor: PropTypes.bool,
};
const defaultProps = {
  addHorizontalPadding: false,
  allowScrollOverflow: false,
  className: '',
  maxHeight: null,
  showBackgroundColor: false,
};

function PreCode({
  addHorizontalPadding,
  allowScrollOverflow,
  className,
  codeRaw,
  maxHeight,
  showBackgroundColor,
  ...rest
}) {
  const [formattedCode, setFormattedCode] = useImmer(codeRaw || '');

  useEffect(
    () => {
      setFormattedCode(formatPreCode(codeRaw));
    },
    [codeRaw]
  );

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
      {...rest}
    >
      <div className={joinClassNames(allowScrollOverflow && 'pre-block__overflow-content')}>
        {formattedCode}
      </div>
    </pre>
  );
}

PreCode.propTypes = propTypes;
PreCode.defaultProps = defaultProps;

export default PreCode;
