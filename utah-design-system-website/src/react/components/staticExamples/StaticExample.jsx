import { joinClassNames, stringToId } from '@utahdts/utah-design-system';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @param {import('react').ReactNode} [props.quickTips]
 * @param {import('react').ReactNode} props.renderedExample
 * @param {string} [props.title]
 * @returns {import('react').JSX.Element}
 */
export function StaticExample({
  className,
  id,
  quickTips,
  renderedExample,
  title,
}) {
  return (
    <div className={joinClassNames('static-example', className)} id={id}>
      {
        title
          ? <h3 id={stringToId(title)} className="static-example__title">{title}</h3>
          : null
      }
      <div className="static-example__component-wrapper">
        {renderedExample}
      </div>
      {
        quickTips
          ? <div className="static-example__quick-tips">{quickTips}</div>
          : null
      }
    </div>
  );
}
