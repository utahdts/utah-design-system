import { useImmer } from 'use-immer';
import { useCallback, useEffect } from 'react';
import { RequiredStar } from '../RequiredStar';
import { joinClassNames } from '../../../util/joinClassNames';
import { Tag } from '../../buttons/Tag';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { ErrorMessage } from '../ErrorMessage';

/**
 * @param {object} props
 * @param {string} [props.acceptedFileTypes]
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
export function FileInput({
  acceptedFileTypes,
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
  const [file, setFile] = useImmer('');

  const currentOnChange = useCallback((/** @type {import("react").ChangeEvent<Element>} */ event) => {
    // @ts-ignore
    setFile([...event.target.files][0]?.name || '');
    if (onChange) {
      onChange(event);
    }
  }, []);

  useEffect(() => {
    if (file.length) {
      addPoliteMessage(`You have selected the file: ${file}.`);
    } else {
      addPoliteMessage('No file selected.');
    }
  }, [file]);

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
        {file.length
          ? (
            <div className="file-input__single-file">
              <div className="flex justify-between items-center">
                <span className="font-bold mr-spacing">1 file selected</span>
                <span className="button button--small">Change file</span>
              </div>
              <hr />
              <div className="file-input__file-list flex-wrap">
                <Tag>
                  {file}
                </Tag>
              </div>
            </div>
          )
          : (
            <div className="file-input__instructions">
              <span className="button button--small">Drag file here or click to upload</span>
            </div>
          )}
        <input
          accept={acceptedFileTypes}
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          className={className}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={currentOnChange}
          onDragEnter={() => setDragged(true)}
          onDragLeave={() => setDragged(false)}
          onDrop={() => setDragged(false)}
          type="file"
        />
      </div>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
