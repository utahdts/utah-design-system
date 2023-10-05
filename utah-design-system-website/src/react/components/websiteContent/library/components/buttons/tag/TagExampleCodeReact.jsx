import { formElementSizesEnum } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import TagExamplePropsShape from '../../../../../../propTypesShapes/TagExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../sandbox/SandboxIndent';

const propTypes = {
  state: PropTypes.shape({
    props: TagExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function TagExampleCode({
  state: {
    props: {
      className,
      isClearable,
      iconLeft,
      iconRight,
      isDisabled,
      id,
      onClick,
      size,
      style,
      title,
    },
  },
}) {
  return (
    <>
      &lt;Tag
      <br />
      <ExampleCodeReactProp displayProp={isClearable ? 'isClearable' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isClearable ? 'onClear={() => { /* ... do something ... */ }' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconLeft !== 'none' && iconLeft) ? `iconLeft={Icons.${iconLeft}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconRight !== 'none' && iconRight) ? `iconRight={Icons.${iconRight}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'isDisabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={style ? `style="${style}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={onClick ? 'onClick={() => { /* ... do something ... */ }' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(!size || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)[0]}}`} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      {title}
      <br />
      &lt;/Tag&gt;
    </>
  );
}

TagExampleCode.propTypes = propTypes;
TagExampleCode.defaultProps = defaultProps;

export default TagExampleCode;
