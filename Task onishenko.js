// Переменные и типы данных
let userName = "Алексей";
let userAge = 19;
let isStudent = true;
let favoriteColor; 
const PI = 3.14159;

console.log("Имя:", userName);
console.log("Возраст:", userAge);
console.log("Студент:", isStudent);
console.log("Любимый цвет:", favoriteColor);
console.log("Константа PI:", PI);

// Изменение переменных
userAge = userAge + 1; 
userAge++;
console.log("Возраст после дня рождения:", userAge);

// Обычная функция
function greet(name) {
  return "Привет, " + name + "!";
}

// Функция с проверкой значения
function canDrive(age) {
  if (age >= 18) {
    return "Можно водить машину";
  } else {
    return "Рано ещё!";
  }
}

// Функция с тернарным оператором
function canVote(age) {
  return age >= 18 ? "Можно голосовать" : "Слишком молод!";
}

console.log(greet(userName));
console.log(canDrive(userAge));
console.log(canVote(userAge));

// =============================
// Массивы
// =============================

let numbers = [1, 2, 3, 4, 5];
let colors = ["red", "green", "blue"];

console.log("Первый цвет:", colors[0]);
console.log("Последний номер:", numbers[numbers.length - 1]);

colors.push("yellow");
numbers.pop();

console.log("Все цвета:", colors);
console.log("Все числа:", numbers);

// Простой цикл for
for (let i = 0; i < numbers.length; i++) {
  console.log("Элемент массива numbers:", numbers[i]);
}

// =============================
// Работа со строками
// =============================
let phrase = "Ееее рок";
console.log("Длина фразы:", phrase.length);
console.log("Верхний регистр:", phrase.toUpperCase());
console.log("Есть ли слово JS?", phrase.includes("JS"));

// =============================
// Объекты
// =============================

let user = {
  name: "Мария",
  age: 22,
  skills: ["HTML", "CSS", "JS"],
  isOnline: false,
  sayHello: function() {
    return "Моё имя: " + this.name;
  }
};

console.log(user.sayHello());
console.log("Навык №2:", user.skills[1]);

// Изменение свойств объекта
user.isOnline = true;
user.city = "Москва";

console.log(user);

// =============================
// Условия (if / else if / else)
// =============================

if (user.age < 18) {
  console.log("Ты ещё школьник");
} else if (user.age < 25) {
  console.log("Ты студент или молодой специалист");
} else {
  console.log("Ты взрослый человек");
}

// =============================
// Циклы и логика
// =============================

let counter = 0;

while (counter < 3) {
  console.log("Счётчик while:", counter);
  counter++;
}

// do...while — выполняется хотя бы один раз
let num = 0;
do {
  console.log("do...while:", num);
  num++;
} while (num < 3);

// =============================
// Работа с функциями и массивами
// =============================

function printSkills(userObj) {
  console.log("Навыки пользователя:");
  for (let i = 0; i < userObj.skills.length; i++) {
    console.log("-", userObj.skills[i]);
  }
}

printSkills(user);

user.skills.push("React");
printSkills(user);

let temperature = 15;
let weather = temperature > 25 ? "жарко" : "прохладно";
console.log(`На улице ${temperature}°, сейчас ${weather}.`);

// =============================
// Логические операции
// =============================

let hasMoney = true;
let isWeekend = false;

if (hasMoney && isWeekend) {
  console.log("Можно пойти в кино");
} else if (hasMoney && !isWeekend) {
  console.log("Дождись выходных!");
} else {
  console.log("Придётся остаться дома :(");
}

// =============================
// Функции с несколькими параметрами
// =============================

function calculateRectangleArea(width, height) {
  return width * height;
}

let area = calculateRectangleArea(5, 3);
console.log("Площадь прямоугольника:", area);

// =============================
// Таска
// =============================
// 1: Добавьте новую функцию getUserInfo(user), которая выводит имя, возраст и город.

// КОД ИЗ ЛЕКЦИИ:
// let user = {
//   name: "Мария",
//   age: 22,
//   skills: ["HTML", "CSS", "JS"],
//   isOnline: false,
//   sayHello: function() {
//     return "Моё имя: " + this.name;
//   }
// };
// user.isOnline = true;
// user.city = "Москва";

//РЕШЕНИЕ
console.log("Задание 1");
function getUserInfo(user){
  console.log("Информация о пользователе")
  console.log(`Имя: ${user.name}`);
  console.log(`Возраст: ${user.age}`);
  console.log(`Город: ${user.city}`);
}

getUserInfo(user);
// 2: Сделайте цикл, который выводит все цвета из массива colors в обратном порядке.

// КОД ИЗ ЛЕКЦИИ
// let colors = ["red", "green", "blue"];
// colors.push("yellow");

// РЕШЕНИЕ
console.log("");
console.log("Задание 2");
console.log("Цвета в обратном порядке:");
for(let i = colors.length-1; i >= 0; i-=1){
  console.log(`НА МЕСТЕ ${i+1}, ЦВЕТ - ${colors[i]}`);
}
// 3: Напишите условие: если возраст user > 20, добавить ему новый навык "TypeScript".

//КОД ИЗ ЛЕКЦИИ
// let user = {
//   name: "Мария",
//   age: 22,
//   skills: ["HTML", "CSS", "JS"],
//   isOnline: false,
//   sayHello: function() {
//     return "Моё имя: " + this.name;
//   }
// };
// user.isOnline = true;
// user.city = "Москва";

// РЕШЕНИЕ
console.log("");
console.log("Задание 3");
if(user.age >20) {
  user.skills.push("TypeScript");
  console.log("добавлен новый навык");
}
console.log(user.skills);

// 4: Используйте тернарный оператор, чтобы вывести в консоль:
//         user.isOnline ? "Пользователь онлайн" : "Пользователь оффлайн".

//КОД ИЗ ЛЕКЦИИ
// let user = {
//   name: "Мария",
//   age: 22,
//   skills: ["HTML", "CSS", "JS"],
//   isOnline: false,
//   sayHello: function() {
//     return "Моё имя: " + this.name;
//   }
// };
// user.isOnline = true;
// user.city = "Москва";

// РЕШЕНИЕ
console.log("");
console.log("Задание 4");
console.log(user.isOnline ? "Пользователь онлайн" : "Пользователь оффлайн");
// 5: Напишите простую функцию, которая принимает число и возвращает "чётное" или "нечётное".
function chet(number){
  if (number%2 > 0) {
    console.log(`Число ${number} - нечетное `)
  }
  else{
    console.log(`Число ${number} - четное `)
  }
}
chet(4)