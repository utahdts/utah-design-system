/* eslint-disable import/no-named-as-default-member */
import {
  DocumentationTemplate,
  LandingTemplate,
  OnThisPage,
  VerticalMenu,
  useUtahHeaderContext
} from '@utahdts/utah-design-system';
import { useEffect, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
import menusEnum from '../../enums/menusEnum';
import useCurrentMenuItem from '../../hooks/useCurrentMenuItem';
import HomeLanding from '../websiteContent/HomeLanding';
import Page404 from '../websiteContent/Page404';
import RoutePage from './RoutePage';
import allMenus from './menus';
import pages from './pages';
import constructMainMenu from './util/constructMainMenu';

const propTypes = {};
const defaultProps = {};

function Routing() {
  const currentMenuItem = useCurrentMenuItem(Object.values(allMenus));
  const contentRef = useRef();
  const { setSettings = () => { } } = useUtahHeaderContext() || {};
  const navigate = useNavigate();

  useEffect(
    () => {
      setSettings((draftSettings) => {
        draftSettings.mainMenu = constructMainMenu(currentMenuItem, navigate);
      });
    },
    [currentMenuItem]
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
                throw new Error(`Unknown secondary menu for the Documentation Template. page='${page.title}'; menuSecondary='${page.menuSecondary}'`);
            }
            element = (
              <DocumentationTemplate
                content={page.content}
                contentRef={contentRef}
                sidePanelLeftContent={<VerticalMenu currentMenuItem={currentMenuItem} menus={menuSecondary} />}
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
              `Invalid template (${page.template}) for page (${page.title})`
            );
        }

        return (
          <Route
            key={`design-system-routing__page__${page.link}-${page.pageTitle}`}
            path={page.link}
            element={<RoutePage page={page}>{element}</RoutePage>}
          />
        );
      })}
      <Route path="/" element={<HomeLanding />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

Routing.propTypes = propTypes;
Routing.defaultProps = defaultProps;

export default Routing;
