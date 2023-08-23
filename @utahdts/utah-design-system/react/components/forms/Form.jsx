/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import React from 'react';
import { useImmer } from 'use-immer';
import joinClassNames from '../../util/joinClassNames';
import FormContextProvider from './FormContextProvider';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  // respond to field changes for key/value pairs of data, where the key is the `id` of the nested form components/inputs.
  // ie ({ e, id, value }) => { ... do something ... }
  // if both onChange AND setState are given, then the returned value from onChange will be passed to setState
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,

  // a "setState" compliant state setter
  setState: PropTypes.func,
  state: PropTypes.shape({}),
};
const defaultProps = {
  className: null,
  onChange: null,
  onSubmit: null,
  setState: null,
  state: null,
};

let nextFormId = 0;

/**
 * @param {Object} props
 * @param {any} props.children
 * @param {any} [props.className]
 * @param {any} [props.onChange]
 * @param {any} [props.onSubmit]
 * @param {any} [props.setState]
 * @param {any} [props.state]
 * @returns {JSX.Element}
 */
function Form({
  children,
  className,
  onChange,
  onSubmit,
  setState,
  state,
  ...rest
}) {
  const [formState] = useImmer(() => {
    nextFormId += 1;
    return {
      formId: nextFormId,
      originalState: state,
      validationStyle: 'BLURRED',
    };
  });

  return (
    <FormContextProvider
      formState={formState}
      onChange={onChange}
      onSubmit={onSubmit}
      setState={setState}
      state={state}
    >
      <form className={joinClassNames('form', className)} id={`form-${formState.formId}`} {...rest}>
        {children}
      </form>
    </FormContextProvider>
  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
