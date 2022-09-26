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
  // these use SCREAMING_SNAKE_CASE so that they are identifiable as component variable names and not the real component names
  CODE_EXAMPLE: PropTypes.func.isRequired,
  PROPS_EXAMPLE: PropTypes.func.isRequired,
  RENDER_EXAMPLE: PropTypes.func.isRequired,
};
const defaultProps = {};

function cleanHtmlForInnerHTML(html) {
  return (html || '').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // change `disabled=""` to be just `disabled`
    .replace(/=""/g, '');
}
function SandboxExample({ CODE_EXAMPLE, PROPS_EXAMPLE, RENDER_EXAMPLE }) {
  const [state, setState] = useImmer({
    props: {},
  });
  const renderedRef = useRef(null);

  // pull rendered content AFTER rendered so as to get the current value (ref has value BEFORE render completes)
  const [innerHtml, setInnerHtml] = useState('');
  useLayoutEffect(
    () => {
      let cleanHTML = cleanHtmlForInnerHTML(renderedRef.current?.outerHTML);

      const events = [
        'onClick',
      ]
        .filter((event) => renderedRef.current && renderedRef.current[event.toLowerCase()])
        .map((event) => ` ${event}={() => { /* ... do something ... */ } `)
        .join(' ');
      if (events) {
        const endStartTag = cleanHTML.indexOf('&gt;');
        cleanHTML = `${cleanHTML.substring(0, endStartTag)} ${events} ${cleanHTML.substring(endStartTag)}`;
      }
      setInnerHtml(cleanHTML);
    },
    // only update when the properties change so as not to get an infinite loop
    [state.props]
  );

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
        <TabGroup defaultValue={sandboxCodeTypeEnum.REACT}>
          <TabGroupTitle className="TODO: --hidden?">Code Example</TabGroupTitle>
          <TabList>
            <Tab id={sandboxCodeTypeEnum.HTML}>{sandboxCodeTypeEnum.HTML}</Tab>
            <Tab id={sandboxCodeTypeEnum.REACT}>{sandboxCodeTypeEnum.REACT}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId={sandboxCodeTypeEnum.HTML}>
              <div
                className="TODO: how classy should i be?"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: innerHtml }}
              />
            </TabPanel>
            <TabPanel tabId={sandboxCodeTypeEnum.REACT}><CODE_EXAMPLE state={state} /></TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

SandboxExample.propTypes = propTypes;
SandboxExample.defaultProps = defaultProps;

export default SandboxExample;
