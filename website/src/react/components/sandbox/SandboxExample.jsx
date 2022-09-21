import PropTypes from 'prop-types';
import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useImmer } from 'use-immer';
import {
  Tab,
  TabGroup,
  TabGroupTitle,
  TabList,
  TabPanel,
  TabPanels,
} from 'utah-design-system-react-library';
import sandboxCodeTypeEnum from '../../enums/sandboxCodeTypeEnum';

const propTypes = {
  CodeExample: PropTypes.func.isRequired,
  PropsExample: PropTypes.func.isRequired,
  RenderExample: PropTypes.func.isRequired,
};
const defaultProps = {};

function cleanHtmlForInnerHTML(html) {
  return (html || '').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // change `disabled=""` to be just `disabled`
    .replace(/=""/g, '');
}
function SandboxExample({ CodeExample, PropsExample, RenderExample }) {
  const [state, setState] = useImmer({
    props: {},
  });
  const renderedRef = useRef(null);

  // pull rendered content AFTER rendered so as to get the current value (ref has value BEFORE render completes)
  const [innerHtml, setInnerHtml] = useState('');
  useLayoutEffect(
    () => {
      setInnerHtml(cleanHtmlForInnerHTML(renderedRef.current?.outerHTML));
    },
    // only update when the properties change so as not to get an infinite loop
    [state.props]
  );

  return (
    <div>
      <div>
        <RenderExample state={state} setState={setState} innerRef={renderedRef} />
        <PropsExample state={state} setState={setState} />
      </div>
      <div>
        <TabGroup defaultValue={sandboxCodeTypeEnum.REACT}>
          <TabGroupTitle className="TODO: --hidden?">Code Example</TabGroupTitle>
          <TabList>
            <Tab id={sandboxCodeTypeEnum.HTML}>{sandboxCodeTypeEnum.HTML}</Tab>
            <Tab id={sandboxCodeTypeEnum.REACT}>{sandboxCodeTypeEnum.REACT}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId={sandboxCodeTypeEnum.HTML}>
              <div
                className="what-the-flip"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: innerHtml }}
              />
            </TabPanel>
            <TabPanel tabId={sandboxCodeTypeEnum.REACT}><CodeExample state={state} /></TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

SandboxExample.propTypes = propTypes;
SandboxExample.defaultProps = defaultProps;

export default SandboxExample;
