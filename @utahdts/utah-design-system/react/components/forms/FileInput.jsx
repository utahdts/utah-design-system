import { useImmer } from 'use-immer';
import {
  useCallback, useEffect, useRef
} from 'react';
import { isEqual, isFunction } from 'lodash';
import { RequiredStar } from './RequiredStar';
import { joinClassNames } from '../../util/joinClassNames';
import { Tag } from '../buttons/Tag';
import { useAriaMessaging } from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { ErrorMessage } from './ErrorMessage';

/**
 * @param {object} props
 * @param {string} [props.acceptedFileTypes]
 * @param {(file: File, removeFile: (file: File) => void) => React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} [props.errorMessage]
 * @param {string} [props.hint]
 * @param {string} props.id
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {boolean} [props.multiple]
 * @param {string} [props.name]
 * @param {(files: FileList | null, event: import('react').ChangeEvent<HTMLInputElement>) => void} [props.onChange]
 * @param {FileList} [props.value]
 * @returns {import('react').JSX.Element}
 */

export function FileInput({
  acceptedFileTypes,
  children,
  className,
  errorMessage,
  hint,
  id,
  innerRef,
  isDisabled,
  isRequired,
  label,
  multiple,
  name,
  onChange,
  value,
}) {
  const { addPoliteMessage } = useAriaMessaging();
  const lf = new Intl.ListFormat('en');
  const [isDragged, setDragged] = useImmer(false);
  const [files, setFiles] = useImmer(value || null);
  const inputRef = useRef(/** @type {HTMLInputElement | null} */(null));

  const currentOnChange = useCallback((/** @type {import('react').ChangeEvent<HTMLInputElement>} */ event) => {
    onChange?.(inputRef.current?.files || null, event);
    setFiles(inputRef.current?.files || null);
  }, []);

  const removeFile = useCallback((/** @type {File} */ file) => {
    const currentFiles = [...inputRef.current?.files || []];
    const fileIndex = currentFiles.findIndex((item) => isEqual(file, item));
    if (fileIndex !== -1) {
      currentFiles.splice(fileIndex, 1);
      // Create new FileList
      const dataTransfer = new DataTransfer();
      currentFiles.forEach((item) => dataTransfer.items.add(item));
      if (inputRef.current) inputRef.current.files = dataTransfer.files;
      currentOnChange();
    }
  }, [currentOnChange]);

  useEffect(() => {
    if (files?.length) {
      addPoliteMessage(`You have selected the file${files.length > 1 ? 's' : ''}: ${lf.format([...files].map((item) => item.name))}.`);
    } else {
      addPoliteMessage('No file selected.');
    }
  }, [files]);

  return (
    <div className={joinClassNames('input-wrapper', className)} ref={innerRef}>
      <label htmlFor={id}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      {
        hint
          ? (
            <div className="info-box file-input__info-box my-spacing-xs">
              <div className="info-box__content" id={`${id}-hint`}>
                {hint}
              </div>
            </div>
          )
          : null
      }
      <div className={joinClassNames(
        'file-input__box',
        isDragged ? 'file-input__box--dragged' : '',
        isDisabled ? 'file-input__box--disabled' : ''
      )}
      >
        <div className="file-input__safari" />
        {
          !files?.length
            ? (
              <div className="file-input__instructions">
                <span>Drag {multiple ? 'files' : 'a file'} here or click to upload</span>
              </div>
            )
            : ''
        }
        <input
          accept={acceptedFileTypes}
          aria-describedby={errorMessage ? `${id}-error` : `${id}-hint`}
          disabled={isDisabled}
          id={id}
          multiple={multiple}
          name={name || id}
          onChange={currentOnChange}
          onDragEnter={() => setDragged(true)}
          onDragLeave={() => setDragged(false)}
          onDrop={() => setDragged(false)}
          ref={inputRef}
          type="file"
        />
        {
          files?.length
            ? (
              <div className="file-input__file-selected">
                <div className="flex justify-between items-center">
                  <span className="font-bold mr-spacing">{files.length} file{files.length > 1 ? 's' : ''} selected</span>
                  <span>Change file{files.length > 1 ? 's' : ''}</span>
                </div>
                <hr />
                <div className="file-input__file-list flex-wrap">
                  {[...files].map((/** @type {File} */ file) => (
                    isFunction(children)
                      ? <div key={file.name}>{children(file, removeFile)}</div>
                      : (
                        <Tag
                          clearMessage={`Remove file: ${file.name}.`}
                          key={file.name}
                          onClear={() => removeFile(file)}
                        >
                          {file.name}
                        </Tag>
                      )
                  ))}
                </div>
              </div>
            )
            : ''
        }
      </div>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
