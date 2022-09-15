import { Route, Routes } from 'react-router-dom';
import {
  DocumentationTemplate,
  LandingTemplate,
} from 'utah-design-system-react-library';
import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
import menusEnum from '../../enums/menusEnum';
import { menuItemsFoundationSecondary, menuItemsLibrarySecondary, menuItemsMain } from './menus';
import pages from './pages';
import RoutePage from './RoutePage';

const propTypes = {};
const defaultProps = {};

function Routing() {
  return (
    <Routes>
      {Object.values(pages).map((page) => {
        let element;

        switch (page.template) {
          case layoutTemplatesEnum.DOCUMENTATION_TEMPLATE: {
            let menuItemsSecondary;
            switch (page.menuItemsSecondary) {
              case menusEnum.MAIN_MENU:
                menuItemsSecondary = menuItemsMain;
                break;
              case menusEnum.SECONDARY_MENU_FOUNDATION:
                menuItemsSecondary = menuItemsFoundationSecondary;
                break;
              case menusEnum.SECONDARY_MENU_LIBRARY:
                menuItemsSecondary = menuItemsLibrarySecondary;
                break;
              case menusEnum.SECONDARY_MENU_GUIDELINES:
                menuItemsSecondary = menuItemsLibrarySecondary;
                break;
              case menusEnum.SECONDARY_MENU_RESOURCES:
                menuItemsSecondary = menuItemsLibrarySecondary;
                break;
              default:
                throw new Error(`Unknown secondary menu for the Documentation Template. page='${page.title}'; menuItemsSecondary='${page.menuItemsSecondary}'`);
            }
            element = (
              <DocumentationTemplate
                content={page.content}
                menuItemsMain={menuItemsMain}
                menuItemsSecondary={menuItemsSecondary}
              />
            );
          }
            break;

          case layoutTemplatesEnum.LANDING_TEMPLATE:
            element = (
              <LandingTemplate
                content={page.content}
                menuItemsMain={menuItemsMain}
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
    </Routes>
  );
}

Routing.propTypes = propTypes;
Routing.defaultProps = defaultProps;

export default Routing;
