/* eslint-disable react/jsx-props-no-spreading */
import {
  ClickableTag,
  Icons,
  RefShape,
  useBanner,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import TagExamplePropsShape from '../../../../../../../propTypesShapes/ClickableTagExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: TagExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function ClickableTagExampleRender({
  state: {
    props: {
      className,
      isRestricted,
      isSelected,
      iconLeft,
      iconRight,
      id,
      size,
      title,
    },
  },
  innerRef,
}) {
  const { addBanner } = useBanner();
  return (
    <ClickableTag
      className={className}
      iconLeft={((iconLeft === 'none') || !iconLeft) ? null : Icons[iconLeft]()}
      iconRight={((iconRight === 'none') || !iconRight) ? null : Icons[iconRight]()}
      id={id}
      innerRef={innerRef}
      isDisabled={isRestricted}
      isSelected={isSelected}
      onClick={() => addBanner({ message: 'You have clicked the Tag.', duration: 3500 })}
      size={size}
    >
      {title || ''}
    </ClickableTag>
  );
}

ClickableTagExampleRender.propTypes = propTypes;
ClickableTagExampleRender.defaultProps = defaultProps;

export default ClickableTagExampleRender;
