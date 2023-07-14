// Задание 8. 
// Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12) и возвращает время года, 
// в которое попадает этот месяц ("Зима", "Лето", "Весна", "Осень").
// Придумайте, как должна работать функция, если ей передать неправильный параметр.
// Выведите пример использования функции в консоль.
// Для решения задачи используйте конструкцию else if
// и логические операторы || (логическое ИЛИ) и && (логическое И).

function monthNumber() {
    let userAnswer = prompt(`Введите номер месяца`, '1 - 12');
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

