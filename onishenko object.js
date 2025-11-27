/* --- ЧАСТЬ 1: ТЕОРИЯ --- */

/**
 * Вопрос 1. Какая строка вызовет ошибку?
 * const user = { name: "Alex", "like birds": true, age: 20 };
 * A) console.log(user.age);
 * B) console.log(user["like birds"]);
 * C) delete user.name;
 * D) console.log(user[like birds]);
 * ОТВЕТ D ########################
*/

console.log("Ответ на задание 1: D");

/**
 * Вопрос 2. Что выведет консоль?
 * const a = { x: 1 };
 * const b = a;
 * b.x = 2;
 * console.log(a.x);
 * A) 1
 * B) 2
 * C) undefined
 * D) Ошибку
 * ОТВЕТ B #######################
 */

console.log("Ответ на задание 2: B");

/**
 * Вопрос 3. Какой оператор используется для проверки наличия ключа?
 * A) exists
 * B) has
 * C) in
 * D) contain
 * ОТВЕТ C #########################
 */

console.log("Ответ на задание 3: C");

/**
 * Вопрос 4. Какой цикл предназначен для перебора ключей объекта?
 * A) for (let i = 0; i < obj.length; i++)
 * B) for (let key of obj)
 * C) for (let key in obj)
 * D) obj.forEach()
 * ОТВЕТ C ##########################
 */

console.log("Ответ на задание 4: C");

/**
 * Вопрос 5. Что будет в user?
 * const user = { name: "John" };
 * const permissions = { canView: true };
 * Object.assign(user, permissions);
 * A) { name: "John", permissions: {...} }
 * B) { name: "John", canView: true }
 * C) { canView: true }
 * D) Ошибка
 * ОТВЕТ B ###############################
 */

console.log("Ответ на задание 5: B");

/* ============================================================
  --- ЧАСТЬ 2: ПРАКТИКА ---
  Допишите код в выделенных местах.
  ============================================================
*/

// --- ЗАДАНИЕ 1: Основы CRUD ---

// 1. Создайте пустой объект student

let student = {}; 
console.log(student);

// 2. Добавьте свойство name (ваше имя) и course (курс, число 2)
// Ваш код:

student.name ="мАксим";
student.course ="2";
console.log(student);

// 3. Измените course на 3
// Ваш код:

student.course = "3";
console.log(student);

// 4. Удалите свойство name
// Ваш код:

delete student.course;
console.log(student);

// --- ЗАДАНИЕ 2: Проверка на пустоту ---

/**
 * Функция должна возвращать true, если объект пуст, и false, если есть свойства.
 */

function isEmpty(obj) {
    if(Object.keys(obj).length === 0){
        return true
    }
    else{
        return false
    }
}

const schedule = {};
console.log("Is empty (должно быть true):", isEmpty(schedule));
schedule["8:30"] = "get up";
console.log("Is empty (должно быть false):", isEmpty(schedule));


// --- ЗАДАНИЕ 3: Сумма свойств ---

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
// Напишите код для суммирования всех зарплат и записи в переменную sum
// Ваш код:

for(let key in salaries){
    sum += salaries[key]
}
console.log(sum);



// --- ЗАДАНИЕ 4: Объединение объектов ---

const defaultSettings = { theme: "light", notifications: true, autoSave: false };
const userSettings = { theme: "dark", autoSave: true };

// 1. Создайте finalSettings, объединив объекты (приоритет у userSettings)
// Используйте Spread operator (...)
const finalSettings = {
    ...defaultSettings,
    ...userSettings
};

console.log("Итоговые настройки:", finalSettings);


// --- ЗАДАНИЕ 5: Умножение числовых свойств ---

// Функция умножает все ЧИСЛОВЫЕ свойства объекта на 2
function multiplyNumeric(obj) {
    for(let key in obj){
    if(typeof obj[key] === 'number'){   
        obj[key] = obj[key]*2
        }
    }
    console.log(obj)   
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu)
/* ============================================================
  --- ЧАСТЬ 3: ДОПОЛНИТЕЛЬНО ---
  Реализуйте методы объекта calculator.
  ============================================================
*/

let calculator = {
    // Сохраняет два значения (можно задать жестко для теста, например 2 и 3)
    read() {
        this.a = 2; 
        this.b = 3;
        // В реальном браузере было бы: 
        // this.a = +prompt('a?', 0);
    },
    
    // Возвращает сумму
    sum() {
        return this.a +this.b
    },

    // Возвращает произведение
    mul() {
        // Ваш код
        return this.a * this.b
    }
};

calculator.read();
console.log("Сумма (2+3 = 5):", calculator.sum());
console.log("Произведение (2*3 = 6):", calculator.mul());