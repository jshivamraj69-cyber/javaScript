let todoList = [
    {
        item: 'Buy stuff',
        dueDate: '2026-05-02'
    },
    {
        item: 'College days',
        dueDate: '2026-05-03'
    }
];
displayItems();
function addTodo() {
    const inputElement = document.querySelector('#todo-input');
    const dateElement = document.querySelector('#todo-date');
    const todoItem = inputElement.value.trim();
    const todoDate = dateElement.value;

    if (!todoItem) {
        alert('Please enter a todo item.');
        return;
    }
    todoList.push({ item: todoItem, dueDate: todoDate || 'No date' });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}
function displayItems() {
    const containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        const { item, dueDate } = todoList[i];
        newHtml += `
            <div class="todo-item">
                <span>${item}</span>
                <span>${dueDate}</span>
                <button onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
            </div>
        `;
    }
    containerElement.innerHTML = newHtml;
}
