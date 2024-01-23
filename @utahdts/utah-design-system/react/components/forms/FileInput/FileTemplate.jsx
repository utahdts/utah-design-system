import { useContext } from 'react';
import { isFunction } from 'lodash';
import { FileContext } from './context/FileContext';
import { joinClassNames } from '../../../util/joinClassNames';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @returns {import('react').JSX.Element}
 */
export function FileTemplate({
  children,
  className,
}) {
  const fileContext = useContext(FileContext);

  return (
    <li className={joinClassNames('file-template', className)}>
      {isFunction(children) ? children(fileContext) : children}
    </li>
  );
}
