
let num1 = prompt("Enter num1:");
let num2 = prompt("Enter num2:");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Enter please the numbers");
} else {
    let result = num1 ** num2;
    console.log("result "+ result);
}