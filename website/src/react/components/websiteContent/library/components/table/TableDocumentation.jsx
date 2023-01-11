import SandboxExample from '../../../../sandbox/SandboxExample';
import TableDocumentationFilteringTableExample from './exampleTables/TableDocumentationFilteringTableExample';
import TableDocumentationFooterExample from './exampleTables/TableDocumentationFooterExample';
import TableDocumentationPaginationTableExample from './exampleTables/TableDocumentationPaginationTableExample';
import TableDocumentationSimpleTableExample from './exampleTables/TableDocumentationSimpleTableExample';
import TableDocumentationSortingTableExample from './exampleTables/TableDocumentationSortingTableExample';
import TableExampleCodeReact from './TableExampleCodeReact';
import TableExampleProps from './TableExampleProps';
import TableExampleRender from './TableExampleRender';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function TableDocumentation() {
  return (
    <div className="documentation-content">

      <h1 id="h1-top">Table</h1>
      <p className="lead-in">A <code>&lt;table&gt;</code> standard html component for displaying tabular data.</p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={TableExampleCodeReact}
        PROPS_EXAMPLE={TableExampleProps}
        RENDER_EXAMPLE={TableExampleRender}
      />

      {/* Sandbox Example Here */}
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
