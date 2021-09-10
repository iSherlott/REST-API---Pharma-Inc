module.exports = flatten = (obj, path = []) => {
  return Object.keys(obj).reduce((result, prop) => {
    if (typeof obj[prop] !== "object") {
      result[path.concat(prop).join(".")] = obj[prop];
      return result;
    }
    return Object.assign(result, flatten(obj[prop], path.concat(prop), result));
  }, {});
};
