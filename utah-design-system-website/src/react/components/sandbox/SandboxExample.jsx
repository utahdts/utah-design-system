import {
  Tab,
  TabGroup,
  TabGroupTitle,
  TabList,
  TabPanel,
  TabPanels,
  joinClassNames,
} from '@utahdts/utah-design-system';
import React, { useEffect, useRef, useState } from 'react';
import { useImmer } from 'use-immer';
import { sandboxCodeTypeEnum } from '../../enums/sandboxCodeTypeEnum';
import { PreCode } from '../preCode/PreCode';
import { PreCodeForRef } from '../preCode/PreCodeForRef';

/**
 * @template UpdaterPropsT
 * @typedef {import('use-immer').Updater<{props: UpdaterPropsT}>} UpdaterProps
 */
/**
 * @template FCT
 * @typedef {import('react').FC<{state: any, setState: UpdaterProps<FCT>, innerRef: React.RefObject<any>}>} ReactFCStater
 */

/**
 * @template SandboxExamplePropsT
 * @param {object} props
 * @param {ReactFCStater<SandboxExamplePropsT>} props.CODE_EXAMPLE
 * @param {ReactFCStater<SandboxExamplePropsT>} props.PROPS_EXAMPLE
 * @param {ReactFCStater<SandboxExamplePropsT>} props.RENDER_EXAMPLE
 * @param {string} [props.className]
 * @param {SandboxExamplePropsT} props.defaultProps
 * @param {string} [props.componentClassName]
 * @param {string} [props.propsInputsClassName]
 * @returns {import('react').JSX.Element}
 */
export function SandboxExample({
  CODE_EXAMPLE,
  PROPS_EXAMPLE,
  RENDER_EXAMPLE,
  className,
  defaultProps,
  componentClassName,
  propsInputsClassName,
}) {
  const [state, setState] = useImmer({ props: defaultProps });
  const renderedRef = /** @type {typeof useRef<any>} */ (useRef)(null);
  const [forceUpdateValue, setForceUpdateValue] = useState(0);

  useEffect(
    () => {
      // ComboBox loads its options after rendering so rendering the HTML tab does not show the options
      const timeoutId = setTimeout(
        () => {
          setForceUpdateValue((prevValue) => prevValue + 1);
        },
        0
      );
      return () => clearTimeout(timeoutId);
    },
    []
  );

  return (
    <div className={joinClassNames('sandbox-example', className)}>
      <div className="sandbox-example__top">
        <div className={joinClassNames('sandbox-example__component', componentClassName)}>
          <RENDER_EXAMPLE state={state} setState={setState} innerRef={renderedRef} />
        </div>
        <div className={joinClassNames('sandbox-example__props-inputs', propsInputsClassName)}>
          <PROPS_EXAMPLE state={state} setState={setState} innerRef={renderedRef} />
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
              <PreCodeForRef targetRef={renderedRef} deps={[state.props, forceUpdateValue]} allowScrollOverflow addHorizontalPadding maxHeight="60vh" />
            </TabPanel>
            <TabPanel tabId={sandboxCodeTypeEnum.REACT} className="px-spacing pb-spacing">
              <PreCode>
                <CODE_EXAMPLE setState={setState} state={state} innerRef={renderedRef} />
              </PreCode>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
