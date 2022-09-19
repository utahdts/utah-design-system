import PropTypes from 'prop-types';
import useRef from 'react';
import sandboxCodeTypeEnum from '../../../../../enums/sandboxCodeTypeEnum';

const propTypes = {
  codeType: PropTypes.oneOf(Object.values(sandboxCodeTypeEnum)).isRequired,
  props: PropTypes.shape({
    // ... button props ... //
  }).isRequired,
};
const defaultProps = {};

function ButtonDocumentation({ codeType, props }) {
  const outputRef = useRef(null);

  return (
    <div>
      <div style={{ display: codeType === sandboxCodeTypeEnum.html ? 'visible' : 'hidden' }} dangerouslySetInnerHTML={outputRef.current?.innerHTML?.replace(/\</g, '&gt;')} />
      <div style={{ display: 'hidden' }}>
        <Button {...props} ref={outputRef} />
      </div>
      <div style={{ display: codeType === sandboxCodeTypeEnum.react ? 'visible' : 'hidden' }}>
        &lt;Button
        {
          Object.entries(props)
            .map(([key, value]) => `${key}={${value}}`)
        }
        /&gt;
      </div>
    </div>

  );
}

ButtonDocumentation.propTypes = propTypes;
ButtonDocumentation.defaultProps = defaultProps;

export default ButtonDocumentation;
