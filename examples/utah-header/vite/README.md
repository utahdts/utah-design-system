# vite-utah-header-example
Simple app created with `vite` that installs and uses the Utah Header dependency.

This app was created by:
1. creating a vite app with [Vite](https://vitejs.dev/guide/):
> npm init vite@latest
2. install [utah header dependency](https://www.npmjs.com/package/@utahdts/utah-design-system-header)
> npm i @utahdts/utah-design-system-header
3. import the header (js/css) in to the application code [main.js](./main.js)
> import '@utahdts/utah-design-system-header/css';
>
> import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
4. load header settings to show the header in [App.js](./src/App.js)
> setUtahHeaderSettings({});
5. run app to see the header
> npm run dev

You'll notice that the header is on the same line as the content! The default config for a vanilla vite setup is to put `display: flex` on the body tag. Unset that style and the header will be at the top. See the following style added to the main.js:
> &lt;style>body { display: block }&lt;/style>

# Agency
- DTS

# Stakeholders
- Product Owner: Joseph Sharp
- Digital Experience Team

# Utah Design System Header Usage
## Technologies
- NPM
- vite
- JavaScript

## Trying this demo app
- in this folder, run `npm i`
- run `npm start`
The application should launch and have the Utah Header displayed at the top.

# Versioning
This project uses [SemVer](http://semver.org/) for versioning.

# Authors
DTS & the Digital Experience Team

# License
Apache License Version 2.0
