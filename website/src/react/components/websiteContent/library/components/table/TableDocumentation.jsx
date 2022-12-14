import TableDocumentationFilteringTableExample from './exampleTables/TableDocumentationFilteringTableExample';
import TableDocumentationFooterExample from './exampleTables/TableDocumentationFooterExample';
import TableDocumentationSimpleTableExample from './exampleTables/TableDocumentationSimpleTableExample';
import TableDocumentationSortingTableExample from './exampleTables/TableDocumentationSortingTableExample';

const propTypes = {};
const defaultProps = {};

function TableDocumentation() {
  return (
    <div className="documentation-content">

      <TableDocumentationSimpleTableExample />
      <TableDocumentationSortingTableExample />
      <TableDocumentationFilteringTableExample />
      <TableDocumentationFooterExample />

      {/* pagination */}

      {/* <TablePagination recordsPerPage={25} /> */}
      {/* Should pagination be in a tfoot? no. it is outside of groupings and outside of the table! */}

    </div>
  );
}

TableDocumentation.propTypes = propTypes;
TableDocumentation.defaultProps = defaultProps;

export default TableDocumentation;
