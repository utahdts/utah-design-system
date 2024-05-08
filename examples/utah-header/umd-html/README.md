# Example of Using the Utah Header in Plain Javascript
This simple html file uses the Utah Header UMD script.

## Documentation

- [![Utah Header Options](https://img.shields.io/badge/Utah_Header_Options_Documentation-blue)](https://designsystem.utah.gov/library/utahHeader)
- [![Getting Started](https://img.shields.io/badge/Getting%20Started-blue)](https://designsystem.utah.gov/resources/gettingStarted)
- [![Design System Website](https://img.shields.io/badge/Design%20System%20Website-blue)](https://designsystem.utah.gov)

## What to Look For
You can see the header being used in the `index.html` file:

```javascript
  <!-- Include the CSS and Javascript for the Utah Header -->
  <link rel="stylesheet" href="https://unpkg.com/@utahdts/utah-design-system-header/dist/style.css">
  <script src="https://unpkg.com/@utahdts/utah-design-system-header/dist/utah-design-system-header.umd.js"></script>
  <script>
    // Wait for the utah header to be ready
    document.addEventListener('utahHeaderLoaded', () => {
      // Set up the utah header
      window["@utahdts/utah-design-system-header"].setUtahHeaderSettings({
        domLocationTarget: {
          cssSelector: '#header-target'
        },
        "mainMenu": {
          "menuItems": [
            {
              "actionUrl": {
                "url": "/"
              },
              "title": "Home"
            }
          ],
          "title": "Utah Design System Main Menu"
        },
        "mediaSizes": {
          "mobile": 640,
          "tabletPortrait": 768,
          "tabletLandscape": 1024
        },
        "showTitle": true,
        "size": "MEDIUM",
        "title": "Utah Design System",
        "titleUrl": "/",
        "utahId": true,
        "footer": null,
        "logo": {
          "imageUrl": "https://designsystem.utah.gov/assets/designSystemCircleGray-a5a6c10d.png"
        },
        "actionItems": null,
        "onSearch": false
      });
    });
  </script>
  <script>
    setTimeout(() => {
      window["@utahdts/utah-design-system-header"].setUtahHeaderSettings({
        footer: {
          domLocationTarget: {
            cssSelector: '#footer-target'
          }
        }
      });
    }, 2000)
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
