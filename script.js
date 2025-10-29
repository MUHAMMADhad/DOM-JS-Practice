console.log("DOM project connected.")
console.log("Hello World!");

document.body.firstElementChild // gives the first element inside body  
document.body.firstElementChild.childNodes // gives all nodes including text nodes
document.body.firstElementChild.children // gives only html elements
document.body.firstElementChild.children[3].nextElementSibling // gives the next element sibling
document.body.firstElementChild.children[3].previousElementSibling // gives the prev element sibling

// alert("Hello User!") // gives an alert dialog with ok option
// confirm("Are you sure you want to proceed?") // gives a confirm dialog with ok and cancel options
// prompt("Please enter your name:") // gives a prompt dialog to enter some input


// if (confirm("Do you wanna change background color?")) {
//     let color = prompt("Enter the color name or hex code:");
//     document.body.style.backgroundColor = color;
//     alert("Background color changed to " + color);
// } else {
//     alert("Background color change cancelled.");
// }

// confirm("Do you wanna redirect on Google? (Y/N)")
// let age = prompt("Please enter your age:");
// if (age > 18) {
//     window.location.href = "https://www.google.com";
// } else {
//     alert("You must be at least 18 years old to proceed.");
// }

// const button = document.getElementById("clickMe");
// const message = document.getElementById("msg");

// button.addEventListener("click", () => {
//     message.textContent = "Button Clicked!";
//     button.style.backgroundColor = "green";
// });

// const countBtn = document.getElementById("countBtn");
// const count = document.getElementById("count");
// const resetBtn = document.getElementById("resetBtn");
// const change = document.getElementById("colorChange");

// // Counting button functionality
// let counter = 0;
// countBtn.addEventListener("click", () => {
//     counter++;
//     count.textContent = counter;
// });

// // Reset button functionality
// resetBtn.addEventListener("click", () => {
//     counter = 0;
//     count.textContent = counter;
// });

