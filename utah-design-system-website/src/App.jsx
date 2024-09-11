import {
  FormContextProvider,
  joinClassNames,
  useUtahHeaderContext
} from '@utahdts/utah-design-system';
import '@utahdts/utah-design-system/css/index.scss';
import { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import './css/index.scss';
import { ColorPopup } from './react/components/color/ColorPopup';
import { DemoAppStyle } from './react/components/demo/DemoAppStyle';
import { DesignSystemFooterMainContent } from './react/components/header/DesignSystemFooterMainContent';
import { DesignSystemFooterSocialMedia } from './react/components/header/DesignSystemFooterSocialMedia';
import { Routing } from './react/components/routing/Routing';
import { useAppContext } from './react/context/AppContext/useAppContext';
import { useCssContext } from './react/context/cssContext/useCssContext';
import { CSS_CLASS_NAMES } from './react/enums/cssClassNames';
import { CSS_STATE_KEYS } from './react/enums/cssStateKeys';

/** @typedef {import('@utahdts/utah-design-system').FormContextValue<Record<string, any>>} FormContextValue */

/**
 * @returns {import('react').JSX.Element} the App!
 */
export function App() {
  const { appState: { isColorPickerShown }, setAppState } = useAppContext();
  const { cssState } = useCssContext();
  const [state, setState] = useImmer({});
  const { settings: utahHeaderSettings, setSettings: setUtahHeaderSettings } = useUtahHeaderContext();
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
            actionFunction: () => {
              setAppState((draftAppState) => {
                draftAppState.isColorPickerShown = !draftAppState.isColorPickerShown;
              });
            },
            icon: '<span class="utds-icon-before-gear" aria-hidden="true" />',
            showTitle: false,
            title: 'Color Picker',
          }));
          draftSettings.onSearch = (e) => {
            window.location.href = `/search?q=${encodeURI(e)}`;
          };
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
            // @ts-expect-error
            cssState?.[CSS_STATE_KEYS.PRIMARY_COLOR_IS_LIGHT] ? CSS_CLASS_NAMES.PRIMARY_COLOR_IS_LIGHT : '',
            // @ts-expect-error
            cssState?.[CSS_STATE_KEYS.SECONDARY_COLOR_IS_LIGHT] ? CSS_CLASS_NAMES.SECONDARY_COLOR_IS_LIGHT : '',
            // @ts-expect-error
            cssState?.[CSS_STATE_KEYS.ACCENT_COLOR_IS_LIGHT] ? CSS_CLASS_NAMES.ACCENT_COLOR_IS_LIGHT : '',
          ])
        }
      >
        <Routing />
      </div>
      <DemoAppStyle />
      {
        isColorPickerShown
          ? <div className="utah-design-system"><ColorPopup onClose={() => setAppState((draftAppState) => { draftAppState.isColorPickerShown = false; })} /></div>
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
