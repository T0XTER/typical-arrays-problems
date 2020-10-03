exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0 ){
        return 0
    } else {
        let i;
        let min = array[0];
        for (i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
            }
        }
        return min;
    }
}

exports.max = function max (array) {
    return 0;
}

exports.avg = function avg (array) {
    return 0;
}
