function getNewS(S) {
    let newS = '';
    let char = null;
    let seq = 0;

    for (let i=0; i<S.length + 1; i++) {
        if (S[i] !== char) {
            if (char) {
                if (seq === 1) {
                    newS += char;
                } else {
                    newS += seq + char;
                }
            }
            char = S[i];
            seq = 0;
        }
        seq ++;
    } 
    return newS;
}

function solution(S, K) {
    let newS;
    let len = S.length;
    for (let i=0; i<S.length + 1; i++) {
        if (S[i] === S[i + K + 1]) {
            newS = getNewS(S.substring(0, i) + S.substring(i + K + 1, S.length), K);
            if (i === 10) {
                console.log(S.substring(0, i), S.substring(i + K, S.length))
                console.log(newS)
            }
            if (newS.length < len) {
                len = newS.length;
            }
        }
    }
    if (len >= S.length - 1) {
        return len - K;
    }
    return len;
}

console.log(solution('ABCDDDEFG', 2)) 