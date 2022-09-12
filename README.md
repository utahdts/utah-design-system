# utah-design-system
Front end React Application for viewing the Utah Design System :point_right: [View Here](https://utahdts.github.io/utah-design-system/) :point_left:<br>
#utah-design-system<br>

# Agency
- DTS

# Stakeholders
- Product Owner: Joseph Sharp
- Digital Experience Team

# Utah Design System Usage
## Technologies
- NPM
- vite
- JavaScript/React

## Getting started w/ Site development
- Visit the [Design System Site](https://utahdts.github.io/utah-design-system/) to learn the Design System and apply those concepts to your website
- Download desired assets from this repository's dist/ folder and incorporate them in to your website as needed
- css assets and javascript are also available via the DTS CDN
- javascript code libraries are also available via npm
## Getting started w/ Design System Development
  > We love input and conversation; Please file issues, contact us, and/or submit pull requests.
1. Download the source code (dev branch has current work while main has current production)
1. Install npm on your machine
1. run `npm install` from the website folder to install dependencies
1. run `npm run dev` from the website folder to start watching for changes, building, and serving

## Versioning
This project uses [SemVer](http://semver.org/) for versioning.

## Deployment
Merges to the prod/dev branches will kick off a GitHub action that deploys code to GitHub Pages.

## Authors
DTS & the Digital Experience Team

## License
Apache License Version 2.0

## Repository Map
* .github/
    * workflows/
      > These run deploys and other actions relevant to the code base
* LICENSE
* README.md
* .gitignore
* .editorconfig
* .eslintrc.json
* dist/
  > You may use these assets in your project
  * assets/
    * css
    * js
    * react
    * static
  * index.html
* website/ 
  > This is the collection of rules and design system specifications
    * src/
	* index.html???
	* package.json
	* vite.config.js
* library/
    > these are the compiled parts separate from the website that the website also uses
    * css/ 
      > css files that make up the design system
    * js/
    * react/
    * boilerplate/ 
      > starter project that grabs all the pieces for a new website
    * static/
        * icons/
