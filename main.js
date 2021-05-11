let pets = ["Questionable Ethics", "Incorrect Use of Metaphor", "Dawg", "Ketchup", "Oatmeal", "Buttercup", "Percy", "Kevin", "Roadkill", "Mitochondria", "Airbud", "Bounce", "Fifty-Five"]
let nums = [1, 2, 56, 22, 46, 923, 324, 123]
let misc = [234, "wut", false]

// An index is an ordered key (or, property name) starting at zero

let start = 100
let end = 150
let count = start
while (count <= end) {
    console.log(count)

    count += 1
}

{
    // Summing the numbers in an array
    let index = 0
    let sum = 0
    while (index < nums.length) {
        let currentNumber = nums[index]
        sum += currentNumber
        index += 1
    }
    console.log({sum})
}

{
    // Derives the product of the numbers in an array (multiplication)
    let index = 0
    let product = 1
    while (index < nums.length) {
        let currentNumber = nums[index]
        product *= currentNumber
        index += 1
    }
    console.log({product})
}

{
    // Concatenate the pet names
    let index = 0
    let result = ""
    while (index < pets.length) {
        let currentPet = pets[index]
        result += currentPet
        index += 1
    }
    console.log({result})
}

{
    let index = pets.length - 1
    while (index >= 0) {
        let currentPet = pets[index]
        console.log({currentPet})
        index -= 1
    }
}

{
    let lastItem = null
    while (lastItem = pets.pop()) { // queue
        console.log(lastItem)
    }
}