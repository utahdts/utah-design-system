# Utah Design System Library

[![See it on NPM!](https://img.shields.io/npm/v/@utahdts/utah-design-system.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@utahdts/utah-design-system)
[![License](https://img.shields.io/npm/l/@utahdts/utah-design-system.svg?color=blue&style=for-the-badge)](https://github.com/utahdts/utah-design-system/raw/dev/LICENSE)
[![ARB Approved](https://img.shields.io/badge/Utah_ARB_Approved-126DC4?style=for-the-badge)](https://dts.utah.gov/standards/architecture-review-board)

The library is a collection of css styles and components designed to make it quick and simple for developers to create web experiences using the Utah Design System.
Goes hand in hand with the [Design System Header](https://github.com/utahdts/utah-design-system/tree/main/examples/utah-header) and Footer.

## What's included

- Compiled CSS
- SASS CSS
- React Components <br>
  (The React components are not a primary resource. Utilize the guidelines and css resources to create your own components for other libraries.)<br>
  (Other libraries will be added as they are created.)

## Getting Started

- Visit the [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted) page to begin using the Utah Header and Design System.

## Documentation


- [![Design System Website](https://img.shields.io/badge/Design%20System%20Website-blue)](https://designsystem.utah.gov)
- [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted)
- [![Utah Header Options](https://img.shields.io/badge/Utah_Header_Options-blue)](https://designsystem.utah.gov/library/patterns/utahHeader)


## Install

```bash
npm i @utahdts/utah-design-system
```

### Example Using SCSS source in a javascript import

```JavaScript
//import all scss
import '@utahdts/utah-design-system/css/index.scss';
```

### Using the SCSS source in a Sass file

In most cases you can simply import the Sass file as illustrated below:

```scss
@use "~@utahdts/utah-design-system/css/index.scss";
```

## Pre-processed bundled resource

The CSS files have been pre-processed and can be delivered via the `unpkg CDN` (Content Delivery Network).

Unpkg syntax:
```
https://unpkg.com/:package@:version/:file
```

Example using version:
```
https://unpkg.com/@utahdts/utah-design-system@1.0.1/dist/style.css
```

Example using latest:
```
https://unpkg.com/@utahdts/utah-design-system@latest/dist/style.css
```

## Contribution
The Utah Design System website is built using React, however we want to expand it to other technologies such as Angular, Vue.js, etc.
If you want to contribute or have any feedback, we'd love to hear from you! Please [contact us](https://designsystem.utah.gov/resources/gettingStarted).

### Design System GitHub

- [Utah Design System](https://github.com/utahdts/utah-design-system/tree/main/)

### License

[STATE OF UTAH: MEMORANDUM OF AGREEMENT TO TRANSFER SOFTWARE](https://github.com/utahdts/utah-design-system/tree/main/LICENSE)
