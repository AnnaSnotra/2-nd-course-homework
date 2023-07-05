
// Задание 1

let password = prompt('Введите пароль');
password = 'заяц';
if (password === 'заяц') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2

let c = 5;     //  let c = 0, 10, −3, 2.
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// Задание 3

let d = 3;
let e = 5;

if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

// Задание 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень');
        break;

    default:
        if (monthNumber < 1 || monthNumber > 12)
            console.log('номер месяца больше 12 или меньше 1');
        break;
}

// Задание 6

// см. файл idex.html

// Задание 7

let userAnswer = Number(prompt('Пожалуйста, введите любое число'));
if (isNaN(userAnswer)) {
    alert("Это не цифра :( Попробуйте снова.");
} else {
    alert("Это действительно цифра!")
}
/// console.log(typeof f);
if (userAnswer % 2 == 0) {
    alert('Число четное')
} else {
    alert('Число нечетное')
}


// Задание 8

let clientOS = Number(prompt('Если Вы используете iOS введите 0, а если Android - введите 1'));
clientOS = 0;
clientOS = 1;
if (clientOS = 0) {
    alert('Установите версию приложения для iOS по ссылке');
}
if (clientOS = 1) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Введите цифру 0 или 1');
}


// Задание 9


let clientOS = Number(prompt('Если Вы используете iOS введите 0, а если Android - введите 1'));
clientOS = 0;
clientOS = 1;
let clientDeviceYear = Number(prompt('Введите год выпуска мобильного телефона'));
let clientDeviceYear = 2015;
if (clientDeviceYear >= 2015 && clientOS = 0) {
    alert('Установите версию приложения для iOS по ссылке');
}
if (clientDeviceYear >= 2015 && clientOS = 1) {
    alert('Установите версию приложения для Android по ссылке');
}
if (clientDeviceYear < 2015 && clientOS = 0) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
}
if (clientDeviceYear < 2015 && clientOS = 1) {
    alert('Установите облегченную версию приложения для Android по ссылке');
}


