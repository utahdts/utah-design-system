# Example of Using the Utah Header in a Plain Javascript Vite App
This simple javascript app, created with Vite, installs and uses the Utah Header dependency.

## Documentation

- [![Utah Header Options](https://img.shields.io/badge/Utah_Header_Options_Documentation-blue)](https://designsystem.utah.gov/library/utahHeader)
- [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted)
- [![Design System Website](https://img.shields.io/badge/Design%20System%20Website-blue)](https://designsystem.utah.gov)

## What to Look For
You can see the header being imported in the `main.js` file:

```javascript
// import the css to style the header
import '@utahdts/utah-design-system-header/css';
// import the ability to set the header's configuration
import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';

// Set the header's configuration
setUtahHeaderSettings({});

```


## Try-out This Example

```bash
cd examples/utah-header/vite
npm i
npm run dev
```

## How This App Was Created
```bash
npm init vite@latest
npm i @utahdts/utah-design-system-header
# Manual Step: Import the header and set its settings in `main.js`
npm run dev
```
