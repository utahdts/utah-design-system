/* eslint-disable no-param-reassign */
import produce from 'immer';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
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
        {/* dirty engine, validation engine,  */}
        {/* trickle down but overrideable properties like validationStyle so a child can have different values from the form but uses the form if a value isn't set */}

        <Validation validationStyle={ON_BLURRED, ALWAYS}>
          <Form
            // when the submit button is pressed...?
            onSubmit={({ data, isDirty, isValid }) => {}}
            onChange={(id, newValue) => setMyData((draftData) => { draftData[id] = newValue})}
          >
            <TextInput id="personTelephone" type="tel" doValidation={true} validationType="Tel" validationError="this is wrong" label="Title" label={<div>My Label</div>} onChange={(value) => setMyData((draftData) => { draftData['telephone'] = newValue})} validationStyle={BLURRED, ALWAYS}/>
            <TextInput customValidation={value => !value ? 'incorrect value' : true} />
            ...

            <Form onSubmit={({isValid}) => {}} onChange={(newValue) => setMyData((draftData) => { draftData[???] = newValue})} >
              <TextInput type="tel" doValidation={true} validationType="Tel" validationError="this is wrong" label="Title" label={<div>My Label</div>} onChange={(value) => setMyData((draftData) => { draftData['telephone'] = newValue})} validationStyle={BLURRED, ALWAYS}/>
              <TextInput customValidation={value => !value ? 'incorrect value' : true} />
            </Form>

            ...
          </Form>
        </Validation>



        <label htmlFor="button-sandbox-buttonText">Title </label>
        <input id="button-sandbox-buttonText" type="text" value={state.props.title || ''} onChange={onChangeField('title')} />
        <br />
        <label htmlFor="button-sandbox-busy">Busy</label>
        <input id="button-sandbox-isBusy" type="checkbox" onChange={onChangeField('isBusy')} />
        <br />
        <label htmlFor="className">Class </label>
        <input id="button-sandbox-className" type="text" value={state.props.className || ''} onChange={onChangeField('className')} />
        <br />
        <label htmlFor="button-sandbox-appearance">Appearance </label>
        <select id="button-sandbox-appearance" onChange={onChangeField('appearance')} value={state.props.appearance}>
          <option value="solid">Solid</option>
          <option value="outlined">Outlined</option>
        </select>
        <br />
        <label htmlFor="button-sandbox-color">Color </label>
        <select id="button-sandbox-color" onChange={onChangeField('color')} value={state.props.color}>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="accent">Accent</option>
          <option value="none">None</option>
        </select>
        <br />
        <label htmlFor="button-sandbox-isDisabled">Disabled: </label>
        <input id="button-sandbox-isDisabled" type="checkbox" onChange={onChangeField('isDisabled')} />
        <br />
        <label htmlFor="button-sandbox-id">ID: </label>
        <input id="button-sandbox-id" type="text" value={state.props.id || ''} onChange={onChangeField('id')} />
        <br />
        <label htmlFor="button-sandbox-type">Type: </label>
        <select id="button-sandbox-type" onChange={onChangeField('type')}>
          <option value="button">Button</option>
          <option value="reset">Reset</option>
          <option value="submit">Submit</option>
        </select>
      </div>
    </div>

  );
}

ButtonPrimaryExampleProps.propTypes = propTypes;
ButtonPrimaryExampleProps.defaultProps = defaultProps;

export default ButtonPrimaryExampleProps;
