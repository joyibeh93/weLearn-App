// MODAL SIGN IN BOX 1

let button = document.getElementById('btn1');
button.addEventListener('click', display);
let closePopUp = document.getElementById('close-popup');
closePopUp.addEventListener('click', close);

function display() {
    let popup = document.querySelector('#popup');
    popup.style.display = 'flex';
}

function close() {
    let popUpClose = document.querySelector('#popup');
    popUpClose.style.display = 'none';
}
// MODAL REGISTER IN BOX 2

let button1 = document.getElementById('btn2');
button1.addEventListener('click', displaypop);
let closePopUp1 = document.getElementById('close-popup1');
closePopUp1.addEventListener('click', closepop);

function displaypop() {
    let popup1 = document.querySelector('#popup1');
    popup1.style.display = 'flex';
}

function closepop() {
    let popUpClose1 = document.querySelector('#popup1');
    popUpClose1.style.display = 'none';
}

// ASSIGNMENT TWO== OPERATORS
// 1. Assignment operator
a = 16;
c = 9;
d = 4;
b = 8;
console.log('a = ' + a + ' b = ' + b + ' c = ' + c + ' d = ' + d);
//7 decrement
--a;
--b;
--c;
--d;
console.log('a = ' + a + ' b = ' + b + ' c = ' + c + ' d = ' + d);
// 2.Addition assignment
total = a + b;
console.log(total);
//3. Subtraction Assignment
difference = a - b;
console.log(difference);
//4. Multiplication Assignment
multiplication = a * b;
console.log(multiplication);
//5. division
division = a / b;
console.log(division);
//6. Remainder Assignment modulo

remainder = c % d;
console.log(remainder);
//6. Exponentiation Assignment
exponent = a ** b;
console.log(exponent);
//7 increment
++a;
++b;
++c;
++d;
console.log('a = ' + a + ' b = ' + b + ' c = ' + c + ' d = ' + d);
//7 decrement
--a;
--b;
--c;
--d;
console.log('a = ' + a + ' b = ' + b + ' c = ' + c + ' d = ' + d);