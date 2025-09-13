// Create a new element
const newDiv = document.createElement('div');
newDiv.id = 'myDiv';
newDiv.textContent = 'Hello, I am a new div!';

// Append the element to the body
document.body.appendChild(newDiv);

// Access the element using DOM
const accessedDiv = document.getElementById('myDiv');
console.log(accessedDiv.textContent); // Output: Hello, I am a new div!