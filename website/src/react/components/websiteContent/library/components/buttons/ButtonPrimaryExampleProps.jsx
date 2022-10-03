/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  CheckBox,
  Form,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from 'utah-design-system-react-library';
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
      setState((draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.props.appearance = 'outlined';
        draftState.props.color = 'none';
        draftState.props.size = 'medium';
        draftState.props.title = 'Button Title';
        draftState.props.type = 'button';
      });
    },
    []
  );

  return (
    <div>
      <div>
        <Form
          // onSubmit(({ state, validationErrors }) => ... do whatever ...)
          state={state}
          setState={setState}
        >
          <TextInput id="props.title" label="Title" className="input--height-xsmall" />

          {/* <CheckBox id="props.isBusy" label="Busy" /> */}
          <Switch id="props.isBusy" label="Busy" labelOn="On" labelOff="Off" width={40} />

          <TextInput id="props.className" label="Class" className="input--height-xsmall" />

          {/* TODO: what about optgroup? */}
          <Select id="props.appearance" label="Appearance" className="input--height-xsmall">
            <SelectOption label="Outlined" value="outlined" />
            <SelectOption label="Solid" value="solid" />
          </Select>

          <Select id="props.color" label="Color" className="input--height-xsmall">
            <SelectOption label="Primary" value="primary" />
            <SelectOption label="Secondary" value="secondary" />
            <SelectOption label="Accent" value="accent" />
            <SelectOption label="None" value="none" />
          </Select>

          <CheckBox id="props.isDisabled" label="Disabled" />

          <TextInput id="props.id" label="ID" className="input--height-xsmall" />

          <Select id="props.type" label="Type" className="input--height-xsmall">
            <SelectOption label="Button" value="button" />
            <SelectOption label="Reset" value="reset" />
            <SelectOption label="Submit" value="submit" />
          </Select>

          <Select id="props.size" label="Size" className="input--height-xsmall">
            <SelectOption label="Small" value="small" />
            <SelectOption label="Medium" value="medium" />
            <SelectOption label="Large" value="large" />
            <SelectOption label="X-Large" value="xlarge" />
          </Select>
        </Form>
      </div>
    </div>
  );
}

ButtonPrimaryExampleProps.propTypes = propTypes;
ButtonPrimaryExampleProps.defaultProps = defaultProps;

export default ButtonPrimaryExampleProps;
