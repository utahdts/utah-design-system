/* eslint-disable react/jsx-props-no-spreading */
import { Button, RefShape } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import TooltipsExamplePropsShape from '../../../../../propTypesShapes/TooltipsExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: TooltipsExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function TooltipsExampleRender({
  state: {
    props: {
      onClick,
    },
  },
  innerRef,
}) {
  return (
    <Button
      id="i-should-not-be-here"
      innerRef={innerRef}
      onClick={onClick || (() => { })}
    >
      Stop looking at me
    </Button>
  );
}

TooltipsExampleRender.propTypes = propTypes;
TooltipsExampleRender.defaultProps = defaultProps;

export default TooltipsExampleRender;
