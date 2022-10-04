import packageJson from './package.json';
import Button from './react/components/buttons/Button';
import IconButton from './react/components/buttons/IconButton';
import SegmentedButton from './react/components/buttons/SegmentedButton';
import Accordion from './react/components/containers/accordion/Accordion';
import Tab from './react/components/containers/tabs/Tab';
import TabGroup from './react/components/containers/tabs/TabGroup';
import TabGroupTitle from './react/components/containers/tabs/TabGroupTitle';
import TabList from './react/components/containers/tabs/TabList';
import TabPanel from './react/components/containers/tabs/TabPanel';
import TabPanels from './react/components/containers/tabs/TabPanels';
import CheckBox from './react/components/forms/CheckBox';
import Form from './react/components/forms/Form';
import Select from './react/components/forms/Select';
import SelectOption from './react/components/forms/SelectOption';
import Switch from './react/components/forms/Switch';
import TextInput from './react/components/forms/TextInput';
import HorizontalMenu from './react/components/navigation/HorizontalMenu';
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
import setValueAtPath from './react/util/state/setValueAtPath';
import valueAtPath from './react/util/state/valueAtPath';
import formElementSizesEnum from './react/enums/formElementSizesEnum';

const { version } = packageJson;

export {
  Accordion,
  Button,
  CheckBox,
  DocumentationTemplate,
  handleKeyPress,
  Form,
  formElementSizesEnum,
  IconButton,
  joinClassNames,
  LandingTemplate,
  HorizontalMenu,
  MainMenu,
  MenuItemShape,
  SelectOption,
  rectContainsPoint,
  RefShape,
  SegmentedButton,
  setValueAtPath,
  Select,
  Switch,
  Tab,
  TabGroup,
  TabGroupTitle,
  TabList,
  TabPanel,
  TabPanels,
  TextInput,
  UtahHeader,
  UtahUnbrand,
  valueAtPath,
  version,
};
