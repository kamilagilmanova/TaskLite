const columns = document.querySelectorAll(".column");

let boardData = JSON.parse(localStorage.getItem(`kanbanData`)) || {
  todo: [],
  "in-progress": [],
  done: [],
};
let draggedTask = null;
let sourceStatus = null;
document.querySelectorAll(".column__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const column = btn.closest(".column");
    const status = column.dataset.status;
    const title = prompt("Введите название задачи") || "";
    if (!title) return;

    const descr = prompt("Введите описание задачи") || "";
    const priorityInput =
      prompt(`Приоритет (Высокий / Средний / Низкий)`) || "Средний";
    const deadline = prompt("Срок (например: 12.12):") || "";

    const cleanTitle = title.trim();
    const cleanDescr = descr.trim();
    const cleanDeadline = deadline.trim();
    const cleanPriority = normalizePriority(priorityInput);

    boardData[status].push({
      title: cleanTitle,
      descr: cleanDescr,
      priority: cleanPriority,
      deadline: cleanDeadline,
    });

    renderBoard();
  });
});

function renderBoard() {
  columns.forEach((column) => {
    const status = column.dataset.status;
    const taskList = column.querySelector(".column__tasks");

    taskList.innerHTML = "";

    boardData[status].forEach((task, index) => {
      const el = document.createElement("div");

      el.className = "column__task task-kanban";
      el.dataset.index = index;
      el.draggable = true;
      el.innerHTML = `
      <button class="task-kanban__delete" onclick="deleteTask('${status}', ${index})">×</button>
             <h3 class="task-kanban__title">${escapeHtml(task.title)}</h3>
                ${
                  task.descr
                    ? `<p class="task-kanban__descr"> ${escapeHtml(task.descr)}
                </p>`
                    : ""
                }

                <div class="task-kanban__footer">
                  <span class="task-kanban__label ${task.priority}">${priorityLabel(task.priority)}</span>
                  <span class="task-kanban__deadline">${escapeHtml(task.deadline)}</span>
                </div>`;
      addDragEvents(el);
      taskList.appendChild(el);
    });
    updateCount(column);
  });

  localStorage.setItem("kanbanData", JSON.stringify(boardData));
}

function addDragEvents(el) {
  el.addEventListener("dragstart", (event) => {
    draggedTask = el;
    sourceStatus = el.closest(".column").dataset.status;
    el.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
  });

  el.addEventListener("dragend", () => {
    if (draggedTask) draggedTask.classList.remove("dragging");
    draggedTask = null;
  });
}

columns.forEach((column) => {
  const taskList = column.querySelector(".column__tasks");
  taskList.addEventListener("dragover", (event) => {
    event.preventDefault();
    column.classList.add("drag-over");
  });

  taskList.addEventListener("dragleave", () => {
    column.classList.remove("drag-over");
  });

  taskList.addEventListener("drop", (event) => {
    event.preventDefault();
    column.classList.remove("drag-over");

    const targetStatus = column.dataset.status;
    if (!draggedTask) return;

    const index = +draggedTask.dataset.index;
    const movedTask = boardData[sourceStatus][index];

    boardData[sourceStatus].splice(index, 1);
    boardData[targetStatus].push(movedTask);

    renderBoard();
  });
});

function updateCount(column) {
  const count = column.querySelector(".column__count");
  const status = column.dataset.status;

  count.textContent = boardData[status].length;
}

function normalizePriority(value) {
  const v = String(value || "")
    .trim()
    .toLowerCase();

  if (["выс", "высокий", "в", "h", "high"].includes(v)) return "high";
  if (["ср", "сред", "средний", "м", "m", "med", "medium"].includes(v))
    return "medium";
  if (["низ", "низкий", "н", "l", "low"].includes(v)) return "low";
  return "medium";

  return "medium";
}

function priorityLabel(cleanPriority) {
  if (cleanPriority === "high") {
    return "Высокий приоритет";
  } else if (cleanPriority === "low") {
    return "Низкий приоритет";
  } else {
    return "Средний приоритет";
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizeWords(str) {
  const clean = String(str || "").trim();
  if (!clean) return "";

  return clean
    .split(/\s+/)
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

window.deleteTask = function (status, index) {
  if (confirm("Вы уверены, что хотите удалить эту задачу?")) {
    boardData[status].splice(index, 1);
    renderBoard();
  }
};

renderBoard();
