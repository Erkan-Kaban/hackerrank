function matchingStrings(strings, queries) {
    let matchedStrings = []
    let counter = 0
    for (let i = 0; i < queries.length; i++) {
        counter = 0
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                counter++
            }
        }
        matchedStrings.push(counter)
    }
    
    return matchedStrings
}