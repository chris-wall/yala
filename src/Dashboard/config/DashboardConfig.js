import Builder from '../../config/Common/Builder';
import Config from '../../config/Common/Config';

class DashboardConfigBuilder extends Builder {
  constructor() {
    super('dashboard', DashboardConfig);
  }

  allowUserCustomization(isAllowed = true) {
    this.configure('canCustomize', isAllowed !== false);
    return this;
  }
}

export default class DashboardConfig extends Config {
  static get Builder() {
    return DashboardConfigBuilder;
  }
}
