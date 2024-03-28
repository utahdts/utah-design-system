import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TabGroupExamplePropsShape} TabGroupExamplePropsShape */

/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @param {object} props.state
 * @param {TabGroupExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function TabGroupExampleRender({
  state: {
    props: {
      tabA,
      tabB,
      panelA,
      panelB,
      isVertical,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }} ref={innerRef}>
      <TabGroup defaultValue="button-A" isVertical={isVertical}>
        <TabList>
          <Tab id="button-A">{tabA}</Tab>
          <Tab id="button-B">{tabB}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel tabId="button-A">
            {panelA}
          </TabPanel>
          <TabPanel tabId="button-B">
            {panelB}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
