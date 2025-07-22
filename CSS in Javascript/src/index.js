const button = document.querySelector("button");

button.setAttribute("name", "challenge-1");
button.setAttribute("disabled", "");

let buttonTwo = document.getElementById("challenge-2");
buttonTwo.style.backgroundColor = "green";

let buttonThree = document.getElementById("challenge-3");
buttonThree.classList.add("danger");