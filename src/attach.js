import { validateConfig } from './util/validateConfig';
import { start } from './Core';

export const AttachedContent = Object.freeze({
  ALL: 'all',
  CONTENT_ONLY: 'content_only',
  AREA_NAV: 'area_nav',
  ACTIVE_AREA_NAV: 'active_area_nav',
});

export default function attach(config, to, type = AttachedContent.ALL) {
  if (validateConfig(config) !== true) {
    throw new Error(
      '[Yala::attach] The configuration object provided by Yala is invalid.'
    );
  }

  if (Object.keys(AttachedContent).includes(type.toUpperCase()) !== true) {
    throw new Error(`[Yala::attach] The attachment type "${type}" is not valid.  Acceptable values are ${Object.keys(AttachedContent).join(', ')}.`);
  }

  let root = (to instanceof Node ? to : document.getElementById(`${to}`));

  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', to);
    document.appendChild(root);
  }

  start(config, root);
}
