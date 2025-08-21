import {
  Form,
  popupPlacement,
  Select,
  SelectOption,
  Switch
} from '@utahdts/utah-design-system';
import { startCase } from 'lodash-es';
import { useFormState } from '../../../../../../hooks/useFormState';

/** @typedef {import('utah-design-system-website').PopupsExamplePropsShape} PopupsExamplePropsShape */

/**
 * @param {object} props
 * @param {import('use-immer').Updater<{props: PopupsExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @returns {import('react').JSX.Element}
 */
export function PopupsExampleProps({ setState, state }) {
  const { onChange, valueFn } = useFormState(state, setState);
  return (
    <Form className="form--stacked">
      <Select
        id="props.placement"
        className="input--height-small1x"
        label="Placement"
        onChange={onChange}
        value={valueFn('props.placement')}
      >
        {
          Object.entries(popupPlacement)
            .map(([placementKey, placementValue]) => (
              <SelectOption key={`popups__interactive-prop__${placementKey}`} label={startCase(placementValue)} value={placementValue} />
            ))
        }
      </Select>

      <Select
        id="props.popupType"
        className="input--height-small1x"
        label="Event Type"
        onChange={onChange}
        value={valueFn('props.popupType')}
      >
        <SelectOption key="popups__interactive-prop__onClick" label="onClick" value="onClick" />
        <SelectOption key="popups__interactive-prop__onHover" label="onHover" value="onHover" />
      </Select>

      <Switch
        id="props.hasCloseButton"
        label="Close Icon"
        // @ts-expect-error
        onChange={onChange}
        value={valueFn('props.hasCloseButton')}
        width={20}
      />
    </Form>
  );
}
