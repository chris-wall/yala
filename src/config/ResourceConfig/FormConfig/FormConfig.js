import Config from '../../Common/Config';
import Builder from '../../Common/Builder';
import ConfigCollection from '../../Common/ConfigCollection';
import FormSectionConfig from './FormSectionConfig';
import { capitalize, spaceAtCaps } from '../../../util/strings';

class FormConfigBuilder extends Builder {
  constructor(key) {
    super(key, FormConfig);
    this.configure('sections', new ConfigCollection(FormSectionConfig.Builder));
  }

  sections() {
    this.check('sections');
  }
}

export default class FormConfig extends Config {
  static get Builder() {
    return FormConfigBuilder;
  }
}
