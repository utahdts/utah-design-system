import ColorPopup from './components/color/ColorPopup';
import DemoContent from './components/demo/DemoContent';
import DemoAppStyle from './components/demo/DemoAppStyle';
import './css/3-generic/normalize.css';
import './css/index.scss';
import { useCssContext } from './context/cssContext/CssContext';
import CSS_STATE_KEYS from './enums/cssStateKeys';
import joinClassNames from './util/joinClassNames';
import CSS_CLASS_NAMES from './enums/cssClassNames';

function App() {
  const { cssState } = useCssContext();
  return (
    <>
      <div
        className={
          joinClassNames([
            'utah-design-system',
            cssState?.[CSS_STATE_KEYS.PRIMARY_COLOR_IS_LIGHT] ? CSS_CLASS_NAMES.PRIMARY_COLOR_IS_LIGHT : '',
            cssState?.[CSS_STATE_KEYS.SECONDARY_COLOR_IS_LIGHT] ? CSS_CLASS_NAMES.SECONDARY_COLOR_IS_LIGHT : '',
            cssState?.[CSS_STATE_KEYS.ACCENT_COLOR_IS_LIGHT] ? CSS_CLASS_NAMES.ACCENT_COLOR_IS_LIGHT : '',
          ])
        }
      >
        <DemoContent />
        <ColorPopup />
      </div>
      <DemoAppStyle />
    </>
  );
}

export default App;
