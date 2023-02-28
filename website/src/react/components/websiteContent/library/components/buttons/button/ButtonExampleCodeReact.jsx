import { formElementSizesEnum } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import ButtonExamplePropsShape from '../../../../../../propTypesShapes/ButtonExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../sandbox/SandboxIndent';

const propTypes = {
  state: PropTypes.shape({
    props: ButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function ButtonExampleCode({
  state: {
    props: {
      appearance,
      isBusy,
      className,
      color,
      iconLeft,
      iconRight,
      isDisabled,
      id,
      size,
      style,
      title,
      type,
    },
  },
}) {
  return (
    <>
      &lt;Button
      <br />
      <ExampleCodeReactProp displayProp={appearance ? `appearance="${appearance}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={color ? `color="${color}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconLeft !== 'none' && iconLeft) ? `iconLeft={Icons.${iconLeft}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconRight !== 'none' && iconRight) ? `iconRight={Icons.${iconRight}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isBusy ? 'busy={true}' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'disabled={true}' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={style ? `style="${style}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(type && type !== 'button') ? `type="${type}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onClick={() => { /* ... do something ... */ }'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(!size || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)[0]}}`} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      {title}
      <br />
      &lt;/Button&gt;
    </>
  );
}

ButtonExampleCode.propTypes = propTypes;
ButtonExampleCode.defaultProps = defaultProps;

export default ButtonExampleCode;
