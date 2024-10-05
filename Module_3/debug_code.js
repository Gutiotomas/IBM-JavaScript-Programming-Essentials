    
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
    let add = sum(num1, num2);

    // Display the result
    displayResult(add, 'add');
    } else {
        displayResult('Please enter valid numbers');
    }
    
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let product = multiply(num1, num2);
        // Display the result
        displayResult(product, 'multiply');
    } else {
        displayResult('Please enter valid numbers');
    }

    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let quotient = divide(num1, num2);
    // Display the result
        displayResult(quotient, 'divide');

    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function sum(a,b){
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a + b;
}

function divide(a,b){
    // Introduce a debugger statement to pause execution
    debugger;

    // Divide the numbers
    return a / b;
}

function displayResult(result, operation) {
    // Display the result in the paragraph element
    var resultElement = document.getElementById(operation);
    resultElement.textContent = `The result of the ${operation} is: ${result}`;
}
