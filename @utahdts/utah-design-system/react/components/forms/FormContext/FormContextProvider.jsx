import React, { useMemo } from 'react';
import { FormContext } from './FormContext';

/**
 * @template FormContextStateT
 * @typedef {import('@utahdts/utah-design-system').FormContextValue<FormContextStateT>} FormContextValue
 */
/**
 * @template FormContextStateT
 * @typedef {import('use-immer').Updater<FormContextStateT>} FormContextValueUpdater
 */

/**
 * The role of this form context provider is to be a middleman between the <Form> controller and its
 * children Inputs. The Form itself can have a global "onChange" handler. The inputs
 * can have onChange given explicitly. Input's onChange trumps. OR
 * neither has an onChange and the components are uncontrolled:
 *  - the <Form> can be controlled/uncontrolled
 *  - the <Input> inside a <Form> can be controlled/uncontrolled
 *
 * If neither Form nor Input are controlled then the Form will have its own internal state/setState
 * so that it becomes the controlling entity. This means all Inputs are always "controlled", whether by:
 *  - developer passing value/onChange to the input
 *  - developer passing state/setState to the form
 *  - form using its own internal state/setState passed
 *
 * @template FormContextStateT
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {({e, fieldPath, value}: {e?: React.ChangeEvent, fieldPath: string, value: any}) => void} props.onChange
 * @param {(e?: React.ChangeEvent) => void} [props.onSubmit] called when the form is somehow submitted by a child element
 * @param {FormContextValueUpdater<FormContextStateT>} props.setState setter for setting the `state`
 * @param {FormContextStateT} props.state known by the caller; every field in it with its type
 * @returns {JSX.Element}
 */
export default function FormContextProvider({
  children,
  onChange,
  onSubmit,
  setState,
  state,
}) {
  /*
    this context does not track an internal state.
    the form passes in state to this context (which may have been developer provided or internal), and
    inputs can have their own state. this context then just exposes the form's state (internal or external)
    to the form's children. Try to keep this context simple to just expose to the form's children the
    attributes passed to the form.
  */

  /** @type {FormContextValue<FormContextStateT>} */
  const contextValue = useMemo(
    () => ({
      onChange,
      onSubmit,
      setState,
      state,
    }),
    [onChange, onSubmit, setState, state]
  );

  return (
    <FormContext.Provider
      // @ts-ignore
      value={contextValue}
    >
      {children}
    </FormContext.Provider>
  );
}
