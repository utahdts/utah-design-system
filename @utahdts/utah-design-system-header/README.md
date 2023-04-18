# Utah Header
The Utah Header is part of the Utah Design System. It provides a common initial entry point experience for users of State of Utah websites. Please submit pull requests or start conversations with the Design System team for anything you would like to see incorporated in to the header.

## What's included

- Compiled CSS
- SASS CSS

## Documentation

Please see the [documentation site](https://utahdts.github.io/utah-design-system/) for all information related to the Utah Design System.

## Install

[![See it on NPM!](https://img.shields.io/npm/v/@utahdts/utah-design-system-header.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@utahdts/utah-design-system-header)
[![License](https://img.shields.io/npm/l/@utahdts/utah-design-system.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```bash
$ npm i @utahdts/utah-design-system-header
```

## API Functions
These functions allow configuring and interacting with the Utah Header. It is suggested to only interact with the header using these functions so as to be more "future proof" as changes to the Utah Header codebase will only account for these functions and not for custom coding.
* `loadHeader`: This function creates the Utah Header DOM elements. It is called automatically when the Utah Header javascript library is loaded on to a web page.
* `removeHeader`: This function removes the Utah Header from the DOM. This may be useful for pages that should not have the header on them. The application then may call *loadHeader()* to readd the header.

## Events
The header emits events at the document level. Applications can listen for these events to be able to time interactions with the header.
* `utahHeaderLoaded`: fired when the header is done with its initial loading phase and is ready to accept configuration. This event is fired by the *loadHeader()* function
* `utahHeaderUnloaded`: fired when the header is unloaded when the *removeHeader()* function is called

### Using the components

```JavaScript
// compiled
import { getUtahHeaderSettings, setUtahHeaderSettings } from '@utahdts/utah-design-system-header';

//import all scss
import '@utahdts/utah-design-system-header/src/css/index.scss';
```

### Using the files in Sass

In most cases you can simply import the Sass file as illustrated below:

```scss
@import "~@utahdts/utah-design-system-header/src/css/_utah-header-wrapper.scss";
```

## Pre-processed bundled resource

At a limited scale, some files have been pre-processed to CSS so that it can be delivered via CDN and used in environments where this rendered resource is required.

```
unpkg.com/:package@:version/:file
unpkg.com/@utahdts/utah-design-system-header@0.4.1/dist/style.css

Get latest
unpkg.com/@utahdts/utah-design-system-header/dist/style.css
```

| resource                | CDN URL                                                                      |
|-------------------------|------------------------------------------------------------------------------|
| index.scss<br>(All CSS) | https://unpkg.com/@utahdts/utah-design-system-header@:version/dist/style.css |



### Site Map

- [Home](https://utahdts.github.io/utah-design-system/)
- [Library](https://utahdts.github.io/utah-design-system/library/)
- Header
- [Documentation and Examples](../website/README.md)
