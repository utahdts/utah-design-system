import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';
import { SandboxIndent } from '../../../../../sandbox/SandboxIndent';

/** @typedef {import('utah-design-system-website').AccordionExamplePropsShape} AccordionExamplePropsShape */
/**
 * @param {object} props
 * @param {object} props.state
 * @param {AccordionExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function AccordionExampleCodeReact({
  state: {
    props: {
      children,
      className,
      contentClassName,
      headerClassName,
      headerContent,
      headingLevel,
      isOpen,
    },
  },
}) {
  return (
    <>
      &lt;Accordion
      <br />
      <ExampleCodeReactProp displayProp={`className="${className}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`contentClassName="${contentClassName}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`headerClassName="${headerClassName}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`headerContent={<span>${headerContent}</span>}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'headerClassName="button--primary-color button--solid"'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`headingLevel={${headingLevel}}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={'id="sandbox-accordion"'} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`isOpen={${isOpen}}`} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={2} />
      <ExampleCodeReactProp displayProp={children} indentLevel={1} />
      &lt;/Accordion&gt;
    </>
  );
}
