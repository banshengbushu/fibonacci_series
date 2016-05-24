'use strict';

function fibonacci_series(n) {
    var fibonacci_arr = [0, 1];
    for (var i = 2; i <= n; i++) {

        fibonacci_arr.push(fibonacci_arr[i - 1] + fibonacci_arr[i - 2]);
    }

    return fibonacci_arr;
}

module.exports = fibonacci_series;
