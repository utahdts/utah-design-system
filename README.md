[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=utahdts_utah-design-system&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=utahdts_utah-design-system)

# utah-design-system

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
    * CODEOWNERS
      > tells which users have special rights
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
* [library/](library/README.md)
  * src/
    > these are the compiled parts separate from the website that the website also uses
    * css/
      > css files that make up the design system (ITCSS)
    * react/
      * components/
        * buttons/
          * SegmentedButton.jsx
          * ...
        * templates
          * DocumentationTemplate
          * LandingTemplate
      * contexts/
      * hooks/
      * propTypesShapes/
        > PropTypes.shape definitions for common propType objects
      * ...
    * boilerplate/
      > starter project that grabs all the pieces for a new website
    * static/
        * icons/
* [utah-header](utah-header/README.md)
  > This is the utah header code and css
    * src/
      * css/
      * js/
* [website/](website/README.md)
  > This is the collection of rules and design system specifications
    * src/
      * css/
      * react/
        * components/
          * websiteContent/
            * HomeLanding
            * foundation/
              * FoundationLanding
              * ... foundation documentation
            * library/
              * LibraryLanding
              * components/
                * buttons/
                  * ButtonDocumentation
                  * SegmentedButtonDocumentation
              * patterns/
                * ... some patterns
              * templates/
                * ... some templates
            * resources/
              * ResourcesLanding
              * ...

        * context/
        * enums/
        * hooks/
        * util/
          * color/
      * static/

  * index.html???
  * package.json
  * vite.config.js

### Site Map

- Home
- [Library](https://utahdts.github.io/utah-design-system/library/)
- [Header](https://utahdts.github.io/utah-design-system/utah-header/)
- [Documentation and Examples](https://utahdts.github.io/utah-design-system/website/)
