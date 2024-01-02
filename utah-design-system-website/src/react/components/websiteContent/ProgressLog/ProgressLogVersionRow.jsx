import {
  TableCell,
  TableRow
} from '@utahdts/utah-design-system';

/**
 * @param {object} props
 * @param {string} props.version
 * @returns {React.JSX.Element}
 */
export function ProgressLogVersionRow({ version }) {
  return (
    <TableRow>
      <TableCell
        // @ts-ignore
        colSpan="100"
        className="progress-log__version"
      >
        {`Version ${version}`}
      </TableCell>
    </TableRow>
  );
}
