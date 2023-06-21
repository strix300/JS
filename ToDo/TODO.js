import { buttonAddHigh,buttonAddLow,outputHigh,outputLow,listTasks } from "./consts.js";

function arraytaskshigh() {
    const inputhigh = document.getElementById('inputhigh');
    const newTask = {name: inputhigh.value, status: 'To-Do', priority: 'high' };
    listTasks.push(newTask);
    clear();
    createDiv(listTasks);
} 

function arraytaskslow() {
    const inputlow = document.getElementById('inputlow');
    const newTask = { name: inputlow.value, status: 'To-Do', priority: 'low' };
    listTasks.push(newTask);
    clear();
    createDiv(listTasks);
} 

function clear() {
    const classtaskshigh = outputHigh.querySelectorAll('.task');
    classtaskshigh.forEach(task => {
        task.remove();
    });

    const classtaskslow = outputLow.querySelectorAll('.task');
    classtaskslow.forEach(task => {
        task.remove();
    });
}

function createDiv(listTasks) {
    let i=0;
    for (let arrtask of listTasks) {
    i++;
    const maintaskflexbox = document.createElement('div');
    maintaskflexbox.className = 'task';
    const inputhigh = document.getElementById('inputhigh');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "round-checkbox";
    checkbox.addEventListener('change', function() {
    if (this.checked) {
    maintaskflexbox.style.backgroundColor = 'gray';
    listTasks.status[index] = 'Done';
    } else {
    maintaskflexbox.style.backgroundColor = '';
    listTasks.status[index] = 'To-Do';
    }
    });
    maintaskflexbox.appendChild(checkbox);

    const outdiv = document.createElement('div');
    outdiv.className = "tasktext";
    outdiv.textContent = arrtask.name;
    maintaskflexbox.appendChild(outdiv);

    const closebuttonhigh = document.createElement('button');
    closebuttonhigh.classList.add('close-button');
    closebuttonhigh.setAttribute('type', 'button');
    closebuttonhigh.innerHTML = '✖';
    closebuttonhigh.addEventListener('click', function() {
    maintaskflexbox.parentNode.removeChild(maintaskflexbox);
    const index = listTasks.indexOf(arrtask)
    listTasks.splice(index,1);
    });
    maintaskflexbox.appendChild(closebuttonhigh);

    if (arrtask.priority == 'high'){
    outputHigh.appendChild(maintaskflexbox);
    } else {
    outputLow.appendChild(maintaskflexbox);
    }
}
}

outputHigh.addEventListener('submit', arraytaskshigh)
outputLow.addEventListener('submit', arraytaskslow)