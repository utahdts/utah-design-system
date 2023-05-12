import {
  FormContextProvider,
  joinClassNames,
  useUtahHeaderContext
} from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system-header/src/css/index.scss';
import '@utahdts/utah-design-system/css/3-generic/normalize.css';
import '@utahdts/utah-design-system/css/index.scss';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import './css/index.scss';
import DemoAppStyle from './react/components/demo/DemoAppStyle';
import DesignSystemFooterMainContent from './react/components/header/DesignSystemFooterMainContent';
import DesignSystemFooterSocialMedia from './react/components/header/DesignSystemFooterSocialMedia';
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
  const { setSettings = () => {} } = useUtahHeaderContext() || {};

  // add logo to settings
  useEffect(
    () => {
      setSettings((draftSettings) => {
        draftSettings.logo = { imageUrl: logoPng };
      });
    },
    []
  );

  return (
    // Wrap entire app in a FormContextProvider so that input components don't have to be "controlled" nor inside a <Form>
    <FormContextProvider FormContextProvider setState={setState} state={state}>
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
      <footer aria-label="Utah Design System (main footer)">
        <DesignSystemFooterSocialMedia />
        <DesignSystemFooterMainContent />
        <div id="utah-footer-placeholder" />
      </footer>
    </FormContextProvider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
