
 let hacker1 = 'Snoopp'
 console.log(`The navigator's name is ${hacker1}`)
 let hacker2 = 'Eminem'
 console.log(`The driverr's name is ${hacker2}`)


// console.log(`longueur de hacker 1 le driver: ${hacker1.length}, longueur de hacjer2 le navigator: ${hacker2.length}`)
hacker1.length > hacker2.length ? 
console.log(`the navigator ${hacker1} has : ${hacker1.length}`) :
hacker1.length > hacker2.length ? 
console.log(`the driver ${hacker2} has : ${hacker2.length}`) :
console.log(` Wow, you both have equally long names, ${hacker2.length} characters!` )
 
let newHacker2= ' '
for (let i = 0; i<hacker2.length; i++){
    newHacker2 += hacker2[i]+' '
}
console.log(newHacker2.toUpperCase())


let newHacker1 = ' '
for (let i = hacker1.length-1; i>=0; i--){
    newHacker1 += hacker1[i]
}
console.log(newHacker1)
// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?