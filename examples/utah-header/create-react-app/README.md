# cra-utah-header-example
Simple app created with Create React App that installs and uses the Utah Header dependency.

This app was created by:
1. creating a react app with [Create React App](https://create-react-app.dev/docs/getting-started):
> npx create-react-app cra-utah-header-example
2. install [utah header dependency](https://www.npmjs.com/package/@utahdts/utah-design-system-header)
> npm i @utahdts/utah-design-system-header
3. import the header (js/css) in to the application code [App.js](./src/App.js)
> import '@utahdts/utah-design-system-header/css';
>
> import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
4. load header settings to show the header in [App.js](./src/App.js)
> useEffect(() => { setUtahHeaderSettings({}); }, []);
5. run app to see the header
> npm start

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
STATE OF UTAH: MEMORANDUM OF AGREEMENT TO TRANSFER SOFTWARE
