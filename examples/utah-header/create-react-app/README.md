# Example of Using the Utah Header in a Create React App
This simple app, created with Create React App, installs and uses the Utah Header dependency.

## Documentation

- [![Utah Header Options](https://img.shields.io/badge/Utah_Header_Options_Documentation-blue)](https://designsystem.utah.gov/library/utahHeader)
- [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted)
- [![Design System Website](https://img.shields.io/badge/Design%20System%20Website-blue)](https://designsystem.utah.gov)

## What to Look For
You can see the header being imported in the `src/App.js` file:

```javascript
// import the css to style the header
import '@utahdts/utah-design-system-header/css';
// import the ability to set the header's configuration
import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';

// Set the header's configuration when the page loads
useEffect(
  () => {
    setUtahHeaderSettings({});
  },
  []
);

```


## Try-out This Example

```bash
cd examples/utah-header/create-react-app
npm i
npm start
```

## How This App Was Created
```bash
npx create-react-app cra-utah-header-example
npm i @utahdts/utah-design-system-header
# Manual Step: Import the header in `src/App.jsx`
# Manual Step: Load header settings via setUtahHeaderSettings() in `src/App.js`
npm start
```
