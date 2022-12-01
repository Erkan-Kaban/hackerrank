function plusMinus(arr) {
    // Write your code here
    // arrayLength = arr.length
    let positiveNumbers = 0
    let negativeNumbers = 0
    let zeroNumbers = 0
    for(let i = 0; i<arr.length; i++){
        if (arr[i] > 0) {
            positiveNumbers++
        } else if (arr[i] < 0) {
            negativeNumbers++
        } else {
            zeroNumbers++
        }
    }
    let plus = (positiveNumbers / arr.length).toFixed(6)
    let minus = (negativeNumbers / arr.length).toFixed(6)
    let zeros = (zeroNumbers / arr.length).toFixed(6)

    console.log(plus)
    console.log(minus)
    console.log(zeros)
}

plusMinus([-4, 3, -9, 0, 4, 1])