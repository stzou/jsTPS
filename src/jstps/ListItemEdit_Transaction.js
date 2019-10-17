import jsTPS_Transaction from './jsTPS_Transaction';

class ListItemEdit_Transaction extends jsTPS_Transaction{
    todoList = null;
    todoItem = null;
    isEditing = false;
    //NEW VALUES
    description = null;
    assignedTo = null; 
    dueDate = null;
    completed = false;
    //OLD VALUES
    oldDescription = null;
    oldAssignedTo = null;
    oldDueDate = null;
    oldCompleted = null;

    constructor(list,item,isEditing,description,assignedTo,dueDate,completed){
        super();
        this.todoList = list;
        this.todoItem = item;
        this.isEditing = isEditing;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.completed = completed;
    }
    doTransaction = () => {
        if(!this.isEditing){
            const newListItem = {
                assigned_to: this.assignedTo,
                completed: this.completed,
                description: this.description,
                due_date: this.dueDate,
                key: 0
              }
              var largestKey = 0;
              if(this.todoList.items.length!==0){
                for(var i=0; i<this.todoList.items.length;i++){
                  if(this.todoList.items[i].key> largestKey){
                    largestKey=this.todoList.items[i].key;
                  }
                }
                newListItem.key = largestKey+1;
              }
              this.todoList.items.push(newListItem);
        }
        else{
            this.oldDescription = this.todoItem.description;
            this.oldAssignedTo = this.todoItem.assigned_to;
            this.oldDueDate = this.todoItem.due_date;
            this.oldCompleted = this.todoItem.completed;
            this.todoItem.assigned_to = this.assignedTo;
            this.todoItem.description = this.description;
            this.todoItem.due_date = this.dueDate;
            this.todoItem.completed = this.completed;
        }
        
    }
    
    undoTransaction = () => {
        if(!this.isEditing){
            this.todoList.items.splice(this.todoList.items.length-1,1);
            console.log(this.todoList);
        }
        else{
          this.todoItem.assigned_to = this.oldAssignedTo;
          this.todoItem.description = this.oldDescription;
          this.todoItem.completed = this.oldCompleted;
          this.todoItem.due_date = this.oldDueDate;
        }


    }
    
}

export default ListItemEdit_Transaction
