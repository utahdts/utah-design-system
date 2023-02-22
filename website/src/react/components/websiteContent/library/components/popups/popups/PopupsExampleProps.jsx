import {
  Form,
  Select,
  SelectOption,
  Switch
} from '@utahdts/utah-design-system';
import popperPlacement from '@utahdts/utah-design-system/react/enums/popperPlacement';
import startCase from 'lodash/startCase';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import PopUpsPropsShape from '../../../../../../propTypesShapes/PopupsPropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: PopUpsPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function PopUpsExampleProps({ setState, state }) {
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.hasCloseButton = false;
        draftState.props.isVisible = false;
        draftState.props.placement = popperPlacement.BOTTOM;
        draftState.props.popupType = 'onClick';
      });
    },
    []
  );

  return (
    <Form
      className="form--stacked"
      setState={setState}
      state={state}
    >
      <Select id="props.placement" label="Placement" className="input--height-small1x">
        {
          Object.entries(popperPlacement)
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

PopUpsExampleProps.propTypes = propTypes;
PopUpsExampleProps.defaultProps = defaultProps;

export default PopUpsExampleProps;
