function solution(S, X, Y) {
    X = X.map(x => x < 0 ? -x : x);
    Y = Y.map(y => y < 0 ? -y : y);
    const Z = [];
    for (let i=0; i<S.length; i++) {
        Z[i] = X[i]*X[i] + Y[i]*Y[i];
    }

    let test_with_index = [];
    for (var i in Z) {
        test_with_index.push([Z[i], i]);
    }
    test_with_index.sort(function(left, right) {
        return left[0] < right[0] ? -1 : 1;
    });
    var indexes = [];
    var test = [];
    for (var j in test_with_index) {
        test.push(test_with_index[j][0]);
        indexes.push(test_with_index[j][1]);
    }

    console.log(test, indexes)
    let points = '';
    for (let i=0; i<Z.length; i++) {
        if (points.indexOf(S[indexes[i]]) > -1) {
            break;
        }

        points += S[indexes[i]];
    }
console.log(test[i])
    return points.length;
}

console.log(solution('ABDCA', [2, -1, -4, -3, 3], [2, -2, 4, 1, -3]));