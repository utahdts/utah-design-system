# Example of using Types with the Utah Header
The Utah Header is fully typed. This small example typescript application imports the Utah Header library from NPM and uses its type system to validate its usage of the Utah Header. You can see this in action in the `src/App.tsx` file.

## Documentation

- [![Utah Header Options](https://img.shields.io/badge/Utah_Header_Options_Documentation-blue)](https://designsystem.utah.gov/library/utahHeader)
- [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted)
- [![Design System Website](https://img.shields.io/badge/Design%20System%20Website-blue)](https://designsystem.utah.gov)

## What to Look For
The only file that is changed from vite's default files is  `src/App.tsx`. In this file you can observe the following:

```typescript
// this line imports the utah header including its types
import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
```

```typescript
/*
  You can play with this code to see that the setUtahHeaderSettings() function
  call is typed: You can trigger auto complete in the settings object parameter as
  well as hover to see type information.
*/
useEffect(
  () => {
    // setUtahHeaderSettings() is typed! YAY!
    setUtahHeaderSettings({
      title: 'Typed Utah Header!'
    });
  },
  []
);

```


## Try-out This Example

```bash
cd examples/typed/typed-utah-header
npm i
npm run dev
```

## Test type safety
```bash
cd examples/typed/typed-utah-header
npm i
npm run tsc
```

## How This App Was Created
```bash
npm create vite@latest
npm i @utahdts/utah-design-system-header
# Manual Step: Update src/App.tsx to import typed Utah Header
npm run dev
```
