import { Task, TaskManager } from "./taskManager.js";
import { fetchTasks } from "./api.js";


const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");


const taskManager = new TaskManager();


function renderTasks() {
    taskList.innerHTML = "";

    taskManager.tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const titleSpan = document.createElement("span");
        titleSpan.textContent = task.title;

        if (task.completed) {
            titleSpan.style.textDecoration = "line-through";
        }

        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Toggle";

        toggleButton.addEventListener("click", () => {
            taskManager.toggleTask(task.id);
            renderTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            taskManager.removeTask(task.id);
            renderTasks();
        });

        taskDiv.appendChild(titleSpan);
        taskDiv.appendChild(toggleButton);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
    });
}


async function loadTasks() {

    statusMessage.textContent = "Loading tasks...";

    try {

        const rawTasks = await fetchTasks();


        const jsonTasks = JSON.stringify(rawTasks);


        const parsedTasks = JSON.parse(jsonTasks);


        const tasks = parsedTasks.map(task => {

            return new Task(
                task.id,
                task.title,
                task.completed
            );
        });


        taskManager.setTasks(tasks);


        renderTasks();


        statusMessage.textContent = "";

    } catch (error) {

        console.error(error);

        statusMessage.textContent = "Failed to load tasks.";
    }
}


loadTasksBtn.addEventListener("click", loadTasks);