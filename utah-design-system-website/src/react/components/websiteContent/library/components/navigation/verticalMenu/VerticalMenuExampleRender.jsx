import { VerticalMenu } from '@utahdts/utah-design-system';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';

/** @typedef {import('utah-design-system-website').VerticalMenuExamplePropsShape} VerticalMenuExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: VerticalMenuExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function VerticalMenuExampleRender({
  state: {
    props: {
      childrenMenuType,
    },
  },
  innerRef,
}) {
  const [menus, setMenu] = useImmer([
    {
      header: 'Menu Header',
      id: 'vertical-menu-sandbox',
      menuItems: [
        {
          id: 'components__text-layout',
          title: 'Menu Item',
          children: [
            { title: 'Item A',
              id: 'A',
              children: [
                { title: 'Sub-item A', id: 'G' },
                { title: 'Sub-item B', id: 'H' },
              ] },
            { title: 'Item B', id: 'B' },
            { title: 'Item C', id: 'C' },
            { title: 'Item D', id: 'D' },
            { title: 'Item E', id: 'E' },
            { title: 'Item F', id: 'F' },
          ],
          childrenMenuType,
        },
      ],
    },
  ]);
  useEffect(() => {
    setMenu((draftState) => {
      // @ts-ignore
      draftState[0].menuItems[0].childrenMenuType = childrenMenuType;
    });
  }, [childrenMenuType]);
  return (
    <div ref={innerRef}>
      <VerticalMenu
        menus={menus}
      />
    </div>
  );
}
