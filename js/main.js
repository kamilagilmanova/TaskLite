const input = document.querySelector(".form-add__input");
const addButtton = document.querySelector(".form-add__button");
const container = document.querySelector(".tasks");

const searchInput = document.querySelector(".toolbar__search");
const footer = document.querySelector(".footer-controls");
const sortSelect = document.querySelector(".toolbar__sort");

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

    renderAll();
  });

  item.addEventListener("click", (event) => {
    if (event.target.closest(".task__action")) return;
    task.done = !task.done;
    renderAll();
  });

  actions.append(editBtn, deleteBtn);
  item.append(content, actions);

  if (task.done) {
    item.classList.add("task--done");
  }

  return item;
  //   container.append(item);
  // });
}

const tabButtons = document.querySelectorAll(".tabs__item");
const clearButton = document.querySelector(".button--clear");

const tasks = [
  {
    text: "Прогулка с собакой",
    date: "Сегодня в 11:00",
    done: true,
  },
  {
    text: "Прочитать книгу",
    date: "Сегодня в 13:00",
    done: false,
  },
  {
    text: "Выполнить д/з",
    date: "Сегодня в 11:00",
    done: true,
  },
  {
    text: "Убраться дома",
    date: "Сегодня в 13:00",
    done: false,
  },
  {
    text: "Подготовить проект по веб-дизайну",
    date: "Сегодня в 16:30",
    done: false,
  },
  {
    text: "Попрактиковать английскую лексику (IELTS)",
    date: "Завтра в 10:00",
    done: false,
  },
  {
    text: "Испечь торт для Рейхан",
    date: "Пятница в 18:00",
    done: false,
  },
  {
    text: "Посмотреть новую серию сериала",
    date: "Вчера в 21:00",
    done: true,
  }
];

function renderAll() {
  // container.innerHTML = "";

  document.querySelectorAll(".task").forEach((t) => t.remove());

  tasks.forEach((task) => {
    const card = renderTask(task);
    footer.before(card);
  });
}

renderAll();
