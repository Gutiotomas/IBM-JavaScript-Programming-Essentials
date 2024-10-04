let count = 0; // Initialize count to 0

function increaseCount() {
count++; // Increment the count by 1
displayCount(); // Call the displayCount function
checkCountValue(); // Call the checkCountValue function
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCount() {
    count = 0; // Reset the count to 0
    alert("The count has been reset to 0");
    displayCount(); // Call the displayCount function
}
      