/* eslint-disable no-param-reassign */
import {
  Form,
  formElementSizesEnum,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import BadgesExamplePropsShape from '../../../../../../propTypesShapes/BadgesExamplePropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: BadgesExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function BadgesExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.onClick = () => alert('I am so ashamed');
      });
    },
    []
  );

  return (
    <Form
      // onSubmit(({ state, validationErrors }) => ... do whatever ...)
      state={state}
      setState={setState}
      className="form--stacked"
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
        <SelectOption label="Small 1X" value={formElementSizesEnum.SMALL1X} />
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

BadgesExampleProps.propTypes = propTypes;
BadgesExampleProps.defaultProps = defaultProps;

export default BadgesExampleProps;
