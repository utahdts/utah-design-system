import {
  TableCell,
  TableRow
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';

const propTypes = {
  version: PropTypes.string.isRequired,
};
const defaultProps = {};

function ProgressLogVersionRow({ version }) {
  return (
    <TableRow>
      <TableCell colSpan="100" className="progress-log__version">{`Version ${version}`}</TableCell>
    </TableRow>
  );
}

ProgressLogVersionRow.propTypes = propTypes;
ProgressLogVersionRow.defaultProps = defaultProps;

export default ProgressLogVersionRow;
