// Задание 8
// Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12) и возвращает время года, 
// в которое попадает этот месяц ("Зима", "Лето", "Весна", "Осень").
// Придумайте, как должна работать функция, если ей передать неправильный параметр.
// Выведите пример использования функции в консоль.
// Для решения задачи используйте конструкцию else if
// и логические операторы || (логическое ИЛИ) и && (логическое И).

function monthNumber() {
    let userAnswer = Number(prompt(`Введите номер месяца`, '1 - 12'));
    if (isNaN(userAnswer)) {
        alert('Неправильное число, попробуйте еще раз.');
    }
    if (userAnswer === 12 || (userAnswer >= 1 && userAnswer <= 2)) {
        season = 'Зима';
    } else if (userAnswer >= 3 && userAnswer <= 5) {
        season = 'Весна';
    } else if (userAnswer >= 6 && userAnswer <= 8) {
        season = 'Лето';
    } else if (userAnswer >= 9 && userAnswer <= 11) {
        season = 'Осень';
    }
    alert(season);
}



//  Задание 11
// Дан массив слов: ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'].
// Необходимо перемешать элементы массива и вывести на экран пользователю с использованием alert();

// Спросить у пользователя:
// Чему равнялся первый элемент массива?
// Чему равнялся последний элемент массива?
// Поздравить пользователя, если он угадал оба элемента.
// Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
// Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.

function getWord() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list);

    let userAnswer1 = prompt('Чему равнялся первый элемент массива?');
    let userAnswer2 = prompt('ему равнялся последний элемент массива?');

    if (userAnswer1 === list[0].toLowerCase()) {
        if (userAnswer2 === list[6].toLowerCase()) {
            alert('Поздравляю, Вы угадали оба элемента!');
        } else {
            alert('Вы были близки к победе!');
        }
    } else {
        if (userAnswer2 === list[6]) {
            alert('Вы были близки к победе!');
        } else {
            alert('Вы ответили неверно.');
        }
    }
}

