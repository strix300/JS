const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];

function addtask(name,status,priority) {
    newtask = {name: name, status: status, priority: priority};
    list.push(newtask);
}

function deletetask(name) {
    i=0;
    for (let task of list) {
        if (task.name == name) {
            list.splice(i,1);
        } else {
            i++;
        }
    }
}

function ChangeTaskStatus(name,status,priority) {
    i=0;
    changetask={name: name, status: status, priority: priority};
    for (let task of list) {
        if (task.name == name) {
            list.splice(i,1);
            list.splice(i,0, changetask);
        } else {
            i++;
        }
    }
}

function showtodo() {
    console.log('To Do');
    for (let tasks of list) { 
        if(tasks.status == 'To Do') {
            console.log(`\t${tasks.name} priority: ${tasks.priority}`);
        }
    }

    console.log('In progress')
    for (let tasks of list) { 
        if(tasks.status == 'In progress') {
            console.log(`\t${tasks.name} priority: ${tasks.priority}`);
        }
    }

    console.log('Done');
    for (let tasks of list) { 
        if(tasks.status == 'Done') {
            console.log(`\t${tasks.name} priority: ${tasks.priority}`);
        }
    }
}

addtask('Go Gym','To Do', 'high');
deletetask('test');
ChangeTaskStatus('Go Gym','To Do', 'low')
showtodo();