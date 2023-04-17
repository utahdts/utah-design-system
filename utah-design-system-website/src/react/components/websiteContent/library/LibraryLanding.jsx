import { NavLink } from 'react-router-dom';
import pageUrls from '../../routing/pageUrls';

const propTypes = {};
const defaultProps = {};

function LibraryLanding() {
  return (
    <div>
      Library Landing page
      <NavLink to={pageUrls.segmentedButton}>
        Segmented Button
      </NavLink>

    </div>
  );
}

LibraryLanding.propTypes = propTypes;
LibraryLanding.defaultProps = defaultProps;

export default LibraryLanding;
