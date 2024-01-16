import { useImmer } from 'use-immer';
import { useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RequiredStar } from '../RequiredStar';
import { joinClassNames } from '../../../util/joinClassNames';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { ErrorMessage } from '../ErrorMessage';
import { FileContext } from './context/FileContext';

/**
 * @param {object} props
 * @param {string} [props.acceptedFileTypes]
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.errorMessage]
 * @param {string} [props.hint]
 * @param {string} props.id
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {string} props.label
 * @param {string} [props.name]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {import('react').ChangeEventHandler} [props.onChange]
 * @returns {import('react').JSX.Element}
 */
export function MultipleFileInput({
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
  name,
  onChange,
}) {
  const { addPoliteMessage } = useAriaMessaging();
  const [isDragged, setDragged] = useImmer(false);
  const [files, setFiles] = useImmer([]);

  const currentOnChange = useCallback((/** @type {import("react").ChangeEvent<Element>} */ event) => {
    // @ts-ignore
    const draftList = [...event.target.files].map((file) => {
      const foo = file;
      foo.id = uuidv4();
      return foo;
    });
    // @ts-ignore
    setFiles(draftList || []);
    if (onChange) {
      onChange(event);
    }
  }, []);

  const removeFile = useCallback((file) => {
    setFiles((draftState) => {
      const currentIndex = draftState.findIndex((item) => item.id === file.id);
      if (currentIndex !== -1) {
        draftState.splice(currentIndex, 1);
      }
    });
  }, []);

  useEffect(() => {
    if (files.length) {
      addPoliteMessage(`You have selected ${files.length} file${files.length > 1 ? 's' : ''}.`);
    } else {
      addPoliteMessage('No file selected.');
    }
  }, [files]);

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
        <div className="file-input__instructions">
          <span className="button button--small">Drag files here or click to upload</span>
        </div>
        <input
          accept={acceptedFileTypes}
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          className={className}
          disabled={isDisabled}
          id={id}
          multiple
          name={name || id}
          onChange={currentOnChange}
          onDragEnter={() => setDragged(true)}
          onDragLeave={() => setDragged(false)}
          onDrop={() => setDragged(false)}
          type="file"
        />
        {files.length
          ? (
            <a className="mt-spacing-xs file-input__link" href={`#file-input__file-list__${id}`}>{files.length} file{files.length > 1 ? 's' : ''} selected (see list)</a>
          )
          : ''}
      </div>
      <ErrorMessage errorMessage={errorMessage} id={id} />
      {files.length
        ? (
          <div className="file-input__multiple-file">
            <span>Selected file(s):</span>
            <div className="flex justify-between items-center">
              <ul id={`file-input__file-list__${id}`}>
                {files.map((file) => (
                  // @ts-ignore
                  <FileContext.Provider value={{ file, removeFile }} key={file.id}>
                    {children}
                  </FileContext.Provider>
                ))}
              </ul>
            </div>
          </div>
        )
        : ''}
    </div>
  );
}
