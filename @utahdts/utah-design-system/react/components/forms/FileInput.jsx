import { useImmer } from 'use-immer';
import { useCallback, useEffect } from 'react';
import { RequiredStar } from './RequiredStar';
import { joinClassNames } from '../../util/joinClassNames';
import { Tag } from '../buttons/Tag';
import { useAriaMessaging } from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';

/**
 * @param {object} props
 * @param {string} [props.accept]
 * @param {string} [props.className]
 * @param {string} [props.hint]
 * @param {string} props.id
 * @param {string} props.label
 * @param {string} [props.name]
 * @param {boolean} [props.isRequired]
 * @param {import('react').ChangeEventHandler} [props.onChange]
 * @returns {import('react').JSX.Element}
 * @class
 */
export function FileInput({
  accept,
  className,
  hint,
  id,
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
    const filesList = [...event.target.files].map((file) => file?.name);
    // @ts-ignore
    setFiles(filesList);
    if (onChange) {
      onChange(event);
    }
  }, []);

  useEffect(() => {
    if (files.length) {
      addPoliteMessage(`You have selected the file: ${files[0]}.`);
    } else {
      addPoliteMessage('No file selected.');
    }
  }, [files]);
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      {hint
        ? (
          <div className="info-box">
            <div className="info-box__content">{hint}</div>
          </div>
        )
        : null}
      <div className={joinClassNames('file-input__box mt-spacing-s', isDragged ? 'file-input__box--dragged' : '')}>
        {files.length
          ? (
            <div className="file-input__single-file">
              <div className="flex justify-between items-center">
                <span className="font-bold mr-spacing">{files.length} file{files.length > 1 ? 's' : ''} selected</span>
                <span className="button button--small">Change file</span>
              </div>
              <hr />
              <div className="file-input__file-list flex-wrap">{files.map((file) => <Tag key={file}>{file}</Tag>)}</div>
            </div>
          )
          : (
            <div className="file-input__instructions">
              <span className="button button--small">Drag file here or click to upload.</span>
            </div>
          )}
        <input
          accept={accept}
          className={className}
          id={id}
          name={name || id}
          type="file"
          onChange={currentOnChange}
          onDrop={() => setDragged(false)}
          onDragEnter={() => setDragged(true)}
          onDragLeave={() => setDragged(false)}
        />
      </div>
    </div>
  );
}
