import { joinClassNames } from '../../util/joinClassNames';

/**
 * Sometimes you want a label that has static text next to it that looks and fits in to the
 * layout of a form. The plain text is not an input. It doesn't change. It's not required. It's
 * just plain text. You may think you don't need this, but then you'll want it over and over again.
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.id] one of the few components where `id` is not required
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isLabelSkipped] highly recommended to not skip the label; instead, hide it
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {React.ReactNode} [props.value] usually is a string, but you're welcome to drop in whatever you want
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function PlainText({
  className,
  innerRef,
  id,
  isLabelSkipped,
  label,
  labelClassName,
  value,
  wrapperClassName,
  ...rest
}) {
  return (
    <div className={joinClassNames('input-wrapper', 'input-wrapper--plain-text', wrapperClassName)} ref={innerRef}>
      {
        isLabelSkipped
          ? null
          : (
            <div className={labelClassName ?? undefined}>
              {label}
            </div>
          )
      }
      <div className="plain-text__inner-wrapper">
        <div className={joinClassNames(className)} id={id} {...rest}>
          {/* empty div doesn't take up space. the UI was jumping up and down when there wasn't a value. if there is nothing then put something */}
          {value || <>&nbsp;</>}
        </div>
      </div>
    </div>
  );
}
