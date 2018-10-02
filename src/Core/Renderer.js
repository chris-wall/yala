
function clean(str) {
  return `${str}`.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function createRenderer(mountTo) {

  function createMountPoint(id) {
    const e = el('div');
    e.setAttribute('id', id);
    return document.appendChild(e);
  }

  const mount = (document.getElementById(mountTo) || createMountPoint(mountTo));

  return {
    render: (fragment) => {
      if (mount.firstChild) {
        mount.replaceChild(fragment, mount.firstChild);
      }
      else {
        mount.appendChild(fragment);
      }
    }
  }
}

export function txt(str) {
  return document.createTextNode(clean(str));
}

export function el(tag, props, ...children) {
  const f = document.createDocumentFragment();
  const e = document.createElement(tag);

  Object.keys(props).forEach(p => e.setAttribute(p, clean(props[p])));
  children.forEach(c => e.appendChild((typeof c === 'string' ? txt(c) : c)));

  f.appendChild(e);
  return f;
}
