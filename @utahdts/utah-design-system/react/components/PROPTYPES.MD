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
* `className` (string)
Every rendering component should have a className property that allows the parent component to pass in a className to be applied to this child item. The supplied className should go on the html tag that is the central focus of the component. The component should be single focused so that there is some rendered piece of the component that is the reason the component was written. For instance, for a Switch, the input that displays the switch value would receive the className. Other items can have classNames, but will need their own prop.

* `defaultValue` (component specific)
if an uncontrolled component, this is the default starting value

* `errorMessage`: (string)
The message to show if there is an error with the data the component renders.

* `id` (string.isRequired)  
An `id` is required to tie the label and input together for accessibility. When using an "automatic" where an object is given at the form level and each input then is just a field name of the object, the `id` tells which field to use.
  
* `innerRef` (ref)
This goes on the outer wrapper element of the entire component. The parent then has the ability to target inner elements. 

* `isDisabled` (boolean)
  
* `label` (string.isRequired)
  
* `labelClassName`: (string)

* `onChange`: ((e, id, newValue) => {})
triggered when the value changes

* `onSubmit`: ((e) => {})
triggered when the enter key is pressed on the input

* `required`: (boolean)
For input fields, `required` shows a '*' by the label. The Design System does not do form validation. There are plenty of libraries available to do validation. Pass your validation error message to the component to be displayed.

* `value` (component specific type)
Components should be created controlled or uncontrolled. 

* `wrapperClassName`: (string)

* `...rest` spreading (object)
This spreads to the rendered input or controlling element with the value, not the wrapper.

## Uncommon props from other components
You can check here to see if some other component already does something your component is wanting to do.

### Switch, Button, etc.
* `size`: (formElementSizesEnum - may be limited in possibilities) 
Refers to the height and text size (like buttons)
Many controls will not support all sizes
Switches, buttons have size; Text Input does not

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
