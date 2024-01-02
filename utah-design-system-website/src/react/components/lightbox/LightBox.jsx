import { IconButton, joinClassNames } from '@utahdts/utah-design-system';
import { useImmer } from 'use-immer';
import { useKeyEventGlobal } from '../../hooks/useKeyEventGlobal';

/**
 * @param {object} props
 * @param {string} props.alt
 * @param {string} [props.className]
 * @param {boolean} [props.hideAlt]
 * @param {import('react').ReactNode} props.image
 * @returns {import('react').JSX.Element}
 */
export function LightBox({
  alt,
  className,
  hideAlt,
  image,
}) {
  const [state, setState] = useImmer({ open: false });

  useKeyEventGlobal({
    whichKeyCode: 'Escape',
    onKeyUp: () => {
      setState((draftState) => {
        draftState.open = false;
      });
    },
  });

  return (
    <>
      <button
        type="button"
        className={joinClassNames('lightbox__image-thumbnail', hideAlt && 'lightbox__image-thumbnail--hiddenAlt', className)}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setState((draftState) => {
            draftState.open = true;
          });
        }}
      >
        {/* @ts-ignore */}
        <img src={image} alt={alt} />
        {hideAlt ? null : <span className="lightbox__button-text hcenter">{alt}</span>}
      </button>
      {state.open && (
        <>
          <div
            className="lightbox__backdrop modal-backdrop backdrop-dark"
          />
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
          <div
            className="lightbox__image"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setState((draftState) => {
                draftState.open = false;
              });
            }}
          >
            {/* @ts-ignore */}
            <img src={image} alt={alt} />
            <div className="lightbox__popup-text">{alt}</div>
          </div>
          <IconButton
            className="lightbox__close-button"
            icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
            title="Close"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setState((draftState) => {
                draftState.open = false;
              });
            }}
          />
        </>
      )}
    </>
  );
}
