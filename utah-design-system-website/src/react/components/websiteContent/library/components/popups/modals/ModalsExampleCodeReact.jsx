import React from 'react';
import { joinClassNames } from '@utahdts/utah-design-system';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../sandbox/SandboxIndent';

/** @typedef {import('../../../../../../../typedefs.d').ModalExamplePropsShape} ModalExamplePropsShape */

/**
 * @param {Object} props
 * @param {Object} props.state
 * @param {ModalExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export function ModalsExampleCodeReact({
  state: {
    props: {
      className,
      title,
      content,
      size,
      isForced,
    },
  },
}) {
  return (
    <>
      &lt;Modal
      <br />
      <ExampleCodeReactProp displayProp={`className="${joinClassNames(className, size)}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp='id="modal-example"' indentLevel={1} />
      {isForced ? '' : <ExampleCodeReactProp displayProp="onClose={myFunction}" indentLevel={1} />}
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;ModalTitle&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      <ExampleCodeReactProp displayProp={title} indentLevel={1} />
      <SandboxIndent indentLevel={1} />
      &lt;/ModalTitle&gt;
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;ModalContent&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      <ExampleCodeReactProp displayProp={content} indentLevel={1} />
      <SandboxIndent indentLevel={1} />
      &lt;/ModalContent&gt;
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;ModalFooter&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      &lt;Button&gt;Cancel&lt;/Button&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      &lt;Button&gt;Okay&lt;/Button&gt;
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;/ModalFooter&gt;
      <br />
      &lt;/Modal&gt;
    </>
  );
}
