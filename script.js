const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// 从浏览器里读出之前保存的待办
let todos = JSON.parse(localStorage.getItem("todos") || "[]");
let filter = "all"; // all：全部，active：未完成，done：已完成

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.done) li.classList.add("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => {
      todo.done = checkbox.checked;
      save();
      render();
    });

    const span = document.createElement("span");
    span.textContent = todo.text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "删除";
    delBtn.className = "del-btn";
    delBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      save();
      render();
    });

    li.append(checkbox, span, delBtn);
    list.appendChild(li);
  });
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  todos.push({ text, done: false });
  save();
  render();

  input.value = "";
  input.focus();
});

render();
