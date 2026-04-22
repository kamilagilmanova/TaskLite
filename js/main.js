const input = document.querySelector(".form-add__input");
const addButtton = document.querySelector(".form-add__button");
const container = document.querySelector(".tasks");
const form = document.querySelector(".form-add");
const searchInput = document.querySelector(".toolbar__search");
const footer = document.querySelector(".footer-controls");
const sortSelect = document.querySelector(".toolbar__sort");
const tabButtons = document.querySelectorAll(".tabs__item");
const clearButton = document.querySelector(".button--clear");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let sortOrder = "new";
let currentFilter = "all"; // all done active

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addTask();
});

sortSelect.addEventListener("change", () => {
  sortOrder = sortSelect.value;
  renderAll();
});

searchInput.addEventListener("input", () => {
  renderAll();
});

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("tabs__item--active"));
    btn.classList.add("tabs__item--active");
    if (btn.textContent.includes("Активные")) currentFilter = "active";
    else if (btn.textContent.includes("Завер")) currentFilter = "done";
    else currentFilter = "all";

    renderAll();
  });
});

clearButton.addEventListener("click", () => {
  tasks = tasks.filter((t) => !t.done);
  saveTasks();
  renderAll();
});
function addTask() {
  const text = input.value.trim();
  if (text === "" || text.length < 3) {
    input.classList.add("input--error");
    return;
  }

  input.classList.remove("input--error");

  const newTask = {
    id: Date.now(),
    text: text,
    done: false,
    date: formattedDate(new Date()),
  };

  tasks.push(newTask);
  input.value = "";

  saveTasks();
  renderAll();
}

function renderTask(task) {
  // container.innerHTML = "";

  // tasks.forEach((task) => {
  const item = document.createElement("div");
  item.classList.add("task");

  const content = document.createElement("div");
  content.classList.add("task__content");

  const title = document.createElement("div");
  title.classList.add("task__title");
  title.textContent = task.text;

  const meta = document.createElement("div");
  meta.classList.add("task__meta");
  meta.textContent = task.date;

  content.append(title, meta);

  const actions = document.createElement("div");
  actions.classList.add("task__actions");

  const editBtn = document.createElement("button");
  editBtn.classList.add("task__action", "task__action--edit");

  editBtn.innerHTML = `<svg
              class="task__icon"
              viewbox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="#6f64a3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20h9" />
              <path
                d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
              />
            </svg>`;
  editBtn.addEventListener("click", () => {
    const newText = prompt("Изменить задачу:", task.text);
    if (newText && newText.trim() !== "") {
      task.text = newText.trim();
      saveTasks();
      renderAll();
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("task__action", "task__button--delete");
  deleteBtn.innerHTML = `<svg
              class="task__icon"
              viewbox="0 0 24 24"
              width="14 "
              height="14"
              fill="none"
              stroke="#cb6e6e"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>`;

  deleteBtn.addEventListener("click", () => {
    const index = tasks.indexOf(task);

    tasks.splice(index, 1);
    saveTasks();
    renderAll();
  });

  item.addEventListener("click", (event) => {
    if (event.target.closest(".task__action")) return;
    task.done = !task.done;
    saveTasks();
    renderAll();
  });

  actions.append(editBtn, deleteBtn);
  item.append(content, actions);
  container.append(item);

  if (task.done) {
    item.classList.add("task--done");
  }

  return item;
  //   container.append(item);
  // });
}
// const tasks = [
//   {
//     text: "Прогулка с собакой",
//     date: "Сегодня в 11:00",
//     done: true,
//   },
//   {
//     text: "Прочитать книгу",
//     date: "Сегодня в 13:00",
//     done: false,
//   },
//   {
//     text: "Выполнить д/з",
//     date: "Сегодня в 11:00",
//     done: true,
//   },
//   {
//     text: "Убраться дома",
//     date: "Сегодня в 13:00",
//     done: false,
//   },
//   {
//     text: "Подготовить проект по веб-дизайну",
//     date: "Сегодня в 16:30",
//     done: false,
//   },
//   {
//     text: "Попрактиковать английскую лексику (IELTS)",
//     date: "Завтра в 10:00",
//     done: false,
//   },
//   {
//     text: "Испечь торт для Рейхан",
//     date: "Пятница в 18:00",
//     done: false,
//   },
//   {
//     text: "Посмотреть новую серию сериала",
//     date: "Вчера в 21:00",
//     done: true,
//   }
// ];

function renderAll() {
  // container.innerHTML = "";

  document.querySelectorAll(".task").forEach((t) => t.remove());

  let filtered = tasks.filter((task) => {
    if (currentFilter === "active") return !task.done;
    if (currentFilter === "done") return task.done;
    return true;
  });
  const query = searchInput.value.trim().toLowerCase();

  if (query) {
    filtered = filtered.filter((task) => {
      return task.text.toLowerCase().includes(query);
    });
  }

  const sorteredTasks = [...filtered].sort((a, b) => {
    if (sortOrder === "new") return b.id - a.id;
    if (sortOrder === "old") return a.id - b.id;
    if (sortOrder === "az")
      return a.text.toLowerCase() > b.text.toLowerCase() ? 1 : -1;
    if (sortOrder === "za")
      return b.text.toLowerCase() > a.text.toLowerCase() ? 1 : -1;
  });
  sorteredTasks.forEach((task) => {
    const card = renderTask(task);
    footer.before(card);
  });

  updateCounter();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function formattedDate(date) {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0"); // Месяцы +1
  const y = date.getFullYear();

  const h = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");

  return `${d}.${m}.${y}, ${h}:${min}`;
}

const now = new Date();

const day = now.getDate().toString().padStart(2, "0");
const month = (now.getMonth() + 1).toString().padStart(2, "0");
const year = now.getFullYear();

console.log(`Дата: ${day}.${month}.${year}`);

const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");
console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);

console.log("Локальный формат:", now.toLocaleString("ru-RU"));

function getDayPart() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) return "Утро";
  if (currentHour >= 12 && currentHour < 17) return "День";
  if (currentHour >= 17 && currentHour < 24) return "Вечер";
  return "Ночь";
}

console.log("Сейчас на улице:", getDayPart());

function updateCounter() {
  const total = tasks.length;
  const active = tasks.filter((t) => !t.done).length;
  const done = tasks.filter((t) => t.done).length;

  clearButton.disabled = tasks.every((t) => !t.done);

  const counters = document.querySelector(".footer-controls__counters");

  if (counters) {
    counters.innerHTML = `Всего: ${total}
  Активных: ${active}
Выполненных: ${done}`;
  }
}

renderAll();
