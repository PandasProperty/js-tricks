function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sortedA = A.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < A.length - 1; i++) {
        console.log((i + 1), sortedA[A.length - i - 1])
        result += (i + 1) * sortedA[A.length - i - 1];
    }
    result += (A.length - 1) * sortedA[0];
    return result;
}

console.log(solution([100, 250, 1000])) // 1700