import { RefShape } from '@utahdts/utah-design-system';
import Popup from '@utahdts/utah-design-system/react/components/popups/Popup';
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

function PopUpsExampleRender({
  setState,
  state: {
    props: {
      isVisible,
      placement,
      popupType,
    },
  },
  innerRef,
}) {
  const buttonRef = useRef();

  // eslint-disable-next-line no-param-reassign
  const onClickEvent = useCallback(() => setState((oldState) => { oldState.props.isVisible = !oldState.props.isVisible; }));
  // eslint-disable-next-line no-param-reassign
  const onMouseEnter = useCallback(() => setState((oldState) => { oldState.props.isVisible = true; }));
  // eslint-disable-next-line no-param-reassign
  const onMouseLeave = useCallback(() => setState((oldState) => { oldState.props.isVisible = false; }));

  return (
    <>
      <button
        onClick={popupType === 'onClick' ? onClickEvent : undefined}
        onMouseEnter={popupType === 'onHover' ? onMouseEnter : undefined}
        onMouseLeave={popupType === 'onHover' ? onMouseLeave : undefined}
        ref={buttonRef}
        type="button"
      >
        Toggle Popup
      </button>
      <Popup
        innerRef={innerRef}
        isVisible={!!isVisible}
        // eslint-disable-next-line no-param-reassign
        onVisibleChange={useCallback((_e, newIsVisible) => setState((oldState) => { oldState.props.isVisible = newIsVisible; }))}
        placement={placement}
        referenceElement={buttonRef}
      >
        <div>I am content in a Popup</div>
      </Popup>
    </>
  );
}

PopUpsExampleRender.propTypes = propTypes;
PopUpsExampleRender.defaultProps = defaultProps;

export default PopUpsExampleRender;
