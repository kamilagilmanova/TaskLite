// let a = 3;
// let b = 9;

// // let sum = a + b
// let diff = a - b;
// let mult = a * b;
// let div = a / b;

// let firstName = "Камила";
// let lastName = "Гильманова";
// let fullName = firstName + " " + lastName;

// console.log(sum, diff, mult, div);
// console.log(fullName);

// // Урок 2: Операторы сравнения и логические операторы

// let title = "Прочитать конспект";

// if (title === "") {
//   console.log("Название задачи не указано");
// } else {
//   console.log("Название задачи:", title);
// }

// let tasks = 5;
// if (tasks === 0) {
//   console.log("Список пуст");
// } else if (tasks >= 1 && tasks <= 3) {
//   console.log("Немного задач");
// } else {
//   console.log("Много задач");
// }

// let isCompleted = false;
// if (isCompleted) {
//   console.log("Задача выполнена");
// } else {
//   console.log("Задача ещё в работе");
// }

// let urgent = true;
// if (tasks > 0 && urgent) {
//   console.log("Есть срочные задачи");
// } else if (tasks > 0 && !urgent) {
//   console.log("Задачи есть, но они не срочные");
// } else {
//   console.log("Все задачи завершены");
// }

// // Урок 3: Функции в JavaScript

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 3));

// let result = sum(10, 15); //  25
// console.log(result);

// function isTaskDone(status) {
//   return status === "Выполнено";
// }

// console.log(isTaskDone("Выполнено")); // true

// let done = isTaskDone("В процессе");
// console.log(done); // false

// function taskSummary(total, done) {
//   const active = total - done;
//   console.log("Всего:" + total, "активных:" + active, "выполнено:" + done);
// }

// taskSummary(10, 4);

// let cities = ["Москва", "Питер", "Казань"];
// cities[2] = "Новосибирск"; //изменили третий элемент
// console.log(cities); // ["Москва, Питер, Новосибирск"]

// let task = {
//   id: 1,
//   title: "Купить молоко",
//   status: "активна",
// };

// console.log(task.title);
// task.status = "выполнена";
// console.log(task.status);

// console.log(todoList[1].title);
// console.log(todoList.lenght);

// let user = {
//   name: "Иван",
//   tasks: todoList,
// };

// console.log(user);

// function max(a, b) {
//   return a > b ? a : b;
// }
// console.log("Максимум (5, 10):", max(5, 10));
// console.log("Максимум (20, 3):", max(20, 3));

// function printTask(title, status) {
//   return `Задача: ${title} | Статус: ${status}`;
// }
// console.log(printTask("Помыть посуду", "в процессе"));

// function greetUser(name) {
//   return `Добро пожаловать, ${name}!`;
// }
// console.log(greetUser("Камила"));

// function taskSummaryFormatted(total, done) {
//   const active = total - done;
//   return `Всего: ${total} | Выполнено: ${done} | Активных: ${active}`;
// }
// console.log(taskSummaryFormatted(10, 4));

// let numbers = [10, 20, 30, 40, 50];
// console.log(
//   "Первый элемент:",
//   numbers[0],
//   "Последний:",
//   numbers[numbers.length - 1]
// );

// let myTasks = [
//   { id: 1, title: "Купить хлеб", status: "активна" },
//   { id: 2, title: "Выучить JS", status: "в процессе" },
//   { id: 3, title: "Сходить в зал", status: "активна" },
// ];

// function findTaskByTitle(tasksArray, titleToFind) {
//   for (let i = 0; i < tasksArray.length; i++) {
//     if (tasksArray[i].title === titleToFind) {
//       return tasksArray[i];
//     }
//   }
//   return "Задача не найдена";
// }

// console.log("Поиск 'Выучить JS':", findTaskByTitle(myTasks, "Выучить JS"));
// console.log("Поиск 'Купить пушку':", findTaskByTitle(myTasks, "Купить пушку"));

//методы массива

// function filterByStatus(tasks, status) {
//  return tasks.filter(function(task) {
//   return task.status === status;
//  })

//   return tasks.filter((t) => t.status === status);
// }

// console.log(filterByStatus(tasks, "выполнена"));

// function sortByName(tasks) {
//   tasks.sort((a, b) => a.title.localeCompare(b.title));

//   return tasks;
// }

// console.log(sortByName(tasks));

// function searchByTitle(tasks, query) {
//   let q = String(query).toLowerCase();
//   return tasks.filter((task) => task.title.toLowerCase().indexOf(q) !== -1);
// }

// console.log(searchByTitle(tasks, "по"));

// function toggleTaskStatus(tasks, id) {
//   return tasks.map(function (task) {
//     if (task.id === id) {
//       let newStatus = task.status === "выполнена" ? "активна" : "выполнена";
//     }
//     return {
//       id: task.id,
//       title: task.title,
//       status: newStatus,
//     };
//     return task;
//   });
// }

// function toggleTaskStatus(tasks, id) {
//   return tasks.map(function (task) {
//     if (task.id === id) {
//       const newStatus = task.status === "выполнена" ? "активна" : "выполнена";

//       return {
//         id: task.id,
//         title: task.title,
//         status: newStatus,
//       };
//     }

//     return task;
//   });
// }

// console.log(toggleTaskStatus(tasks, 1));

// урок 5: Циклы и методы массивов

let tasks = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сходить в магазин", status: "активна" },
  { id: 4, title: "Прочитать книгу", status: "выполнена" },
  { id: 5, title: "Посмотреть фильм", status: "активна" },
  { id: 6, title: "Погулять с собакой", status: "выполнена" },
];

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].id + ":" + tasks[i].title);
}

for (let task of tasks) {
  console.log(task.id + ":" + task.title);
}

let i = 0;
let total = 0;
let done = 0;
let active = 0;

while (i < tasks.length) {
  total++;
  if (tasks[i].status === "выполнена") {
    done++;
  } else {
    active++;
  }
  i++;
}

console.log("Всего:" + total + " Выполнено:" + done + " Активных:" + active);

for (let task of tasks) {
  if (task.status === "активна") {
    console.log("Активная задача:" + task.title);
  }
}

tasks.forEach((task) => {
  console.log(task.id + " " + task.title + " (" + task.status + ") ");
});

let searchTitle = "Купить молоко";
let found = null;

for (let task of tasks) {
  if (task.title === searchTitle) {
    found = task;
    break;
  }
}

if (found) {
  console.log("Задача найдена:", found);
} else {
  console.log("Задача не найдена");
}

let activeTasks = [];

for (let task of tasks) {
  if (task.status === "активна") {
    activeTasks.push(task);
  }
}
console.log(activeTasks);

function deleteTaskById(tasksArray, id) {
  return tasksArray.filter((task) => task.id !== id);
}
console.log("После удаления ID 3:", deleteTaskById(tasks, 3));

// function toggleTaskStatus(tasksArray, id) {
//   return tasksArray.map(task => {
//     if (task.id === id) {
//       return {
//         ...task,
//         status: task.status === "выполнена" ? "активна" : "выполнена"
//       };
//     }
//     return task;
//   });
// }
// console.log("Toggle статуса для ID 1:", toggleTaskStatus(tasks, 1));

function clearCompletedTasks(tasksArray) {
  return tasksArray.filter((task) => task.status !== "выполнена");
}
console.log("Только активные задачи:", clearCompletedTasks(tasks));

function findTaskByKeyword(tasksArray, keyword) {
  const lowerKeyword = keyword.toLowerCase();

  const foundTask = tasksArray.find((task) =>
    task.title.toLowerCase().includes(lowerKeyword),
  );

  return foundTask ? foundTask : "Задача не найдена";
}

console.log("Поиск 'молоко':", findTaskByKeyword(tasks, "молоко"));
console.log("Поиск 'прыгать':", findTaskByKeyword(tasks, "прыгать"));



