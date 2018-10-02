
export default class Builder {
  constructor(key, ctor) {
    if (typeof key !== 'string' || key === '') {
      throw new Error('[YALA::Builder] constructor expected the "key" argument to be a non-empty string');
    }

    if (typeof ctor !== 'function') {
      throw new Error(`[YALA::Builder] constructor expected the "ctor" argument to be a function.`);
    }

    Object.defineProperties(this, {
      'key': { writable: false, configurable: false, enumerable: true, value: key },
      '__config': { writable: false, configurable: false, enumerable: false, value: new Map([['key', key]])},
      '__ctor': { writable: false, configurable: false, enumerable: false, value: ctor },
    });
  }

  configure(property, value) {
    if (property === 'key') {
      throw new Error(`[YALA::Builder] cannot configure the property "key". It is protected.`);
    }

    this.__config.set(property, value);
    return this;
  }

  check(property) {
    return this.__config.get(property);
  }

  build() {
    return Object.freeze(new this.__ctor(this.__config));
  }
}
