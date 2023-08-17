/** @typedef {import('../../../../../../typedefs.d').TooltipsExamplePropsShape} TooltipsExamplePropsShape */
/** @typedef {import('use-immer').Updater<TooltipsExamplePropsShape>} UpdaterTooltipsExampleProps */

import {
  ExternalLink,
  Form,
  Switch,
  TextInput
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import TooltipsExamplePropsShape from '../../../../../propTypesShapes/TooltipsExamplePropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: TooltipsExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

/**
 * @param {Object} props
 * @param {any} props.setState
 * @param {Object} props.state
 * @param {TooltipsExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
function TooltipsExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.isPopperVisible = false;
        draftState.props.offsetDistance = '0';
        draftState.props.offsetSkidding = '5';
        draftState.props.popupText = 'Now you see me';
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
      <TextInput id="props.popupText" label="Text (children)" className="input--height-small1x" />

      <Switch id="props.isPopperVisible" label="Visible" width={20} />

      <TextInput id="props.offsetDistance" label="Distance" className="input--height-small1x" />
      <TextInput id="props.offsetSkidding" label="Skidding" className="input--height-small1x" />
      <ExternalLink href="https://popper.js.org/docs/v2/modifiers/offset/">Distance/Skidding Docs</ExternalLink>
    </Form>
  );
}

TooltipsExampleProps.propTypes = propTypes;
TooltipsExampleProps.defaultProps = defaultProps;

export default TooltipsExampleProps;
