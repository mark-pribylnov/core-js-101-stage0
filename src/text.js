function extractNameFromTemplate(value, def) {
  const converted = Number(value);
  // console.log(converted, typeof converted);

  // if (typeof value === 'string') return def;
  if (typeof converted === 'number' && !Number.isNaN(converted)) {
    return converted;
  }
  return def;
}

// console.log(extractNameFromTemplate(null, 0));
// console.log(extractNameFromTemplate('test', 0));
// console.log(extractNameFromTemplate('1', 0));
console.log(extractNameFromTemplate(42, 0));
// console.log(extractNameFromTemplate(new Number(42), 0));
