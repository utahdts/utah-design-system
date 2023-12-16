import { ExampleCodeReactProp } from '../../../../sandbox/ExampleCodeReactProp';
import { SandboxIndent } from '../../../../sandbox/SandboxIndent';

/** @typedef {import('utah-design-system-website').TableExamplePropsShape} TableExamplePropsShape */

/**
 * @param {Object} props
 * @param {{props: TableExamplePropsShape}} props.state
 * @returns {JSX.Element}
 */
export function TableExampleCodeReact({
  state: {
    props: {
      className,
      id,
      isFiltering,
      isPaginating,
      isSorting,
    },
  },
}) {
  // for curly brackets &rcub wsa not working, so had to use decimal... :shrug:
  // RCUB = &#125;
  // LCUB = &#123;
  return (
    <>
      &lt;TableWrapper
      {(className || id) ? <br /> : undefined}
      <ExampleCodeReactProp displayProp={className ? `className="${className}"` : null} indentLevel={1} />
      <ExampleCodeReactProp displayProp={id ? `id="${id}"` : null} indentLevel={1} />
      &gt;
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;Table&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      &lt;TableHead&gt;
      <br />
      {
        isSorting
          ? (
            <>
              <SandboxIndent indentLevel={3} />
              &lt;TableSortingRules defaultValue=&quot;category&quot;&gt;
              <br />
              <SandboxIndent indentLevel={4} />
              &lt;TableSortingRule recordFieldPath=&quot;category&quot; /&gt;
              <br />
              <SandboxIndent indentLevel={4} />
              &lt;TableSortingRule recordFieldPath=&quot;symbol&quot; /&gt;
              <br />
              <SandboxIndent indentLevel={4} />
              {/* eslint-disable-next-line max-len */}
              &lt;TableSortingRule recordFieldPath=&quot;year&quot; fieldType=&#123;tableSortingRuleFieldType.NUMBER&#125; defaultIsAscending=&#123;false&#125; /&gt;
              <br />
              <SandboxIndent indentLevel={3} />
              &lt;/TableSortingRules&gt;
              <br />
            </>
          )
          : null
      }
      {
        isFiltering
          ? (
            <>
              <SandboxIndent indentLevel={3} />
              &lt;TableFilters&gt;
              <br />
              <SandboxIndent indentLevel={4} />
              &lt;TableFilterTextInput recordFieldPath=&quot;category&quot; /&gt;
              <br />
              <SandboxIndent indentLevel={4} />
              &lt;TableFilterTextInput recordFieldPath=&quot;symbol&quot; /&gt;
              <br />
              <SandboxIndent indentLevel={4} />
              &lt;TableFilterTextInput recordFieldPath=&quot;year&quot; /&gt;
              <br />
              <SandboxIndent indentLevel={3} />
              &lt;/TableFilters&gt;
              <br />
            </>
          )
          : null
      }
      <SandboxIndent indentLevel={3} />
      &lt;TableHeadRow&gt;
      <br />
      <SandboxIndent indentLevel={4} />
      &lt;TableHeadCell recordFieldPath=&quot;category&quot;&gt;Category&lt;/TableHeadCell&gt;
      <br />
      <SandboxIndent indentLevel={4} />
      &lt;TableHeadCell recordFieldPath=&quot;symbol&quot;&gt;Symbol&lt;/TableHeadCell&gt;
      <br />
      <SandboxIndent indentLevel={4} />
      &lt;TableHeadCell recordFieldPath=&quot;year&quot;&gt;As Of Year&lt;/TableHeadCell&gt;
      <br />
      <SandboxIndent indentLevel={3} />
      &lt;/TableHeadRow&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      &lt;/TableHead&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      &lt;TableBody&gt;
      <br />
      <SandboxIndent indentLevel={3} />
      &lt;TableBodyData records=&#123;stateSymbols&#125; recordIdField=&quot;category&quot;&gt;
      <br />
      <SandboxIndent indentLevel={4} />
      &lt;TableBodyDataRowTemplate&gt;
      <br />
      <SandboxIndent indentLevel={5} />
      &lt;TableBodyDataCellTemplate recordFieldPath=&quot;category&quot; /&gt;
      <br />
      <SandboxIndent indentLevel={5} />
      &lt;TableBodyDataCellTemplate recordFieldPath=&quot;symbol&quot; /&gt;
      <br />
      <SandboxIndent indentLevel={5} />
      &lt;TableBodyDataCellTemplate recordFieldPath=&quot;year&quot; /&gt;
      <br />
      <SandboxIndent indentLevel={4} />
      &lt;/TableBodyDataRowTemplate&gt;
      <br />
      <SandboxIndent indentLevel={3} />
      &lt;/TableBodyData&gt;
      <br />
      <SandboxIndent indentLevel={2} />
      &lt;/TableBody&gt;
      <br />
      <SandboxIndent indentLevel={1} />
      &lt;/Table&gt;
      <br />

      {
        isPaginating
          ? (
            <>
              <ExampleCodeReactProp displayProp="<TablePagination" indentLevel={1} />
              <ExampleCodeReactProp displayProp={'className="mt-spacing"'} indentLevel={2} />
              <ExampleCodeReactProp displayProp={'id="table-example-render-pagination-id"'} indentLevel={2} />
              <ExampleCodeReactProp displayProp="pageSize={5}" indentLevel={2} />
              <ExampleCodeReactProp displayProp="/>" indentLevel={1} />
            </>
          )
          : null
      }

      &lt;/TableWrapper&gt;
    </>
  );
}
