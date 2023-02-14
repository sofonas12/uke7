// //oppgave1
// let i= 0;
// while (i<=50) {
//     console.log(i)
//     i++;
// }

//oppgave2

// let i = 1;
// while (i <= 100) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// // //oppgave3

// let i = 0;
// while (i <= 100) {
//  console.log(i)
//  i+=3;
// }

//oppgave4
// let i= 1;
// while (i <=1000) {
//     if (i%3===0 && i%5===0) {
//         console.log(i);
//     }
//     i++;

// }

//oppgave5

// let sum = 0;
// let i = 1;

// while (i <= 100) {
//   sum += i;
//   i++;
// }

// console.log(sum);

// //oppgave6
// let i= 1;
// while (i <= 4) {
// console.log('#' .repeat(i));
// i++;
// }

//oppgave7

// let i= 1;
// while (i <= 50) {
// console.log('#' .repeat(i));
// i++;
// }

//oppgave8
let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  
  i++;
}
