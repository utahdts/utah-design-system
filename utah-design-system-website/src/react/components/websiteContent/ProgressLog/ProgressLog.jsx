/* eslint-disable react/jsx-one-expression-per-line */
import {
  ExternalLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pageUrls from '../../routing/pageUrls';
import ProgressLogCheckboxChecked from './ProgressLogCheckboxChecked';
import ProgressLogCheckboxUnchecked from './ProgressLogCheckboxUnchecked';
import ProgressLogVersionRow from './ProgressLogVersionRow';

const propTypes = {};
const defaultProps = {};

function ProgressLogTableRow({
  title,
  toUrl,
  isDefinitionChecked,
  isCssChecked,
  isComponentExampleChecked,
}) {
  return (
    <TableRow>
      <TableCell><Link to={toUrl}>{title}</Link></TableCell>
      <TableCell className="text-center">{isDefinitionChecked ? <ProgressLogCheckboxChecked /> : <ProgressLogCheckboxUnchecked />}</TableCell>
      <TableCell className="text-center">{isCssChecked ? <ProgressLogCheckboxChecked /> : <ProgressLogCheckboxUnchecked />}</TableCell>
      <TableCell className="text-center">{isComponentExampleChecked ? <ProgressLogCheckboxChecked /> : <ProgressLogCheckboxUnchecked />}</TableCell>
    </TableRow>
  );
}
ProgressLogTableRow.propTypes = {
  isDefinitionChecked: PropTypes.bool,
  isCssChecked: PropTypes.bool,
  isComponentExampleChecked: PropTypes.bool,
  title: PropTypes.string.isRequired,
  toUrl: PropTypes.string.isRequired,
};
ProgressLogTableRow.defaultProps = {
  isDefinitionChecked: false,
  isCssChecked: false,
  isComponentExampleChecked: false,
};

function ProgressLog() {
  return (
    <>
      <TableWrapper>
        <Table className="progress-log__table table table--lines-x">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell className="progress-log__col-feature">Feature</TableHeadCell>
              <TableHeadCell>Definition</TableHeadCell>
              <TableHeadCell>CSS</TableHeadCell>
              <TableHeadCell>Component / Example</TableHeadCell>
            </TableHeadRow>

          </TableHead>
          <TableBody>
            <ProgressLogVersionRow version="0.7" />
            <ProgressLogTableRow title="Utah Header" toUrl={pageUrls.utahHeader} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Utah Footer" toUrl={pageUrls.utahFooter} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Banner" toUrl={pageUrls.banners} isDefinitionChecked />
            <ProgressLogTableRow title="Form Validation" toUrl={pageUrls.validation} isDefinitionChecked />
            <ProgressLogTableRow title="Lists" toUrl={pageUrls.lists} isDefinitionChecked />
            <ProgressLogTableRow title="Loading Indicator" toUrl={pageUrls.spinners} isDefinitionChecked />
            <ProgressLogTableRow title="Modal" toUrl={pageUrls.modals} isDefinitionChecked />
            <ProgressLogTableRow title="Skeleton" toUrl={pageUrls.skeletons} isDefinitionChecked />
            <ProgressLogTableRow title="Switch" toUrl={pageUrls.switch} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Tags" toUrl={pageUrls.tags} isDefinitionChecked />
            <ProgressLogTableRow title="Time Input" toUrl={pageUrls.timeInput} isDefinitionChecked />
            <ProgressLogVersionRow version="0.6" />
            <ProgressLogTableRow title="Combo Box" toUrl={pageUrls.comboBox} isDefinitionChecked />
            <ProgressLogTableRow title="Links" toUrl={pageUrls.links} isDefinitionChecked />
            <ProgressLogTableRow title="Multi-select input" toUrl={pageUrls.multiSelect} isDefinitionChecked />
            <ProgressLogTableRow title="Pagination" toUrl={pageUrls.pagination} isDefinitionChecked />
            <ProgressLogTableRow title="Patterns: Footer" toUrl={pageUrls.utahFooter} isDefinitionChecked />
            <ProgressLogTableRow title="Select input" toUrl={pageUrls.select} isDefinitionChecked />
            <ProgressLogTableRow title="Table" toUrl={pageUrls.table} isDefinitionChecked isComponentExampleChecked />
            <ProgressLogVersionRow version="0.4" />
            <ProgressLogTableRow title="Getting Started" toUrl={pageUrls.gettingStarted} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Text Input" toUrl={pageUrls.textInput} isDefinitionChecked />
            <ProgressLogVersionRow version="0.3" />
            <ProgressLogTableRow title="Date Input" toUrl={pageUrls.dateInput} isDefinitionChecked />
            <ProgressLogTableRow title="Main Menu" toUrl={`${pageUrls.utahHeader}#main-menu`} isDefinitionChecked />
            <ProgressLogTableRow title="Tooltips" toUrl={pageUrls.tooltips} isDefinitionChecked />
            <ProgressLogTableRow title="Utah.gov Header" toUrl={pageUrls.utahHeader} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogVersionRow version="0.2" />
            <ProgressLogTableRow title="Badges" toUrl={pageUrls.badges} isDefinitionChecked />
            <ProgressLogTableRow title="Buttons" toUrl={pageUrls.button} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Icon Button" toUrl={pageUrls.iconButton} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Icons" toUrl={pageUrls.icons} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Popups" toUrl={pageUrls.popups} isDefinitionChecked isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Vertical Menu" toUrl={pageUrls.verticalMenu} isDefinitionChecked />
          </TableBody>
        </Table>
      </TableWrapper>

      <h2 className="mt-spacing-l">Task Log</h2>
      <ul>
        <li>
          Version 0.7
          <ul>
            <li>Add: Allow Header to target a dom location (YAY Scott!)</li>
            <li>Add: Footer React Component</li>
            <li>Add: Footer renders w/ Utah Header</li>
            <li>Add: Footer settings documentation</li>
            <li>Add: Information about Waffle Icon Action Item</li>
            <li>Add: Logo can be a function, HTML Element, or url</li>
            <li>Add: Pagination React Component</li>
            <li>Define: Banner</li>
            <li>Define: Form Validation</li>
            <li>Define: Lists</li>
            <li>Define: Loading Indicator</li>
            <li>Define: Modal</li>
            <li>Define: Skeleton</li>
            <li>Define: Switch</li>
            <li>Define: Tags</li>
            <li>Define: Time Input</li>
            <li>Finalize: Document all the settings for the Utah Header</li>
            <li>Fix: Scope css selectors</li>
            <li>Fix: Search input styling and turn off autocomplete</li>
            <li>Fix: Stop font swapping for icon font</li>
            <li>Update: Header Mobile Main Menu tabbing</li>
            <li>Update: Update vertical menu documentation</li>
          </ul>
        </li>
        <li><ExternalLink href="https://github.com/utahdts/utah-design-system/commits/dev">GitHub Commit Details</ExternalLink></li>
      </ul>
    </>
  );
}

ProgressLog.propTypes = propTypes;
ProgressLog.defaultProps = defaultProps;

export default ProgressLog;
