import packageJson from './package.json';
import IconButton from './react/components/buttons/IconButton';
import SegmentedButton from './react/components/buttons/SegmentedButton';
import Accordion from './react/components/containers/accordion/Accordion';
import Tab from './react/components/containers/tabs/Tab';
import TabGroup from './react/components/containers/tabs/TabGroup';
import TabGroupTitle from './react/components/containers/tabs/TabGroupTitle';
import TabList from './react/components/containers/tabs/TabList';
import TabPanel from './react/components/containers/tabs/TabPanel';
import TabPanels from './react/components/containers/tabs/TabPanels';
import MainMenu from './react/components/navigation/MainMenu';
import DocumentationTemplate from './react/components/templates/DocumentationTemplate';
import LandingTemplate from './react/components/templates/LandingTemplate';
import UtahHeader from './react/components/utahHeader/UtahHeader';
import UtahUnbrand from './react/components/utahHeader/UtahUnbrand';
import MenuItemShape from './react/propTypesShapes/MenuItemsShape';
import RefShape from './react/propTypesShapes/RefShape';
import handleKeyPress from './react/util/handleKeyPress';
import joinClassNames from './react/util/joinClassNames';
import rectContainsPoint from './react/util/rectContainsPoint';

const { version } = packageJson;

export {
  Accordion,
  DocumentationTemplate,
  handleKeyPress,
  IconButton,
  joinClassNames,
  LandingTemplate,
  MainMenu,
  MenuItemShape,
  rectContainsPoint,
  RefShape,
  SegmentedButton,
  Tab,
  TabGroup,
  TabGroupTitle,
  TabList,
  TabPanel,
  TabPanels,
  UtahHeader,
  UtahUnbrand,
  version,
};
