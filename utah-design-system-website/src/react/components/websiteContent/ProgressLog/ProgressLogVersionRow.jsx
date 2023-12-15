import {
  TableCell,
  TableRow
} from '@utahdts/utah-design-system';

/**
 * @param {Object} props
 * @param {string} props.version
 * @returns {JSX.Element}
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
