import { ExampleCodeReactProp } from '../../../../../sandbox/ExampleCodeReactProp';

/** @typedef {import('utah-design-system-website').TabGroupExamplePropsShape} TabGroupExamplePropsShape */

/**
 * @param {object} props
 * @param {object} props.state
 * @param {TabGroupExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */

export function TabGroupExampleCodeReact({
  state: {
    props: {
      tabA,
      tabB,
      panelA,
      panelB,
      isVertical,
    },
  },
}) {
  return (
    <>
      &lt;TabGroup
      <ExampleCodeReactProp displayProp={` isVertical="${isVertical}">`} indentLevel={0} />
      <ExampleCodeReactProp displayProp="<TabList>" indentLevel={1} />
      <ExampleCodeReactProp displayProp={`<Tab id="button-A">${tabA}</Tab>`} indentLevel={2} />
      <ExampleCodeReactProp displayProp={`<Tab id="button-B">${tabB}</Tab>`} indentLevel={2} />
      <ExampleCodeReactProp displayProp="</TabList>" indentLevel={1} />
      <ExampleCodeReactProp displayProp="<TabPanels>" indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<TabPanel tabId="button-A">'} indentLevel={2} />
      <ExampleCodeReactProp displayProp={panelA} indentLevel={3} />
      <ExampleCodeReactProp displayProp="</TabPanel>" indentLevel={2} />
      <ExampleCodeReactProp displayProp={'<TabPanel tabId="button-B">'} indentLevel={2} />
      <ExampleCodeReactProp displayProp={panelB} indentLevel={3} />
      <ExampleCodeReactProp displayProp="</TabPanel>" indentLevel={2} />
      <ExampleCodeReactProp displayProp="</TabPanels>" indentLevel={1} />
      &lt;/TabGroup&gt;
    </>
  );
}
