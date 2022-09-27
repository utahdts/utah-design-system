/* eslint-disable no-param-reassign */
import produce from 'immer';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Form, TextInput } from 'utah-design-system-react-library';
import ButtonExamplePropsShape from '../../../../../propTypesShapes/ButtonExamplePropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: ButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function ButtonPrimaryExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState(produce((draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.props.appearance = 'outlined';
        draftState.props.color = 'none';
        draftState.props.title = 'Button Title';
        draftState.props.type = 'button';
      }));
    },
    []
  );

  function onChangeField(field) {
    return (e) => setState((draftState) => {
      switch (field) {
        case 'isBusy':
        case 'isDisabled':
          draftState.props[field] = e.target.checked;
          break;
        default:
          draftState.props[field] = e.target.value;
          break;
      }
    });
  }
  return (
    <div>
      <div>
        <Form
          // onSubmit(({ state, validationErrors }) => ... do whatever ...)
          state={state}
          setState={setState}
        >
          <TextInput id="props.title" label="Title" className="input--height-xsmall" />

          <div className="input-wrapper">
            <input id="button-sandbox-isBusy" type="checkbox" onChange={onChangeField('isBusy')} />
            <label htmlFor="button-sandbox-busy">Busy</label>
          </div>

          <TextInput id="props.className" label="Class" className="input--height-xsmall" />

          <div className="input-wrapper">
            <label htmlFor="button-sandbox-appearance">Appearance</label>
            <select id="button-sandbox-appearance" onChange={onChangeField('appearance')} value={state.props.appearance}>
              <option value="solid">Solid</option>
              <option value="outlined">Outlined</option>
            </select>
          </div>

          <div className="input-wrapper">
            <label htmlFor="button-sandbox-color">Color</label>
            <select id="button-sandbox-color" onChange={onChangeField('color')} value={state.props.color}>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="accent">Accent</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="input-wrapper">
            <input id="button-sandbox-isDisabled" type="checkbox" onChange={onChangeField('isDisabled')} />
            <label htmlFor="button-sandbox-isDisabled">Disabled</label>
          </div>

          <TextInput id="props.id" label="ID" className="input--height-xsmall" />

          <div className="input-wrapper">
            <label htmlFor="button-sandbox-type">Type</label>
            <select id="button-sandbox-type" onChange={onChangeField('type')}>
              <option value="button">Button</option>
              <option value="reset">Reset</option>
              <option value="submit">Submit</option>
            </select>
          </div>
        </Form>
      </div>
    </div>
  );
}

ButtonPrimaryExampleProps.propTypes = propTypes;
ButtonPrimaryExampleProps.defaultProps = defaultProps;

export default ButtonPrimaryExampleProps;
