export function frag() {
  return document.createDocumentFragment();
}

export function txt(str) {
  return document.createTextNode(str);
}

export function el(tag, props, ...children) {
  const f = document.createDocumentFragment();
  const e = document.createElement(tag);

  Object.keys(props).forEach(p => e.setAttribute(p, clean(props[p])));
  children.forEach(c => e.appendChild(typeof c === 'string' ? txt(c) : c));

  f.appendChild(e);
  return f;
}
