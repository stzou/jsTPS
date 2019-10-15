
class ListNameChange_Transaction extends jsTPS_Transaction{
    names = [];
    constructor(newName){
        names.push(newName);
    }
    doTransaction = () => {

    }
    
    undoTransaction = () => {

    }
    
}

export default ListNameChange_Transaction