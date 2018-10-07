export default class ConfigCollection {
  constructor(ofType) {
    Object.defineProperties(this, {
      __ctor: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: ofType
      },
      __values: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: new Map()
      }
    });
  }

  get(key) {
    if (this.__values.has(key) !== true) {
      this.__values.set(key, new this.__ctor(key));
    }

    return this.__values.get(key);
  }

  add(key) {
    if (this.__values.has(key) === true) {
      throw new Error(
        `[YALA] attempting to register a new section as "${key}".  The key is already in use.`
      );
    }

    this.__values.set(key, new this.__ctor(key));
    return this.__values.get(key);
  }

  has(key) {
    return this.__values.has(key);
  }

  buildAll() {
    return new Map(
      [...this.__values.entries()].map(([k, v]) => [k, v.build()])
    );
  }
}
