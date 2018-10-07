import Config from './Common/Config';
import Builder from './Common/Builder';

class EnumConfigBuilder extends Builder {
  constructor(key) {
    super(key, EnumConfig);
    this.configure('values', []);
  }

  values(...vals) {
    const values = vals.map(
      v =>
        typeof v !== 'object' ? { key: `${v}`, label: `${v}`, value: v } : v
    );
    const isValid = values.every(v => {
      return (
        typeof v === 'object' &&
        typeof v.label === 'string' &&
        v.label !== '' &&
        typeof v.key === 'string' &&
        v.key !== ''
      );
    });

    if (isValid !== true) {
      throw new Error(
        '[Yala::EnumConfigBuilder] invalid value object provided to values()'
      );
    }

    this.configure('values', values);
    return this;
  }
}

export default class EnumConfig extends Config {
  static get Builder() {
    return EnumConfigBuilder;
  }
}
