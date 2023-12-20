import React from 'react';
import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @returns {React.JSX.Element}
 */
export function BannerMessage({
  children,
  className,
}) {
  return (
    <div
      className={joinClassNames('banner__message', className)}
    >
      {children}
    </div>
  );
}
