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

  let content;
  if (isFunction(children)) {
    // @ts-ignore
    content = children(fileContext);
  } else if (children) {
    content = children;
  } else {
    content = null;
  }

  return (
    <li className={joinClassNames('file-template', className)}>
      {content}
    </li>
  );
}
