# utah-design-system

A collection of styles and react components designed to make it quick and simple for developers to create web experiences using the Utah Design System.

## What's included

- Compiled CSS
- SASS CSS
- React components

## Documentation

Please see the [documentation site](https://utahdts.github.io/utah-design-system/) for all information related to the Utah Design System.

## Install

[![See it on NPM!](https://img.shields.io/npm/v/@utahdts/utah-design-system.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@utahdts/utah-design-system)
[![License](https://img.shields.io/npm/l/@utahdts/utah-design-system.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
[![issues](https://img.shields.io/github/issues-raw/utahdts/utah-design-system?style=for-the-badge)](https://github.com/utahdts/utah-design-system/issues)

```bash
$ npm i @utahdts/utah-design-system
```

### Using the React components

```JavaScript
// compiled
import { DocumentationTemplate, LandingTemplate } from '@utahdts/utah-design-system';

// uncompiled style
import { OnThisPage } from '@utahdts/utah-design-systemOnThisPage';
import { SidePanelNavigation } from '@utahdts/utah-design-system';
import { useCurrentMenuItem } from '@utahdts/utah-design-system';

//import all scss
import '@utahdts/utah-design-system/css/index.scss';
```

### Using the files in Sass

In most cases you can simply import the Sass file as illustrated below:

```scss
@import "~@utahdts/utah-design-system/css/6-components/base-components/buttons/button.scss";
```

## Pre-processed bundled resource

At a limited scale, some files have been pre-processed to CSS so that it can be delivered via CDN and used in environments where this rendered resource is required.

```
unpkg.com/:package@:version/:file
unpkg.com/@utahdts/utah-design-system@0.0.2/css/build/utah-design-system.css
```

| resource                |  CDN URL                                                                                 |
|-------------------------|-----------------------------------------------------------------------------------------|
| index.scss<br>(All CSS) | https://unpkg.com/@utahdts/utah-design-system@:version/css/build/utah-design-system.css |

### Site Map

- [Home](https://utahdts.github.io/utah-design-system/)
- Library
- [Header](https://utahdts.github.io/utah-design-system/utah-header/)
- [Documentation and Examples](https://utahdts.github.io/utah-design-system/website/)
