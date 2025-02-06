# Prop-Types naming conventions and standards
The desired result is that the React components provided by the design system have a common
prop set so that using separate components feels intuitive and synchronized.

To make this happen, the prop types need both a standard set of naming and conventions for naming non-common props.

When adding a new prop, make sure it fits these guidelines and doesn't already exist in the common set of props.

## Guidelines
* `Boolean props`
props that are true/false should generally start with the word `is`. ie:
  - `isDisabled`
  - `isPopperVisible`

  There may be some props like `showChildContent` that would be awkward if they started with is `isShowChildContent` so those props should start with a verb.

## Common Properties
* `children` (React.ReactNode) (often optional)
Children to be wrapped in the Component. ie a label for a button.

* `className` (string) (often optional)
Every rendering component should have a className property that allows the parent component to pass in a className to be applied to this child item. The supplied className should go on the html tag that is the central focus of the component. The component should be single focused so that there is some rendered piece of the component that is the reason the component was written. For instance, for a Switch, the input that displays the switch value would receive the className. Other items can have classNames, but will need their own prop.

* `defaultValue` (component specific)
if an uncontrolled component, this is the default starting value

* `errorMessage`: (string)
The message to show if there is an error with the data the component renders.

* `id` (string.isRequired)
An `id` is required to tie the label and input together for accessibility. When using an "automatic" where an object is given at the form level and each input then is just a field name of the object, the `id` tells which field to use.
NOTE: The `id` prop of a component should be something like `calendar-input__${id}` where:
  1. Starts with the type of the component for easily seeing the component type in the DOM
  1. Separates parts of the id (ie "name" and "id(s)") with double underscores (`__`), which is similar to the BEMS mentality: ie `tabpanel__${tabGroupId}__${tabId}`
  1. Multiple part ids should be sorted from parent to child: `{component-type}__{top-parent}__{direct-parent}__{dynamic-id}__{child-identifier}`
  * Doing such should make the id of the components globally understandable, identifiable, and more easily targeted
  * Most, if not all, things should target based on class names instead of dynamic ids if at all possible

* `innerRef` (ref) (often optional - make sure the RefObject<generic> generic type is correct)
This goes on the outer wrapper element of the entire component. The parent then has the ability to target inner elements.
Refs tend to be helpful for inputs but not so much for other things?

* `isClearable` (boolean)
she be coupled with onClear

* `isDisabled` (boolean)

* `isRequired`: (boolean)
For input fields, `required` shows a '*' by the label. The Design System does not do form validation. There are plenty of libraries available to do validation. Pass your validation error message to the component to be displayed.

* `label` (string.isRequired)

* `labelClassName`: (string)

* `name`: (string) - can default to id if name is not given

* `onChange`: ((e, id, newValue) => {})
triggered when the value changes

* `onClear`: ((e) => {})
should be coupled with isClearable

* `placeholder`: (string)
text to show in the input until a value is entered

* `size`: (formElementSizesEnum/FormElementSizes - may be limited in possibilities)
Refers to the height and text size (like buttons)
Many controls will not support all sizes
Switches, buttons have size; Text Input, Select does not

* `title`: (string | React.ReactNode)
Button/ToolTip have their "title" as a child element so in the sandbox props label for the title entry it is labeled "Title (children)"
IconButton has a title as a prop so it's sandbox prop label is just "Title"
Other controls have a label instead of a title

* `value` (component specific type)
Components should be created controlled or uncontrolled.

* `wrapperClassName`: (string)
Used for components that have multiple children, eg: input wrapper or label/input

* `...rest` spreading (object)
This spreads to the rendered input or controlling element with the value, not the wrapper.
Spreading is for things that have predefined properties that the component will not specifically define. Like aria and other props for form components. Some things
like a Spinner won't have a rest spread property.

## Uncommon props from other components
You can check here to see if some other component already does something your component is wanting to do.

### Button
* `onClick`: MouseEventHandler<HTMLButtonElement>

### ClickableTag
* `iconLeft` : ReactNode
* `iconRight`: ReactNode
* `isSelected`: boolean

### Switch, Button, etc.

### Switch
* `labelOff`: PropTypes.node
* `labelOn`: PropTypes.node
* `sliderChildren`: PropTypes.node
* `width`: PropTypes.number - use css for most "width" component props
### Tooltip
* isTitleVisible: PropTypes.boolean

### TextInput
* `placeholder`: PropTypes.string (only makes sense on text inputs?)

## Events
### Keyboard Events
* Prefer onKeyUp over onKeyDown
  * used for cancel/enter key detection
  * maybe can cancel a key down before key up happens?
  * checking for modifiers should happen on keyUp since keyDown might catch an input before a modifier input (press 'a' and then press 'shift')

## Label/Value form html tag style
```html
<!-- preferred (required in design system components) -->
<div className="input-wrapper">
  <label />
  <input />
</div>

<!-- hard to style -->
<div className="input-wrapper">
  <label>
    <input />
  </label>
</div>
```

## Component Review
Things to check when reviewing a component:
* [ ] props all are either unique or on the "common" list in this document
* [ ] prop types are correct including specifying generics ie `{MouseEventHandler<HTMLButtonElement>} props.onClick`
* [ ] `rest` spread operator is used correctly
* [ ] move magic numbers to constants
* [ ] review coding practices
* [ ] sandbox
  * covers as many props as appropriate
  * all works
  * html tab
  * react tab
    * props sorting
    * props accuracy
* [ ] check types in index.d.ts to make sure:
  * props match types between component and index.d.ts
  * all props are represented
