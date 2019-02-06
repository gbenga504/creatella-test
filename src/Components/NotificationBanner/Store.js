/**
 * This function deep clones an object values...
 * n:b -> The values used in this object are simple primitive values so this works
 * @param {object} aObject
 */
function deepClone(aObject) {
  if (!aObject) {
    return aObject;
  }

  let bObject = {};

  for (var key in aObject) {
    let _value = aObject[key];
    bObject[key] = typeof _value == "object" ? deepClone(_value) : _value;
  }

  return bObject;
}

/**
 * This is a simple Store built to model the redux update pattern using subscribe, unsubscribe and dispatch
 * We use a simple custom store as opposed to the React context API based on our use case
 * The use of this store makes it quite easy to ship this NotificationBanner component as a library on its own
 * import it on story book or even use it for multiple projects without the projects knowing the existence
 * of a context
 */
class Store {
  callbacks = [];

  constructor(state) {
    this.state = state || {};
  }

  listen = callback => {
    this.callbacks.push(callback);
    return () => {
      this.callbacks.splice(this.callbacks.indexOf(callback), 1);
      callback = null;
    };
  };

  dispatch = (action, args) => {
    this.state = {
      ...this.state,
      [action]: args
    };
    this.runCallbacks();
  };

  runCallbacks = () => {
    this.callbacks.forEach(callback => {
      callback();
    });
  };

  getState = () => {
    return deepClone(this.state);
  };
}

export default Store;
