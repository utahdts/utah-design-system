import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Form } from 'utah-design-system-react-library';
import SegmentedButtonPropsShape from '../../../../../../propTypesShapes/SegmentedButtonPropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: SegmentedButtonPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function SegmentedButtonExampleProps({ setState, state }) {
  useEffect(
    () => {
      setState(() => {});
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

SegmentedButtonExampleProps.propTypes = propTypes;
SegmentedButtonExampleProps.defaultProps = defaultProps;

export default SegmentedButtonExampleProps;
