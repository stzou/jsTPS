import jsTPS_Transaction from './jsTPS_Transaction';

class ListItemRemoval_Transaction extends jsTPS_Transaction{
    todoList = null;
    todoItem = null;
    index = null;

    constructor(list,item){
        super();
        this.todoList = list;
        this.todoItem = item;
        this.index = list.items.indexOf(item);
    }
    doTransaction = () => {
        this.todoList.items.splice(this.index,1);
        console.log(this.todoList.items);
        
    }
    
    undoTransaction = () => {
        this.todoList.items.splice(this.index,0,this.todoItem);
        console.log(this.todoList.items);
    }
    
}

export default ListItemRemoval_Transaction
