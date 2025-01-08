type CallbackFunction = (params?: unknown) => void;

const callbacks: { [key: string]: CallbackFunction } = {};

/**
 * This script is used for managing and scheduling one or more callback functions to be invoked in the future.
 *
 * @returns {Object} - An object containing the following properties:
 *  - `setCallback` (function): Sets a callback function associated with a unique key.
 *  - `callCallback` (function): Calls the callback function associated with a key, passing optional parameters.
 * @example
 * const scheduler = CallbackManager();
 * scheduler.setCallback('myKey', (params) => ('Callback invoked with params:', params));
 * scheduler.callCallback('myKey', { message: 'Hello World' });
 */
export const CallbackManager = () => {
  /**
   * Sets a callback function associated with a unique key.
   *
   * @param {string} key - The unique key associated with the callback function.
   * @param {function} func - The callback function to be set.     *
   */
  const setCallback = (key: string, func: CallbackFunction) => {
    callbacks[key] = func;
  };

  /**
   * Calls the callback function associated with a key, passing optional parameters.
   *
   * @param {string} key - The key associated with the callback function to be called.
   * @param {any} params - Optional parameters to be passed to the callback function.
   * @param {boolean} [destroyAfterCall=false] - Default is false. If true, removes the callback after it's been called.
   */
  const callCallback = (
    key: string,
    params?: unknown,
    destroyAfterCall = false,
  ) => {
    try {
      if (callbacks.hasOwnProperty(key)) {
        callbacks[key](params && params);
        destroyAfterCall && delete callbacks[key];
      } else {
        throw `${key} is not set yet.`;
      }
    } catch (error) {
      throw error;
    }
  };

  /**
   * Deletes the callback function associated with a key
   *
   * @param {string} key The key associated with the callback function to be deleted.
   */
  const deleteCallback = (key: string) => {
    callbacks.hasOwnProperty(key) && delete callbacks[key];
  };

  return { setCallback, callCallback, deleteCallback };
};
