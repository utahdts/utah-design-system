import { Button, Drawer, DrawerContent, DrawerFooter, DrawerTitle, joinClassNames } from '@utahdts/utah-design-system';
import { useCallback, useState } from 'react';

/** @typedef {import('utah-design-system-website').DrawerExamplePropsShape} DrawerExamplePropsShape */

/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @param {object} props.state
 * @param {DrawerExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function DrawerExampleRender({
  state: {
    props: {
      className,
      closeOnEsc,
      content,
      position,
      showCloseButton,
      title,
    },
  },
  innerRef,
}) {
  const [showDrawer, setShowDrawer] = useState(false);
  const closeDrawer = useCallback(() => setShowDrawer(false), [setShowDrawer]);
  const openDrawer = useCallback(() => setShowDrawer(true), [setShowDrawer]);
  return (
    <div>
      <Button onClick={openDrawer}>
        Open drawer
      </Button>
      {showDrawer
        ? (
          <Drawer
            ariaLabelledBy="drawer-example-render-title"
            className={className}
            id="drawer-example-render"
            onClose={showCloseButton ? closeDrawer : undefined}
            onEscape={closeOnEsc ? closeDrawer : undefined}
            position={position}
          >
            <DrawerTitle id="drawer-example-render-title">{title}</DrawerTitle>
            <DrawerContent id="drawer-example-render-content">{content}</DrawerContent>
            <DrawerFooter className="flex float-right flex-wrap" id="drawer-example-render-footer">
              <Button
                className="mr-spacing"
                onClick={closeDrawer}
              >
                Cancel
              </Button>
              <Button
                className="button--solid button--primary-color"
                onClick={closeDrawer}
              >
                Okay
              </Button>
            </DrawerFooter>
          </Drawer>
        )
        : undefined}
      <div className="visually-hidden">
        <div className="drawer-wrapper" ref={innerRef}>
          <div className="drawer__backdrop backdrop-dark">
            <dialog
              aria-labelledby="drawer-example-title"
              className={joinClassNames('drawer__inner', position, className)}
              id="drawer-example"
            >
              <DrawerTitle id="drawer-example-title">{title}</DrawerTitle>
              <DrawerContent id="drawer-example-content">{content}</DrawerContent>
              <DrawerFooter className="flex float-right flex-wrap" id="drawer-example-footer">
                <Button
                  className="mr-spacing"
                  onClick={() => undefined}
                >
                  Cancel
                </Button>
                <Button
                  className="button--solid button--primary-color"
                  onClick={() => undefined}
                >
                  Okay
                </Button>
              </DrawerFooter>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
