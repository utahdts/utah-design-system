import { SandboxIndent } from '../../../../../sandbox/SandboxIndent';

/** @typedef {import('utah-design-system-website').VerticalMenuExamplePropsShape} VerticalMenuExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: VerticalMenuExamplePropsShape}} props.state
 * @returns {import('react').JSX.Element}
 */
export function VerticalMenuExampleCodeReact({
  state: {
    props: {
      childrenMenuType,
    },
  },
}) {
  return (
    <>
      &lt;VerticalMenu
      <br />
      <SandboxIndent indentLevel={1} />
      menus=&#123;
      <br />
      <SandboxIndent indentLevel={2} />
      {`[{
      header: 'Menu Header',
      id: 'menu-header-id',
      menuItems: [
        {
          id: 'menu-item-id',
          title: 'Menu Item',
          children: [...children...],
          childrenMenuType: '${childrenMenuType}',
        },
      ],
    }]`}
      <br />
      <SandboxIndent indentLevel={1} />
      &#125;
      <br />
      <SandboxIndent indentLevel={0} />
      /&gt;
    </>
  );
}
