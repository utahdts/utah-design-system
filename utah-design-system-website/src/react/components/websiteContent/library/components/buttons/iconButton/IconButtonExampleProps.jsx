import {
  Form,
  formElementSizesEnum,
  ICON_BUTTON_APPEARANCE,
  Select,
  SelectOption,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import { useFormState } from '../../../../../../hooks/useFormState';
import { iconsDocumentationIcons } from '../../../../resources/IconsDocumentation/Icons/iconsDocumentationIcons';

/** @typedef {import('utah-design-system-website').IconButtonExampleProps} IconButtonExampleProps */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: IconButtonExampleProps}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function IconButtonExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <Select
        id="props.iconCssClass"
        className="input--height-small1x"
        label="Icon"
        onChange={onChange}
        value={valueFn('props.iconCssClass')}
      >
        {
          iconsDocumentationIcons.map((icon) => (
            <SelectOption key={`icon-button__interactive-prop__${icon.title}`} label={icon.title} value={icon.cssClass} />
          ))
        }
      </Select>

      <Select
        id="props.appearance"
        className="input--height-small1x"
        label="Appearance"
        onChange={onChange}
        value={valueFn('props.appearance')}
      >
        <SelectOption label="Outlined" value={ICON_BUTTON_APPEARANCE.OUTLINED} />
        <SelectOption label="Solid" value={ICON_BUTTON_APPEARANCE.SOLID} />
        <SelectOption label="Borderless" value={ICON_BUTTON_APPEARANCE.BORDERLESS} />
      </Select>

      <Select
        id="props.color"
        className="input--height-small1x"
        label="Color"
        onChange={onChange}
        value={valueFn('props.color')}
      >
        <SelectOption label="Primary" value="primary" />
        <SelectOption label="Secondary" value="secondary" />
        <SelectOption label="Accent" value="accent" />
        <SelectOption label="None" value="none" />
      </Select>

      <TextInput
        id="props.id"
        className="input--height-small1x"
        label="ID"
        onChange={onChange}
        value={valueFn('props.id')}
      />

      <Switch
        id="props.isDisabled"
        label="Disabled"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.isDisabled')}
        width={20}
      />

      <Select
        id="props.size"
        className="input--height-small1x"
        label="Size"
        onChange={onChange}
        value={valueFn('props.size')}
      >
        <SelectOption label="Small 1X" value={formElementSizesEnum.SMALL1X} />
        <SelectOption label="Small" value={formElementSizesEnum.SMALL} />
        <SelectOption label="Medium" value={formElementSizesEnum.MEDIUM} />
        <SelectOption label="Large" value={formElementSizesEnum.LARGE} />
        <SelectOption label="Large 1X" value={formElementSizesEnum.LARGE1X} />
      </Select>

      <TextInput
        id="props.title"
        className="input--height-small1x"
        label="Title"
        onChange={onChange}
        value={valueFn('props.title')}
      />

    </Form>
  );
}
