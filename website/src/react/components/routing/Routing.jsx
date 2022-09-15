import { Route, Routes } from 'react-router-dom';
import {
  DocumentationTemplate,
  LandingTemplate,
} from 'utah-design-system-react-library';
import layoutTemplatesEnum from '../../enums/layoutTemplatesEnum';
import { menuItemsLibrarySecondary, menuItemsMain } from './menus';
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
          case layoutTemplatesEnum.documentationTemplate:
            element = (
              <DocumentationTemplate
                content={page.content}
                currentPageLink={page.link}
                menuItemsMain={menuItemsMain}
                menuItemsSecondary={menuItemsLibrarySecondary}
                mainMenuLink={page.mainMenuLinkFunc && page.mainMenuLinkFunc()}
              />
            );
            break;

          case layoutTemplatesEnum.landingTemplate:
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
