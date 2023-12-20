import { expect, test } from 'vitest';
import { calculateMenuItemsParents } from '../../../src/react/util/menuItems/calculateMenuItemsParents';

const links = {
  foundation: '/foundation',
  library: '/library',
  buttons: '/library/components/buttons',
  forms: '/library/components/forms',
  button: '/Library/components/buttons/button',
  segmentedButton: '/Library/components/buttons/segmentedButton',
  form: '/library/components/forms/form',
};

test('calculateMenuItemsParents - top level: no children', () => {
  expect(calculateMenuItemsParents({
    menuItems: [{
      link: links.buttons,
      parentLinks: [links.library],
      title: 'Buttons',
    }],
  })).toStrictEqual(
    [{
      children: undefined,
      link: links.buttons,
      parentLinks: [links.library],
      title: 'Buttons',
    }]
  );
});

test('calculateMenuItemsParents - children: get parent link', () => {
  expect(calculateMenuItemsParents({
    menuItems: [{
      link: links.buttons,
      title: 'Buttons',
      parentLinks: [links.library],
      children: [
        { link: links.button, title: 'Button' },
        { link: links.segmentedButton, title: 'Segmented Button' },
      ],
    }],
  })).toStrictEqual(
    [{
      link: links.buttons,
      parentLinks: [links.library],
      title: 'Buttons',
      children: [
        {
          children: undefined,
          link: links.button,
          parentLinks: [links.library, links.buttons],
          title: 'Button',
        },
        {
          children: undefined,
          link: links.segmentedButton,
          parentLinks: [links.library, links.buttons],
          title: 'Segmented Button',
        },
      ],
    }]
  );
});

test('calculateMenuItemsParents - children: already existing parentLinks', () => {
  expect(calculateMenuItemsParents({
    menuItems: [{
      link: links.buttons,
      title: 'Buttons',
      parentLinks: [links.library],
      children: [
        { link: links.button, title: 'Button', parentLinks: [links.foundation] },
        { link: links.segmentedButton, title: 'Segmented Button' },
      ],
    }],
  })).toStrictEqual(
    [{
      link: links.buttons,
      parentLinks: [links.library],
      title: 'Buttons',
      children: [
        {
          children: undefined,
          link: links.button,
          parentLinks: [links.foundation, links.library, links.buttons],
          title: 'Button',
        },
        {
          children: undefined,
          link: links.segmentedButton,
          parentLinks: [links.library, links.buttons],
          title: 'Segmented Button',
        },
      ],
    }]
  );
});

test('calculateMenuItemsParents - children: already existing parentLinks', () => {
  expect(calculateMenuItemsParents({
    menuItems: [{
      link: links.buttons,
      title: 'Buttons',
      children: [
        { link: links.button, title: 'Button' },
        { link: links.segmentedButton, title: 'Segmented Button' },
      ],
    }],
  })).toStrictEqual(
    [{
      link: links.buttons,
      parentLinks: [],
      title: 'Buttons',
      children: [
        {
          children: undefined,
          link: links.button,
          parentLinks: [links.buttons],
          title: 'Button',
        },
        {
          children: undefined,
          link: links.segmentedButton,
          parentLinks: [links.buttons],
          title: 'Segmented Button',
        },
      ],
    }]
  );
});

test('calculateMenuItemsParents - children: already existing parentLinks', () => {
  expect(calculateMenuItemsParents({
    menuItems: [{
      link: links.buttons,
      title: 'Buttons',
      children: [
        {
          children: [
            {
              children: [
                {
                  children: [
                    { link: `${links.button} 4-1`, title: 'Button4-1' },
                    { link: `${links.button} 4-2`, title: 'Button4-2' },
                    { link: `${links.button} 4-3`, title: 'Button4-3' },
                  ],
                  link: `${links.button} 3`,
                  title: 'Button3',
                },
              ],
              link: `${links.button} 2`,
              title: 'Button2',
            },
          ],
          link: `${links.button} 1`,
          title: 'Button1',
        },
        { link: links.segmentedButton, title: 'Segmented Button' },
      ],
    }],
  })).toStrictEqual(
    [{
      link: links.buttons,
      parentLinks: [],
      title: 'Buttons',
      children: [
        {
          children: [
            {
              children: [
                {
                  children: [
                    {
                      children: undefined,
                      link: `${links.button} 4-1`,
                      parentLinks: [links.buttons, `${links.button} 1`, `${links.button} 2`, `${links.button} 3`],
                      title: 'Button4-1',
                    },
                    {
                      children: undefined,
                      link: `${links.button} 4-2`,
                      parentLinks: [links.buttons, `${links.button} 1`, `${links.button} 2`, `${links.button} 3`],
                      title: 'Button4-2',
                    },
                    {
                      children: undefined,
                      link: `${links.button} 4-3`,
                      parentLinks: [links.buttons, `${links.button} 1`, `${links.button} 2`, `${links.button} 3`],
                      title: 'Button4-3',
                    },
                  ],
                  link: `${links.button} 3`,
                  parentLinks: [links.buttons, `${links.button} 1`, `${links.button} 2`],
                  title: 'Button3',
                },
              ],
              link: `${links.button} 2`,
              parentLinks: [links.buttons, `${links.button} 1`],
              title: 'Button2',
            },
          ],
          link: `${links.button} 1`,
          parentLinks: [links.buttons],
          title: 'Button1',
        },
        {
          children: undefined,
          link: links.segmentedButton,
          parentLinks: [links.buttons],
          title: 'Segmented Button',
        },
      ],
    }]
  );
});

test('calculateMenuItemsParents - top level: isMenuHeader', () => {
  expect(calculateMenuItemsParents({
    menuItems: [{
      children: [
        { link: links.button, title: 'Button' },
        { link: links.segmentedButton, title: 'Segmented Button' },
      ],
      parentLinks: [links.library],
      title: 'Buttons',
    }],
  })).toStrictEqual(
    [
      {
        link: 'menuHeader::Buttons',
        parentLinks: [links.library],
        title: 'Buttons',
        children: [
          {
            children: undefined,
            link: links.button,
            parentLinks: [links.library, 'menuHeader::Buttons'],
            title: 'Button',
          },
          {
            children: undefined,
            link: links.segmentedButton,
            parentLinks: [links.library, 'menuHeader::Buttons'],
            title: 'Segmented Button',
          },
        ],
      },
    ]
  );
});

test('calculateMenuItemsParents - child: has isMenuHeader', () => {
  expect(calculateMenuItemsParents({
    menuItems: [{
      link: links.buttons,
      title: 'Buttons',
      parentLinks: [links.library],
      children: [
        {
          children: [
            { link: links.button, title: 'Button2' },
            { link: links.segmentedButton, title: 'Segmented Button' },
          ],
          title: 'Button1',
        },
        { link: links.segmentedButton, title: 'Segmented Button' },
      ],
    }],
  })).toStrictEqual(
    [{
      link: links.buttons,
      parentLinks: [links.library],
      title: 'Buttons',
      children: [
        {
          children: [
            {
              children: undefined,
              link: links.button,
              parentLinks: [links.library, links.buttons, 'menuHeader::Button1'],
              title: 'Button2',
            },
            {
              children: undefined,
              link: links.segmentedButton,
              parentLinks: [links.library, links.buttons, 'menuHeader::Button1'],
              title: 'Segmented Button',
            },
          ],
          link: 'menuHeader::Button1',
          parentLinks: [links.library, links.buttons],
          title: 'Button1',
        },
        {
          children: undefined,
          link: links.segmentedButton,
          parentLinks: [links.library, links.buttons],
          title: 'Segmented Button',
        },
      ],
    }]
  );
});
