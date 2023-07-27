# Example of Using the Utah Header in Plain Javascript
This simple html file uses the Utah Header ES script.

## Documentation

- [![Utah Header Options](https://img.shields.io/badge/Utah_Header_Options_Documentation-blue)](https://designsystem.utah.gov/library/patterns/utahHeader)
- [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted)
- [![Design System Website](https://img.shields.io/badge/Design%20System%20Website-blue)](https://designsystem.utah.gov)

## What to Look For
You can see the header being used in the `index.html` file:

```javascript
  <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css">
  <script type="module">
    import { setUtahHeaderSettings } from 'https://unpkg.com/@utahdts/utah-design-system-header/dist/utah-design-system-header.es.js';
    setUtahHeaderSettings({
      title: 'My Utah.gov Site (ES)',
      domLocationTarget: {
        cssSelector: '#utah-header-target',
      }
    });
  </script>
```


## Try-out This Example

```bash
cd examples/utah-header/umd-html
open index.html
```

## How This App Was Created
```bash
# Manual Step: create index.html with code to load header
open index.html
```
