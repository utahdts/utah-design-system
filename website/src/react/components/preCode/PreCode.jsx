import PropTypes from 'prop-types';
import joinClassNames from '@utahdts/utah-design-system/react/util/joinClassNames';

const propTypes = {
  className: PropTypes.string,
  // the raw unformatted DOM code string (probably from an innerHTML?)
  allowScrollOverflow: PropTypes.bool,
  codeRaw: PropTypes.string.isRequired,
  showBackgroundColor: PropTypes.bool,
};
const defaultProps = {
  allowScrollOverflow: false,
  className: '',
  showBackgroundColor: false,
};

function PreCode({
  className,
  codeRaw,
  allowScrollOverflow,
  showBackgroundColor,
  ...rest
}) {
  return (
    <pre
      className={joinClassNames(
        className,
        showBackgroundColor && 'gray-block',
        allowScrollOverflow && 'pre-block--overflow'
      )}
      {...rest}
    >
      <div className={joinClassNames(allowScrollOverflow && 'pre-block__overflow-content')}>
        {codeRaw.replace(/(^\n)|(\n\s*$)/g, '')}
      </div>
    </pre>
  );
}

PreCode.propTypes = propTypes;
PreCode.defaultProps = defaultProps;

export default PreCode;
