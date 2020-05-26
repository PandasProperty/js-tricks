/**
 * A - not-empty array of integers
 * X - integer
 * N - size of array A
 * 0 <= K <= N
 * X in [0..K-1] == !X in [K..N-1]
 * if K == 0 then [0..K-1] is empty
 * if K == N then [K..N-1] is empty
 **/

const tests = [
    [5, 5, 1, 7, 2, 3, 5], // X in [0..K-1] == !X in [K..N-1], K == 4
    [1, 15, 5, 51, 4, 7, 9, 1, 3, 4, 5, 8, 9, 6, 3, 5, 4, 7, 6, 5, 5], // X in [0..K-1] == !X in [K..N-1], K == 4
    [1, 1, 1, 1, 1, 1], // [0..K-1] is empty
    [5, 5, 5, 5, 5, 5, 5] // [K..N-1] is empty
];


const solution = (x, arr) => {
    const xCount = arr.reduce(
        (accumulator, currentValue) => accumulator + (currentValue === x ? 1 : 0),
        0
    );

    if (xCount === 0 || xCount === arr.length) {
        return xCount;
    }
    
    let sameCount = 0
    let diffCount = arr.length - xCount;

    for (let i = 0; i < arr.length; i ++) {
        if (sameCount === diffCount) {
            return i;
        }
        if (arr[i] === x) {
            sameCount += 1;
        } else {
            diffCount -= 1;
        }
    };
}

tests.map(test => console.log(solution(5, test)));
