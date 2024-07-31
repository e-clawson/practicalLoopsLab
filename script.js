// Fizzbuzz

// for (let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 3 === 0 ) {
//         console.log("fizz")
//     }
//     else if (i % 5 === 0 ) {
//         console.log("buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

// Primetime
// create a loop that divides itself by every number less than that 
// if all are true, console.log n  and then stop 
// if not all true, go to next increment 

n = 3; 

for (let i = n - 1; i > 1; i--) {
    if (n % i == 0) {
        console.log("Not Prime")
        break;
    } else {
        console.log("Prime")
    }
}

// for (let i = n-1; i > 1; i--) { 
//     if ( n % i != 0) {
//         console.log("not prime")
//     }

// }
