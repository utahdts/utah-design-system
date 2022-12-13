/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from '@utahdts/utah-design-system';
import ButtonExamplePropsShape from '../../../../../../propTypesShapes/ButtonExamplePropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: ButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function ConfirmationButtonExampleProps({ setState, state }) {
  useEffect(
    () => {
      // default property values
      setState((draftState) => {
        draftState.props.appearance = 'outlined';
        draftState.props.color = 'none';
        draftState.props.iconLeft = 'none';
        draftState.props.iconRight = 'none';
        draftState.props.size = 'medium';
        draftState.props.title = 'Button Title';
        draftState.props.type = 'button';
      });
    },
    []
  );

  return (
    <Form
      className="form--stacked"
      state={state}
      setState={setState}
    >
      <Select id="props.appearance" label="Appearance" className="input--height-small1x">
        <SelectOption label="Outlined" value="outlined" />
        <SelectOption label="Solid" value="solid" />
      </Select>
      <Switch id="props.isBusy" label="Busy" />

      <TextInput id="props.className" label="Class" className="input--height-small1x" />

      <Select id="props.color" label="Color" className="input--height-small1x">
        <SelectOption label="Primary" value="primary" />
        <SelectOption label="Secondary" value="secondary" />
        <SelectOption label="Accent" value="accent" />
        <SelectOption label="None" value="none" />
      </Select>

      <Switch id="props.isDisabled" label="Disabled" width={20} />

      <Select id="props.iconLeft" label="Icon Left" className="input--height-small1x">
        <SelectOption label="Chevron" value="IconChevron" />
        <SelectOption label="Arrow" value="IconArrowLeft" />
        <SelectOption label="None" value="none" />
      </Select>

      <Select id="props.iconRight" label="Icon Right" className="input--height-small1x">
        <SelectOption label="Chevron" value="IconChevron" />
        <SelectOption label="Arrow" value="IconArrowRight" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput id="props.id" label="ID" className="input--height-small1x" />

      <Select id="props.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
        <SelectOption label="Large 1X" value={formElementSizesEnum.LARGE1X} />
      </Select>

      <TextInput id="props.title" label="Title (children)" className="input--height-small1x" />

      <Select id="props.type" label="Type" className="input--height-small1x">
        <SelectOption label="Button" value="button" />
        <SelectOption label="Reset" value="reset" />
        <SelectOption label="Submit" value="submit" />
      </Select>

    </Form>
  );
}

ConfirmationButtonExampleProps.propTypes = propTypes;
ConfirmationButtonExampleProps.defaultProps = defaultProps;

export default ConfirmationButtonExampleProps;
