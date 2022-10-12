import { NavLink } from 'react-router-dom';

const propTypes = {};
const defaultProps = {};

function LibraryLanding() {
  return (
    <div>
      Library Landing page
      <NavLink to="/library/components/buttons/segmented-button">
        Segmented Button
      </NavLink>

    </div>
  );
}

LibraryLanding.propTypes = propTypes;
LibraryLanding.defaultProps = defaultProps;

export default LibraryLanding;
