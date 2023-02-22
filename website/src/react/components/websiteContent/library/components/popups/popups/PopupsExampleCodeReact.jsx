import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import PopUpsPropsShape from '../../../../../../propTypesShapes/PopupsPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: PopUpsPropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function renderCode(code, isRenderable) {
  return (
    isRenderable
      ? (
        <>
          <span>
            {code}
          </span>
          <br />
        </>
      )
      : undefined
  );
}

function renderExampleProps(displayProps, keyBase) {
  return displayProps.map((displayProp, displayPropIndex) => ([
    // eslint-disable-next-line react/no-array-index-key
    displayPropIndex !== 0 ? <br key={`${keyBase}}-br-${displayPropIndex}`} /> : undefined,
    // eslint-disable-next-line react/no-array-index-key
    <span key={`${keyBase}-line-${displayPropIndex}`}>
      &nbsp;&nbsp;
      {displayProp}
    </span>,
  ]));
}

function PopUpsExampleCode({
  state: {
    props: {
      // isVisible,
      placement,
      popupType,
    },
  },
}) {
  const displayedPropsButton = [
    popupType === 'onClick' ? 'onClick={onClickEvent}' : undefined,
    popupType === 'onHover' ? 'onMouseEnter={onMouseEnter}' : undefined,
    popupType === 'onHover' ? 'onMouseLeave={onMouseLeave}' : undefined,
    'ref={buttonRef}',
    'type="button"',
  ].filter(identity);

  const displayedPropsPopup = [
    'isVisible={isVisible}',
    'onVisibleChange={useCallback((_e, newIsVisible) => setIsVisible(newIsVisible))}',
    `placement="${placement}"`,
    'referenceElement={buttonRef}',
  ].filter(identity);

  return (
    <>
      <span className="example-code-react__comment">&#47;&#47; -- Before Render --</span>
      <br />
      const [isVisible, setIsVisible] = useState(false);
      <br />
      {renderCode('const onClickEvent = () => setVisible((oldVisible) => !oldVisible);', popupType === 'onClick')}
      {renderCode('const onMouseEnter = () => setVisible(true);', popupType === 'onHover')}
      {renderCode('const onMouseLeave = () => setVisible(false);', popupType === 'onHover')}
      const buttonRef = useRef();
      <br />

      <br />
      <span className="example-code-react__comment">&#47;&#47; -- Rendering --</span>
      <br />
      <span className="example-code-react__comment">&#47;&#47; Button controlling popup</span>
      <br />
      &lt;
      {`button${displayedPropsButton.length ? ' ' : ''}`}
      <br />
      {renderExampleProps(displayedPropsButton, 'button-props')}
      <br />
      &gt;
      <br />
      &nbsp;&nbsp;Toggle Popup
      <br />
      &lt;&#47;button&gt;

      <br />
      <br />
      <span className="example-code-react__comment">&#47;&#47; Popup tied to button controller</span>
      <br />
      &lt;
      {`Popup${displayedPropsPopup.length ? ' ' : ''}`}
      <br />
      {renderExampleProps(displayedPropsPopup, 'popup-props')}
      &gt;
      <br />
      &lt;&#47;Popup&gt;
    </>
  );
}

PopUpsExampleCode.propTypes = propTypes;
PopUpsExampleCode.defaultProps = defaultProps;

export default PopUpsExampleCode;
