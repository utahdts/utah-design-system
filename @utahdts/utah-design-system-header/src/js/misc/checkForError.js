/**
 * To help lower cognitive complexity counts, this function removes the "if" logic out of functions.
 * Lots of functions test if an element was found or if an event is already being handled or any other
 * of myriad possible error conditions. Each of this have followed the pattern of doing an `if` and throw
 * an `Error` if failed. The `if` counts towards cognitive complexity and ganks our sonar score. This
 * function can replace those if statements ot make sure that the test case passes without creating
 * measurable complexity.
 * @param {boolean} isError if true then an Error will be thrown
 * @param {string} errorMessage the message to show in the Error if isError is true
 */
export function checkForError(isError, errorMessage) {
  if (isError) {
    throw new Error(errorMessage);
  }
}
