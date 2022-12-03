function breakingRecords(scores) {
    // Write your code here
    let currentH = scores[0]
    let currentL = scores[0]
    let hiCount = 0
    let lowCount = 0
    scores.forEach(score => {
        if (score > currentH) {
            currentH = score
            hiCount++
        }
        else if (score < currentL){
            currentL = score
            lowCount++
        }
    })
    return[hiCount, lowCount]
}

scores = [12, 24, 10, 24]

console.log(breakingRecords(scores))