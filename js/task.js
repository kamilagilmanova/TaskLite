let a = 3
let b = 9

// let sum = a + b 
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



// Урок 3: Функции в JavaScript

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); 


let result = sum(10, 15); //  25
console.log(result);

function isTaskDone(status) {
    return status === "Выполнено";
}

console.log(isTaskDone("Выполнено")); // true

let done = isTaskDone("В процессе"); 
console.log(done); // false

function taskSummary(total, done) {
    const active = total - done;
    console.log("Всего:" + total, "активных:" + active, "выполнено:" + done);
}

taskSummary(10, 4);

let cities = ["Москва", "Питер", "Казань"];
cities[2] = "Новосибирск"; //изменили третий элемент
console.log(cities); // ["Москва, Питер, Новосибирск"]

let task = {
    id: 1,
    title: "Купить молоко",
    status: "активна",
}

console.log(task.title);
task.status = "выполнена";
console.log(task.status);

let todoList = [
    {id: 1, title: "Купить молоко", status: "Активна"},
    {id: 2, title: "Позвонить врачу", status: "выполнена"}
]

console.log(todoList[1].title);
console.log(todoList.lenght);

let user = {
    name: "Иван",
    tasks: todoList
}

console.log(user)

function max(a, b) {
    return a > b ? a : b;
}
console.log("Максимум (5, 10):", max(5, 10));
console.log("Максимум (20, 3):", max(20, 3));

function printTask(title, status) {
    return `Задача: ${title} | Статус: ${status}`;
}
console.log(printTask("Помыть посуду", "в процессе"));

function greetUser(name) {
    return `Добро пожаловать, ${name}!`;
}
console.log(greetUser("Камила"));

function taskSummaryFormatted(total, done) {
    const active = total - done;
    return `Всего: ${total} | Выполнено: ${done} | Активных: ${active}`;
}
console.log(taskSummaryFormatted(10, 4));


let numbers = [10, 20, 30, 40, 50];
console.log("Первый элемент:", numbers[0], "Последний:", numbers[numbers.length - 1]);

let myTasks = [
    { id: 1, title: "Купить хлеб", status: "активна" },
    { id: 2, title: "Выучить JS", status: "в процессе" },
    { id: 3, title: "Сходить в зал", status: "активна" }
];



function findTaskByTitle(tasksArray, titleToFind) {
    for (let i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i].title === titleToFind) {
            return tasksArray[i]; 
        }
    }
    return "Задача не найдена";
}


console.log("Поиск 'Выучить JS':", findTaskByTitle(myTasks, "Выучить JS"));
console.log("Поиск 'Купить пушку':", findTaskByTitle(myTasks, "Купить пушку"));