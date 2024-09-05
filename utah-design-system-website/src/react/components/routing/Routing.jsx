import {
  DocumentationTemplate,
  LandingTemplate,
  OnThisPage,
  VerticalMenu,
  useUtahHeaderContext
} from '@utahdts/utah-design-system';
import { useCallback, useEffect, useRef } from 'react';
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
import { pageUrls } from './pageUrls';
import { actionFunctionForUrl } from './util/actionFunctionForUrl';

/** @typedef {import('@utahdts/utah-design-system').VerticalMenuMenuItemAdditions} VerticalMenuMenuItemAdditions  */
/** @typedef {import('utah-design-system-website').WebsiteMainMenu} WebsiteMainMenu */
/** @typedef {import('utah-design-system-website').WebsiteMainMenuItem} WebsiteMainMenuItem */

export function Routing() {
  // @ts-expect-error
  const currentMenuItem = useCurrentMenuItem(Object.values(allMenus));
  const contentRef = useRef(/** @type {HTMLElement | null} */(null));
  const { setSettings = () => { } } = useUtahHeaderContext() || {};
  const navigate = useNavigate();

  useEffect(
    () => {
      setSettings((draftSettings) => {
        // @ts-expect-error
        draftSettings.mainMenu = constructMainMenu(currentMenuItem, navigate);
      });
    },
    [currentMenuItem, navigate, setSettings]
  );

  const setActionFunctionUrl = useCallback((/** @type {WebsiteMainMenuItem & VerticalMenuMenuItemAdditions} */ item) => {
    const newItem = { ...item };
    if (item.link && !item.actionFunctionUrl) {
      newItem.actionFunctionUrl = {
        actionFunction: actionFunctionForUrl(item.link, navigate),
        skipHandleEvent: true,
        url: item.link || pageUrls.home,
      };
    }
    if (item.children) { newItem.children = item.children.map(setActionFunctionUrl); }
    return newItem;
  }, []);

  const addLinks = useCallback((/** @type {*&{menuItems: *}} */ menu) => {
    const newMenu = { ...menu };
    if (menu?.menuItems) {
      newMenu.menuItems = menu.menuItems?.map(setActionFunctionUrl);
    }
    return newMenu;
  }, []);

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
                  addLinks(allMenus.menuLibrarySecondary),
                  addLinks(allMenus.menuLibraryComponentsSecondary),
                  addLinks(allMenus.menuLibraryPatternsSecondary),
                  // allMenus.menuLibraryTemplatesSecondary,
                ];
                break;
              case menusEnum.SECONDARY_MENU_GUIDELINES:
                menuSecondary = [addLinks(allMenus.menuGuidelinesSecondary)];
                break;
              case menusEnum.SECONDARY_MENU_RESOURCES:
                menuSecondary = [addLinks(allMenus.menuResourcesSecondary)];
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
                sidePanelLeftContent={menuSecondary && (
                  <VerticalMenu
                    className="menu-side-panel"
                    currentMenuItem={currentMenuItem}
                    // @ts-expect-error
                    menus={menuSecondary ?? null}
                  />
                )}
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
