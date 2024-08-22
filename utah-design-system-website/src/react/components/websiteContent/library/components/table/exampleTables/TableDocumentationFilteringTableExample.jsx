import {
  Accordion,
  BUTTON_APPEARANCE,
  Button,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableContextConsumer,
  TableFilterCustom,
  TableFilterDateRange,
  TableFilterNone,
  TableFilterComboBoxAllOptions,
  TableFilterTextInput,
  TableFilters,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper,
  componentColors, ExternalLink
} from '@utahdts/utah-design-system';
import { useState } from 'react';
import { HeadingWithLink } from '../../../../../staticExamples/HeadingWithLink';
import { examplePresidentsData } from './examplePresidentsData';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';

export function TableDocumentationFilteringTableExample() {
  const [funFactsFilter, setFunFactsFilter] = useState('');

  return (
    <div className="static-example mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Filtering Data"
        id="table__filtering-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationFilteringTableExample.jsx"
      />
      <p className="mb-spacing-xs">This table allows filtering its data through the use of the inputs in the <code>&lt;thead&gt;</code> element.</p>
      <p className="mb-spacing-xs">This example does not include any additional styling. This demonstrates what a table component looks like out-of-the-box.</p>
      <Accordion
        id="table-example-filtering"
        className="mb-spacing"
        contentClassName="accordion__content--bordered"
        headerContent={<span>Table Preview</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={4}
      >
        <TableWrapper>
          <Table className="table--min-height">
            <TableHead>
              <TableFilters>
                {/* Example of an "uncontrolled" filter; filtering works, but parent component does not know the current filter value */}
                <TableFilterTextInput a11yLabel="Name" recordFieldPath="name" />

                {/* Skip a column by using the "None" filter component */}
                <TableFilterNone><span className="visually-hidden">No filter available for this column</span></TableFilterNone>

                {/*
                  Present a combo box input of the possible values from which to filter;
                  Loads all the possible values from the data for the give recordFieldPath and creates options for the
                  found values.
                */}
                <TableFilterComboBoxAllOptions a11yLabel="Party" recordFieldPath="politicalParty" />

                {/* Date range filtering popup */}
                <TableFilterDateRange
                  a11yLabel="Inauguration"
                  id="table-filtering-inauguration"
                  recordFieldPath="inauguration"
                />

                {/*
                  "Controlled" filter; parent knows the value!
                  Without further coding, this does not actually perform filtering because the filtering component expects
                  the controlling parent component to do something with the controlled value;
                  It may be possible in the future for the filtering context to recognize the passed in value and update the
                  `filterValues` when the passed in value changes so that filtering still occurs automatically. But... maybe you
                  really want to just use a TableFilterCustom instead if that's the case.
                */}
                <TableFilterTextInput
                  a11yLabel="Fun Facts"
                  onChange={(e) => (
                    // @ts-expect-error
                    setFunFactsFilter(e.target?.value)
                  )}
                  recordFieldPath="funFacts"
                  value={funFactsFilter}
                />

                <TableFilterCustom>
                  {
                    ({ filterValues, setFilterValues }) => (
                      <Button
                        appearance={BUTTON_APPEARANCE.SOLID}
                        color={componentColors.PRIMARY}
                        onClick={(e) => {
                          e.stopPropagation();
                          setFilterValues((draftState) => {
                            // filter values must be a string
                            // the field (ie birthplace.state) can be a dot path in to the record
                            draftState['birthplace.state'] = {
                              options: {},
                              value: draftState['birthplace.state']?.value ? '' : 'Virginia',
                            };
                          });
                        }}
                      >
                        {filterValues['birthplace.state']?.value ? 'Only Virginia' : 'All States'}
                      </Button>
                    )
                  }
                </TableFilterCustom>
              </TableFilters>
              <TableHeadRow>
                <TableHeadCell recordFieldPath="name">Name</TableHeadCell>
                <TableHeadCell recordFieldPath="nthPresident">No.</TableHeadCell>
                <TableHeadCell recordFieldPath="politicalParty">Party</TableHeadCell>
                <TableHeadCell recordFieldPath="inauguration">Inauguration</TableHeadCell>
                <TableHeadCell recordFieldPath="funFacts">Fun Facts</TableHeadCell>
                <TableHeadCell recordFieldPath="birthplace">Birth Place</TableHeadCell>
              </TableHeadRow>
            </TableHead>

            <TableBody>
              <TableBodyData records={examplePresidentsData} recordIdField="id">
                <TableBodyDataRowTemplate>
                  <TableBodyDataCellTemplate recordFieldPath="name" />
                  <TableBodyDataCellTemplate recordFieldPath="nthPresident" />
                  <TableBodyDataCellTemplate recordFieldPath="politicalParty" />
                  <TableBodyDataCellTemplate recordFieldPath="inauguration" />
                  <TableBodyDataCellTemplate recordFieldPath="funFacts">
                    {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
                    {({ record }) => <>{`${record.funFacts.substring(0, 20)}...`}</>}
                  </TableBodyDataCellTemplate>
                  <TableBodyDataCellTemplate recordFieldPath="birthPlace">
                    {({ record }) => <>{[record.birthplace.county, record.birthplace.state].join(', ')}</>}
                  </TableBodyDataCellTemplate>
                </TableBodyDataRowTemplate>
              </TableBodyData>
              <TableContextConsumer>
                {
                  (tableContext) => {
                    const hasData = !!tableContext.allData?.length;
                    const hasFilteredData = !!tableContext.filteredData?.length;
                    return (
                      (hasData && !hasFilteredData)
                        ? (
                          <tr>
                            <td className="table__no-results-td" colSpan={100}>
                              <span className="table__no-results-text">Your filter returned no results.</span>
                            </td>
                          </tr>
                        )
                        : null
                    );
                  }
                }
              </TableContextConsumer>
            </TableBody>
          </Table>
        </TableWrapper>
      </Accordion>
      <span>
        <strong>Note:</strong> The table component does not inherently display a message when no results are found.{' '}
        <ExternalLink href="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationFilteringTableExample.jsx">
          See code on GitHub
        </ExternalLink>.
      </span>
      <PreCodeForCodeString
        showBackgroundColor
        codeRaw={`
                  <tr>
                    <td class="table__no-results-td" colSpan="100">
                      <span class="table__no-results-text">
                        Your filter returned no results.
                      </span>
                    </td>
                  </tr>
                `}
        className="mt-spacing"
      />
    </div>
  );
}
