import {
  Form,
  popupPlacement,
  Select,
  SelectOption,
  Switch
} from '@utahdts/utah-design-system';
import startCase from 'lodash/startCase';

/** @typedef {import('utah-design-system-website').PopupsExamplePropsShape} PopupsExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: PopupsExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {PopupsExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export default function PopupsExampleProps({ setState, state }) {
  return (
    <Form
      className="form--stacked"
      setState={setState}
      state={state}
    >
      <Select id="props.placement" label="Placement" className="input--height-small1x">
        {
          Object.entries(popupPlacement)
            .map(([placementKey, placementValue]) => (
              <SelectOption key={`popups__interactive-prop__${placementKey}`} label={startCase(placementValue)} value={placementValue} />
            ))
        }
      </Select>

      <Select id="props.popupType" label="Event Type" className="input--height-small1x">
        <SelectOption key="popups__interactive-prop__onClick" label="onClick" value="onClick" />
        <SelectOption key="popups__interactive-prop__onHover" label="onHover" value="onHover" />
      </Select>

      <Switch id="props.hasCloseButton" label="Close Icon" width={20} />
    </Form>
  );
}
