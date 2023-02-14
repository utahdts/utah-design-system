/* eslint-disable react/jsx-props-no-spreading */
import { RefShape } from '@utahdts/utah-design-system';
import Button from '@utahdts/utah-design-system/react/components/buttons/Button';
import PropTypes from 'prop-types';
import BadgesExamplePropsShape from '../../../../../../propTypesShapes/BadgesExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: BadgesExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function BadgesExampleRender({
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

BadgesExampleRender.propTypes = propTypes;
BadgesExampleRender.defaultProps = defaultProps;

export default BadgesExampleRender;
