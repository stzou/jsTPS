import jsTPS_Transaction from './jsTPS_Transaction';

class ListItemMoveDown_Transaction extends jsTPS_Transaction{
    todoList = null;
    todoItem = null;

    constructor(list,item){
        super();
        this.todoList = list;
        this.todoItem = item;
    }
    doTransaction = () => {
        console.log(this.todoList);
        console.log(this.todoItem);
        let index = this.todoList.items.indexOf(this.todoItem); 
        let temp = this.todoList.items[index];
        this.todoList.items[index] = this.todoList.items[index+1];
        this.todoList.items[index+1] = temp;
    }
    
    undoTransaction = () => {
        let index = this.todoList.items.indexOf(this.todoItem); 
        let temp = this.todoList.items[index];
        this.todoList.items[index] = this.todoList.items[index-1];
        this.todoList.items[index-1] = temp;

    }
    
}

export default ListItemMoveDown_Transaction
