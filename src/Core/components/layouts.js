import { el } from './_common';

export function header(attrs, ...children) {
  return el('header', attrs, children);
}

export function footer(attrs, ...children) {
  return el('footer', attrs, children);
}

export function main(attrs, ...children) {
  return el('main', attrs, children);
}

export function aside(attrs, ...children) {
  return el('aside', attrs, children);
}

export function section(attrs, ...children) {
  return el('section', attrs, children);
}

export function article(attrs, ...children) {
  return el('article', attrs, children);
}

export function div(attrs, ...children) {
  return el('div', attrs, children);
}

export function span(attrs, ...children) {
  return el('span', attrs, children);
}
