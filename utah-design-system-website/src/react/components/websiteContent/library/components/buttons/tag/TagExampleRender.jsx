/* eslint-disable react/jsx-props-no-spreading */
import {
  Tag,
  Icons,
  RefShape,
  useBanner,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import TagExamplePropsShape from '../../../../../../propTypesShapes/TagExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: TagExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function TagExampleRender({
  state: {
    props: {
      className,
      isClearable,
      isDisabled,
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
    <Tag
      className={className}
      iconLeft={((iconLeft === 'none') || !iconLeft) ? null : Icons[iconLeft]()}
      iconRight={((iconRight === 'none') || !iconRight) ? null : Icons[iconRight]()}
      id={id}
      innerRef={innerRef}
      isDisabled={isDisabled}
      onClear={isClearable ? (() => addBanner({ message: 'You have cleared the Tag.', duration: 3500 })) : null}
      size={size}
    >
      {title || ''}
    </Tag>
  );
}

TagExampleRender.propTypes = propTypes;
TagExampleRender.defaultProps = defaultProps;

export default TagExampleRender;
