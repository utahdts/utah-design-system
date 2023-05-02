import {
  Tab,
  TabGroup,
  TabGroupTitle,
  TabList,
  TabPanel,
  TabPanels,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useImmer } from 'use-immer';
import sandboxCodeTypeEnum from '../../enums/sandboxCodeTypeEnum';
import PreCodeForRef from '../preCode/PreCodeForRef';

const propTypes = {
  // these use SCREAMING_SNAKE_CASE so that they are identifiable as component variable names and not the real component names
  CODE_EXAMPLE: PropTypes.func.isRequired,
  PROPS_EXAMPLE: PropTypes.func.isRequired,
  RENDER_EXAMPLE: PropTypes.func.isRequired,
};
const defaultProps = {};

function SandboxExample({ CODE_EXAMPLE, PROPS_EXAMPLE, RENDER_EXAMPLE }) {
  const [state, setState] = useImmer({
    props: {},
  });
  const renderedRef = useRef(null);

  return (
    <div className="sandbox-example">
      <div className="sandbox-example__top">
        <div className="sandbox-example__component">
          <RENDER_EXAMPLE state={state} setState={setState} innerRef={renderedRef} />
        </div>
        <div className="sandbox-example__props-inputs">
          <PROPS_EXAMPLE state={state} setState={setState} />

        </div>
      </div>
      <div className="sandbox-example__bottom">
        <TabGroup defaultValue={sandboxCodeTypeEnum.HTML}>
          <TabGroupTitle className="visually-hidden">Code Example</TabGroupTitle>
          <TabList className="tab-group--small-text">
            <Tab id={sandboxCodeTypeEnum.HTML}>{sandboxCodeTypeEnum.HTML}</Tab>
            <Tab id={sandboxCodeTypeEnum.REACT}>{sandboxCodeTypeEnum.REACT}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId={sandboxCodeTypeEnum.HTML}>
              <PreCodeForRef targetRef={renderedRef} deps={[state.props]} allowScrollOverflow addHorizontalPadding maxHeight="60vh" />
            </TabPanel>
            <TabPanel tabId={sandboxCodeTypeEnum.REACT} className="px-spacing pb-spacing">
              <pre>
                <code>
                  <CODE_EXAMPLE state={state} />
                </code>
              </pre>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

SandboxExample.propTypes = propTypes;
SandboxExample.defaultProps = defaultProps;

export default SandboxExample;
