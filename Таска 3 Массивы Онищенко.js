/* --- ЧАСТЬ 1: ТЕОРИЯ (20 минут) --- */

/**
 * Вопрос 1. Как получить последний элемент массива `arr`?
 * A) arr[arr.length]
 * B) arr.last()
 * C) arr[arr.length - 1]
 * D) arr[-1]
 * 
 * ОТВЕТ C)
 */


/**
 * Вопрос 2. Какой метод добавляет элемент в НАЧАЛО массива?
 * A) push
 * B) pop
 * C) unshift
 * D) shift
 * 
 * ОТВЕТ C)
 */


/**
 * Вопрос 3. Какой из этих методов ИЗМЕНЯЕТ исходный массив (мутирует его)?
 * A) slice()
 * B) concat()
 * C) map()
 * D) splice()
 * 
 * ОТВЕТ D)
 */


/**
 * Вопрос 4. Что выведет код?
 * let fruits = ["Apple", "Orange"];
 * fruits.length = 0;
 * console.log(fruits[0]);
 * * A) "Apple"
 * B) undefined
 * C) null
 * D) Ошибку
 * 
 * ОТВЕТ B)
 */


/**
 * Вопрос 5. Что делает метод arr.map(fn)?
 * A) Изменяет каждый элемент исходного массива.
 * B) Возвращает новый массив, состоящий из результатов вызова fn для каждого элемента.
 * C) Возвращает первый элемент, который подходит под условие.
 * D) Просто перебирает массив, ничего не возвращая.
 * 
 * ОТВЕТ B)
 */


/**
 * Вопрос 6. Как правильно проверить, является ли переменная массивом?
 * A) typeof arr === 'array'
 * B) typeof arr === 'object'
 * C) Array.isArray(arr)
 * D) arr.isType('Array')
 * 
 * ОТВЕТ C)
 */


/* ============================================================
  --- ЧАСТЬ 2: ПРАКТИКА (60 минут) ---
  Допишите код в выделенных местах.
  ============================================================
*/

// --- ЗАДАНИЕ 1: Базовые операции ---

// 1. Создайте массив styles с элементами "Jazz" и "Blues"
let styles = ["Jazz","Blues"]; // Исправьте здесь

// 2. Добавьте "Rock-n-Roll" в конец
// Ваш код:
styles.push("Rock-n-Roll");


// 3. Замените значение в середине на "Classics" (код должен работать для массива любой нечетной длины)
// Ваш код:
styles[(styles.length-1)/2] = "Classics";

// 4. Удалите первый элемент массива и выведите его в консоль
// Ваш код:
let one = styles.shift();
console.log(one," - он тут больше не работает")

// 5. Добавьте в начало "Rap" и "Reggae"
// Ваш код:
styles.unshift("Rap","Reggae");

//Проверка
console.log(styles);

// --- ЗАДАНИЕ 2: Поиск в массиве ---

let users = ["Mike", "Alex", "Larry", "Alex", "John"];

// Напишите код, который возвращает индекс ПЕРВОГО вхождения имени "Alex"
// Если не найдено, должно быть -1
// Ваш код:
let firstAlexIndex = users.indexOf("Alex");
console.log(firstAlexIndex," индекс первого Alex")

// --- ЗАДАНИЕ 3: Фильтрация (Filter) ---

let nums = [5, 2, 10, 1, 100, 45];

// Используйте метод .filter(), чтобы создать новый массив rangeNums,
// куда войдут только числа от 1 до 10 (включительно). // Ваш код
let rangeNums = nums.filter( number => number >=1 && number <= 10);
console.log(rangeNums, " фильтрованый список");

// --- ЗАДАНИЕ 4: Трансформация (Map) ---

let names = ["ivan", "petr", "oleg"];

// Используйте .map(), чтобы создать массив capitalizedNames,
// где имена будут с Большой буквы: ["Ivan", "Petr", "Oleg"]
let BigName = names.map(name => 
  name.charAt(0).toUpperCase() + name.slice(1)
);

console.log("Правильные имена", BigName)
// --- ЗАДАНИЕ 5: Методы split и join ---

let str = "HTML, CSS, JavaScript, React";

// 1. Преобразуйте строку в массив (разделитель - запятая с пробелом)
let masiv = str.split(", ");

// 2. Удалите из массива "React" (можно использовать pop, если он последний, или splice)
// Ваш код:
masiv.splice(-1);
// 3. Преобразуйте массив обратно в строку, разделитель - ";"
let Str2 = masiv.join(";"); // Ваш код

console.log("Проверка строки ", Str2)

/* ========================================================
  --- ЧАСТЬ 3: ДОПОЛНИТЕЛЬНО (СО ЗВЕЗДОЧКОЙ) ---
  Алгоритмическая задача.
  ============================================================
*/
/*
  Напишите функцию camelize(str), которая преобразует строки вида 
  "my-short-string" в "myShortString".
  
  То есть дефисы удаляются, а все слова после них получают заглавную букву.
  Подсказка: используйте split, map и join.
*/

function camelize(str) {
    let slova = str.split('-')
    let finish = []
    for (let i = 0; i < slova.length; i++) {
      const slovo = slova[i];

      if (i=== 0){
        finish.push(slovo);
      }else{
        finish.push(slovo.charAt(0).toUpperCase() + slovo.slice(1));
      }
    }
    return finish.join('');
}

console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition====