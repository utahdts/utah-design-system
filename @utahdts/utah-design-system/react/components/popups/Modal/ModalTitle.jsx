// @ts-check
import React from 'react';
import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @returns {React.JSX.Element}
 */
export function ModalTitle({
  children,
  className,
}) {
  return (
    <div
      className={joinClassNames('modal__title', className)}
    >
      {children}
    </div>
  );
}
