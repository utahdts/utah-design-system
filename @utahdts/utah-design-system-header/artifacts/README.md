The index.d.ts file does *NOT* auto update!! It must be manually created.

To Create the index.d.ts file:
  * run `npm run generateTypesTsc`
  * edit the file that was created in dist/index.d.ts
  * copy the file to artifacts/index.d.ts

Now when the `generateTypes` script runs, it will copy `artifacts/index.d.ts` to the `dist` folder.
Thd `dist` folder is then what is published for the types with the package.json (ie `"types": "./dist/index.d.ts",`).
This means the file is:
* generated to the `dist` folder
* modified manually and saved to `artifacts/index.d.ts`
* copied back to the dist folder as part of the build
Yes, this is clunky and means types do NOT auto update. Someday we'll get there...


methodology:
  * replace `declare module "src/@types/jsDocTypes.d"` with `declare module "@utahdts/utah-design-system-header"`
  * General gist is to combine everything in to the one module
    * Remove duplicates
    * Remove imports from jsDcoTypes since they're already include
  * delete erroring module: `declare module "src/index" {`
  * for childrenMenuTypes
    * move in to main module block
    * update path to start with ../ so that it gets a correct path
  * repeat for the other erroring modules
    * PopupPlacement
    * events
    * sizes
  * delete `declare module "src/js/settings/defaultSettings" {`
  * merge in function modules:
    * `declare module "src/js/misc/checkForError" {`
    * `declare module "src/js/misc/notNull" {`
    * `declare module "src/js/misc/isString" {`
    * `declare module "src/js/misc/renderDOMSingle" {`
  * move SettingsKeeper in to main module and cleanup
  * merge in more function modules:
    * `declare module "src/js/settings/getUtahHeaderSettings" {`
    * even those not in error so they are in the global module
      * uuidv4
    * remove things like `export type AriaHasPopupType = import("src/@types/jsDocTypes.d").AriaHasPopupType;`
  * `import("@utahdts/...` <=== imports aren't needed since all types are already in this file so remove the import
