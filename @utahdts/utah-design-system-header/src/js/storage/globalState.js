/**
 * A class to manage global application state, promoting immutability.
 * State access provides a deep copy, and updates create a new internal state object.
 */

/** @typedef {import('src/@types/jsDocTypes.d').AppState} AppState */
class GlobalStateManager {
  /** @type {AppState} */
  #state = {notifications: null, isBusy: false, isLoggedIn: false}; // Private field to hold the actual state object

  /**
   * Initializes the GlobalStateManager with an optional initial state.
   * The initial state is deep-copied to ensure immutability from the start.
   * @param {Partial<AppState>} [initialState] - The initial state object. Defaults to an empty object.
   */
  constructor(initialState) {
    // Deep copy the initial state to ensure it's not a reference to an external object
    this.#state = JSON.parse(JSON.stringify(initialState));
  }

  /**
   * Returns a deep copy of the current global state.
   * This ensures that any modifications made to the returned object
   * do not affect the internal, managed state, thus maintaining immutability
   * of the stored state.
   * @returns {AppState} A deep copy of the current state.
   */
  getState() {
    return JSON.parse(JSON.stringify(this.#state));
  }

  /**
   * Updates the global state by merging the provided partial state.
   * This method creates a new state object internally by spreading the current state
   * and then the partial state, ensuring that the internal state reference changes
   * and previous state snapshots remain unaffected.
   * @param {Partial<AppState>} partialState - An object containing properties to update or add to the state.
   */
  setState(partialState) {
    // Create a new state object by merging the current state with the partial state.
    // This ensures the internal #state reference is updated, treating the previous
    // state as immutable.
    this.#state = { ...this.#state, ...partialState };
    // If partialState itself contains nested objects that need deep cloning
    // to prevent mutation, you might use:
    // this.#state = JSON.parse(JSON.stringify({ ...this.#state, ...partialState }));
    // However, for typical flat or shallow updates, the spread operator is sufficient.
  }
}

// Export a single instance of the GlobalStateManager.
// This creates a singleton-like pattern, ensuring there's only one
// global state object accessible throughout your application.
export const globalState = new GlobalStateManager({});

// --- Example Usage (for demonstration purposes, not part of the exported module) ---
/*
// In another JavaScript file where you want to use the global state:
import { globalState } from './globalState'; // Adjust the path as needed

// 1. Get the initial state
const initial = globalState.getState();
console.log('Initial State:', initial); // Output: Initial State: {}

// 2. Update the state
globalState.setState({
  user: { id: 1, name: 'Alice' },
  theme: 'dark'
});
console.log('State after first update:', globalState.getState());
// Output: State after first update: { user: { id: 1, name: 'Alice' }, theme: 'dark' }

// 3. Try to modify the returned snapshot - it won't affect the internal state
const snapshot1 = globalState.getState();
snapshot1.user.name = 'Bob'; // This modifies the 'snapshot1' object, not the internal state
snapshot1.newProp = 'test'; // This also modifies 'snapshot1'
console.log('Modified Snapshot:', snapshot1);
// Output: Modified Snapshot: { user: { id: 1, name: 'Bob' }, theme: 'dark', newProp: 'test' }

// 4. Get another snapshot to see the *actual* internal state (still Alice)
const actualState = globalState.getState();
console.log('Actual Internal State (still Alice):', actualState);
// Output: Actual Internal State (still Alice): { user: { id: 1, name: 'Alice' }, theme: 'dark' }

// 5. Update a nested property (requires spreading the existing nested object)
globalState.setState({
  user: { ...globalState.getState().user, name: 'Charlie' }
});
console.log('State after updating user name:', globalState.getState());
// Output: State after updating user name: { user: { id: 1, name: 'Charlie' }, theme: 'dark' }

// 6. Add another property
globalState.setState({
  notifications: []
});
console.log('State after adding notifications:', globalState.getState());
// Output: State after adding notifications: { user: { id: 1, name: 'Charlie' }, theme: 'dark', notifications: [] }
*/
