import YalaConfig from './config/YalaConfig';
import ConfigCollection from './config/Common/ConfigCollection';

const _apps = new ConfigCollection(YalaConfig.Builder);

/**
 * configure allows access to builders that are used to fluently create
 * a configuration tree to pass to the Yala engine.
 *
 * @param {string} app_key - Unique key for the YALA instance to configure
 * @returns {YalaConfig.Builder}
 */
export default function configure(app_key) {
  return _apps.get(app_key);
}
