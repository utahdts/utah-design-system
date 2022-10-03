/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  CheckBox,
  Form,
  Switch,
  TextInput,
} from 'utah-design-system-react-library';
import SwitchExamplePropsShape from '../../../../../propTypesShapes/SwitchExamplePropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: SwitchExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

const DEFAULT_SWITCH_WIDTH = 50;

function SwitchExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.props.label = 'Switch Label';
        draftState.props.labelOff = 'Label Off';
        draftState.props.labelOn = 'Label On';
        draftState.props.value = true;
        draftState.props.width = DEFAULT_SWITCH_WIDTH;
      });
    },
    []
  );

  return (
    <div>
      <div>
        <Form
          onChange={({ id, value }) => {
            let returnValue = value;
            if (id === 'props.width') {
              returnValue = Number(value) || DEFAULT_SWITCH_WIDTH;
            }
            return returnValue;
          }}
          state={state}
          setState={setState}
        >
          <TextInput id="props.className" label="Class" className="input--height-xsmall" />

          <TextInput id="props.id" label="ID" className="input--height-xsmall" />

          <CheckBox id="props.isDisabled" label="Disabled" />

          <TextInput id="props.label" label="Label" className="input--height-xsmall" />

          <TextInput id="props.labelOff" label="Label - Off" className="input--height-xsmall" />

          <TextInput id="props.labelOn" label="Label - On" className="input--height-xsmall" />

          <Switch id="props.value" label="Value" labelOn="On" labelOff="Off" width={40} />

          <TextInput id="props.width" label="Width" className="input--height-xsmall" />
        </Form>
      </div>
    </div>
  );
}

SwitchExampleProps.propTypes = propTypes;
SwitchExampleProps.defaultProps = defaultProps;

export default SwitchExampleProps;
