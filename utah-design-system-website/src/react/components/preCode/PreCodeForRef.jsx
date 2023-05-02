import { RefShape } from '@utahdts/utah-design-system';
import { html } from 'js-beautify';
import PropTypes from 'prop-types';
import { useLayoutEffect, useState } from 'react';
import PreCode from './PreCode';

const propTypes = {
  addHorizontalPadding: PropTypes.bool,
  allowScrollOverflow: PropTypes.bool,
  className: PropTypes.string,
  // what dependencies determine when the targetRef has changed content
  // eslint-disable-next-line react/forbid-prop-types
  deps: PropTypes.array.isRequired,
  maxHeight: PropTypes.string,
  showBackgroundColor: PropTypes.bool,
  // target DOM element from which to pull the DOM string
  targetRef: RefShape.isRequired,
};
const defaultProps = {
  addHorizontalPadding: false,
  allowScrollOverflow: false,
  className: '',
  maxHeight: null,
  showBackgroundColor: false,
};

function PreCodeForRef({
  addHorizontalPadding,
  allowScrollOverflow,
  className,
  deps,
  maxHeight,
  showBackgroundColor,
  targetRef,
}) {
  const [innerHtml, setInnerHtml] = useState('');

  useLayoutEffect(
    () => {
      // PreCode also calls cleanHtmlForInnerHTML, but that shouldn't break anything... 🤞
      let cleanHTML = html(
        targetRef.current?.outerHTML
          // place some mandatory newlines because js-beautify is not fully smart
          .replace(/>([a-z])/gi, '>\n$1')
          .replace(/([a-z])<\//gi, '$1\n</'),
        {
          indent_size: 2,
          wrap_attributes: 'force-expand-multiline',
          inline: [],
        }
      );
      // add output for events that have functions and other non-rendered content
      const events = [
        'onClick',
      ]
        .filter((event) => targetRef.current && targetRef.current[event.toLowerCase()])
        .map((event) => ` ${event}="() => { /* ... do something ... */ }" `)
        .join(' ');
      if (events) {
        const endStartTag = cleanHTML.indexOf('>');
        cleanHTML = `${cleanHTML.substring(0, endStartTag)} ${events}\n${cleanHTML.substring(endStartTag)}`;
      }
      setInnerHtml(cleanHTML);
    },
    // only update when the properties change so as not to get an infinite loop
    deps
  );

  return (
    <PreCode
      addHorizontalPadding={addHorizontalPadding}
      allowScrollOverflow={allowScrollOverflow}
      className={className}
      codeRaw={innerHtml}
      maxHeight={maxHeight}
      showBackgroundColor={showBackgroundColor}
    />
  );
}

PreCodeForRef.propTypes = propTypes;
PreCodeForRef.defaultProps = defaultProps;

export default PreCodeForRef;
