import TableDocumentationFilteringTableExample from './exampleTables/TableDocumentationFilteringTableExample';
import TableDocumentationFooterExample from './exampleTables/TableDocumentationFooterExample';
import TableDocumentationPaginationTableExample from './exampleTables/TableDocumentationPaginationTableExample';
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
      <TableDocumentationPaginationTableExample />

    </div>
  );
}

TableDocumentation.propTypes = propTypes;
TableDocumentation.defaultProps = defaultProps;

export default TableDocumentation;
