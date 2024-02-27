document.getElementById('addTaskForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const newTask = document.getElementById('newTask').value;
	if (newTask === '') return;

	const li = document.createElement('li');
	li.innerHTML = `<span class="task-text">${newTask}</span>`;
	li.classList.add('task');

	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = 'Delete';
	deleteButton.classList.add('delete-button');
	li.appendChild(deleteButton);

	const taskList = document.getElementById('taskList');
	taskList.appendChild(li);

	document.getElementById('newTask').value = '';

	li.addEventListener('click', function() {
		li.classList.toggle('completed');
	});

	deleteButton.addEventListener('click', function() {
		taskList.removeChild(li);
	});
});