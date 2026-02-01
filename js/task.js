let a = 3
let b = 9

let sum = a + b 
let diff = a - b
let mult = a * b;
let div = a / b; 

let firstName = "Камила";
let lastName = "Гильманова";
let fullName = firstName + " " + lastName;

console.log(sum, diff, mult, div);
console.log(fullName);

// Урок 2: Операторы сравнения и логические операторы

let title = "Прочитать конспект"

if (title === "") {
    console.log("Название задачи не указано");
} else {
    console.log("Название задачи:", title);
}

let tasks = 5
if (tasks === 0) {
    console.log("Список пуст");
} else if (tasks >= 1 && tasks <= 3) {
    console.log("Немного задач");
} else {
    console.log("Много задач");
}

let isCompleted = false;
if (isCompleted) {
    console.log("Задача выполнена");
} else {
    console.log("Задача ещё в работе");
}

let urgent = true;
if (tasks > 0 && urgent) {
    console.log("Есть срочные задачи");
} else if (tasks > 0 && !urgent) {
    console.log("Задачи есть, но они не срочные");
} else {
    console.log("Все задачи завершены");
}

let isAdmin = false;
let isModerator = true;
if (isAdmin || isModerator) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}

let amount = 2500; 
if (amount === 0) {
    console.log("Корзина пуста");
} else if (amount < 1000) {
    console.log("Скидка не применяется");
} else if (amount >= 1000 && amount < 5000) {
    console.log("Скидка 5%");
} else if (amount >= 5000) {
    console.log("Скидка 10%");
}