import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TabGroupPropsShape} TabGroupExamplePropsShape */

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
      panelA,
      panelB,
      isVertical,
      tabA,
      tabB,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }} ref={innerRef}>
      <TabGroup defaultValue="tab-A" isVertical={isVertical}>
        <TabList>
          <Tab id="tab-A">{tabA}</Tab>
          <Tab id="tab-B">{tabB}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel tabId="tab-A">
            {panelA}
          </TabPanel>
          <TabPanel tabId="tab-B">
            {panelB}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
