const todolist = {
list: {
      "create a new practice task": "In Progress", 
      "make a bed": "Done", 
      "write a post": "To Do"
    },
    addTask(task, status) { 
      todolist.list[task] = status; 
    },
    deleteTask(task){
     delete todolist.list[task];
    },
    changeStatus(task, status){
      todolist.list[task] = status;
    },
    showList() {
      console.log("To Do:");
      for (let task in this.list) {
        if (this.list[task] === "To Do") {
          console.log('\t' + task);
        }
      }
    
      console.log("In Progress:");
      for (let task in this.list) {
        if (this.list[task] === "In Progress") {
          console.log('\t' + task);
        }
      }
    
      console.log("Done:");
      for (let task in this.list) {
        if (this.list[task] === "Done") {
          console.log('\t' + task);
        }
      }
    }
}
  
    todolist.changeStatus("write a post", "In Progress");
    todolist.addTask("gym","To Do");
    todolist.showList(); 
    

    const timestamp = () => console.log(new Date());
    timestamp();
