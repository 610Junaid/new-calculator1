let buttons = document.querySelectorAll("button");
let input = document.getElementById("inputBox");
let string = "";
let container = document.querySelector(".container");
let inputBox = document.querySelector(".blank");
let topRow = document.querySelector(".upper-btn");
let numberButton = document.querySelector(".number");

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      if (string.length == 1) {
        string = "";
        input.value = string;
      } else {
        string = string.substring(0, string.length - 1);
        input.value = string;
      }
    } else if (e.target.innerHTML == "M") {
      container.classList.toggle("container-new");
      inputBox.classList.toggle("input-new");
      topRow.classList.toggle("topmost-row1");
      numberButton.classList.toggle(".number-btn");
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
