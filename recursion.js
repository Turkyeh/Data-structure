
/*function recurse() {
    // function code
    recurse();
    // function code
}

recurse();
*/



let i = 1;
function callme() {

    console.log("callme");
    if (i < 5)
    {
        i++;
        callme();
        }
}
callme();

////////////////////////////array of object
// program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);

////////////////////////////////////////
// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}





