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
import { Link } from 'react-router-dom';
import { pageUrls } from '../../routing/pageUrls';
import { ProgressLogCheckboxChecked } from './ProgressLogCheckboxChecked';
import { ProgressLogCheckboxUnchecked } from './ProgressLogCheckboxUnchecked';
import { ProgressLogVersionRow } from './ProgressLogVersionRow';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.toUrl
 * @param {boolean} [props.isDefinitionChecked]
 * @param {boolean} [props.isCssChecked]
 * @param {boolean} [props.isComponentExampleChecked]
 * @returns {React.JSX.Element}
 */
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

export function ProgressLog() {
  return (
    <>
      <h2 id="h2-release-notes">Release Notes</h2>
      <p>
        If you&apos;re looking for the latest release notes for the Utah Design System, you can find them at the link below.
        These release notes provide valuable information about new features, improvements, and bug fixes introduced in the latest version.
      </p>
      <div className="my-spacing-xl flex justify-center">
        <ExternalLink
          href="https://github.com/utahdts/utah-design-system/releases"
          // @ts-ignore
          className="button button--primary-color button--small"
        >
          View GitHub Releases and Notes
        </ExternalLink>
      </div>
      <hr />

      <h2 id="h2-feature-progress">Feature Progress</h2>
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
            <ProgressLogVersionRow version="1.2.1" />
            <ProgressLogTableRow title="Back to Top" toUrl={pageUrls.backTopTop} isDefinitionChecked />
            <ProgressLogTableRow title="Block Quote" toUrl={pageUrls.blockquote} isDefinitionChecked />
            <ProgressLogTableRow title="Carousel" toUrl={pageUrls.carousel} isDefinitionChecked />
            <ProgressLogTableRow title="Character Counter" toUrl={pageUrls.characterCount} isDefinitionChecked />
            <ProgressLogTableRow title="Code Block" toUrl={pageUrls.codeBlock} isDefinitionChecked />
            <ProgressLogTableRow title="Drawer" toUrl={pageUrls.drawers} isDefinitionChecked />
            <ProgressLogTableRow title="Foundation: Opacity" toUrl={pageUrls.opacity} isDefinitionChecked />
            <ProgressLogTableRow title="Foundation: Shape" toUrl={pageUrls.shape} isDefinitionChecked />
            <ProgressLogTableRow title="Icon/Action/Tool Bar" toUrl={pageUrls.iconBar} isDefinitionChecked />
            <ProgressLogTableRow title="Images" toUrl={pageUrls.images} isDefinitionChecked />
            <ProgressLogTableRow title="Info Box" toUrl={pageUrls.infoBox} isDefinitionChecked />
            <ProgressLogTableRow title="Library: Basic and Semantic Text" toUrl={pageUrls.paragraphs} isDefinitionChecked />
            <ProgressLogTableRow title="Mega Menu" toUrl={pageUrls.megaMenu} isDefinitionChecked />
            <ProgressLogTableRow title="Process List" toUrl={pageUrls.processList} isDefinitionChecked />
            <ProgressLogTableRow title="Progress Bar" toUrl={pageUrls.progressBars} isDefinitionChecked />
            <ProgressLogTableRow title="Skip Link" toUrl={pageUrls.skipLink} isDefinitionChecked />
            <ProgressLogTableRow title="Status Indicator" toUrl={pageUrls.statusIndicator} isDefinitionChecked />
            <ProgressLogTableRow title="Step Indicator" toUrl={pageUrls.stepIndicator} isDefinitionChecked />

            <ProgressLogVersionRow version="1.0" />
            <ProgressLogTableRow title="Foundation: Depth, Elevation, Shadows" toUrl={pageUrls.depthElevationShadows} isDefinitionChecked />

            <ProgressLogVersionRow version="0.10" />
            <ProgressLogTableRow title="Guidelines: Color" toUrl={pageUrls.colorGuidelines} isDefinitionChecked />
            <ProgressLogTableRow title="Layout" toUrl={pageUrls.layout} isDefinitionChecked />
            <ProgressLogTableRow title="Segmented Button" toUrl={pageUrls.segmentedButton} isDefinitionChecked />
            <ProgressLogTableRow title="Spacing" toUrl={pageUrls.spacing} isDefinitionChecked />

            <ProgressLogVersionRow version="0.9" />
            <ProgressLogTableRow title="Accordion" toUrl={pageUrls.accordion} isDefinitionChecked />
            <ProgressLogTableRow title="Checkbox" toUrl={pageUrls.checkbox} isDefinitionChecked />
            <ProgressLogTableRow title="File Input" toUrl={pageUrls.fileInput} isDefinitionChecked />
            <ProgressLogTableRow title="Guidelines: Accessibility" toUrl={pageUrls.accessibility} isDefinitionChecked />

            <ProgressLogVersionRow version="0.8" />
            <ProgressLogTableRow title="Breadcrumb" toUrl={pageUrls.breadcrumb} isDefinitionChecked />
            <ProgressLogTableRow title="Card" toUrl={pageUrls.card} isDefinitionChecked />
            <ProgressLogTableRow title="Confirmation Button" toUrl={pageUrls.confirmationButton} isDefinitionChecked />
            <ProgressLogTableRow title="Hamburger Menu" toUrl={pageUrls.mainMenu} isDefinitionChecked />
            <ProgressLogTableRow title="Headings" toUrl={pageUrls.headings} isDefinitionChecked />
            <ProgressLogTableRow title="Radio Button" toUrl={pageUrls.radioButton} isDefinitionChecked />
            <ProgressLogTableRow title="Side Panel" toUrl={pageUrls.sidePanelNavigation} isDefinitionChecked />
            <ProgressLogTableRow title="Tab Group" toUrl={pageUrls.tabs} isDefinitionChecked />
            <ProgressLogTableRow title="Text Formatting" toUrl={pageUrls.typography} isDefinitionChecked />

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
    </>
  );
}
