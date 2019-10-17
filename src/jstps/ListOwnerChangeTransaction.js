import jsTPS_Transaction from './jsTPS_Transaction';

class ListOwnerChange_Transaction extends jsTPS_Transaction{

    list = null;
    owner = null;
    oldOwner = null;

    constructor(list,owner){
        super();
        this.list = list;
        this.oldOwner = list.owner;
        this.owner = owner;
    }
    doTransaction = () => {
        this.list.owner = this.owner;
    }
    
    undoTransaction = () => {
        this.list.owner = this.oldOwner;
    }
    
}

export default ListOwnerChange_Transaction
