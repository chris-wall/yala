import { validateConfig } from './util/validateConfig';
import { AppState } from './state';

export default function attach(config, to) {

  if (validateConfig(config) !== true) {
    throw new Error('[Yala] The configuration object provided by Yala is invalid.');
  }

  let root = document.getElementById(to);

  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', to);
    document.appendChild(root);
  }

  // -- new Application State
  const state = new AppState();

  // -- start the renderer

}
