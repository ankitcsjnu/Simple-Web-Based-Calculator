let display = document.getElementById("display");
let expression = "";

function appendNumber(num) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
  expression += num;
}

function appendOperator(op) {
  display.innerText += op;
  expression += op;
}

function clearDisplay() {
  display.innerText = "0";
  expression = "";
}

function sqrt() {
  try {
    let val = eval(expression);
    if (val < 0) throw "Invalid √";
    let result = Math.sqrt(val);
    display.innerText = result;
    expression = result.toString();
  } catch (e) {
    display.innerText = "Error";
    expression = "";
  }
}

function calculate() {
  try {
    let expr = expression.replace(/\^/g, "**");
    let result = eval(expr);
    display.innerText = result;
    expression = result.toString();
  } catch (e) {
    display.innerText = "Error";
    expression = "";
  }
}

function toggleTheme() {
  document.querySelector(".calculator").classList.toggle("theme-dark");
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || e.key === ".") {
    appendNumber(e.key);
  } else if (["+", "-", "*", "/", "%", "^"].includes(e.key)) {
    appendOperator(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1);
    expression = expression.slice(0, -1);
  } else if (e.key === "c" || e.key === "C") {
    clearDisplay();
  }
});
