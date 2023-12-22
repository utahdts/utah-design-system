// @ts-check
import React from 'react';
import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @returns {React.JSX.Element}
 */
export function ModalContent({
  children,
  className,
}) {
  return (
    <div
      className={joinClassNames('modal__content', className)}
    >
      {children}
    </div>
  );
}
