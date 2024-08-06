// Fizzbuzz

for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0 ) {
        console.log("fizz")
    }
    else if (i % 5 === 0 ) {
        console.log("buzz")
    }
    else {
        console.log(i)
    }
}

// Primetime
// create a loop that divides itself by every number less than that 
// if all are true, console.log n  and then stop 
// if not all true, go to next increment 

// declare an arbitrary number
// create a loop that searches for the next prime number, starting 
// at n and incrementing
// as soon as you find the next prime number, log that number and exit the loop


function primeTime(n) {
    // prime is a true/false value to be checked 
    let prime;
    // set n to next value after n to see if it is prime
    n++;

    // continues until prime is true
    while (prime != true) {
        // checks if prime
        //temporarily sets prime to true
        prime = true;
        for (let i = n - 1; i > 1; i--) {
            if (n % i == 0) {
                // if even 1 number is divisible, prime is false
                prime = false;
            } 
        }
        if (prime == false) {
            // if prime is still false, increases n by one
            n++;
        } else {
            // if it makes it to here and prime is still true, new n is prime
            console.log(`${n} is the next prime number.`)
            prime = true;
        }
    }
}

// uncomment the next line placing any number there (sets n)
primeTime(8);

// feeling loopy 

// write a script that accomplishes the following: 
    //Loop through the characters of a given CSV string.
    // Store each “cell” of data in a variable.
    // When you encounter a comma, move to the next cell.
    // When you encounter the “\r\n” sequence, move to the next “row.”
    // Log each row of data.
    // You do not need to format the data, the following works well.
    // console.log(cell1, cell2, cell3, cell4);
    // You can make the following assumptions:
    // There will only be 4 cells per row.
    // There will be no escaped characters other than “\n”.

let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let cells = csv.split(",");

function feelingLoopy(file) { 
    rows = file.split("\n")

    for (let i=0; i <rows.length; i++) {
        rows[i] = rows[i].split(",")
    }
    console.log(rows)
}
feelingLoopy(csv);
