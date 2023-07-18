# utah-design-system

A collection of styles and components designed to make it quick and simple for developers to create web experiences using the Utah Design System.  
Goes hand in hand with the [Design System Header](https://github.com/utahdts/utah-design-system/tree/dev/examples/utah-header) and [Design System Footer](https://designsystem.utah.gov/library/patterns/utahFooter).

## What's included

- Compiled CSS
- SASS CSS
- Components

## Documentation

Please see the [documentation website](https://designsystem.utah.gov/) and the [Getting Started](https://designsystem.utah.gov/resources/gettingStarted) page for all information related to the Utah Design System.

## Install

[![See it on NPM!](https://img.shields.io/npm/v/@utahdts/utah-design-system.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@utahdts/utah-design-system)
[![License](https://img.shields.io/npm/l/@utahdts/utah-design-system.svg?color=blue&style=for-the-badge)](https://github.com/utahdts/utah-design-system/raw/dev/LICENSE)
[![issues](https://img.shields.io/github/issues-raw/utahdts/utah-design-system?style=for-the-badge)](https://github.com/utahdts/utah-design-system/issues)
[![ARB Approved](https://img.shields.io/badge/Utah_ARB_Approved-126DC4?style=for-the-badge)](https://dts.utah.gov/standards/architecture-review-board)

```bash
npm i @utahdts/utah-design-system
```

### Example Using React Components

```JavaScript
// compiled
import { DocumentationTemplate, LandingTemplate } from '@utahdts/utah-design-system';

// uncompiled style
import { OnThisPage } from '@utahdts/utah-design-systemOnThisPage';
import { VerticalMenu } from '@utahdts/utah-design-system';

//import all scss
import '@utahdts/utah-design-system/css/index.scss';
```

### Using the files in Sass

In most cases you can simply import the Sass file as illustrated below:

```scss
@import "~@utahdts/utah-design-system/css/index.scss";
```

## Pre-processed bundled resource

At a limited scale, some files have been pre-processed and can be delivered via a CDN (Content Delivery Network).

```
unpkg.com/:package@:version/:file
unpkg.com/@utahdts/utah-design-system@0.0.2/css/build/utah-design-system.css
```

| Resource                |  CDN URL                                                                                 |
|-------------------------|-----------------------------------------------------------------------------------------|
| index.scss<br>(All CSS) | https://unpkg.com/@utahdts/utah-design-system@:version/css/build/utah-design-system.css |

## Contribution
The Utah Design System website is built using React, however we want to expand it to other technologies such as Angular, Vue.js, etc.  
If you want to contribute or have any feedback, we'd love to hear from you ! Please [contact us](https://designsystem.utah.gov/resources/gettingStarted).

### Site Map

- [Home](https://github.com/utahdts/utah-design-system)
- Library
- [Design System Header](https://github.com/utahdts/utah-design-system/tree/dev/%40utahdts/utah-design-system-header)
- [Examples](https://github.com/utahdts/utah-design-system/tree/dev/examples) 
- [Design System Website](https://designsystem.utah.gov/)
