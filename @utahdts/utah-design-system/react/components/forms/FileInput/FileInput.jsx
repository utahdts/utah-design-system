import { useImmer } from 'use-immer';
import {
  useCallback, useEffect, useRef
} from 'react';
import { isEqual, isFunction } from 'lodash';
import { RequiredStar } from '../RequiredStar';
import { joinClassNames } from '../../../util/joinClassNames';
import { Tag } from '../../buttons/Tag';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { ErrorMessage } from '../ErrorMessage';
import { FileContext } from './context/FileContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.acceptedFileTypes]
 * @param {string} [props.className]
 * @param {string} [props.errorMessage]
 * @param {string} [props.hint]
 * @param {string} props.id
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {string} props.label
 * @param {boolean} [props.multiple]
 * @param {string} [props.name]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {import('react').ChangeEventHandler} [props.onChange]
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
  const [isDragged, setDragged] = useImmer(false);
  const [files, setFiles] = useImmer(value || []);
  const inputRef = useRef(null);

  const currentOnChange = useCallback(() => {
    if (onChange) {
      // @ts-ignore
      onChange(inputRef.current.files);
    } else {
      // @ts-ignore
      setFiles(inputRef.current.files);
    }
  }, []);

  const removeFile = useCallback((/** @type {File} */ file) => {
    // @ts-ignore
    const currentFiles = [...inputRef.current.files];
    const fileIndex = currentFiles.findIndex((item) => isEqual(file, item));
    if (fileIndex !== -1) {
      currentFiles.splice(fileIndex, 1);
      // Create new FileList
      const dataTransfer = new DataTransfer();
      currentFiles.forEach((item) => dataTransfer.items.add(item));
      // @ts-ignore
      inputRef.current.files = dataTransfer.files;
      currentOnChange();
    }
  }, []);

  useEffect(() => {
    if (files.length) {
      addPoliteMessage(`You have selected the file: ${[...files].map((item) => item.name).join(', ')}.`);
    } else {
      addPoliteMessage('No file selected.');
    }
  }, [files]);

  useEffect(() => {
    // Track files when controlled
    if (onChange) { setFiles(value || []); }
  }, [value, onChange]);

  return (
    <div className="input-wrapper" ref={innerRef}>
      <label htmlFor={id}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      {hint
        ? (
          <div className="info-box file-input__info-box mt-spacing-xs">
            <div className="info-box__content">
              {hint}
            </div>
          </div>
        )
        : null}
      <div className={joinClassNames(
        'file-input__box mt-spacing-s',
        isDragged ? 'file-input__box--dragged' : '',
        isDisabled ? 'file-input__box--disabled' : ''
      )}
      >
        <div className="file-input__safari" />
        {!files.length
          ? (
            <div className="file-input__instructions">
              <span className="button button--small">Drag file{multiple ? 's' : ''} here or click to upload</span>
            </div>
          )
          : ''}
        <input
          accept={acceptedFileTypes}
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          className={className}
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
        {files.length
          ? (
            <div className="file-input__file-selected">
              <div className="flex justify-between items-center">
                <span className="font-bold mr-spacing">{files.length} file{files.length > 1 ? 's' : ''} selected</span>
                <span className="button button--small">Change file{files.length > 1 ? 's' : ''}</span>
              </div>
              <hr />
              <div className="file-input__file-list flex-wrap">
                {[...files].map((/** @type {File} */ file) => {
                  if (children && isFunction(children)) {
                    return (
                    // @ts-ignore
                    // eslint-disable-next-line react/jsx-no-constructed-context-values
                      <FileContext.Provider value={{ file, removeFile }} key={file.name}>
                        {children}
                      </FileContext.Provider>
                    );
                  }
                  return (
                    <Tag
                      clearMessage={`Remove file: ${file.name}.`}
                      key={file.name}
                      onClear={() => removeFile(file)}
                    >
                      {file.name}
                    </Tag>
                  );
                })}
              </div>
            </div>
          )
          : ''}
      </div>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}