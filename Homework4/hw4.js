// задание 1

let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

// Задание 2

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Задание 3

let i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}

// Задание 4

let obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};

for (key in obj) {
    console.log([key] + ' - зарплата ' + obj[key] + ' долларов.');
}

// Задание 5

for (let n = 1000; n >= 50; n /= 2) {
    console.log(n);
}

let num = 5;

// получится число 62.5       
1000
500
250
125
62.5


// Задание 6

for (let dayNumber = 0; dayNumber <= 31; dayNumber++) {
    if (dayNumber % 5 == 0) {
        console.log('Сегодня пятница, ' + ${dayNumber} + ' - е число.Необходимо подготовить отчет.');
        continue;
    }
    console.log("Рабочий день");
}

