document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const clearCompletedBtn = document.getElementById("clearCompletedBtn");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("task-checkbox");
            checkbox.onchange = function () {
                taskItem.classList.toggle("completed");
            };

            const taskTextSpan = document.createElement("span");
            taskTextSpan.classList.add("task-text");
            taskTextSpan.textContent = taskText;

            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-btn");
            removeBtn.textContent = "Remove";
            removeBtn.onclick = function () {
                taskItem.remove();
            };

            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskTextSpan);
            taskItem.appendChild(removeBtn);

            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll(".completed");
        completedTasks.forEach(task => task.remove());
    }

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
    clearCompletedBtn.addEventListener("click", clearCompletedTasks);
});
