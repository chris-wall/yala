import Config from '../Common/Config';
import Builder from '../Common/Builder';
import ConfigCollection from '../Common/ConfigCollection';
import FieldConfig from './FieldConfig';

class ResourceConfigBuilder extends Builder {
  constructor(key) {
    super(key, ResourceConfig);
    this.configure('fields', new ConfigCollection(FieldConfig.Builder));
  }

  field(key) {
    const fields = this.check('fields');
    return fields.get(key);
  }

  hasField(key) {
    const fields = this.check('fields');
    return fields.has(key);
  }

  listView(gridConfig) {
    this.configure('listView', gridConfig);
    return this;
  }

  detailView(formConfig) {
    this.configure('detailView', formConfig);
    return this;
  }
}

export default class ResourceConfig extends Config {
  static get Builder() {
    return ResourceConfigBuilder;
  }
}

