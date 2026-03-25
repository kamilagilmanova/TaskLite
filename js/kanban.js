const columns = document.querySelectorAll(".column");

let boardData = JSON.parse(localStorage.getItem(`kanbanData`)) || {
  todo: [],
  "in-progress": [],
  done: [],
};

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
             <h3 class="task-kanban__title">${task.title}</h3>
                ${
                  task.descr
                    ? `<p class="task-kanban__descr"> ${task.descr}
                </p>`
                    : ""
                }

                <div class="task-kanban__footer">
                  <span class="task-kanban__priority ${task.priority}">${task.priority}</span>
                  <span class="task-kanban__deadline">${task.deadline}</span>
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

renderBoard();
