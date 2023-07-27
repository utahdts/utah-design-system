# Example of Importing the Design System in to a Vite-React Project
The Utah Design System library provides CSS and components to make development easier. This example shows two options for importing the design system's css in to a Vite-React project. You can see examples of these options in the `src/css/index.scss` file.
* Option 1: use scss variables from design system scss files
* Option 2: use css variables from design system

## Documentation

- [![Utah Header Options](https://img.shields.io/badge/Utah_Header_Options_Documentation-blue)](https://designsystem.utah.gov/library/utahHeader)
- [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted)
- [![Design System Website](https://img.shields.io/badge/Design%20System%20Website-blue)](https://designsystem.utah.gov)

## What to Look For
You can see the two coded options in the `src/css/index.scss` file:

```typescript
@use "@utahdts/utah-design-system/css/index.scss" as ds-settings;

// OPTION 1: use scss variables from design system scss files
body {
  background-color: #{ds-settings.$electric-yellow-05} !important;
}

// OPTION 2: use css variables from design system
// can either @use the design system as above, or can import the css from the CDN
body.utah-design-system {
  background-color: var(--secondary-color);
}
```


## Try-out This Example

```bash
cd examples/design-system/vite-react
npm i
npm run dev
```

## How This App Was Created
```bash
npm create vite@latest
npm i @utahdts/utah-design-system
npm i sass -D
# Created src/css/index.scss file with imports of design system
# Updated src/main.tsx to import src/css/index.scss
npm run dev
```
