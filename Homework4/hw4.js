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
    console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
}

// Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    num++;
    n /= 2;
}
console.log(n);
console.log(num);

// получится n = 31.25   ;   num = 5    
500
250
125
62.5
31.25


// Задание 6

for (let dayNumber = 1; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница, ${dayNumber} - е число. Необходимо подготовить отчет.`);
}

///   либо можно с таким синтаксисом  console.log('Сегодня пятница, ' + dayNumber + ' - е число.Необходимо подготовить отчет.');



