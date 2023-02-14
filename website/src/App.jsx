import { FormContextProvider, joinClassNames } from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system/css/3-generic/normalize.css';
import '@utahdts/utah-design-system/css/index.scss';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { getUtahHeaderSettings, setUtahHeaderSettings } from 'utah-design-system-header';
import './css/index.scss';
import DemoAppStyle from './react/components/demo/DemoAppStyle';
import Routing from './react/components/routing/Routing';
import { useCssContext } from './react/context/cssContext/CssContext';
import CSS_CLASS_NAMES from './react/enums/cssClassNames';
import CSS_STATE_KEYS from './react/enums/cssStateKeys';
import logoPng from './static/images/designSystemCircleGray.png';

const propTypes = {};
const defaultProps = {};

function App() {
  const { cssState } = useCssContext();
  const [state, setState] = useImmer({});

  useEffect(
    () => {
      setUtahHeaderSettings({
        ...getUtahHeaderSettings(),
        logo: `<img src=${logoPng} id="design-system-logo" />`,
      });
    },
    []
  );

  return (
    // Wrap entire app in a FormContextProvider so that input components don't have to be "controlled" nor inside <Form>
    <FormContextProvider setState={setState} state={state}>
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
    </FormContextProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
