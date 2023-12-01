// @ts-check
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * * @returns {JSX.Element}
 */
export function BannerIcon({
  children,
  className,
}) {
  return (
    <div
      aria-hidden="true"
      className={joinClassNames('banner__icon', className)}
    >
      {children}
    </div>
  );
}
