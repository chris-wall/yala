import Builder from './Builder';
import ConfigCollection from './ConfigCollection';

export default class Config {
  constructor(builder) {
    builder.forEach((v, k) => {
      const val =
        v instanceof ConfigCollection
          ? v.buildAll()
          : v instanceof Builder
            ? v.build()
            : v;
      this[k] = typeof val === 'function' ? val.bind(this) : val;
    });
  }
}
