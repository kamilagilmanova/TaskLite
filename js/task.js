let a = 3
let b = 9

let sum = a + b 
let diff = a - b

console.log(sum, diff)
console.log(diff)

// Урок 2: Операторы сравнения и логические операторы

let title = "Прочитать конспект"

if (title === "") {
    console.log("Название задачи не указано");
} else {
    console.log("Название задачи:", title);
}

let tasks = 5
if (tasks === 0) {
    console.log("Нет задач для выполнения");
} else if (tasks > 3) {
    console.log("Много задач");
}