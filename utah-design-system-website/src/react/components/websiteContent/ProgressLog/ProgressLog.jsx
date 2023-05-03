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
            <ProgressLogTableRow title="Switch" toUrl={pageUrls.switch} isCssChecked isComponentExampleChecked />
            <ProgressLogTableRow title="Vertical Menu" toUrl={pageUrls.verticalMenu} isDefinitionChecked />
          </TableBody>
        </Table>
      </TableWrapper>

      <h2 className="mt-spacing-l">Task Log</h2>
      <ul>
        <li>
          Version 0.6
          <ul>
            <li>Added accordions to mockups</li>
            <li>Added interactive &quot;Utah, an official website&quot; to Utah unbrand</li>
            <li>Allow placing Utah Header in a specific DOM element</li>
            <li>Cleaned up mono repo cross linkage</li>
            <li>Cured leprosy (on documentation pages)</li>
            <li>Define: Banner</li>
            <li>Define: Form Validation</li>
            <li>Define: Links</li>
            <li>Define: List</li>
            <li>Define: Loading indicator-spinner</li>
            <li>Define: Modal</li>
            <li>Define: Pagination</li>
            <li>Define: Skeleton</li>
            <li>Define: Switch</li>
            <li>Define: Tags (taxonomy)</li>
            <li>Define: Time Input</li>
            <li>Table: ability for filters to exact match instead of just partial</li>
            <li>Table: ability for table select filter to auto load options from data</li>
            <li>Updated Utah Header Documentation w/ API details</li>
          </ul>
        </li>
        <li>
          Version 0.5 ¯\_(ツ)_/¯
        </li>
        <li><ExternalLink href="https://github.com/utahdts/utah-design-system/commits/dev">GitHub Commit Details</ExternalLink></li>
      </ul>
    </>
  );
}

ProgressLog.propTypes = propTypes;
ProgressLog.defaultProps = defaultProps;

export default ProgressLog;
