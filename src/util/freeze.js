export default function freeze(obj) {
  const result = Object.assign({}, obj);

  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'object') {
      result[k] = freeze(obj[key]);

      if (Array.isArray(result[k]) === true) {
        result[k].filter(r => typeof r === 'object').forEach(i => {
          freeze(i);
        });
      }
    }
  });

  return Object.freeze(result);
}
