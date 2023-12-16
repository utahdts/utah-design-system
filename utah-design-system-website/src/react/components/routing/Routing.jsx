import {
  DocumentationTemplate,
  LandingTemplate,
  OnThisPage,
  VerticalMenu,
  useUtahHeaderContext
} from '@utahdts/utah-design-system';
import { useEffect, useRef } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { layoutTemplatesEnum } from '../../enums/layoutTemplatesEnum';
import { menusEnum } from '../../enums/menusEnum';
import { useCurrentMenuItem } from '../../hooks/useCurrentMenuItem';
import { HomeLanding } from '../websiteContent/HomeLanding';
import { Page404 } from '../websiteContent/Page404';
import { RoutePage } from './RoutePage';
import { allMenus } from './menus';
import { pages } from './pages';
import { constructMainMenu } from './util/constructMainMenu';

export function Routing() {
  // @ts-ignore
  const currentMenuItem = useCurrentMenuItem(Object.values(allMenus));
  const contentRef = useRef(/** @type {HTMLElement | null} */(null));
  const { setSettings = () => { } } = useUtahHeaderContext() || {};
  const navigate = useNavigate();

  useEffect(
    () => {
      setSettings((draftSettings) => {
        // @ts-ignore
        draftSettings.mainMenu = constructMainMenu(currentMenuItem, navigate);
      });
    },
    [currentMenuItem, navigate, setSettings]
  );

  return (
    <Routes>
      {Object.values(pages).map((page) => {
        let element;
        switch (page.template) {
          case layoutTemplatesEnum.DOCUMENTATION_TEMPLATE: {
            let menuSecondary;
            switch (page.menuSecondary) {
              case menusEnum.MAIN_MENU:
                menuSecondary = [allMenus.menuMain];
                break;
              case menusEnum.SECONDARY_MENU_LIBRARY:
                menuSecondary = [
                  allMenus.menuLibrarySecondary,
                  allMenus.menuLibraryComponentsSecondary,
                  allMenus.menuLibraryPatternsSecondary,
                  // allMenus.menuLibraryTemplatesSecondary,
                ];
                break;
              case menusEnum.SECONDARY_MENU_GUIDELINES:
                menuSecondary = [allMenus.menuGuidelinesSecondary];
                break;
              case menusEnum.SECONDARY_MENU_RESOURCES:
                menuSecondary = [allMenus.menuResourcesSecondary];
                break;
              default:
                if (page.menuSecondary) {
                  throw new Error(`Unknown secondary menu for the Documentation Template. page='${page.pageTitle}'; menuSecondary='${page.menuSecondary}'`);
                }
            }
            element = (
              <DocumentationTemplate
                content={page.content}
                contentRef={contentRef}
                sidePanelLeftContent={menuSecondary && <VerticalMenu currentMenuItem={currentMenuItem} menus={menuSecondary} />}
                sidePanelRightContent={<OnThisPage contentRef={contentRef} />}
              />
            );
          }
            break;

          case layoutTemplatesEnum.LANDING_TEMPLATE:
            element = <LandingTemplate content={page.content} />;
            break;

          default:
            throw new Error(
              `Invalid template (${page.template}) for page (${page.pageTitle})`
            );
        }

        return [
          (page.legacyLinks || [])
            .map((legacyLink) => (
              <Route
                key={`design-system-routing__page__${legacyLink}-${page.pageTitle}`}
                path={legacyLink}
                element={<Navigate replace to={page.link} />}
              />
            )),
          <Route
            key={`design-system-routing__page__${page.link}-${page.pageTitle}`}
            path={page.link}
            element={<RoutePage page={page}>{element}</RoutePage>}
          />,
        ];
      })}
      <Route path="/" element={<HomeLanding />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
