import PropTypes from 'prop-types';
import PopupsPropsShape from '../../../../../../propTypesShapes/PopupsPropsShape';
import ExampleCodeReactCode from '../../../../../sandbox/ExampleCodeReactCode';
import ExampleCodeReactProp from '../../../../../sandbox/ExampleCodeReactProp';

const propTypes = {
  state: PropTypes.shape({
    props: PopupsPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function PopupsExampleCode({
  state: {
    props: {
      hasCloseButton,
      // isVisible,
      placement,
      popupType,
    },
  },
}) {
  return (
    <>
      <span className="example-code-react__comment">&#47;&#47; -- Before Render --</span>
      <br />
      const [isVisible, setIsVisible] = useState(false);
      <br />
      <ExampleCodeReactCode isRenderable={popupType === 'onClick'} code="const onClickEvent = () => setVisible((oldVisible) => !oldVisible);" />
      <ExampleCodeReactCode isRenderable={popupType === 'onHover'} code="const onMouseEnter = () => setVisible(true);" />
      <ExampleCodeReactCode isRenderable={popupType === 'onHover'} code="const onMouseEnter = () => setVisible(false);" />
      const buttonRef = useRef();
      <br />

      <br />
      <span className="example-code-react__comment">&#47;&#47; -- Rendering --</span>
      <br />
      <span className="example-code-react__comment">&#47;&#47; Button controlling popup</span>
      <br />
      &lt;button
      <br />
      <ExampleCodeReactProp displayProp={popupType === 'onClick' ? 'onClick={onClickEvent}' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={popupType === 'onHover' ? 'onMouseEnter={onMouseEnter}' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={popupType === 'onHover' ? 'onMouseLeave={onMouseLeave}' : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp="ref={buttonRef}" indentLevel={1} />
      <ExampleCodeReactProp displayProp="type=&quot;button&quot;" indentLevel={1} />
      &gt;
      <br />
      &nbsp;&nbsp;Toggle Popup
      <br />
      &lt;&#47;button&gt;

      <br />
      <br />
      <span className="example-code-react__comment">&#47;&#47; Popup controlled by button</span>
      <br />
      &lt;Popup
      <br />
      <ExampleCodeReactProp displayProp={`hasCloseButton={${hasCloseButton ? 'true' : 'false'}}`} indentLevel={1} />
      <ExampleCodeReactProp displayProp="isVisible={isVisible}" indentLevel={1} />
      <ExampleCodeReactProp displayProp="onVisibleChange={useCallback((_e, newIsVisible) => setIsVisible(newIsVisible))}" indentLevel={1} />
      <ExampleCodeReactProp displayProp={`placement="${placement}"`} indentLevel={1} />
      <ExampleCodeReactProp displayProp="referenceElement={buttonRef}" indentLevel={1} />
      /&gt;
    </>
  );
}

PopupsExampleCode.propTypes = propTypes;
PopupsExampleCode.defaultProps = defaultProps;

export default PopupsExampleCode;
