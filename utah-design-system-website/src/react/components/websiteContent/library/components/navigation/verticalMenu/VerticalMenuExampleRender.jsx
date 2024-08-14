import { VerticalMenu } from '@utahdts/utah-design-system';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div ref={innerRef}>
      <VerticalMenu
        menus={[{
          header: 'Components',
          id: 'vertical-menu-sandbox',
          menuItems: [
            {
              id: 'vertical-menu-navigation',
              title: 'Navigation & Links',
              children: [
                {
                  title: 'Back to Top',
                  // @ts-ignore
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
                  // @ts-ignore
                  actionFunction: () => navigate(pageUrls.sidePanelNavigation),
                },
                {
                  title: 'Skip Link',
                  id: 'vertical-menu-skip-link-item',
                  // @ts-ignore
                  actionFunction: () => navigate(pageUrls.skipLink),
                },
              ],
              childrenMenuType,
            },
          ],
        }]}
      />
    </div>
  );
}
