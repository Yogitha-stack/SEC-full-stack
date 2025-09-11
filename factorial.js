// Function to calculate factorial using recursion
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // base case
    }
    return n * factorial(n - 1);
}

// Example usage
console.log("Factorial of 5 is: " + factorial(5));  // Output: 120
