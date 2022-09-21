/* eslint-disable no-param-reassign */
import produce from 'immer';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: PropTypes.shape({
      // ... button props ... //
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
const defaultProps = {};

function ButtonPrimaryExampleProps({ setState, state }) {
  useEffect(
    () => {
      // default property values
      setState(produce((draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.props.title = 'Button Title';
      }));
    },
    []
  );

  return (
    <div>
      <div><input type="text" value={state.props.title || ''} onChange={(e) => setState(produce((draftState) => { draftState.props.title = e.target.value; }))} /></div>
    </div>

  );
}

ButtonPrimaryExampleProps.propTypes = propTypes;
ButtonPrimaryExampleProps.defaultProps = defaultProps;

export default ButtonPrimaryExampleProps;
