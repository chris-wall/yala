export function capitalize(word) {
  if (typeof word !== 'string') {
    word = `${word}`;
  }

  if (word.length <= 1) {
    return word.toUpperCase();
  }

  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

export function spaceAtCaps(str, preserveAcronymns = false) {
  const regex = preserveAcronymns === true ? /([A-Z]+)/g : /([A-Z])/g;
  return str.replace(regex, ' $1').trim();
}
