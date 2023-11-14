// @ts-check
import { CharacterCount, TextArea } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../typedefs.d').CharacterCountExamplePropsShape} CharacterCountExamplePropsShape */

/**
 * @param {Object} props
 * @param {React.RefObject} props.innerRef
 * @param {import('use-immer').Updater<{props: CharacterCountExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {CharacterCountExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export default function CharacterCountExampleRender({
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
        onChange={(e) => setState((draftState) => {
          draftState.props.text = e.target.value;
        })}
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
