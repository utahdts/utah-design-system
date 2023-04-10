import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, joinClassNames } from '@utahdts/utah-design-system';
import { useImmer } from 'use-immer';
import useKeyEventGlobal from '../../hooks/useKeyEventGlobal';

const propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  hideAlt: PropTypes.bool,
  image: PropTypes.node.isRequired,
};
const defaultProps = {
  className: null,
  hideAlt: false,
};

function LightBox({
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

LightBox.propTypes = propTypes;
LightBox.defaultProps = defaultProps;

export default LightBox;
