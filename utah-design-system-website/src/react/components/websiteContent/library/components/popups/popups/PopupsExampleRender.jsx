import { Popup, RefShape } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useCallback, useRef } from 'react';
import PopupsPropsShape from '../../../../../../propTypesShapes/PopupsPropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: PopupsPropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function PopupsExampleRender({
  setState,
  state: {
    props: {
      hasCloseButton,
      isVisible,
      placement,
      popupType,
    },
  },
  innerRef,
}) {
  const buttonRef = useRef();

  const onClickEvent = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    // eslint-disable-next-line no-param-reassign
    setState((oldState) => { oldState.props.isVisible = !oldState.props.isVisible; });
  });
  // eslint-disable-next-line no-param-reassign
  const onMouseEnter = useCallback(() => setState((oldState) => { oldState.props.isVisible = true; }));
  // eslint-disable-next-line no-param-reassign
  const onMouseLeave = useCallback(() => setState((oldState) => { oldState.props.isVisible = false; }));

  return (
    <div ref={innerRef}>
      <button
        aria-controls="popups-example-render-popup"
        aria-expanded={!!isVisible}
        aria-haspopup="dialog"
        id="popups-example-render-button"
        onClick={popupType === 'onClick' ? onClickEvent : undefined}
        onMouseEnter={popupType === 'onHover' ? onMouseEnter : undefined}
        onMouseLeave={popupType === 'onHover' ? onMouseLeave : undefined}
        ref={buttonRef}
        type="button"
      >
        Toggle Popup
      </button>
      <Popup
        ariaLabelledBy="popups-example-render-button"
        id="popups-example-render-popup"
        hasCloseButton={!!hasCloseButton}
        isVisible={!!isVisible}
        // eslint-disable-next-line no-param-reassign
        onVisibleChange={useCallback((_e, newIsVisible) => setState((oldState) => { oldState.props.isVisible = newIsVisible; }))}
        placement={placement}
        referenceElement={buttonRef}
        role="dialog"
      >
        <div>
          <div className="font-size-l mb-spacing-xs"><strong>Example Popup</strong></div>
          <div>This is an example of a popup with content.</div>
        </div>
      </Popup>
    </div>
  );
}

PopupsExampleRender.propTypes = propTypes;
PopupsExampleRender.defaultProps = defaultProps;

export default PopupsExampleRender;
