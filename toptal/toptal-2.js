/**
 * A binary gap within a positive integer N is any maximal
 * sequence of consecutive zeros that is surrounded by ones
 * at both ends in the binary representation of N.
 * Args:
 *      - N: integer within the range [1..2,147,483,647]
 */

const binaryGap = (n) => {
    const binaryRepresentation = (n >>> 0).toString(2);
    let maxGap = 0;
    let gapCounter = 0;
    let gapStarted = false;
    for (let i = 0; i < binaryRepresentation.length; i++) {
        const bite = binaryRepresentation[i];
        if (bite === '1') {
            if (gapCounter > maxGap) {
                maxGap = gapCounter
            }
            gapCounter = 0
            gapStarted = true;
        } else {
            if (gapStarted) {
                gapCounter += 1;
            }
        }
    };
    return maxGap;
}
   
console.log(binaryGap(1041));
