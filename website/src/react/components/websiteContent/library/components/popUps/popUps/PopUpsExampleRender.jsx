import { RefShape } from '@utahdts/utah-design-system';
import Popup from '@utahdts/utah-design-system/react/components/popups/Popup';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import PopupsPropsShape from '../../../../../../propTypesShapes/PopupsPropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: PopupsPropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

function PopUpsExampleRender({
  state: {
    props: {
      id,
    },
  },
  innerRef,
}) {
  const buttonRef = useRef();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsPopupVisible((oldIsVisible) => !oldIsVisible)}
        onMouseEnter={() => setIsPopupVisible(true)}
        onMouseLeave={() => setIsPopupVisible(false)}
        ref={buttonRef}
        type="button"
      >
        Toggle Popup
      </button>
      <Popup
        id={id}
        innerRef={innerRef}
        isVisible={isPopupVisible}
        onVisibleChange={(_e, isVisible) => setIsPopupVisible(isVisible)}
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
