import Accordion from './react/components/containers/accordion/Accordion';
import packageJson from './package.json';
import LandingTemplate from './react/components/templates/LandingTemplate';
import DocumentationTemplate from './react/components/templates/DocumentationTemplate';
import SegmentedButton from './react/components/buttons/SegmentedButton';
import MainMenu from './react/components/navigation/MainMenu';
import MenuItemShape from './react/propTypesShapes/MenuItemsShape';

const { version } = packageJson;

export {
  Accordion,
  DocumentationTemplate,
  LandingTemplate,
  MainMenu,
  MenuItemShape,
  SegmentedButton,
  version,
};
