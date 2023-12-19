// @ts-check
import React from 'react';
import joinClassNames from '../../../util/joinClassNames';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @returns {JSX.Element}
 */
export function ModalFooter({
  children,
  className,
}) {
  return (
    <div
      className={joinClassNames('modal__footer', className)}
    >
      {children}
    </div>
  );
}
