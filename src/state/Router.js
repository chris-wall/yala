import { createBrowserHistory, createMemoryHistory } from 'history';

let _history = null;

export function routeFrom(onChange, basename = '/') {
  if (
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  ) {
    _history = createBrowserHistory({ basename });
  } else {
    _history = createMemoryHistory({ initialEntries: [basename] });
  }

  _history.listen(location => {
    const segments = location.pathname.slice(1).split('/');
    let params = null;

    for (let i = 0; i < segments.length; i++) {
      const resource = segments[i] === '' ? null : segments[i];
      const key = i < segments.length - 1 ? segments[++i] : null;
      params = { resource, key, parent: params };
    }

    if (typeof onChange === 'function') {
      onChange(params);
    }
  });
}

export function goTo(path) {
  _history.push(path);
}
