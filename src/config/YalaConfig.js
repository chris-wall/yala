import Config from './Common/Config';
import Builder from './Common/Builder';
import ConfigCollection from './Common/ConfigCollection';
import EnumConfig from './EnumConfig';
import ResourceConfig from './ResourceConfig';

/**
 * YalaConfigBuilder providers a {Builder} implementation for the root level configuration.
 */
class YalaConfigBuilder extends Builder {
  constructor(key) {
    super(key, YalaConfig);
    this.configure('enums', new ConfigCollection(EnumConfig.Builder));
    this.configure('resources', new ConfigCollection(ResourceConfig.Builder));
  }

  enum(key) {
    const enums = this.check('enums');
    return enums.get(key);
  }

  hasEnum(key) {
    const enums = this.check('enums');
    return enums.has(key);
  }

  resource(key) {
    const res = this.check('resources');
    return res.get(key);
  }

  hasResource(key) {
    const res = this.check('resources');
    return res.has(key);
  }
}

/**
 * YalaConfig is the primary entry point for configuring your Yala instance.
 * @class
 */
export default class YalaConfig extends Config {
  static get Builder() {
    return YalaConfigBuilder;
  }
}
