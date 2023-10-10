// @ts-check
/* eslint-disable react/prop-types */
import React, {
  useMemo
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import joinClassNames from '../../../util/joinClassNames';
import ErrorMessage from '../ErrorMessage';
import useFormContext from '../useFormContext';
import CombBoxListBox from './CombBoxListBox';
import ComboBoxContextProvider from './ComboBoxContextProvider';
import ComboBoxTextInput from './ComboBoxTextInput';

/** @typedef {import('../../../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string | null} [props.defaultValue]
 * @param {string | null} [props.errorMessage]
 * @param {string} props.id
 * @param {React.RefObject | null} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean | null} [props.isRequired]
 * @param {string} props.label
 * @param {string | null} [props.labelClassName]
 * @param {string | null} [props.name]
 * @param {((newValue: string) => void) | null} [props.onChange]
 * @param {EventAction | null} [props.onClear]
 * @param {(() => void) | null} [props.onSubmit]
 * @param {string | null} [props.placeholder]
 * @param {string | null} [props.value]
 * @param {string | null} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export default function ComboBox({
  children,
  errorMessage,
  innerRef,
  id,
  label,
  wrapperClassName,
  ...rest
}) {
  // @ts-ignore
  const { validationErrors } = useFormContext();
  const currentErrorMessage = errorMessage ?? validationErrors?.[id]?.[0];
  const comboBoxListId = useMemo(() => uuidv4(), []);

  return (
    <ComboBoxContextProvider comboBoxId={id}>
      <div className={joinClassNames('input-wrapper input-wrapper--combo-box', wrapperClassName)} ref={innerRef}>
        <div className="combo-box-input__inner-wrapper">
          <ComboBoxTextInput
            comboBoxListId={comboBoxListId}
            id={id}
            label={label}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />
          <CombBoxListBox id={comboBoxListId} ariaLabelledById={id}>
            {children}
          </CombBoxListBox>
        </div>
        <ErrorMessage errorMessage={currentErrorMessage} id={id} />
      </div>
    </ComboBoxContextProvider>
  );
}
