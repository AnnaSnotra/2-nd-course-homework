// Задание 1
// Напишите функцию, которая возвращает меньшее из 2 чисел. 
// Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.


function min(a, b) {
    if (a < b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

min(3, 8);


// Задание 2
// Напишите функцию, которая принимает число, а возвращает строку 'Число четное', 
// если число четное, 'Число нечетное' — если нечетное.

function num(c) {
    return c % 2 == 0;
}

let result = num(4);
alert(result);

// Задание 3
// 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

// 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

//  Задание 4
// Создайте функцию, которая:
// Спрашивает у пользователя, сколько ему лет.
// Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
// Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
// Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

function age(question, answer) {
    let userAnswer = prompt(question);

    if (userAnswer < 0) {
        console.log('Вы ввели неправильное значение');
    }
    if (userAnswer <= 12) {
        console.log('Привет, друг!');
    }
    if (userAnswer >= 13) {
        сonsole.log('Добро пожаловать!')
    }
}

age('Сколько Вам лет?', 15);
age('Сколько Вам лет?', 5);