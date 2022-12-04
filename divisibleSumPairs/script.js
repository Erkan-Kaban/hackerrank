/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

// n length of array
// k is the divisible number
// ar is the array

function divisibleSumPairs(n, k, ar) {
    let sum = 0;
    for(let i=0; i < n; i++) {
        for(let j=0; j < n; j++) {
            if(i != j && i < j) {
                if((ar[i] + ar[j]) % k === 0) {
                    sum++;
                }
            }
        }
    }
    
    return sum;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))