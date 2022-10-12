import UtahUnbrand from './UtahUnbrand';

const propTypes = {};
const defaultProps = {};

function UtahHeader() {
  return (
    <div className="header">
      <UtahUnbrand className="header__utah-brand" />

      <span className="header__vertical-rule" />
      <span className="header__department">
        Utah Design System
      </span>
      <button className="header__sign-in button--solid" type="button">
        Sign In
      </button>
    </div>
  );
}

UtahHeader.propTypes = propTypes;
UtahHeader.defaultProps = defaultProps;

export default UtahHeader;
