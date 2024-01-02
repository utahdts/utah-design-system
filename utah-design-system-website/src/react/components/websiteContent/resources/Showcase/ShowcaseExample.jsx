import { ExternalLink } from '@utahdts/utah-design-system';
import { LightBox } from '../../../lightbox/LightBox';

/**
 * @param {object} props
 * @param {string} props.agency
 * @param {string} props.id
 * @param {import('react').ReactNode} props.image
 * @param {string} [props.text]
 * @param {string} props.title
 * @param {string} props.url
 * @returns {import('react').JSX.Element}
 */
export function ShowcaseExample({
  agency,
  id,
  image,
  text,
  title,
  url,
}) {
  return (
    <div className="showcase-example">
      <h2 id={id}>{title}</h2>
      <div><ExternalLink href={url}>{url}</ExternalLink></div>
      <div>Agency: {agency}</div>
      <div>{text}</div>
      <hr />
      <div><LightBox image={image} alt={`${title} Screenshot`} /></div>
    </div>
  );
}
