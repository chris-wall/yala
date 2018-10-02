import Config from '../../Common/Config';
import Builder from '../../Common/Builder';
import { capitalize } from '../../../util/strings';


class FormSectionConfigBuilder extends Builder {
  constructor(key) {
    super(key, FormSectionConfig);
    this.configure('title', capitalize(key));
    this.configure('icon', null);
  }

  withTitle(title, icon = null) {
    this.configure('title', title);
    this.configure('icon', icon);
    return this;
  }

  withTabs(...tabs) {
    this.configure('tabs', tabs);
    return this;
  }

  includeFields(...fields) {
    this.configure('fields', fields);
    return this;
  }
}

export default class FormSectionConfig extends Config {
  static get Builder() {
    return FormSectionConfigBuilder;
  }
}

