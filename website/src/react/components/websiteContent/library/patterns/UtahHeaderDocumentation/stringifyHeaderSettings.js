export default function stringifyHeaderSettings(settingsObject) {
  console.log(settingsObject);
  // convert to string
  // find usages of DOM and functions (remember nesting! might be easiest to make a func
  // tion that searches for a nested object with a given key and return that object)
  //   convert DOM to DOM using renderDOM
  //   convert functions to a placeholder function that just does an alert with the function contents when triggered
  return JSON.stringify(settingsObject);
}
