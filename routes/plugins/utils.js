function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = {
    isObject: isObject
};