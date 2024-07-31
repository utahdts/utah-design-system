import {
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
} from '@utahdts/utah-design-system';
import { useCallback, useState } from 'react';

/** @typedef {import('@utahdts/utah-design-system').DrawerPlacement} DrawerPlacement */
/**
 * @param {object} props
 * @param {DrawerPlacement} props.position
 * @param {string} props.title
 * @returns {import('react').JSX.Element}
 */
export function SimpleDrawer({
  position,
  title,
}) {
  const [showDrawer, setShowDrawer] = useState(false);
  const closeDrawer = useCallback(() => setShowDrawer(false), []);
  return (
    <>
      <Button onClick={() => setShowDrawer(true)}>
        {title}
      </Button>
      {showDrawer
        ? (
          <Drawer
            className="simple-drawer"
            id="simple-drawer"
            onClose={closeDrawer}
            onEscape={closeDrawer}
            position={position}
            ariaLabelledBy="simple-drawer-title"
          >
            <DrawerTitle id="simple-drawer-title">
              Drawer Title
            </DrawerTitle>
            <DrawerContent id="simple-drawer-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus arcu sed turpis varius,
              vulputate convallis lacus pretium. Pellentesque quis lobortis leo, eget tristique tellus.
              Fusce tempus lacus sed lacus dignissim ullamcorper. Aenean tempor aliquam orci, in feugiat arcu
              efficitur sit amet. Ut eu tristique libero. Morbi euismod vulputate ullamcorper. Quisque rutrum
              quam tempor diam hendrerit viverra. Ut ornare nisl id accumsan feugiat. Mauris eget sollicitudin
              dui, ut porttitor massa. Aenean semper volutpat ex in malesuada. Mauris sed condimentum quam.
              Nunc rhoncus ligula in tellus venenatis pulvinar. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </DrawerContent>
            <DrawerFooter className="flex justify-end" id="simple-drawer-id">
              <Button onClick={closeDrawer} className="mr-spacing">Cancel</Button>
              <Button onClick={closeDrawer} className="button--solid button--primary-color">Okay</Button>
            </DrawerFooter>
          </Drawer>
        )
        : null}
    </>
  );
}
