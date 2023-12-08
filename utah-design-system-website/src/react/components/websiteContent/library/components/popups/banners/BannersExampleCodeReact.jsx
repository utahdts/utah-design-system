// @ts-check
import React from 'react';
import { joinClassNames } from '@utahdts/utah-design-system';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';
import SandboxIndent from '../../../../../sandbox/SandboxIndent';

export default function BannersExampleCodeReact({
  state: {
    props: {
      className,
      color,
      icon,
      message,
      position,
    },
  },
}) {
  return (
    <>
      &lt;Banner
      <br />
      <ExampleCodeReactProp displayProp={`className="${joinClassNames(className, color)}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={position ? `position="${position}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp="onClose={() => console.log('Make sure to close the banner!')}" indentLevel={1} />
      &gt;
      {icon !== 'none'
        ? (
          <>
            <br />
            <SandboxIndent indentLevel={1} />
            &lt;BannerIcon&gt;
            <br />
            <SandboxIndent indentLevel={2} />
            <ExampleCodeReactProp displayProp={`<span className="${icon}" aria-hidden="true" />`} indentLevel={1} />
            <SandboxIndent indentLevel={1} />
            &lt;/BannerIcon&gt;
          </>
        )
        : null}
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;BannerMessage&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      {message}
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;/BannerMessage&gt;
      <br />
      &lt;/Button&gt;
    </>
  );
}
