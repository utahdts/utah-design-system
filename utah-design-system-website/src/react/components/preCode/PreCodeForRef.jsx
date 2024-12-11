import { html } from 'js-beautify';
import { useLayoutEffect, useState } from 'react';
import { PreCodeForCodeString } from './PreCodeForCodeString';

/**
 * @param {object} props
 * @param {any[]} props.deps what dependencies determine when the targetRef has changed content
 * @param {import('react').RefObject<HTMLElement | null>} props.targetRef target DOM element from which to pull the DOM string
 * @param {boolean} [props.addHorizontalPadding]
 * @param {boolean} [props.allowScrollOverflow]
 * @param {string} [props.className]
 * @param {string} [props.maxHeight]
 * @param {object} [props.propsForPre]
 * @param {boolean} [props.showBackgroundColor]
 * @returns {import('react').JSX.Element}
 */
export function PreCodeForRef({
  deps,
  targetRef,
  ...preCodeProps
}) {
  const [innerHtml, setInnerHtml] = useState('');

  useLayoutEffect(
    () => {
      // PreCode also calls cleanHtmlForInnerHTML, but that shouldn't break anything... 🤞
      let cleanHTML = html(
        targetRef.current?.outerHTML
          // place some mandatory newlines because js-beautify is not fully smart
          .replace(/>([a-z])/gi, '>\n$1')
          .replace(/([a-z])<\//gi, '$1\n</') ?? '',
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
        // @ts-expect-error
        .filter((event) => targetRef.current?.[event.toLowerCase()])
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

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PreCodeForCodeString codeRaw={innerHtml} {...preCodeProps} />;
}
