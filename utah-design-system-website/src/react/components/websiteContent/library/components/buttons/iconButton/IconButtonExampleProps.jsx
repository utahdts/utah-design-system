import {
  Form,
  formElementSizesEnum,
  ICON_BUTTON_APPEARANCE,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import IconButtonExamplePropsShape from '../../../../../../propTypesShapes/IconButtonExamplePropsShape';
import iconsDocumentationIcons from '../../../../resources/IconsDocumentation/Icons/iconsDocumentationIcons';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: IconButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function IconButtonExampleProps({ setState, state }) {
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.appearance = ICON_BUTTON_APPEARANCE.OUTLINED;
        draftState.props.color = 'none';
        // uses icons from `iconsDocumentationIcons` so make sure the initial value here is in there
        draftState.props.iconCssClass = 'help';
        draftState.props.isDisabled = false;
        draftState.props.size = 'medium';
        draftState.props.title = 'Tooltip Title';
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
      <Select id="props.iconCssClass" label="Icon" className="input--height-small1x">
        {
          iconsDocumentationIcons.map((icon) => (
            <SelectOption key={`icon-button__interactive-prop__${icon.title}`} label={icon.title} value={icon.cssClass} />
          ))
        }
      </Select>

      <Select id="props.appearance" label="Appearance" className="input--height-small1x">
        <SelectOption label="Outlined" value={ICON_BUTTON_APPEARANCE.OUTLINED} />
        <SelectOption label="Solid" value={ICON_BUTTON_APPEARANCE.SOLID} />
        <SelectOption label="Borderless" value={ICON_BUTTON_APPEARANCE.BORDERLESS} />
      </Select>

      <Select id="props.color" label="Color" className="input--height-small1x">
        <SelectOption label="Primary" value="primary" />
        <SelectOption label="Secondary" value="secondary" />
        <SelectOption label="Accent" value="accent" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput id="props.id" label="ID" className="input--height-small1x" />

      <Switch id="props.isDisabled" label="Disabled" width={20} />

      <Select id="props.size" label="Size" className="input--height-small1x">
        <SelectOption label="Small 1X" value={formElementSizesEnum.SMALL1X} />
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
        <SelectOption label="Large 1X" value={formElementSizesEnum.LARGE1X} />
      </Select>

      <TextInput id="props.title" label="Title" className="input--height-small1x" />

    </Form>
  );
}

IconButtonExampleProps.propTypes = propTypes;
IconButtonExampleProps.defaultProps = defaultProps;

export default IconButtonExampleProps;
