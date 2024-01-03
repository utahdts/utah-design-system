import { useMemo } from 'react';
import { PreCode } from './PreCode';
import { formatPreCode } from './formatPreCode';

/**
 * @param {object} props
 * @param {string} props.codeRaw
 * @param {boolean} [props.addHorizontalPadding]
 * @param {boolean} [props.allowScrollOverflow]
 * @param {string} [props.className]
 * @param {string} [props.maxHeight]
 * @param {object} [props.propsForPre]
 * @param {boolean} [props.showBackgroundColor]
 * @returns {import('react').JSX.Element}
 */
export function PreCodeForCodeString({
  codeRaw,
  ...rest
}) {
  const formattedCode = useMemo(() => formatPreCode(codeRaw || ''), [codeRaw]);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PreCode {...rest}>{formattedCode}</PreCode>;
}
