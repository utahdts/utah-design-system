import { CharacterCount, TextArea } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').CharacterCountExamplePropsShape} CharacterCountExamplePropsShape */

/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @param {import('use-immer').Updater<{props: CharacterCountExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @param {CharacterCountExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function CharacterCountExampleRender({
  setState,
  state: {
    props: {
      className,
      id,
      maxLength,
      text,
    },
  },
  innerRef,
}) {
  return (
    <div style={{ width: '80%' }} ref={innerRef}>
      <TextArea
        id="text-area-example-render-id"
        onChange={
          /** @param {import('react').BaseSyntheticEvent} e */
          (e) => {
            setState((draftState) => {
              draftState.props.text = e.target.value;
            });
          }
        }
        label="Text Area Label"
        value={text}
        wrapperClassName="input-wrapper--mb-zero"
      />
      <CharacterCount
        className={className}
        id={id || 'default-character-count-id'}
        maxLength={Number(maxLength) || 0}
        text={text}
      />
    </div>
  );
}
