
class ListItemMoveUp_Transaction extends jsTPS_Transaction{
    todoList = null;
    todoItem = null;

    constructor(list,item){
        this.todoList = list;
        this.todoItem = item;
    }
    doTransaction = () => {
        let index = this.todoList.items.indexOf(this.todoItem); 
        let temp = this.todoItem.items[index];
        this.list.items[index] = this.list.items[index-1];
        this.list.items[index-1] = temp;
    }
    
    undoTransaction = () => {
        let index = this.todoList.items.indexOf(this.todoItem); 
        let temp = this.todoItem.items[index];
        this.list.items[index] = this.list.items[index+1];
        this.list.items[index+1] = temp;

    }


}
export default ListItemMoveUp_Transaction