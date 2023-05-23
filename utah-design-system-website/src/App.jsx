// @ts-check
import {
  FormContextProvider,
  joinClassNames,
  useImmerRef,
  useUtahHeaderContext
} from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system-header/src/css/index.scss';
import '@utahdts/utah-design-system/css/3-generic/normalize.css';
import '@utahdts/utah-design-system/css/index.scss';
import React, { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import './css/index.scss';
import ColorPopup from './react/components/color/ColorPopup';
import DemoAppStyle from './react/components/demo/DemoAppStyle';
import DesignSystemFooterMainContent from './react/components/header/DesignSystemFooterMainContent';
import DesignSystemFooterSocialMedia from './react/components/header/DesignSystemFooterSocialMedia';
import Routing from './react/components/routing/Routing';
import { useCssContext } from './react/context/cssContext/CssContext';
import CSS_CLASS_NAMES from './react/enums/cssClassNames';
import CSS_STATE_KEYS from './react/enums/cssStateKeys';

const propTypes = {};
const defaultProps = {};

/**
 * @returns {JSX.Element} the App!
 */
function App() {
  const { cssState } = useCssContext();
  const [state, setState] = useImmer({});
  const { settings: utahHeaderSettings, setSettings: setUtahHeaderSettings } = useUtahHeaderContext();
  const [showColorPicker, setShowColorPicker, showColorPickerRef] = useImmerRef(false);
  const isActionItemsAddedRef = useRef(false);

  // add color picker gear action item header icon
  useEffect(
    () => {
      // that action item will setState for showing the color picker
      if (!isActionItemsAddedRef.current) {
        isActionItemsAddedRef.current = true;
        setUtahHeaderSettings((draftSettings) => {
          draftSettings.actionItems = draftSettings.actionItems || [];
          draftSettings.actionItems.push(({
            actionFunction: () => setShowColorPicker(!showColorPickerRef.current),
            icon: '<span class="utds-icon-before-gear" aria-hidden="true" />',
            showTitle: false,
            title: 'Color Picker',
          }));
        });
      }
    },
    [utahHeaderSettings]
  );

  return (
    // Wrap entire app in a FormContextProvider so that input components don't have to be "controlled" nor inside a <Form>
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
      {
        showColorPicker
          ? <div className="utah-design-system"><ColorPopup onClose={() => setShowColorPicker(false)} /></div>
          : null
      }
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
