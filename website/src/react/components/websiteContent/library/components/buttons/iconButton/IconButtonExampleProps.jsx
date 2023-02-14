import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Form } from '@utahdts/utah-design-system';
import IconButtonPropsShape from '../../../../../../propTypesShapes/IconButtonPropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: IconButtonPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function IconButtonExampleProps({ setState, state }) {
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

IconButtonExampleProps.propTypes = propTypes;
IconButtonExampleProps.defaultProps = defaultProps;

export default IconButtonExampleProps;
