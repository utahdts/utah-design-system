import { joinClassNames } from '@utahdts/utah-design-system';

/**
 * @param {object} props
 * @param {string} props.className
 * @returns {React.JSX.Element}
 */
export function LinkIcon({ className }) {
  return (
    <span className={joinClassNames(['utds-icon-before-chevron-right', className])} aria-hidden="true" />
  );
}
