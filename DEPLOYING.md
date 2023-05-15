# Information on deploying the Design System

## Normal deploy
Pushing to dev and/or prod branches will trigger auto deploying.
1. Website: see the file [firebase-deploy](.github/workflows/firebase-deploy.yml)
1. Library: see the file [library-deploy](.github/workflows/publish-library.yml)
1. Header: see the file [header-deploy](.github/workflows/publish-utah-header.yml)

## To deploy a beta version
Beta versions of the Library and Header can be released. The website runs on firebase and is not yet configured for beta versions.
1. Change all package.json versions to have a `-beta.#` after the version where the number is the next in the sequence for the beta releases of the current version being developed. e.g. `0.6.0-beta.0` for the first release and the next version would `0.6.0-beta.1`. *This includes all dependency versions between the project's package.json files too.*
1. Run the deploy process using local commands following the [publish Library](.github/workflows/publish-library.yml) and [publish Header](.github/workflows/publish-utah-header.yml) files

ATTOW, to publish the header & library, run the following commands copied from the [publish-header.yml](.github/workflows/publish-utah-header.yml) and [publish-library.yml](.github/workflows/publish-utah-library.yml) files:
```shell
  npm install
  npm run publishHeader
  npm run publishLibrary
```
