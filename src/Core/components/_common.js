/**
 * clean will strip restricted HTML characters from the string representation of its argument.
 * @param {*} str - value to html encode
 * @returns {string}
 */
export function clean(str) {
  return `${str}`
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * frag is a shortcut for creating document fragments.
 * @returns {DocumentFragment}
 */
export function frag() {
  return document.createDocumentFragment();
}

/**
 * txt wraps the string representation of its argument in a TextNode.
 * @param {*} str - text to render
 * @returns {Text}
 */
export function txt(str) {
  return document.createTextNode(clean(str));
}

/**
 * el generates a new document element.
 * @param {string} tag - name of the tag to generate
 * @param {object} props - a hash of the tag attributes
 * @param {Array} children - an array of elements or strings
 * @returns {DocumentFragment}
 */
export function el(tag, props = {}, children = []) {
  const e = document.createElement(tag);
  Object.keys(props).forEach(p => e.setAttribute(p, clean(props[p])));
  children.forEach(c => e.appendChild(typeof c === 'string' ? txt(c) : c));

  const f = frag();
  f.appendChild(e);
  return f;
}
