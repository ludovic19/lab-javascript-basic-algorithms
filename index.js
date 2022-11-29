// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

 let hacker1 = 'Snoopp'
 console.log(`The diver's name is ${hacker1}`)
 let hacker2 = 'Eminem'
 console.log(`The navigator's name is ${hacker2}`)

 
// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

hacker1.length > hacker2.length ? 
console.log(`the driver ${hacker1} has : ${hacker1.length}`) :
hacker1.length > hacker2.length ? 
console.log(`the navigator ${hacker2} has : ${hacker2.length}`) :
console.log(` Wow, you both have equally long names, ${hacker2.length} characters!` )

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let newHacker1= ' '
for (let i = 0; i<hacker1.length; i++){
    newHacker1 += hacker1[i]+' '
}
console.log(newHacker1.toUpperCase())

// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".
let newHacker2 = ' '
for (let i = hacker2.length-1; i>=0; i--){
    newHacker2 += hacker2[i]
}
console.log(newHacker2)

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?
let alphabeticOrder = hacker1.localeCompare(hacker2)
if (alphabeticOrder<0){
    console.log(` ${hacker1} goes first `)
}
else if (alphabeticOrder>0 ){
    console.log(` ${hacker2} goes first `)
}
else{console.log("What?! You both have the same name?")};

// ATTENTION: localeCompare() retourne pas le m nbr suivant les navigateurs
//retenir retour négatif => chaine appelante (la a) en premier
//        retour positif => chaine comparée (la b) en premier
//        retour = 0     => chaines identiques


// =================================================================
//                  BONUS 
// ==================================================================

// Bonus 1

// Go to the lorem ipsum generator website and:
// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis porttitor tincidunt. Suspendisse fermentum sed nunc a commodo. Nullam sit amet justo ac leo aliquam cursus. Etiam cursus, diam id sagittis dapibus, leo felis scelerisque erat, sed elementum libero arcu vitae metus. Pellentesque mollis, orci a ornare gravida, leo sem sollicitudin purus, at sollicitudin nulla mi sollicitudin orci. Aliquam vitae sagittis ante. Proin scelerisque sem in diam varius laoreet. Nulla metus turpis, sollicitudin et dui id, tristique faucibus nisi. Praesent dapibus auctor sem id accumsan. Integer nisi lacus, fermentum sed condimentum ac, aliquet vitae tellus. Proin lectus risus, elementum fringilla velit id, fermentum sollicitudin lacus. Maecenas a diam libero.

Vivamus ultricies lacus eget velit porttitor pulvinar. Etiam suscipit tortor magna, efficitur auctor mi tempus sit amet. Fusce elit tortor, finibus at urna nec, egestas convallis massa. Suspendisse nec pulvinar massa, in cursus elit. Donec lacinia mattis lacinia. Aenean id velit eget mi bibendum facilisis. Vestibulum sollicitudin, purus nec maximus consectetur, sapien mi vulputate nisl, ut luctus arcu neque sed nunc. Morbi vitae dui ut nulla facilisis lacinia. Phasellus congue congue ligula vitae sollicitudin. Morbi nec nulla at mi vestibulum rutrum at sed dolor. Ut sollicitudin pretium hendrerit. Integer vehicula, ipsum sed efficitur pharetra, arcu risus tincidunt odio, nec dapibus mi dolor cursus ex. Fusce nunc quam, vehicula sed luctus et, varius at quam. Nunc lacinia nibh massa, eget convallis leo pretium sed. Integer in purus eu nulla ultrices molestie at et mi.

Praesent elementum ligula a nibh sollicitudin, quis dapibus justo egestas. In ultrices nulla sed auctor consectetur. Mauris nec lacinia eros, in rhoncus massa. Ut porttitor odio nec augue pretium rutrum. Pellentesque tincidunt sodales mi, sed scelerisque orci eleifend eu. Nam ut aliquet sapien. Sed sagittis lacus massa, quis faucibus lectus molestie id. Nam porttitor ligula nisi, vel hendrerit ante blandit vitae. Nullam hendrerit gravida libero vel bibendum. Nullam eget tristique ligula. Praesent vulputate porta pulvinar. Praesent nec dapibus arcu. Vivamus scelerisque enim est, vitae fringilla nibh feugiat et.`

// console.log(typeof(longText))
let numberOfWords = console.log(`${longText.length} caracters`)

numberOfWords = longText.split(' ')
console.log(` ${longText.split(' ').length} words` )// il me manque 2 mots ?!?
console.log(typeof(numberOfWords))

// str.split(" ") crée un tableau ou chaque élément est défini par le separateur en parametre
//chaque sous chaine represente un element du tableau
//on ajoute ici .length qui retourne le nombre d'elements du tableau soit le nbr de mots
// + .split()accepte un second argument en option pour limiter le nombre d'element du nv tableau
// for(let i=0; i<numberOfWords.length; i++){
//     if
// }
let numberOfEt = []
for (const value of numberOfWords){
    if (value == "et"){
        numberOfEt += value
    }
}
console.log(numberOfEt.length)