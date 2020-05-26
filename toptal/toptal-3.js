/**
 * Returns the number of integers within the range [A..B] 
 * that are divisible by K.
 */
const solution = (A, B, K) => 
    Math.floor(B / K) - Math.floor((A - 1) / K);

console.log(solution(1, 200000000, 1000));