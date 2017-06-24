function indexOf(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (item === array[i]) {
            return i;
        }
    }

    return -1;
}

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = {
    indexOf: indexOf
};