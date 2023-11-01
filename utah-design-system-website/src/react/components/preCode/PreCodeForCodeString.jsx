import PropTypes from 'prop-types';
import { useMemo } from 'react';
import PreCode from './PreCode';
import { PreCodeDefaultProps } from './PreCodeDefaultProps';
import { PreCodeProps } from './PreCodeProps';
import formatPreCode from './formatPreCode';

const propTypes = {
  ...PreCodeProps,
  codeRaw: PropTypes.string.isRequired,
};
const defaultProps = {
  ...PreCodeDefaultProps,
};

function PreCodeForCodeString({
  codeRaw,
  ...rest
}) {
  const formattedCode = useMemo(() => formatPreCode(codeRaw || ''), [codeRaw]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PreCode {...rest}>{formattedCode}</PreCode>;
}

PreCodeForCodeString.propTypes = propTypes;
PreCodeForCodeString.defaultProps = defaultProps;

export default PreCodeForCodeString;
