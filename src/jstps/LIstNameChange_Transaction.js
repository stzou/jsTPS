import jsTPS_Transaction from './jsTPS_Transaction';

class ListNameChange_Transaction extends jsTPS_Transaction{

    list = null;
    name = null;
    oldName = null;

    constructor(list,name){
        super();
        this.list = list;
        this.oldName = list.name;
        this.name = name;
    }
    doTransaction = () => {
        this.list.name = this.name;
    }
    
    undoTransaction = () => {
        this.list.name = this.oldName;
    }
    
}

export default ListNameChange_Transaction