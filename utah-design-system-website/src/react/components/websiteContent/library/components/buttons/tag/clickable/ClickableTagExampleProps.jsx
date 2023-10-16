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
import TagClickableExamplePropsShape from '../../../../../../../propTypesShapes/ClickableTagExamplePropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: TagClickableExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function ClickableTagExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.className = '';
        draftState.props.iconLeft = 'none';
        draftState.props.iconRight = 'none';
        draftState.props.id = '';
        draftState.props.isRestricted = false;
        draftState.props.isSelected = false;
        draftState.props.size = 'medium';
        draftState.props.title = 'Tag Title';
      });
    },
    []
  );

  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <TextInput id="props.className" label="Class" className="input--height-small1x" />

      <Switch id="props.isRestricted" label="Disabled" width={20} />

      <Select id="props.iconLeft" label="Icon Left" className="input--height-small1x">
        <SelectOption label="Checkmark" value="IconCheck" />
        <SelectOption label="Arrow" value="IconArrowLeft" />
        <SelectOption label="None" value="none" />
      </Select>

      <Select id="props.iconRight" label="Icon Right" className="input--height-small1x">
        <SelectOption label="Checkmark" value="IconCheck" />
        <SelectOption label="Arrow" value="IconArrowRight" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput id="props.id" label="ID" className="input--height-small1x" />

      <Switch id="props.isSelected" label="Selected" />

      <Select id="props.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
      </Select>

      <TextInput id="props.title" label="Title (children)" className="input--height-small1x" />

    </Form>
  );
}

ClickableTagExampleProps.propTypes = propTypes;
ClickableTagExampleProps.defaultProps = defaultProps;

export default ClickableTagExampleProps;
