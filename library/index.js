import handleKeyPress from './react/util/handleKeyPress';
import joinClassNames from './react/util/joinClassNames';
import rectContainsPoint from './react/util/rectContainsPoint';
import packageJson from './package.json';
import SegmentedButton from './react/components/buttons/SegmentedButton';
import Accordion from './react/components/containers/accordion/Accordion';
import MainMenu from './react/components/navigation/MainMenu';
import DocumentationTemplate from './react/components/templates/DocumentationTemplate';
import LandingTemplate from './react/components/templates/LandingTemplate';
import UtahHeader from './react/components/utahHeader/UtahHeader';
import UtahUnbrand from './react/components/utahHeader/UtahUnbrand';
import MenuItemShape from './react/propTypesShapes/MenuItemsShape';

const { version } = packageJson;

export {
  Accordion,
  DocumentationTemplate,
  handleKeyPress,
  joinClassNames,
  LandingTemplate,
  MainMenu,
  MenuItemShape,
  rectContainsPoint,
  SegmentedButton,
  UtahHeader,
  UtahUnbrand,
  version,
};
