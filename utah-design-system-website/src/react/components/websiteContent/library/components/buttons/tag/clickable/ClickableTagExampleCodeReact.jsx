import { formElementSizesEnum } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import TagClickableExamplePropsShape from '../../../../../../../propTypesShapes/ClickableTagExamplePropsShape';
import ExampleCodeReactProp from '../../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../../sandbox/SandboxIndent';

const propTypes = {
  state: PropTypes.shape({
    props: TagClickableExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function TagClickableExampleCode({
  state: {
    props: {
      className,
      iconLeft,
      iconRight,
      id,
      isRestricted,
      isSelected,
      size,
      style,
      title,
    },
  },
}) {
  return (
    <>
      &lt;ClickableTag
      <br />
      <ExampleCodeReactProp displayProp={(iconLeft !== 'none' && iconLeft) ? `iconLeft={Icons.${iconLeft}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconRight !== 'none' && iconRight) ? `iconRight={Icons.${iconRight}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isRestricted ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isSelected ? 'isSelected' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={style ? `style="${style}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onClick={() => { /* ... do something ... */ }'} indentLevel={1} />
      <ExampleCodeReactProp
        displayProp={(!size || size === formElementSizesEnum.MEDIUM)
          ? null
          : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)[0]}}`}
        indentLevel={1}
      />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      {title}
      <br />
      &lt;/ClickableTag&gt;
    </>
  );
}

TagClickableExampleCode.propTypes = propTypes;
TagClickableExampleCode.defaultProps = defaultProps;

export default TagClickableExampleCode;
