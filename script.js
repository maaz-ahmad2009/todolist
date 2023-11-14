function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    newTask.onclick = function () {
        newTask.classList.toggle('completed');
    };

    taskList.appendChild(newTask);
    taskInput.value = '';
}
