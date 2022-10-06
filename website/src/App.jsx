import { joinClassNames } from 'utah-design-system-react-library';
import 'utah-design-system-react-library/css/3-generic/normalize.css';
import 'utah-design-system-react-library/css/index.scss';
import './css/index.scss';
import DemoAppStyle from './react/components/demo/DemoAppStyle';
import Routing from './react/components/routing/Routing';
import { useCssContext } from './react/context/cssContext/CssContext';
import CSS_CLASS_NAMES from './react/enums/cssClassNames';
import CSS_STATE_KEYS from './react/enums/cssStateKeys';

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
        <Routing />
      </div>
      <DemoAppStyle />
    </>
  );
}

export default App;
