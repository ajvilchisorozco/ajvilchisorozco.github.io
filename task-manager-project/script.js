let tasks = [];
let idCounter = 1;

function addTask() {
  const name = document.getElementById('taskName').value.trim();
  const priority = document.getElementById('taskPriority').value;
  const isImportant = document.getElementById('taskImportant').checked;

  if (name === '') {
    alert('Task name cannot be empty!');
    return;
  }

  const task = {
    id: idCounter++,
    name,
    priority,
    isImportant,
    isCompleted: false,
    date: new Date().toLocaleDateString()
  };

  tasks.push(task);
  renderTasks();
  console.log(JSON.stringify(tasks));
  document.getElementById('taskName').value = '';
  document.getElementById('taskImportant').checked = false;
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.isCompleted = !task.isCompleted;
    renderTasks();
    console.log(JSON.stringify(tasks));
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
  console.log(JSON.stringify(tasks));
}

function renderTasks() {
  const container = document.getElementById('taskmanager');
  container.innerHTML = '';

  tasks.forEach(task => {
    const div = document.createElement('div');
    div.classList.add('task');
    if (task.isImportant) div.classList.add('important');
    if (task.isCompleted) div.classList.add('completed');

    div.innerHTML = `
      <div class="task-info">
        <strong>${task.name}</strong> <br/>
        Priority: ${task.priority} <br/>
        ${task.date}
      </div>
      <div>
        <label>
          <input type="checkbox" ${task.isCompleted ? 'checked' : ''} 
                 onclick="toggleComplete(${task.id})" />
          Done
        </label>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    container.appendChild(div);
  });
}
