import ColorPopup from '../color/ColorPopup';
import DemoContent from './DemoContent';

const propTypes = {};
const defaultProps = {};

function Demo() {
  return (
    <>
      <DemoContent />
      <ColorPopup />
    </>
  );
}

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
