# Configuration Testing
If you make changes to the configuration files (package.json, vite.config.js, vitest.config.js, etc) be aware that there are multiple ways in which these files are being used and targeted. During the last round of config hassling, the pain of trying all the combinations really was painfully painful to the painth degree.

Here are the known scenarios. Please run them and make sure it all pans out. When something new breaks, add it here so others don't rebreak it. This seems greatly unit testable material.

## Scenarios
1. **Run development locally**\
`npm run reset`\
This will clean all the `node_modules`, `dist`, `package-lock.json`, and other temp files and run a clean website dev vite.\
*GOAL*: Test that the libraries provide `index.js` entry points for local development
*PROOF*: It builds without errors and shows an output similar to the following:
```shell
  VITE v4.2.1  ready in 830 ms

  ➜  Local:   https://designsystem.local.utah.gov:9180/
  ➜  Network: https://10.0.0.48:9180/
  ➜  press h to show help
```
1. **Build libraries**\
`npm run cleanbuild`\
This cleans the temp files and runs a new library build. GitHub Actions use this `build` command to create the libraries.\
*GOAL*: Test library creation and linking
*PROOF*: It builds without errors and shows output similar to:
```shell
> @utahdts/utah-design-system-header@0.4.2 build
> vite build
vite v4.2.1 building for production...
> @utahdts/utah-design-system@0.5.2 build
> vite build
vite v4.2.1 building for production...
> utah-design-system-website@0.4.2 build
> vite build --mode production-website
vite v4.2.1 building for production-website...
```
1. **Run example from dependency**
```shell
cd examples/utah-header/create-react-app/
npm i
npm start
```  
This one is a bit trickier to test because it pulls its dependencies from the actual npm/unpkg repositories. This means that you will have to manually make the downloaded dependencies' config match your config changes. 
* open examples/utah-header/create-react-app/node_modules/@utahdts
* go in to each dependency and update its package.json & vite.config.js to match your changes.

As you fiddle with config changes you need to clear the `node_modules/.cache` folder to get your changes to be recognized: `rm -rf node_modules/.cache`. After that then you can rerun your `npm start` to see the changes.

4. **Run tests**
```shell
d @utahdts/utah-design-system
npm run test:ci
```
There is a `test` script as opposed to `test:ci`. Sonar runs the `test:ci` and it is the one that typically would fail.

## Synopsis
When fiddling with config, it was found that a change would fix one thing but break another. Make sure to run all these scenarios to prove your changes work.

Make sure to run `npm run cleani` between scenarios to make sure that residuals (like dist/ folder artifacts) don't give false positives.
