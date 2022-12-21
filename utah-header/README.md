# Utah Header
The Utah Header is part of the Utah Design System. It provides a common initial entry point experience for users of State of Utah websites. Please submit merge requests or start conversations with the Design System team for anything you would like to see incorporated in to the header.

## API Functions
These functions allow configuring and interacting with the Utah Header. It is suggested to only interact with the header using these functions so as to be more "future proof" as changes to the Utah Header codebase will only account for these functions and not for custom coding.
* `loadHeader`: This function creates the Utah Header DOM elements. It is called automatically when the Utah Header javascript library is loaded on to a web page.
* `removeHeader`: This function removes the Utah Header from the DOM. This may be useful for pages that should not have the header on them. The application then may call *loadHeader()* to readd the header.

## Events
The header emits events at the document level. Applications can listen for these events to be able to time interactions with the header.
* `utahHeaderLoaded`: fired when the header is done with its initial loading phase and is ready to accept configuration. This event is fired by the *loadHeader()* function
* `utahHeaderUnloaded`: fired when the header is unloaded when the *removeHeader()* function is called
