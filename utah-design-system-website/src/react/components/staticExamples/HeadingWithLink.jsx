import { ExternalLink } from '@utahdts/utah-design-system';

/**
 * @param {Object} props
 * @param {string} props.headingTag
 * @param {string} props.headingTitle
 * @param {string} props.id
 * @param {string} props.linkUrl
 * @returns {JSX.Element}
 */
export function HeadingWithLink({
  headingTag: HeadingTag,
  headingTitle,
  id,
  linkUrl,
}) {
  return (
    <div className="flex justify-between items-center">
      {/* @ts-ignore */}
      <HeadingTag id={id}>
        {headingTitle}
      </HeadingTag>
      <ExternalLink href={linkUrl}>
        See code on GitHub
      </ExternalLink>
    </div>
  );
}
