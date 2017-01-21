/**
 * Created by shoufu on 17/1/21.
 */
function indexOf(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (item === array[i]) {
            return i;
        }
    }

    return -1;
}

module.exports = {
    indexOf: indexOf
};