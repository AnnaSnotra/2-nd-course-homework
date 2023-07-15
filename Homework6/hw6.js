// Задание 1 +
// Дан массив:[1, 5, 4, 10, 0, 3].
// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] == 10) break;
  console.log(numbs[i]);
}


// Задание 2 +
// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите позицию (индекс) числа 4 в этом массиве.
// Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.

const num = [1, 5, 4, 10, 0, 3];

num.forEach((el, index) => {
  console.log(`${index}: ${el}`);
});
// индекс числа 4 = 2.


// Задание 3 +
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const numers = [1, 3, 5, 10, 20];
numers = numers.join([' ']);
console.log(numers);



// Задание 4 +
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

let arr = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];
for (let arrIn of arr) {
  for (let element of arrIn) {
    console.log(element);
  }
}
// либо такой вариант
let nums = [];
for (let i = 0; i < 3; i++) {
  nums[i] = [];
  for (let j = 0; j < 3; j++) {
    nums[i].push(1);
  }
}



// Задание 5 +
// Дан массив: [1, 1, 1].
//Добавьте в конец массива значения 2, 2, 2.

const numbers = [1, 1, 1];
console.log(numbers);
numbers[3] = 2;
numbers[4] = 2;
numbers[5] = 2;
console.log(numbers);

//

const numbers = [1, 1, 1];
numbers.push(2, 2, 2);
console.log(numbers);


// Задание 6 +
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. 
// В результате работы программы вывести массив, состоящий из цифр.

let nineToFive = [9, 8, 7, 'a', 6, 5];
nineToFive = nineToFive.sort(Number);
console.log(nineToFive);

//Задание 7 +
// Дан массив: [9, 8, 7, 6, 5].
// Попросить пользователя угадать число (использовать prompt). Если значение, 
// которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в противном случае вывести «Не угадал».

let userAsk = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Угадай число'));
let search = userAsk.includes(userAnswer);
console.log(search);
if (search === true) {
  console.log('Угадал');
} else {
  console.log('Не угадал');
}


// Задание 8 +
// Дана строка: 'abcdef'. Необходимо, чтобы программа вывела в консоль 'fedcba'.

const line = ['abcdef'];
console.log(line);
line[line.length] = [5, 4, 3, 2, 1, 0];

//
let line = ['abcdef'];
line = line.reverse();
console.log(line);

// Задание 9 +
// Дан массив: [[1, 2, 3,],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const multiNum = [
  [1, 2, 3,],
  [4, 5, 6],
];

const arr = multiNum.flat();
console.log(arr);

// либо такой вариант
const multiNum = [
  [1, 2, 3,],
  [4, 5, 6],];

multiNum = multiNum.join('');
console.log(multiNum);



// Задание 10 +
// Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for
// и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1. 
// Обратите внимание, что у последнего элемента нет следующего.

let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length - 1; i++) {
  let sum = arr[i] + arr[i + 1];
  console.log(sum);
}


!!!!!// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.




// Задание 12 
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
// Пример вызова:
// getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]

const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква']


function filterPositive(array) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      result.push(array[index]);
    }
  }
  return result;
}

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]

// Задание 13 +
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

function filterPositive(array) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      result.push(array[index]);
    }
  }
  return result;
}

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]
