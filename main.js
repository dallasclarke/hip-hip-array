/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0
//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.
function banner (n) {
console.log(`##### Challenge ${n} #####`)
}


// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
banner(1);

const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
banner(2);

const grades = [100, 80, 110, 75, 83, 64];

for (let i = grades.length -1; i >= 0; i--) {
  console.log(grades[i])
}

// Challenge 3
// Console.log out only the even numbers in the following array.
banner(3);

const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i < positiveNumbers.length; i++) {
  if (positiveNumbers[i] % 2 === 0) {
    console.log(positiveNumbers[i]);
  }
}



// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
banner(4);

const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

for (let i = 0; i < mixedSignNumbers.length; i++) {
  if (mixedSignNumbers[i] % 2 === 0) {
    console.log(mixedSignNumbers[i])
  }
}

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
banner(5);

const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
for (let i = 1; i < symmetricalCapitals.length - 1; i++) {
  console.log(symmetricalCapitals[i])
}

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
banner(6);

const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(0);
fibonacciNumbers.push(21, 30);
for (let i = 0; i < fibonacciNumbers.length; i++) {
console.log(fibonacciNumbers[i]) } 




// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.
banner(7);

let myNumbers = [90, 02, 1990, 09, 59];
for (let i = 0; i < myNumbers.length; i++) {
  console.log(myNumbers[i]);
}

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
banner(8);

let emptyArray = new Array();
emptyArray.unshift('Dallas', 'Melissa', 'Maximus');
emptyArray.push('Wayne', 'Debbie')
for (let i = 0; i < emptyArray.length; i++) {
  console.log(emptyArray[i]);
}

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
banner(9);

for (let i = 3; i < 10; i++) {
  console.log(students[i])
  
  }


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
banner(10);

let studentsListOne = students;

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.
banner(11);

let newStudents = students.slice(3, 10)
for (let i = 0; i < newStudents.length; i++) {
  console.log(newStudents[i])
}

// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
banner(12);

const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
dinosaurs.splice(4, 2);
for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i]);
}

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
banner(13);
console.log(dinosaurs.join(' * '));


// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
banner(14);

let reversed = dinosaurs.reverse();
console.log(reversed);
console.log(dinosaurs);

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
banner(15);

const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const combine = primaries.concat(secondaries);
for (let i = 0; i < combine.length; i++) {
  console.log(combine[i]);
}
console.log(primaries, secondaries);