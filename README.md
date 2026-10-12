# Assignment 4 - Dynamic Task Dashboard

## Overview

This project is a Dynamic Task Dashboard developed using vanilla JavaScript.

The main purpose of this assignment is to practice DOM manipulation, asynchronous JavaScript, ES6 classes, immutable state updates, event handling, and JSON handling.

## File Organization

### index.html

This file contains the main HTML structure of the application.

It includes:

- Task Dashboard heading
- Load Tasks button
- Status message paragraph
- Empty task list container

### styles.css

This file contains the styling of the dashboard.

Completed tasks are displayed differently using a line-through effect.

### taskManager.js

This file contains two ES6 classes:

- Task
- TaskManager

The Task class stores the task id, title, and completed status.

The id is made read-only using Object.defineProperty.

The toggle() method returns a new Task object instead of changing the existing task.

The TaskManager class manages the task array.

It uses immutable operations such as:

- spread syntax
- filter()
- map()

The original tasks array is not directly mutated.

### api.js

This file simulates a server request.

The fetchTasks() function returns a Promise and uses setTimeout() with a 1500ms delay.

After the delay, it resolves with the task data.

### main.js

This file connects the HTML, TaskManager, and API together.

It performs the following operations:

1. Listens for the Load Tasks button click.
2. Displays "Loading tasks...".
3. Fetches the tasks using async/await.
4. Converts the raw task data to JSON using JSON.stringify().
5. Parses the JSON using JSON.parse().
6. Creates Task instances from the parsed data.
7. Stores the tasks in TaskManager.
8. Renders the tasks dynamically to the DOM.
9. Handles Toggle button events.
10. Handles Delete button events.
11. Uses try/catch for error handling.

## Challenges Faced

One challenge was understanding immutable state updates.

Instead of directly modifying the original array, I used spread syntax, map(), and filter() to create new arrays.

Another challenge was understanding asynchronous JavaScript.

The fetchTasks() function returns a Promise and waits for 1500 milliseconds before returning the data. I used async/await to handle this asynchronous operation.

Another challenge was dynamically creating DOM elements and adding event listeners to buttons.

The Toggle and Delete buttons are created using createElement() and their events are handled using addEventListener().

Finally, I practiced JSON handling by converting the task data using JSON.stringify() and then converting it back using JSON.parse() before creating Task objects.

## Running the Project
The project uses JavaScript modules, so it is recommended to run it using a local server.
For example, using VS Code with Live Server:
1. Open the assignment4 folder.
2. Start Live Server.
3. Open index.html in the browser.
4. Click the Load Tasks button.
5. Wait 1.5 seconds for the tasks to load.

