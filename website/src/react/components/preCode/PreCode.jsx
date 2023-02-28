import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import cleanHtmlForInnerHTML from './cleanHtmlForInnerHTML';

const propTypes = {
  className: PropTypes.string,
  // the raw unformatted DOM code string (probably from an innerHTML?)
  codeRaw: PropTypes.string.isRequired,
};
const defaultProps = {
  className: '',
};

function PreCode({ className, codeRaw }) {
  const [codeInnerHtml, setCodeInnerHtml] = useState(null);

  useEffect(
    () => {
      setCodeInnerHtml(cleanHtmlForInnerHTML(codeRaw));
    },
    [codeRaw]
  );

  return (
    // eslint-disable-next-line react/no-danger
    <pre className={className} dangerouslySetInnerHTML={{ __html: codeInnerHtml }} />
  );
}

PreCode.propTypes = propTypes;
PreCode.defaultProps = defaultProps;

export default PreCode;
