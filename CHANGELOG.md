# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [x.x.x] x/x/xxxx
## Added
- Add header setting for `titleFunction` for single page apps

# [2.0.2] 8/13/2024
## Fixed
- Utah Header should have a white background color (just not on the main .utah-design-system css class).

# [2.0.1] 8/5/2024
## Fixed
- Prevent action item menus overflowing the viewport

# [2.0.0] 7/31/2024
## Breaking Change
- **[Breaking]** Remove onSubmit from React components
- **[Breaking]** Remove white background from design system base class
  - the `utah-design-system` css class no longer has a background of white
  - To fix this issue apply a white color to the background of elements that have been affected by this change

## Added
- Add ADA link to accessibility documentation
- Add Angular example to Getting Started page
- Add dark color to banners sandbox
- Add unimplemented components disclaimer
- Add documentation for `mobileMenuLocation`
- Add documentation for Banners, ConfirmationButton, Modals, Pagination, RadioButton, Tooltips
- Add example Form with validation on Form Guidelines page
- Add example to InfoBox documentation
- Add Info Box classes
- Add placeholder to Table Filters
- Add Skeleton component
- Allow copying custom colors as CSS
- Make UtahDesignSystemContext's defaultSettings optional
- Show Popup Content in popups documentation

## Changed
- Remove Create React App from Readme
- Replace uuidv4() with useId()
- Update Demo page to use components
- Update drawers documentation
- Update official website popup image
- Update Showcase page
- Update skip link on search page
- Update tag colors

## Removed
- Remove duplicate CSS selectors

## Fixed
- Add min-width for ComboBox popups
- Add role=separator and aria-orientation to Vertical separator in dividers documentation
- Allow Popup custom popper dependency updates
- Close multi select options on blur
- Fix multi-select tag styling
- Fix sandbox `ariaLabeledBy` spelling
- Keep calendar open when date range filter calendar icon pressed
- Limit drawer width from full screen
- Prevent errors about currentOnFormKeyUp
- Relink XD document on Getting Started page
- Remove react-router from library
- Tell user to press down arrow for date range filter
- Update TimeInput options when format changes

# [1.17.0] 5/14/2024
## Breaking Change
- Icons.jsx has been removed in favor of using css icons.
  - `<Icons.IconEnvelope />`
  - becomes ==>
  - `<span className="utds-icon-before-mail" aria-hidden="true" />`
- Icons found in Icons.jsx that were still needed were moved out of the library into the website portion of the project since they were specific to the website and not used as a library resource.

- Move innerRef to wrapper for ClickableTag, Checkbox, and RadioButton. Existing innerRef usage will need to target the desired element inside of the wrapper instead of using the element directly from the ref.

## Fixed
- Close popups when clicked outside
- Make sure footer is 100% width
- Only announce multi-select groups if there are groups
- Prevent closing popups for main menu clicking
- Prevent header font from being overridden
- Toggle open utah Id mobile menu on mobile

## Added
- Add color picker popup for Color Picker
- Add Drawer component
- Add new icons: Filter, Restart, Sync, Refresh, Light Mode, Dark Mode, Mail, Share
- Add option parentMenuLinkSuffix for menus
- Add TableFilterComboBox types
- Announce that multi-select tags are deletable
- Trigger flyout menus on hover
- Update Accordion component & documentation
- Update Badge component & documentation
- Update Cards component & documentation
- Update header types including 'plain' menu type
- Update Tab Group component & documentation
- Use real static examples for PopupsDocumentation

# [1.16.3] 5/13/2024
## Fixed
- Position of search input css not high enough on the page

# [1.16.2] 5/13/2024
## Fixed
- Account for multiple library loads in header's loading setInterval

# [1.16.1] 4/25/2024
## Fixed
- Prevent infinite looping when tabbing hidden search modal

# [1.16.0] 4/16/2024
## Fixed
- Allow color picker to be dragged around screen
- Allow opening child flyouts on mobile
- Remove `aria-expanded` from main menu items

## Added
- Option to allow custom items in MultiSelect
- PlainText component
- TimeInput component
- Vertical Menu sandbox in documentation

# [1.15.5] 3/19/2024
## Fixed
- Fix the width of the search box on mobile.
- Fix the accessibility of the search button on mobile.

# [1.15.4] 3/5/2024
## Fixed
- Make sure footer is 100% width
- Prevent closing popups for main menu clicking
- Default Main Menu title to be "Main Menu"

## Added
- Add menus option for `parentMenuLinkSuffix`

# [1.15.3] 2/26/2024
## Fixed
- Fix menus not popping open on a touch device
- Fix overflowing utah header logo
- Fix overflowing utah header text

# [1.15.2] 2/14/2024
## Fixed
- Add styles for other types of text inputs

# [1.15.1] 1/31/2024
## Fixed
- Aria messages were visible on the screen

# [1.15.0] 1/30/2024
## Added
- DateInput component
- FileInput component
- Form Guidance page

## Changed
- Add props at bottom of ComboBox and MultiSelect Documentation pages
- Allow custom item entry in ComboBox
- Make `a11yLabel` a required prop for Table Filters
- New showcase sites
- Update mocks to match DateInput component

## Removed
- Example for create-react-app
- Progress Log page (view GitHub release notes instead)

# [1.14.3] 1/25/2024
## Fixed
- Turn default footer showing back on

# [1.14.2] 1/16/2024
## Fixed
- Show defaultValue starting value in ComboBox/MultiSelect

# [1.14.1] 1/16/2024
## Fixed
- Header WordPress Plugin download link

# [1.14.0] 1/16/2024
## Added
- Accessibility Testing page
- WordPress Header Plugin page
- Table Documentation minified tables examples

# [1.13.3] 1/11/2024
## Fixed
- Use flex-start for multi-select

# [1.13.2] 1/11/2024
## Fixed
- Restore tooltip popup to IconButtons

# [1.13.1] 1/8/2024
## Fixed
- Prevent flicker when clicking popup menu items

# [1.13.0] 1/2/2024
## Added
- Multi-select component
- JsDoc typing across the project
- Data Privacy documentation page
- Modals component

## Changed
- Scope normalize into `.utah-design-system`

## Fixed
- Fix wordpress CSS issues
- Handle Combo Box arrow clicking

# [1.12.1] 12/18/2023
## Added
- Header: Main Menu - self menu items
- Table Sandbox: default to paginating

## Security
- Upgrade vite dependency

# [1.12.0] 12/13/2023
## Added
- Table Pagination component that syncs table filtering and sorting
- Global Banners
- Header menu option actionUrl.skipHandleEvent
- Footer option for customizing Privacy and Terms links

## Fixed
- Table overflow horizontal scroll bar

# [1.11.2] 11/30/2023
## Fixed
- Fix Tag documentation page errors

# [1.11.1] 11/29/2023
## Added
- A "trash" icon has been added to the Design System icon font

# [1.11.0] 11/28/2023
## Added
- Component for ConfirmationButton
- Component for ComboBox

# [1.10.0] 11/14/2023
## Added
- Component for Checkbox
- Components for Radio Buttons

## In Progress
- Release partial work for Combo Box

# [1.9.3] 11/06/2023
## Fixed
- Fix css bugs for Utah Header in WordPress environment
- Fix css z-index for lightbox

# [1.9.2] 11/01/2023
## Fixed
- Fix css mega-menu width

# [1.9.1] 10/31/2023
## Fixed
- Fix css z-index for main menu

# [1.9.0] 10/31/2023
## Added
- Documentation for interactive tables (role="grid")

## Changed
- Enhanced the accessibility page and checklist

## Fixed
- Prevent overflowing header content when scroll bars are visible
- Update mega menu to better match mockups
- Update utah header and menu css to fix bugs in WordPress site

# [1.8.0] 10/18/2023
## Added
- Announce current page of Pagination
- Announce number of rows after filtering
- Add Tags component

## Removed
- Remove onClick and onDoubleClick from TableCell

## Fixed
- Align sort buttons on condensed table
- Pagination announces the current page

# [1.7.1] 10/12/2023
## Fixed
- Pop open sub menus when tabbing
- Allow clicking grandchild menu items #236

# [1.7.0] 10/04/2023
## Added
- New Icons:
  - Upload
  - Download
  - Favorite
  - Visibility
  - Visibility Off

## Fixed
- Update vertical menu style for dropdown menus and mobile menu.

# [1.6.1] 10/03/2023
## Fixed
- Keep only one search form at a time

# [1.6.0] 10/03/2023
## Added
- CharacterCounter: Documentation page
- CharacterCounter Component
- TableContextConsumer: allows using context inline with the table

## Changed
- Always include Search Modal in DOM for accessibility

## Deprecated

## Removed
- Remove switch sandbox from DateInput Documentation page

## Fixed
- Select only one main menu item on the Website
- Align icon font to center of button

## Security

# [1.5.1] 09/13/2023

## Added

## Changed

## Deprecated

## Removed

## Fixed
- Fix svg images merge issue

## Security

# [1.5.0] 09/12/2023

## Added
- **[Breaking]** TableSortingRule: a11yLabel attribute is now required
- Data Visualization Documentation
- Pagination: Sandbox example
- Pagination: Static examples
- Spinner Documentation: css/props detail
- State Symbol: mushroom
- Table Documentation: Links to GitHub files for example code
- Table Sorting: A11y announce, label, and button
- Table: Accessibility for Sorting
- TableHeadCell: `scope` attribute for accessibility
- TableInputFilter: Cancelling `x` icon button
- TextInput Documentation: css/props detail
- TextInput: property for showing clearing icon

## Changed
- Move button's spinner to be to the left of its right icon
- Update Table's CSS to match the mocks

## Deprecated

## Removed

## Fixed
- Implement pagination in Table sandbox
- Open main menu items in new tabs with meta key

## Security

# [1.4.0] 08/29/2023

## Added
- Accessibility: Global Announcer context and components
- Tooltip: Component
- Utah Header: Utah Footer copyrightYear setting
- Utah Header: Skip Link
- Website: Library landing page
- Website: Search the Design System website with the search tool

## Changed
- Color Picker: Add tooltip for "copy" icon notification
- Components: Add form input `required` styling
- Components: Add form input errorMessage styling
- Icon Button: Show title on Icon Button
- Icon Button: Show Tooltip on Icon Button
- Spinner: Allow Spinner to be determinate/indeterminate
- Spinner: Provide sandbox for Spinner documentation
- Switch: Update props with boilerplate defaults
- TextInput: Add error messages and style them
- TextInput: hook `innerRef` to wrapper instead of input
- TextInput: Provide sandbox for TextInput documentation
- TextInput: Provide static examples of TextInputs
- Table Documentation: Add github source code links for table examples
- Utah Header: Change Utah Header wrapper from a `<div>` to a `<header>` element.
- Website: Added more content for Getting Started - Designers

## Deprecated
N/A

## Removed
N/A

## Fixed
- Accessibility: Always announce Copy Button interactions instead of just once
- Utah Header: "Correctly" provide types in library
- Utah Header: Add missing documentation for various settings for the Utah Header
- Website: Allow going `back` in after a landing page redirect
- Website: Select no menus on 404 & search pages

## Security
N/A

# [1.3.0] 08/17/2023

## Added
N/A

## Changed
N/A
## Deprecated
N/A

## Removed
N/A

## Fixed
- Utah Header: types deploy

## Security
N/A


# [1.2.1] - 08/15/2023

## Added
- Back to Top documentation
- Basic and Semantic Text documentation
- Block Quote documentation
- Carousel documentation
- Character Counter documentation
- Code Block documentation
- Drawer documentation
- Icon/Action/Tool Bar documentation
- Images documentation
- Info Box documentation
- Mega Menu documentation
- On This page now has a "Back to top"
- Opacity documentation
- Process List documentation
- Progress Bar documentation
- Shape documentation
- Skip Link documentation
- Status Indicator documentation
- Step Indicator documentation

## Changed
- Change footer social links to links
- Emphasize the already existing Utah Header library
- Move Getting Started to the main menu
- Close color picker on "escape"

## Deprecated
N/A

## Removed
N/A

## Fixed
- Keep Mobile "How do I know" popup on the page
- Menu item wrapping and crowding chevron
- Menu selected item path UI
- Remove error when expanding Official Website
- Scroll in to view for missing hash links

## Security
N/A

# 👇 CHANGELOG template 👇
# [version] date
## Breaking Change
## Added
## Changed
## Deprecated
## Removed
## Fixed
## Security
