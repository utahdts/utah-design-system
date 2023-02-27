import { RefShape } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useLayoutEffect, useState } from 'react';
import cleanHtmlForInnerHTML from './cleanHtmlForInnerHTML';
import PreCode from './PreCode';

const propTypes = {
  className: PropTypes.string,
  // what dependencies determine when the targetRef has changed content
  // eslint-disable-next-line react/forbid-prop-types
  deps: PropTypes.array.isRequired,
  // target DOM element from which to pull the DOM string
  targetRef: RefShape.isRequired,
};
const defaultProps = {
  className: '',
};

function PreCodeForRef({ className, deps, targetRef }) {
  const [innerHtml, setInnerHtml] = useState('');

  useLayoutEffect(
    () => {
      // PreCode also calls cleanHtmlForInnerHTML, but that shouldn't break anything... 🤞
      let cleanHTML = cleanHtmlForInnerHTML(targetRef.current?.outerHTML);

      // add output for events that have functions and other non-rendered content
      const events = [
        'onClick',
      ]
        .filter((event) => targetRef.current && targetRef.current[event.toLowerCase()])
        .map((event) => ` ${event}="() => { /* ... do something ... */ }" `)
        .join(' ');
      if (events) {
        const endStartTag = cleanHTML.indexOf('&gt;');
        cleanHTML = `${cleanHTML.substring(0, endStartTag)} ${events} ${cleanHTML.substring(endStartTag)}`;
      }
      setInnerHtml(cleanHTML);
    },
    // only update when the properties change so as not to get an infinite loop
    deps
  );

  return <PreCode className={className} codeRaw={innerHtml} />;
}

PreCodeForRef.propTypes = propTypes;
PreCodeForRef.defaultProps = defaultProps;

export default PreCodeForRef;
