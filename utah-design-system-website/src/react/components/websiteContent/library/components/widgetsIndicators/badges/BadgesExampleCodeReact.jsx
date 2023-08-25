import { formElementSizesEnum } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import BadgesExamplePropsShape from '../../../../../../propTypesShapes/BadgesExamplePropsShape';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../sandbox/SandboxIndent';

const propTypes = {
  state: PropTypes.shape({
    props: BadgesExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function BadgesExampleCode({
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
      &lt;Badges
      <br />
      <ExampleCodeReactProp displayProp={appearance ? `appearance="${appearance}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={color ? `color="${color}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconLeft !== 'none' && iconLeft) ? `iconLeft={Icons.${iconLeft}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(iconRight !== 'none' && iconRight) ? `iconRight={Icons.${iconRight}()}` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isBusy ? 'busy' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={isDisabled ? 'disabled' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={style ? `style="${style}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(type && type !== 'badge') ? `type="${type}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'onClick={() => { /* ... do something ... */ }'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={(!size || size === formElementSizesEnum.MEDIUM) ? null : `size={formElementSizesEnum.${Object.entries(formElementSizesEnum).find(([, value]) => value === size)[0]}}`} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      {title}
      <br />
      &lt;/Badges&gt;
    </>
  );
}

BadgesExampleCode.propTypes = propTypes;
BadgesExampleCode.defaultProps = defaultProps;

export default BadgesExampleCode;
