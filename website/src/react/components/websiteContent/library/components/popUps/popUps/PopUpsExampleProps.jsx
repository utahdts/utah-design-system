import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Form } from '@utahdts/utah-design-system';
import PopUpsPropsShape from '../../../../../../propTypesShapes/PopUpsPropsShape';

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

PopUpsExampleProps.propTypes = propTypes;
PopUpsExampleProps.defaultProps = defaultProps;

export default PopUpsExampleProps;
