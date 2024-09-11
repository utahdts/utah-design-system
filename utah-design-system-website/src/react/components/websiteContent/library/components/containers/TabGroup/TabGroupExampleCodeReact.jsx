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
      isVertical,
      panelA,
      panelB,
      selectedTab,
      tabA,
      tabB,
    },
  },
}) {
  return (
    <>
      &lt;TabGroup
      <br />
      <ExampleCodeReactProp displayProp={`isVertical="${isVertical}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp={`selectedTab="${selectedTab}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp=">" indentLevel={0} />
      <ExampleCodeReactProp displayProp="<TabList>" indentLevel={1} />
      <ExampleCodeReactProp displayProp={`<Tab id="tab-A">${tabA}</Tab>`} indentLevel={2} />
      <ExampleCodeReactProp displayProp={`<Tab id="tab-B">${tabB}</Tab>`} indentLevel={2} />
      <ExampleCodeReactProp displayProp="</TabList>" indentLevel={1} />
      <ExampleCodeReactProp displayProp="<TabPanels>" indentLevel={1} />
      <ExampleCodeReactProp displayProp={'<TabPanel tabId="tab-A">'} indentLevel={2} />
      <ExampleCodeReactProp displayProp={panelA} indentLevel={3} />
      <ExampleCodeReactProp displayProp="</TabPanel>" indentLevel={2} />
      <ExampleCodeReactProp displayProp={'<TabPanel tabId="tab-B">'} indentLevel={2} />
      <ExampleCodeReactProp displayProp={panelB} indentLevel={3} />
      <ExampleCodeReactProp displayProp="</TabPanel>" indentLevel={2} />
      <ExampleCodeReactProp displayProp="</TabPanels>" indentLevel={1} />
      &lt;/TabGroup&gt;
    </>
  );
}
