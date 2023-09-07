// @ts-check
import {
  Tab,
  TabGroup,
  TabGroupTitle,
  TabList,
  TabPanel,
  TabPanels,
  joinClassNames,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useImmer } from 'use-immer';
import sandboxCodeTypeEnum from '../../enums/sandboxCodeTypeEnum';
import PreCode from '../preCode/PreCode';
import PreCodeForRef from '../preCode/PreCodeForRef';

const propTypes = {
  // these use SCREAMING_SNAKE_CASE so that they are identifiable as component variable names and not the real component names
  CODE_EXAMPLE: PropTypes.func.isRequired,
  PROPS_EXAMPLE: PropTypes.func.isRequired,
  RENDER_EXAMPLE: PropTypes.func.isRequired,
  className: PropTypes.string,
  componentClassName: PropTypes.string,
  propsInputsClassName: PropTypes.string,
};
const defaultProps = {
  className: null,
  componentClassName: null,
  propsInputsClassName: null,
};

/**
 * @template UpdaterPropsT
 * @typedef {import('use-immer').Updater<{props: UpdaterPropsT}>} UpdaterProps
*/
/**
 * @template FCT
 * @typedef {React.FC<{state: Object, setState?: UpdaterProps<FCT>, innerRef?: React.RefObject<any>}>} ReactFCStater
 */

/**
 * @template SandboxExamplePropsT
 * @param {Object} props
 * @param {ReactFCStater<SandboxExamplePropsT>} props.CODE_EXAMPLE
 * @param {ReactFCStater<SandboxExamplePropsT>} props.PROPS_EXAMPLE
 * @param {ReactFCStater<SandboxExamplePropsT>} props.RENDER_EXAMPLE
 * @param {string} props.className
 * @param {string} props.componentClassName
 * @param {string} props.propsInputsClassName
 *
 * @returns {JSX.Element}
 */
function SandboxExample({
  CODE_EXAMPLE,
  PROPS_EXAMPLE,
  RENDER_EXAMPLE,
  className,
  componentClassName,
  propsInputsClassName,
}) {
  const [state, setState] = useImmer({
    props: /** @type {SandboxExamplePropsT} */ ({}),
  });
  const renderedRef = /** @type {typeof useRef<any>} */ (useRef)(null);

  return (
    <div className={joinClassNames('sandbox-example', className)}>
      <div className="sandbox-example__top">
        <div className={joinClassNames('sandbox-example__component', componentClassName)}>
          <RENDER_EXAMPLE state={state} setState={setState} innerRef={renderedRef} />
        </div>
        <div className={joinClassNames('sandbox-example__props-inputs', propsInputsClassName)}>
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
              <PreCode>
                <CODE_EXAMPLE state={state} />
              </PreCode>
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
