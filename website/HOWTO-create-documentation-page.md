# How To Create Documentation Pages

A Documentation page details the usage of a Utah Design System concept. This includes:
* Interactive example
* Static Examples
* Guidance
* Settings & Props

This "How To" guide details the process for creating a new Documentation page including linking it to the menu system (ATTOW).

## Documentation pages
It is going to be easiest to copy an existing working documentation set of components and rename and repurpose the copies. To do this, find a page that is similar to the one you want. A page with simple content will be easier to repurpose than one that has a lot of complexity. Then copy/paste the files to your new component's folder.

Components in the website can be found in the `./website/src/react/components/websiteContent` folder. Inside this folder, components are broken up in to groups similar to the menu structure. A single component should have its own folder with the components used to render that component all in that folder.

### Main Page
Example: `IconButtonDocumentation.jsx`
This is the main starting place for the content. It has the sections and ties to the interactive example components. 

ToDo:
* Copy this component and paste and rename to be your new component
* Change the function name to match your documentation page (at least 4 places: function, proptypes, defaultprops, and export)
* Change the title in the `h1` tag to match your component
* Scan the other content to remove or change to match your component
* Rename the interactive examples to match the `Helper Components` for your component

### Helper Components
Example: `IconButtonExampleCodeReact.jsx`, `IconButtonExampleProps.jsx`, `IconButtonExampleRender.jsx`

These tie the generic functionality of the interactive example to provide the properties, rendering, and react/html output of the interactive example.

ToDo:
* Copy these components and paste and rename them to be your new component
* For Each Component
  * Change the function name to match your documentation page (at least 4 places: function, proptypes, defaultprops, and export)
  * Scan the content to replace for your component
  * Change the propType to be the `Shape for Props` of your new component

### Shape for Props
Example: `IconButtonPropsShape.js`
This file contains the React PropTypes `shape` of the properties used in this components interactive example. This shape is passed among the `Helper Components` to provide the properties functionality. Using properties greatly reduces the cognitive load of the developer by allowing the developer to easily understand the objects with which the developer paints their coded tapestry.

ToDo:
* Copy this shape and paste and rename to be your new shape
* Replace the shape's props with the props of your component (these should have been discovered during the design process, though more may emerge during component implementation)

## Entries in `pages.js` and `pageUrls.js`
These files hook up the navigation and routing of the application. There is a generic layer of components that consume `pages` and `pageUrls` to handle browser navigation so all you have to do is create entries in these files and the routing snaps in to place.

ToDo in `pageUrls.js`:
* Create an entry for your page (Your component's path must be unique among all the entries)

ToDo in `pages.js`:
* Copy an entry for an existing page (These are organized in groups so be careful to create your new entry its relevant group)
* Replace the content of the copied entry with your components information including:
  * *content*: your new component's `Main Page` component
  * *link*: the `pageUrl` entry just created for your component (ie `pageUrls.myComponent`)
  * *menuSecondary*: use the `menusEnum` to tell the top level parent of your component in the main menu
  * *pageTitle*: Title of your component
  * *template*: Documentation pages use the `layoutTemplatesEnum.DOCUMENTATION_TEMPLATE`; If your component needs something else, you're on your own. :shrug: :wash-hands:

At this point you can navigate to your component's url and see your component in action! Though it won't yet appear in the menu.

## Entry in `menus.js`
The `menus` files lays out the structure of the menu. Menus are grouped and care should be taken to place your new menu item in a pleasing location. Many entries are alphabetically ordered.

ToDo:
* Find the top level main menu entry in to which your component will be located
* Create a new menu item entry by copying and pasting an already existing entry
* Update your new menu item's fields:
  * *id*: unique id to identify the menu item. MUST BE UNIQUE across the app
  * *title*: The title shown to the user for this menu item
  * *parentLinks*: Top level menu item pages used for showing current menu item indicator (ie `[pages.library.link]`)
  * children: Sub menu items to show collapsible/expandable under this menu (ie `[{ link: pages.switch.link, title: pages.switch.pageTitle }]`)

## Testing
You now have a fully navigable component documentation page. Make sure that your menu items work by interacting with them to navigate and test that the page shows with the expected content. At this point your page is ready to start filling with content.

## Example sequence
Here is an example of how the `VerticalMenuDocumentation` page was created:
1. Create new folder of `website/src/react/websiteContent/library/components/menus/verticalMenu`
1. Copy files from the `website/src/react/websiteContent/library/components/buttons/iconButton` folder in to the `verticalMenu` folder
1. Rename the files to replace `IconButton` with `VerticalMenu`
1. Open each of the copied files and replace `IconButton` with `VerticalMenu`
1. Peruse each file for mentions of `icon` or `icon button` or `button` to replace with `vertical menu`
1. open `pageUrls.js` and add an entry for `verticalMenu`
1. open `pages.js` and add an entry for `verticalMenu` in the appropriate location
1. open `menus.js` and add an entry for `verticalMenu` in the appropriate menu
