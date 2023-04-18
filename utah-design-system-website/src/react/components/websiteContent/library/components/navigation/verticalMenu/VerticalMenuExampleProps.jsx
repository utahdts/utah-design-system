import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Form } from '@utahdts/utah-design-system';
import VerticalMenuPropsShape from '../../../../../../propTypesShapes/VerticalMenuPropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: VerticalMenuPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function VerticalMenuExampleProps({ setState, state }) {
  useEffect(
    () => {
      setState(() => { });
    },
    []
  );

  return (
    <Form
      state={state}
      setState={setState}
      className="form--stacked"
    >
      Form goes here.
    </Form>
  );
}

VerticalMenuExampleProps.propTypes = propTypes;
VerticalMenuExampleProps.defaultProps = defaultProps;

export default VerticalMenuExampleProps;
