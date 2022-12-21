import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DocumentationTemplate, LandingTemplate } from '@utahdts/utah-design-system';
import OnThisPage from '@utahdts/utah-design-system/react/components/navigation/OnThisPage';
import SidePanelNavigation from '@utahdts/utah-design-system/react/components/navigation/SidePanelNavigation';
import useCurrentMenuItem from '@utahdts/utah-design-system/react/hooks/useCurrentMenuItem';
import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
import menusEnum from '../../enums/menusEnum';
import HomeLanding from '../websiteContent/HomeLanding';
import allMenus from './menus';
import pages from './pages';
import RoutePage from './RoutePage';

const propTypes = {};
const defaultProps = {};

function Routing() {
  const currentMenuItem = useCurrentMenuItem(Object.values(allMenus));
  const contentRef = useRef();

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
              case menusEnum.SECONDARY_MENU_FOUNDATION:
                menuSecondary = [allMenus.menuFoundationSecondary];
                break;
              case menusEnum.SECONDARY_MENU_LIBRARY:
                menuSecondary = [
                  allMenus.menuLibraryComponentsSecondary,
                  allMenus.menuLibraryPatternsSecondary,
                  allMenus.menuLibraryTemplatesSecondary,
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
                currentMenuItem={currentMenuItem}
                mainMenu={allMenus.menuMain}
                sidePanelLeftContent={<SidePanelNavigation currentMenuItem={currentMenuItem} menus={menuSecondary} />}
                sidePanelRightContent={<OnThisPage contentRef={contentRef} />}
              />
            );
          }
            break;

          case layoutTemplatesEnum.LANDING_TEMPLATE:
            element = (
              <LandingTemplate
                content={page.content}
                mainMenu={allMenus.menuMain}
              />
            );
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
    </Routes>
  );
}

Routing.propTypes = propTypes;
Routing.defaultProps = defaultProps;

export default Routing;
