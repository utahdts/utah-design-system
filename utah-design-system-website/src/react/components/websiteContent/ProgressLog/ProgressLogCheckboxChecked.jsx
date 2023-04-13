const propTypes = {};
const defaultProps = {};

function ProgressLogCheckboxChecked() {
  return (
    <div className="checkbox-circle">
      <span
        className="utds-icon-before-check"
        aria-hidden="true"
      />
      <span className="visually-hidden">
        checkmark
      </span>
    </div>
  );
}

ProgressLogCheckboxChecked.propTypes = propTypes;
ProgressLogCheckboxChecked.defaultProps = defaultProps;

export default ProgressLogCheckboxChecked;
