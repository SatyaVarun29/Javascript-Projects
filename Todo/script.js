document.addEventListener("DOMContentLoaded", () => {
  const textinput = document.getElementById("todo-input");
  let button = document.getElementById("add-task-btn");
  let todolist = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => rendertask(task));

  button.addEventListener("click", () => {
    let text = textinput.value.trim();

    if (text === "") return;

    const tasklist = {
      id: Date.now(),
      textt: text,
      completed: false,
    };
    tasks.push(tasklist);
    savetasks();
    rendertask(newTask)
    textinput.value = "";
    console.log(tasks);
  });

  function rendertask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.textt}</span>
    <button>delete</button>`;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      savetasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();

      
      tasks = tasks.filter((t) => t.id !== task.id);

      li.remove();
      savetasks();
    });
    todolist.appendChild(li);
  }

  function savetasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
