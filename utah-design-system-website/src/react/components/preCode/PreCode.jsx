import { joinClassNames } from '@utahdts/utah-design-system';
import { useRef } from 'react';
import { CopyButton } from '../copy/CopyButton';

/**
 * The PreCode component takes children containing some sort of "code" and wraps it in a "pre" tag.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.addHorizontalPadding]
 * @param {boolean} [props.allowScrollOverflow]
 * @param {string} [props.className]
 * @param {string} [props.maxHeight]
 * @param {Object} [props.propsForPre]
 * @param {boolean} [props.showBackgroundColor]
 * @returns {JSX.Element}
 */
export function PreCode({
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
    <div className="pre-code__wrapper">
      <pre
        className={joinClassNames(
          className,
          showBackgroundColor && 'gray-block',
          allowScrollOverflow && 'pre-code--overflow',
          addHorizontalPadding && 'pre-code--padded'
        )}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={allowScrollOverflow ? 0 : NaN}
        style={maxHeight ? { maxHeight: `${maxHeight}` } : undefined}
        {...propsForPre}
      >
        <div
          className={joinClassNames(allowScrollOverflow && 'pre-code__overflow-content')}
          ref={childrenRef}
        >
          {children}
        </div>
      </pre>

      <CopyButton copyRef={childrenRef} />
    </div>
  );
}
