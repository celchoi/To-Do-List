const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

function createTaskItem(taskName) {
  const taskItem = document.createElement("li");
  taskItem.textContent = taskName;
  return taskItem;
}

document.getElementById("todo-form").addEventListener("submit", (event) => {
    event.preventDefault(); 
    const taskName = input.value.trim(); 
    if (taskName === "") {
      return; 
    }
    const taskItem = createTaskItem(taskName); 
    list.appendChild(taskItem); 
    input.value = ""; 
  });
  
