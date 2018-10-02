import Config from '../Common/Config';
import Builder from '../Common/Builder';
import { capitalize, spaceAtCaps } from '../../util/strings';

const FieldType = Object.freeze({
  STRING: 'string',
  NUMBER: 'number',
  BOOL: 'bool',
  LINK: 'link',
  ENUM: 'enum',
  DATE: 'date',
});

class FieldConfigBuilder extends Builder {
  constructor(key) {
    super(key, FieldConfig);
    this.configure('type', 'string');
    this.configure('defaultLabel', spaceAtCaps(capitalize(key)));
  }

  ofType(type, typeArgs = {}) {
    if (typeof type !== 'string') {
      type = `${type}`;
    }

    if (Object.keys(FieldType).includes(type.toUpperCase()) !== true) {
      throw new Error(`[Yala::FieldConfig] Attempted to assigned an unknown type "${type}" to the field "${this.key}".`);
    }

    this.configure('type', type.toLowerCase());
    this.configure('typeArg', typeArgs || {});
    return this;
  }

  withDefaultLabel(label) {
    if (typeof label !== 'string') {
      label = `${label}`;
    }

    this.configure('defaultLabel', label);
    return this;
  }
}

export default class FieldConfig extends Config {
  static get Builder() {
    return FieldConfigBuilder;
  }
}

export { FieldType }
