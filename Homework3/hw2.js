
// Задание 1

let a = '10';
alert(a);
let a = '20';
alert(a);

// Задание 2

const firstIphoneYear = '2007';
alert(firstIphoneYear);

// Задание 3

const javaScriptCreator = 'Brendan Eich';
alert(javaScriptCreator);

// Задание 4

let x = 10;
let y = 2;

let sum = x + y;
alert(sum);

let residual = x - y;
alert(residual);

let multiply = x * y;
alert(multiply);

let division = x / y;
alert(division);

// Задание 5

let result = 2 ** 5;
alert(result)

// Задание 6

let newA2 = 9;
let b = 2;
let module = newA2 % b;
alert(module);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num -;
alert(num);

// Задание 8

let age = Number(prompt('Сколько вам лет?'));
alert(age);

// Задание 9.0

let user = {
    name: 'Anna',
    age: 27,
    isAdmin: true
}

// Задание 9.1

user.cityOfRecidence = 'Moscow';

// Задание 9.2

user.age = 25;

// Задание 9.3

delete user.cityOfRecidence;  // или также можно написать delete user[‘cityOfRecidence'];


// Задание 9.4

let info = user(prompt['Какую информацию хотите узнать о пользователе?']);
alert(info);


// Задание 10

let name = prompt("Как вас зовут?");
alert("Привет," + ${ name } + "!")

