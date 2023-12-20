// @ts-check
import React from 'react';
import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @returns {React.JSX.Element}
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
