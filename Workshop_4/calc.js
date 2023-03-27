/*
 * Implement all your JavaScript in this file!
 */
function clearDisplay() {
  document.getElementById("display").value = "";
}

// function to update the display with a value
function updateDisplay(value) {
  document.getElementById("display").value += value;
}

// function to evaluate the expression in the display
function evaluate() {
  var expression = document.getElementById("display").value;
  var result = eval(expression);
  document.getElementById("display").value = result;
}

// add event listeners to the buttons
document.getElementById("button0").addEventListener("click", function () {
  updateDisplay("0");
});
document.getElementById("button1").addEventListener("click", function () {
  updateDisplay("1");
});
document.getElementById("button2").addEventListener("click", function () {
  updateDisplay("2");
});
document.getElementById("button3").addEventListener("click", function () {
  updateDisplay("3");
});
document.getElementById("button4").addEventListener("click", function () {
  updateDisplay("4");
});
document.getElementById("button5").addEventListener("click", function () {
  updateDisplay("5");
});
document.getElementById("button6").addEventListener("click", function () {
  updateDisplay("6");
});
document.getElementById("button7").addEventListener("click", function () {
  updateDisplay("7");
});
document.getElementById("button8").addEventListener("click", function () {
  updateDisplay("8");
});
document.getElementById("button9").addEventListener("click", function () {
  updateDisplay("9");
});
document.getElementById("addButton").addEventListener("click", function () {
  updateDisplay("+");
});
document
  .getElementById("subtractButton")
  .addEventListener("click", function () {
    updateDisplay("-");
  });
document
  .getElementById("multiplyButton")
  .addEventListener("click", function () {
    updateDisplay("*");
  });
document.getElementById("divideButton").addEventListener("click", function () {
  updateDisplay("/");
});
document.getElementById("clearButton").addEventListener("click", function () {
  clearDisplay();
});
document.getElementById("equalsButton").addEventListener("click", function () {
  evaluate();
});
