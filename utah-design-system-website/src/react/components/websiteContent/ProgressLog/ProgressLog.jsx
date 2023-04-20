/* eslint-disable react/jsx-one-expression-per-line */
import {
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
            <ProgressLogTableRow title="Switch" toUrl={pageUrls.switch} isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Table" toUrl={pageUrls.table} isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Vertical Menu" toUrl={pageUrls.verticalMenu} isDefinitionChecked />
          </TableBody>
        </Table>
      </TableWrapper>

      <h2 className="mt-spacing-l">Task Log</h2>
      <ul>
        <li>Version 0.4
          <ul>
            <li>Create a Getting Started Page</li>
            <li>Combo Box: Define</li>
            <li>Links: Define</li>
            <li>Pagination: Define</li>
            <li>Patterns - Footer: Define</li>
            <li>SelectInput: Define</li>
            <li>Multi-Select Input: Define</li>
            <li>Table: Define</li>
            <li>TextInput: Fill out Doc Page Definitions</li>
            <li>TextInput: Static Examples</li>
            <li>Cleanup TextInput Examples</li>
            <li>Remove title: Tooltips popup example</li>
            <li>Add documentation code highlighting</li>
            <li>Set up tasks for writing tests</li>
            <li>Fix consistency in documentation for: Flyout or Fly-out.</li>
            <li>Add mockup to Popups: Popup Menu and Popup Menu with Flyout Popups</li>
            <li>Add ability to close Mobile Main Menu</li>
            <li>TableFilterSelectOptions : auto provide these options based on the data if no options were given as children to TableFilterSelect</li>
            <li>Maintenance tasks: dependencies, branches, versions...</li>
            <li><Link to="https://github.com/utahdts/utah-design-system/commits/dev" target="_blank">GitHub Commit Details</Link></li>
          </ul>
        </li>
      </ul>
    </>
  );
}

ProgressLog.propTypes = propTypes;
ProgressLog.defaultProps = defaultProps;

export default ProgressLog;
