// Задание 1
// Напишите функцию, которая возвращает меньшее из 2 чисел. 
// Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6.

// Вариант решения №1
function min(a, b) {
    if (a < b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

min(3, 8);

// Вариант решения №2
function min(a, b) {
    if (a < b)
        return a;
    else
        return b;
};

min(9, 5);


// Задание 2
// Напишите функцию, которая принимает число, а возвращает строку 'Число четное', 
// если число четное, 'Число нечетное' — если нечетное.

function num(c) {
    if (c % 2 == 0)
        return 'Число четное';
    else
        return 'Число нечетное'
}

num(5);

// Задание 3
// 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

function square(d) {
    console.log(d ** 2);
}

square(2);

// 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

function square(d) {
    return d * d;
}

square(2);

//  Задание 4
// Создайте функцию, которая:
// Спрашивает у пользователя, сколько ему лет.
// Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
// Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
// Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

function age(userAnswer) {
    userAnswer = prompt('Сколько Вам лет?');

    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    }
    if (age <= 12) {
        console.log('Привет, друг!');
    } else {
        сonsole.log('Добро пожаловать!')
    }
}

age(15);


age('Сколько Вам лет?', 5);

// Задание 5
// Напишите функцию, которая на вход принимает 2 числа:
// Проверяет, являются ли переданные параметры корректными числами. (Преобразование типов и 
// isNaN() помогут.)
// Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
// Если оба параметра — числа, то вернуть произведение данных чисел.

function mult(a, b) {
    if (isNaN(mult)) {
        alert(a * b);
    } else {
        alert('Одно или оба значения не являются числом');
    }
}

mult(2, 7);


// Второй вариант решения

const mult = (a, b) => {
    if (isNaN(mult)) {
        return a * b;
    } else {
        return ('Одно или оба значения не являются числом');
    }
}
console.log(mult(2, 3));



// Задание 6
// Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, 
// после чего возводит его в куб и возвращает следующую строку: 
// 'n в кубе равняется <получившееся значение>'
// . Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.
// Проверьте самостоятельно, что данная функция работает корректно и выводит правильный результат с параметрами 
// от 0 до 10 включительно.


function cub(n) {
    n = prompt('Введите число.');
    if (isNaN(n)) {
        console.log('Переданный параметр не является числом.');
    }
    if (Number(n)) {
        sun = n ** 3;
        console.log(`${n} в кубе равняется ${sun}`);
    }
}

cub(5);

// Задание 7
// Создайте объекты circle1 и circle2 со свойством radius. У объектов должен быть методам getArea
// , которое возвращает площадь круга через радиус, а также getPerimeter,
// который возвращает периметр окружности.

function getRectangleArea() {
    return (this.radius ** 2) * 3.14;
}
function getRectanglePerimeter() {
    return this.radius * 2 * 3.14;
}

const circle1 = {
    radius: 4,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

const circle2 = {
    radius: 7,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// Задание 8. 
// см. файл script.js

