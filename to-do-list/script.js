document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        if (task.trim() === '') {
            alert('Введите задачу!');
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'todo-app__item';

        const taskText = document.createElement('span');
        taskText.textContent = task;
        listItem.appendChild(taskText);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Выполнено';
        completeButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });
        listItem.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
    }
});
