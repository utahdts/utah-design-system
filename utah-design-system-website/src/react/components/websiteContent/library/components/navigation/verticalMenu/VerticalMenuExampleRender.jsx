import { VerticalMenu } from '@utahdts/utah-design-system';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { pageUrls } from '../../../../../routing/pageUrls';

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
  const navigate = useNavigate();

  const [menus, setMenu] = useImmer([
    {
      header: 'Components',
      id: 'vertical-menu-sandbox',
      menuItems: [
        {
          id: 'vertical-menu-navigation',
          title: 'Navigation & Links',
          children: [
            {
              title: 'Back to Top',
              actionFunction: () => navigate(pageUrls.backTopTop),
              id: 'vertical-menu-back-to-top-item',
            },
            {
              title: 'Vertical Menu',
              id: 'vertical-menu-component-item',
              children: [
                {
                  title: 'Example',
                  id: 'vertical-menu-example-sub-item',
                  link: '#section-example',
                },
              ],
            },
            {
              title: 'Side Panel',
              id: 'vertical-menu-side-panel-item',
              actionFunction: () => navigate(pageUrls.sidePanelNavigation),
            },
            {
              title: 'Skip Link',
              id: 'vertical-menu-skip-link-item',
              actionFunction: () => navigate(pageUrls.skipLink),
            },
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
