const columns = document.querySelectorAll(".column");

let boardData = JSON.parse(localStorage.getItem(`kanbanData`)) || {
  todo: [],
  "in-progress": [],
  done: [],
};

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

      el.innerHTML = `
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

      taskList.appendChild(el);
    });
    updateCount(column);
  });

  localStorage.setItem("kanbanData", JSON.stringify(boardData));
}

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
  return cleanPriority === "high"
    ? "Высокий приоритет"
    : "low"
      ? "Низкий приоритет"
      : "Средний приоритет";
}

 function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
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

renderBoard();
