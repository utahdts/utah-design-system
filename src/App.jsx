import ColorPopup from './components/ColorPopup';
import DemoContent from './components/demo/DemoContent';
import DemoAppStyle from './components/demo/DemoAppStyle';
import './css/index.scss';

function App() {
  return (
    <>
      <div className="utah-design-system primary-color-is-light">
        <DemoContent />
        <ColorPopup />
      </div>
      <DemoAppStyle />
    </>
  );
}

export default App;
