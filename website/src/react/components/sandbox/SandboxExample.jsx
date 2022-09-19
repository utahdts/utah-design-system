import { useState } from 'react';
import { Accordion } from 'utah-design-system-react-library';
import PropTypes from 'prop-types';
import codeTypeEnum from '../../enums/codeTypeEnum';

const propTypes = {
  CodeExample: PropTypes.element.isRequired,
  PropsExample: PropTypes.element.isRequired,
  RenderExample: PropTypes.element.isRequired,
};
const defaultProps = {};

function SandboxExample({ CodeExample, PropsExample, RenderExample }) {
  const [state, setState] = useState({
    codeIsOpen: false,
    codeType: codeTypeEnum.HTML,
    props: {},
  });
  return (
    <div>
      <div>
        <RenderExample state={state} setState={setState} />
        <PropsExample state={state} setState={setState} />
      </div>
      <div>
        <Accordion
          headerContent={null /* <Tabs onChange={() => setState({ codeType: newOutputType })} /> */}
        >
          <CodeExample state={state} setState={setState} />
        </Accordion>
      </div>
    </div>
  );
}

SandboxExample.propTypes = propTypes;
SandboxExample.defaultProps = defaultProps;

export default SandboxExample;
