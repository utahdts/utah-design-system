import { joinClassNames, Table, TableBody, TableHead, TableHeadCell, TableHeadRow, TableWrapper } from '@utahdts/utah-design-system';
import { useCallback } from 'react';
import { documentationTypes } from '../../../../enums/documentationTypes';

/** @typedef {import('utah-design-system-website').DocumentationTypes} DocumentationTypes */

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {DocumentationTypes} props.type
 * @param {string} [props.className]
 * @returns {import('react').JSX.Element}
 */
export function SettingsDocumentation({ children, className, type }) {
  const renderHeader = useCallback(
    () => {
      let retVal = null;
      switch (type) {
        case documentationTypes.CSS:
          retVal = (
            <>
              <TableHeadCell className="text-left css-classes">CSS Classes</TableHeadCell>
              <TableHeadCell className="text-left ">Description</TableHeadCell>
            </>
          );
          break;
        case documentationTypes.PROPS:
          retVal = (
            <>
              <TableHeadCell className="text-left">Property</TableHeadCell>
              <TableHeadCell className="text-left">Type</TableHeadCell>
              <TableHeadCell className="text-left">Default</TableHeadCell>
              <TableHeadCell className="text-left">Description</TableHeadCell>
            </>
          );
          break;
        default:
          break;
      }
      return retVal;
    },
    []
  );

  return (
    <div className={joinClassNames('documentation-content--small-text', className)}>
      <TableWrapper className="full-width">
        <Table className="table--lines-x table--full-width">
          <TableHead>
            <TableHeadRow>
              {renderHeader()}
            </TableHeadRow>
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
