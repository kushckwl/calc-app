let x = prompt("Enter first number:", "")
num1 = parseInt(x)

let y = prompt("Enter second number:", "")
num2 = parseInt(y)
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}