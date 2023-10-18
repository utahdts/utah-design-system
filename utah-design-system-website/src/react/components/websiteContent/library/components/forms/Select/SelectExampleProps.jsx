// @ts-check
import {
  Form,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import SelectExamplePropsShape from '../../../../../../propTypesShapes/SelectExamplePropsShape';

/** @typedef {import('../../../../../../../typedefs.d').SelectExamplePropsShape} SelectExamplePropsShape */

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: SelectExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: SelectExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {SelectExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
function SelectExampleProps({ setState, state }) {
  useEffect(
    () => {
      setState((draftState) => {
        // default property values
        draftState.props.className = '';
        draftState.props.errorMessage = '';
        draftState.props.id = '';
        draftState.props.isClearable = false;
        draftState.props.isDisabled = false;
        draftState.props.label = 'Select Label';
        draftState.props.isRequired = false;
        draftState.props.value = '';
      });
    },
    [setState]
  );

  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />
      <TextInput id="props.errorMessage" label="Error Message" className="input--height-small1x" />
      <TextInput id="props.id" label="ID" className="input--height-small1x" />
      <Switch id="props.isClearable" label="Clearable" width={20} />
      <Switch id="props.isDisabled" label="Disabled" width={20} />
      <Switch id="props.isRequired" label="Required" width={20} />
      <TextInput id="props.label" label="Label" className="input--height-small1x" />
      <Select id="props.value" label="Value" className="input--height-small1x" placeholder={'Choose favorite "Mighty 5"'}>
        <SelectOption label="Arches National Park" value="arches" />
        <SelectOption label="Bryce Canyon National Park" value="bryce" />
        <SelectOption label="Canyonlands National Park" value="canyonlands" />
        <SelectOption label="Capitol Reef National Park" value="capitol-reef" />
        <SelectOption label="Zion National Park" value="zion" />
      </Select>
    </Form>
  );
}

SelectExampleProps.propTypes = propTypes;
SelectExampleProps.defaultProps = defaultProps;

export default SelectExampleProps;
