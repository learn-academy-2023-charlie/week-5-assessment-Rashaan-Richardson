// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// describe("change_letters", () => {
//     it("Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.", () => {
//          const secretCodeWord1 = "Lackadaisical"
//          Expected output: "L4ck4d41s1c4l"
//          expect(change_letters = (secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     })
// })

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
const obj_key = {'a': 4, 'e': 3, 'i': 1, 'o':0}
// Create a function called change_letters, that has one parameter of a string
const change_letters = (element) =>{
    // Create a variable to store our result.
    res = ''
    // change the element into an array, filter the object and compare each value to our variable obj_key. Then make the apporpiate changes. Push that info into our result variable 
    element.split('').filter((value) => Object.keys(obj_key).includes(value) ? res += obj_key[value] :res += value)
// return result 
    return res
}
console.log(change_letters(secretCodeWord1));
console.log(change_letters(secretCodeWord2));
console.log(change_letters(secretCodeWord3));

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("filt_arr", () => {
//     it("Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
//          const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//          const filterLetterA = "a"
//          Expected output: ["Mango", "Apricot", "Peach"]
//          expect(filt_arr = (fruitArray,filterLetterA )).toEqual(["Mango", "Apricot", "Peach"])
//     })
// })
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
 
const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"] 
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
// Create a function that takes in two parameters
const filt_arr = (element,filter) => {
    // iterate over parameter one and see any of the objects contain parameter two. Ideally using the filter method and includes. Note, check for casing 
    return element.filter(value => value.toLowerCase().includes(filter))
}
console.log(filt_arr(fruitArray,filterLetterA));
console.log(filt_arr(fruitArray,filterLetterE));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// describe("poker", () => {
//     it("Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind", () => {
//          const hand1 = [5, 5, 5, 3, 3]
//          Expected output: true
//          expect(poker = (hand1)).toEqual(true)
//     })
// })
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
// Create a function that takes in one parameter
const poker = (element) => {
    // Create a variable that contains your result. Another for the object. We need some way to count the different numbers and the times each number appears
    res = false
    obj = {}
    for (i = 0; i < element.length; i++) {
        // console.log (element[i])
        if (element[i] in obj === false){
            (obj[element[i]] = 0 )
        }
        // else{
            (obj[element[i]] += 1 )
        // }
    }
    if (obj.size < 3 ){
        res = true 
        }
    return obj
}
console.log(poker(hand1));
console.log(poker(hand2));
console.log(poker(hand3));
console.log(poker(hand4));