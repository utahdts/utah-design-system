# Locally use the Utah Header in a Plain Javascript Vite App for testing
This simple javascript app, created with Vite, and uses the Utah Header and CSS as a local resource for testing.

## Documentation

- [![Utah Header Options](https://img.shields.io/badge/Utah_Header_Options_Documentation-blue)](https://designsystem.utah.gov/library/utahHeader)
- [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted)
- [![Design System Website](https://img.shields.io/badge/Design%20System%20Website-blue)](https://designsystem.utah.gov)

## How to get this running
- In the base directory:
  - `npm i`
  - `npm run buildForNPM`

- Move into the Utah Header Directory: `cd @utahdts/utah-design-system-header`
  - `npm run preview`

- Make a new terminal window, and cd to the example: <br />
 `cd examples/utah-header/vite-local-testing`
  - `npm i`
  - `npm run dev`


Note: You can `watch` the Utah Header which would require another terminal window so that you can get live code changes. Its a bit more complicated to get live `css` changes and would require running a `preview` and `watch` of both the Utah Header and the Design System in two more terminal windows. :-|
